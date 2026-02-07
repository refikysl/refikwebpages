import streamlit as st
import os
import re
import json
import datetime
import time
from PIL import Image
from io import BytesIO

# Try to import HEIC support
try:
    from pillow_heif import register_heif_opener
    register_heif_opener()
    HEIC_SUPPORT = True
except ImportError:
    HEIC_SUPPORT = False

# --- CONFIGURATION ---
DERKENAR_FILE = "data/derkenar.js"
DUYURULAR_FILE = "data/duyurular.js"
KITAP_TAVSIYE_FILE = "data/tavsiyeler_kitap.js"
FILM_TAVSIYE_FILE = "data/tavsiyeler_film.js"
GENEL_TAVSIYE_FILE = "data/tavsiyeler.js"
MAKALELER_FILE = "data/makaleler.js"
KITAPLAR_FILE = "data/kitaplar.js" # Publications (Books/Chapters)
BILDIRILER_FILE = "data/bildiriler.js" 
ANLAR_FILE = "data/anlar.js"
IMAGES_DIR = "images"
ANLAR_IMAGES_DIR = "images/anlar"
MAKALELER_DIR = "makaleler"
KITAPLAR_DIR = "kitaplar" 
BILDIRILER_DIR = "makaleler" # Storing proceedings in same dir as articles/pubs if not specified otherwise, or separate? Let's use makaleler for now or create generic 'yayinlar'? Existing structure uses 'makaleler' and 'kitaplar'. Let's use 'bildiriler' to be clean.
BILDIRILER_DIR_ACTUAL = "bildiriler"

st.set_page_config(
    page_title="R.Y. Yönetim Paneli",
    page_icon="🎓",
    layout="wide"
)

# --- UTILS ---

def parse_js_object_array(content, array_name=None):
    items = []
    
    if array_name:
        pattern = re.compile(f'([\"\']?){array_name}\\1\\s*:\\s*\\[([\\s\\S]*?)\\]', re.MULTILINE)
        match = pattern.search(content)
        if match:
            raw_array_str = match.group(2)
        else:
            return []
    else:
        start_idx = content.find('[')
        end_idx = content.rfind(']')
        if start_idx != -1 and end_idx != -1:
            raw_array_str = content[start_idx+1:end_idx]
        else:
            return []

    objects_strings = []
    brace_count = 0
    current_obj = ""
    in_backtick = False
    in_quote = False
    
    for char in raw_array_str:
        if char == '`': in_backtick = not in_backtick
        elif char == '"' and not in_backtick: in_quote = not in_quote
        
        if not in_backtick and not in_quote:
            if char == '{':
                if brace_count == 0: current_obj = ""
                brace_count += 1
            if brace_count > 0: current_obj += char
            if char == '}':
                brace_count -= 1
                if brace_count == 0: objects_strings.append(current_obj)
        else:
            if brace_count > 0: current_obj += char
                
    for obj_str in objects_strings:
        item = {}
        
        def extract(key):
            m = re.search(r'["\']?' + key + r'["\']?\s*:\s*(`[\s\S]*?`|"(.*?)"|(\d+)|true|false)', obj_str)
            if m:
                val = m.group(1)
                if val.startswith('`'): return val[1:-1]
                if val.startswith('"'): return val[1:-1]
                return val
            return None

        keys_to_extract = [
            'id', 'title', 'date', 'summary', 'content', 'image', 'meta', 'imdb', 
            'yazar', 'yil', 'baslik', 'yayin', 'link',
            'citation', 'dergi', 'cilt', 'sayi', 'sayfa', 'doi',
            'src', 'description', 'width', 'height'
        ]
        
        for key in keys_to_extract:
            val = extract(key)
            if val is not None:
                if key == 'id': item[key] = int(val)
                else: item[key] = val
                
        if "isHtml" in obj_str:
            item['isHtml'] = True
            
        items.append(item)
        
    return items

def save_image(image_file):
    if not os.path.exists(IMAGES_DIR):
        os.makedirs(IMAGES_DIR)
    path = os.path.join(IMAGES_DIR, image_file.name)
    with open(path, "wb") as f:
        f.write(image_file.getbuffer())
    return f"images/{image_file.name}"

def save_pdf(pdf_file, directory):
    if not os.path.exists(directory):
        os.makedirs(directory)
    path = os.path.join(directory, pdf_file.name)
    with open(path, "wb") as f:
        f.write(pdf_file.getbuffer())
    rel_dir = os.path.basename(directory)
    return f"{rel_dir}/{pdf_file.name}"

# --- MANAGER CLASSES ---

class BaseManager:
    def __init__(self, filepath):
        self.filepath = filepath
        self.items = []
        self.raw_content = ""
        self.load()
        
    def load(self):
        if os.path.exists(self.filepath):
            with open(self.filepath, "r", encoding="utf-8") as f:
                self.raw_content = f.read()

    def generate_id(self):
        if not self.items: return 1
        ids = [i.get('id', 0) for i in self.items]
        return max(ids) + 1 if ids else 1

class DuyuruManager(BaseManager):
    def load(self):
        super().load()
        self.items = parse_js_object_array(self.raw_content)
        
    def save(self):
        output = "const duyurularData = [\n"
        for i, item in enumerate(self.items):
            content_esc = item.get('content', '').replace('`', '\\`')
            entry = f"""    {{
        "id": {item.get('id', 0)},
        "title": "{item.get('title', '')}",
        "date": "{item.get('date', '')}",
        "summary": "{item.get('summary', '')}",
        "content": `{content_esc}`
    }}"""
            if i < len(self.items) - 1: entry += ","
            output += entry + "\n"
        output += "];\n"
        with open(self.filepath, "w", encoding="utf-8") as f: f.write(output)
            
    def add(self, title, summary, content):
        new_id = self.generate_id()
        today = datetime.datetime.now().strftime("%d.%m.%Y")
        item = {"id": new_id, "title": title, "date": today, "summary": summary, "content": content}
        self.items.insert(0, item)
        self.save()
        
    def delete(self, id):
        self.items = [i for i in self.items if i.get('id') != id]
        self.save()

class DerkenarManager(BaseManager):
    def __init__(self, filepath):
        self.intro_raw = ""
        super().__init__(filepath)
        
    def load(self):
        super().load()
        match = re.search(r'("intro"\s*:\s*\[[\s\S]*?\s*\]\s*,)', self.raw_content)
        self.intro_raw = match.group(1) if match else '"intro": [],'
        self.items = parse_js_object_array(self.raw_content, "konular")
        
    def save(self):
        output = "const derkenarData = {\n"
        output += "    " + self.intro_raw + "\n"
        output += '    "konular": [\n'
        for i, item in enumerate(self.items):
            c_esc = item.get('content', '').replace('`', '\\`')
            img_line = f'        "image": "{item["image"]}",\n' if item.get("image") else ""
            entry = f"""    {{
        "id": {item['id']},
        "title": "{item['title']}",
        "image": "{item.get('image', '')}",
        "content": `{c_esc}`
    }}"""
            if i < len(self.items) - 1: entry += ","
            output += entry + "\n"
        output += "    ]\n};\n"
        with open(self.filepath, "w", encoding="utf-8") as f: f.write(output)

    def add(self, title, content, image_path=None):
        new_id = self.generate_id()
        item = {"id": new_id, "title": title, "content": content, "image": image_path or ""}
        self.items.insert(0, item)
        self.save()
        
    def delete(self, id):
        self.items = [i for i in self.items if i['id'] != id]
        self.save()

class KitapTavsiyeManager(BaseManager):
    def load(self):
        super().load()
        self.items = parse_js_object_array(self.raw_content) 

    def save(self):
        output = "const kitapTavsiyeleriData = [\n"
        for i, item in enumerate(self.items):
            c_esc = item.get('content', '').replace('`', '\\`')
            img = item.get('image', '')
            entry = f"""    {{
        "id": {item['id']},
        "title": "{item['title']}",
        "image": "{img}",
        "content": `{c_esc}`
    }}"""
            if i < len(self.items) - 1: entry += ","
            output += entry + "\n"
        output += "];\n"
        with open(self.filepath, "w", encoding="utf-8") as f: f.write(output)

    def add(self, title, content, image_path=None):
        new_id = self.generate_id()
        item = {"id": new_id, "title": title, "content": content, "image": image_path or ""}
        self.items.append(item)
        self.save()

    def delete(self, id):
        self.items = [i for i in self.items if i['id'] != id]
        self.save()

class FilmTavsiyeManager(BaseManager):
    def load(self):
        super().load()
        self.items = parse_js_object_array(self.raw_content) 

    def save(self):
        output = "const filmTavsiyeleriData = [\n"
        for i, item in enumerate(self.items):
            c_esc = item.get('content', '').replace('`', '\\`')
            meta_esc = item.get('meta', '').replace('`', '\\`')
            img = item.get('image', '')
            imdb = item.get('imdb', '')
            entry = f"""    {{
        "id": {item['id']},
        "title": "{item['title']}",
        "image": "{img}",
        "meta": `{meta_esc}`,
        "imdb": "{imdb}",
        "content": `{c_esc}`
    }}"""
            if i < len(self.items) - 1: entry += ","
            output += entry + "\n"
        output += "];\n"
        with open(self.filepath, "w", encoding="utf-8") as f: f.write(output)

    def add(self, title, content, meta, imdb, image_path=None):
        new_id = self.generate_id()
        item = {
            "id": new_id, 
            "title": title, 
            "content": content, 
            "meta": meta, 
            "imdb": imdb, 
            "image": image_path or ""
        }
        self.items.append(item)
        self.save()

    def delete(self, id):
        self.items = [i for i in self.items if i['id'] != id]
        self.save()

class AnlarManager(BaseManager):
    def load(self):
        super().load()
        self.items = parse_js_object_array(self.raw_content)
        
    def save(self):
        output = "const anlarData = [\n"
        for i, item in enumerate(self.items):
            entry = f"""    {{
        "id": {item['id']},
        "src": "{item.get('src', '')}",
        "title": "{item.get('title', '')}",
        "date": "{item.get('date', '')}",
        "description": "{item.get('description', '')}",
        "width": {item.get('width', 400)},
        "height": {item.get('height', 400)}
    }}"""
            if i < len(self.items) - 1: entry += ","
            output += entry + "\n"
        output += "];\n"
        
        # Add module.exports for Node.js compatibility
        output += "\nif (typeof module !== 'undefined' && module.exports) {\n"
        output += "    module.exports = anlarData;\n"
        output += "}\n"
        
        with open(self.filepath, "w", encoding="utf-8") as f: f.write(output)
    
    def add(self, src, title, date, description="", width=400, height=400):
        new_id = self.generate_id()
        item = {
            "id": new_id,
            "src": src,
            "title": title,
            "date": date,
            "description": description,
            "width": width,
            "height": height
        }
        self.items.insert(0, item)
        self.save()
    
    def update(self, id, title, date, description=""):
        for item in self.items:
            if item['id'] == id:
                item['title'] = title
                item['date'] = date
                item['description'] = description
                self.save()
                return True
        return False
    
    def delete(self, id):
        self.items = [i for i in self.items if i['id'] != id]
        self.save()

class GenelTavsiyeManager(BaseManager):
    def load(self):
        super().load()
        self.items = parse_js_object_array(self.raw_content)

    def save(self):
        output = "const tavsiyelerData = [\n"
        for i, item in enumerate(self.items):
            c_esc = item.get('content', '').replace('`', '\\`')
            isHtml = 'true' if item.get('isHtml') else 'false'
            
            lines = []
            lines.append(f'"id": {item["id"]}')
            lines.append(f'"title": "{item["title"]}"')
            if item.get("isHtml"): lines.append(f'"isHtml": true')
            lines.append(f'"content": `{c_esc}`')
            
            entry = "    {\n        " + ",\n        ".join(lines) + "\n    }"
            if i < len(self.items) - 1: entry += ","
            output += entry + "\n"
        output += "];\n"
        with open(self.filepath, "w", encoding="utf-8") as f: f.write(output)

    def add(self, title, content):
        new_id = self.generate_id()
        while any(i['id'] == new_id for i in self.items):
            new_id += 1
            
        item = {"id": new_id, "title": title, "content": content}
        self.items.append(item)
        self.save()
        
    def delete(self, id):
        if id in [2, 3]:
            pass
        self.items = [i for i in self.items if i['id'] != id]
        self.save()
        
class MakaleManager(BaseManager):
    def load(self):
        super().load()
        self.items = parse_js_object_array(self.raw_content)
        
    def save(self):
        output = "const makalelerData = [\n"
        for i, item in enumerate(self.items):
            lines = []
            if item.get('citation'):
                cit_esc = item['citation'].replace('`', '\\`')
                lines.append(f'"citation": `{cit_esc}`')
                lines.append(f'"link": "{item.get("link", "")}"')
            else:
                def safe_get(key): return item.get(key, "").replace('"', '\\"')
                lines.append(f'"yazar": "{safe_get("yazar")}"')
                lines.append(f'"yil": "{safe_get("yil")}"')
                lines.append(f'"baslik": "{safe_get("baslik")}"')
                lines.append(f'"dergi": "{safe_get("dergi")}"')
                lines.append(f'"cilt": "{safe_get("cilt")}"')
                lines.append(f'"sayi": "{safe_get("sayi")}"')
                lines.append(f'"sayfa": "{safe_get("sayfa")}"')
                lines.append(f'"doi": "{safe_get("doi")}"')
                lines.append(f'"link": "{safe_get("link")}"')
            
            entry = "    {\n        " + ",\n        ".join(lines) + "\n    }"
            if i < len(self.items) - 1: entry += ","
            output += entry + "\n"
        output += "];\n"
        with open(self.filepath, "w", encoding="utf-8") as f: f.write(output)

    def add(self, citation, link=None):
        item = {
            "citation": citation,
            "link": link or ""
        }
        self.items.insert(0, item)
        self.save()
        
    def delete(self, idx):
        if 0 <= idx < len(self.items):
            self.items.pop(idx)
            self.save()

class BildiriManager(BaseManager):
    def load(self):
        super().load()
        self.items = parse_js_object_array(self.raw_content)
        
    def save(self):
        output = "const bildirilerData = [\n"
        for i, item in enumerate(self.items):
            lines = []
            # Almost same as Makale but simpler usually
            if item.get('citation'):
                cit_esc = item['citation'].replace('`', '\\`')
                lines.append(f'"citation": `{cit_esc}`')
                lines.append(f'"link": "{item.get("link", "")}"')
            else:
                # Should not happen for new entries, but for robustness
                def safe_get(key): return item.get(key, "").replace('"', '\\"')
                lines.append(f'"yazar": "{safe_get("yazar")}"')
                lines.append(f'"baslik": "{safe_get("baslik")}"')
                lines.append(f'"link": "{safe_get("link")}"')
            
            entry = "    {\n        " + ",\n        ".join(lines) + "\n    }"
            if i < len(self.items) - 1: entry += ","
            output += entry + "\n"
        output += "];\n"
        with open(self.filepath, "w", encoding="utf-8") as f: f.write(output)

    def add(self, citation, link=None):
        item = {
            "citation": citation,
            "link": link or ""
        }
        self.items.insert(0, item)
        self.save()
        
    def delete(self, idx):
        if 0 <= idx < len(self.items):
            self.items.pop(idx)
            self.save()

class KitapYayinManager(BaseManager):
    def __init__(self, filepath):
        self.kitaplar = []
        self.bolumler = []
        super().__init__(filepath)

    def load(self):
        super().load()
        self.kitaplar = parse_js_object_array(self.raw_content, "kitaplar")
        self.bolumler = parse_js_object_array(self.raw_content, "bolumler")

    def save(self):
        output = "const kitaplarData = {\n"
        
        def format_list(lst):
            blocks = []
            for item in lst:
                lines = []
                if item.get('citation'):
                    cit_esc = item['citation'].replace('`', '\\`')
                    lines.append(f'"citation": `{cit_esc}`')
                    lines.append(f'"link": "{item.get("link", "")}"')
                else:
                    def safe_get(key): return item.get(key, "").replace('"', '\\"')
                    lines.append(f'"yazar": "{safe_get("yazar")}"')
                    lines.append(f'"yil": "{safe_get("yil")}"')
                    lines.append(f'"baslik": "{safe_get("baslik")}"')
                    lines.append(f'"yayin": "{safe_get("yayin")}"')
                    lines.append(f'"link": "{safe_get("link")}"')
                
                blocks.append("        {\n            " + ",\n            ".join(lines) + "\n        }")
            return ",\n".join(blocks)

        output += '    "kitaplar": [\n' + format_list(self.kitaplar) + '\n    ],\n'
        output += '    "bolumler": [\n' + format_list(self.bolumler) + '\n    ]\n'
        output += "};\n"
        with open(self.filepath, "w", encoding="utf-8") as f: f.write(output)

    def add_kitap(self, citation, link=None):
        self.kitaplar.insert(0, {"citation": citation, "link": link or ""})
        self.save()
        
    def add_bolum(self, citation, link=None):
        self.bolumler.insert(0, {"citation": citation, "link": link or ""})
        self.save()
        
    def delete_kitap(self, idx):
        if 0 <= idx < len(self.kitaplar):
            self.kitaplar.pop(idx)
            self.save()
            
    def delete_bolum(self, idx):
        if 0 <= idx < len(self.bolumler):
            self.bolumler.pop(idx)
            self.save()

# --- SIDEBAR & MAIN LOGIC ---

st.sidebar.title("Yönetim Paneli")
module = st.sidebar.radio("Modül Seçin", [
    "📢 Duyurular", 
    "📚 Derkenar",
    "📸 Anlar ve Anılar",
    "📄 Makaleler",
    "🎤 Bildiriler",
    "📖 Kitaplar (Yayın)", 
    "📘 Kitap Tavsiyeleri", 
    "🎬 Film/Dizi Tavsiyeleri",
    "📝 Genel Tavsiyeler"
])

if module == "📢 Duyurular":
    st.header("📢 Duyuru Yönetimi")
    mgr = DuyuruManager(DUYURULAR_FILE)
    
    tab1, tab2 = st.tabs(["Ekle", "Listele/Sil"])
    
    with tab1:
        with st.form("duyuru_add"):
            d_title = st.text_input("Başlık")
            d_sum = st.text_input("Özet (Kısa açıklama)")
            d_content = st.text_area("İçerik (Detaylı metin)", height=150)
            if st.form_submit_button("Duyuruyu Yayınla"):
                mgr.add(d_title, d_sum, d_content)
                st.balloons()
                st.success("Duyuru eklendi!")
                time.sleep(1)
                st.rerun()

    with tab2:
        for item in mgr.items:
            c1, c2 = st.columns([5, 1])
            c1.info(f"**{item.get('date')}** - {item['title']}")
            if c2.button("Sil", key=f"del_duyuru_{item['id']}"):
                mgr.delete(item['id'])
                st.balloons()
                st.success("Silindi!")
                time.sleep(1)
                st.rerun()

elif module == "📚 Derkenar":
    st.header("📚 Derkenar Yönetimi")
    mgr = DerkenarManager(DERKENAR_FILE)
    
    action = st.radio("İşlem", ["Yeni Ekle", "Düzenle/Sil"], horizontal=True)
    
    if action == "Yeni Ekle":
        with st.form("derkenar_add"):
            title = st.text_input("Başlık")
            content = st.text_area("İçerik", height=200)
            img = st.file_uploader("Resim", type=["jpg", "png", "webp"])
            if st.form_submit_button("Kaydet"):
                path = save_image(img) if img else None
                mgr.add(title, content, path)
                st.balloons()
                st.success("Kaydedildi!")
                time.sleep(1)
                st.rerun()
                
    else:
        if not mgr.items:
            st.warning("Kayıt yok.")
        else:
            sel_id = st.selectbox("Kayıt Seç", [i['id'] for i in mgr.items], format_func=lambda x: next(i['title'] for i in mgr.items if i['id']==x))
            item = next(i for i in mgr.items if i['id'] == sel_id)
            
            with st.form("derkenar_edit"):
                new_title = st.text_input("Başlık", value=item['title'])
                new_content = st.text_area("İçerik", value=item['content'], height=200)
                st.write(f"Mevcut Resim: {item.get('image', 'Yok')}")
                if st.form_submit_button("Güncelle"):
                    item['title'] = new_title
                    item['content'] = new_content
                    mgr.save()
                    st.balloons()
                    st.success("Güncellendi!")
                    time.sleep(1)
                    st.rerun()
            
            if st.button("Bu Kaydı Sil", type="primary"):
                mgr.delete(sel_id)
                st.balloons()
                st.success("Silindi!")
                time.sleep(1)
                st.rerun()

elif module == "📄 Makaleler":
    st.header("📄 Makale Yönetimi")
    mgr = MakaleManager(MAKALELER_FILE)
    
    tab1, tab2 = st.tabs(["Makale Ekle", "Listele/Sil"])
    
    with tab1:
        st.info("Makale künyesini APA formatında yapıştırınız ve ilgili PDF dosyasını seçiniz.")
        with st.form("makale_add"):
            citation = st.text_area("Makale Künyesi (APA Formatında)")
            pdf = st.file_uploader("Makale dosyası (PDF)", type=["pdf"])
            
            if st.form_submit_button("Makaleyi Ekle"):
                if not citation:
                    st.error("Lütfen künye bilgisini giriniz.")
                else:
                    path = save_pdf(pdf, MAKALELER_DIR) if pdf else None
                    mgr.add(citation, path)
                    st.balloons()
                    st.success("Makale eklendi!")
                    time.sleep(1)
                    st.rerun()
                    
    with tab2:
        for idx, item in enumerate(mgr.items):
            with st.container():
                c1, c2 = st.columns([5, 1])
                display_text = item.get('citation') or f"{item.get('yazar')} - {item.get('baslik')}"
                c1.write(display_text[:150] + "..." if len(display_text) > 150 else display_text)
                if item.get('link'):
                    c1.caption(f"Dosya: {item['link']}")
                
                if c2.button("Sil", key=f"del_art_{idx}"):
                    mgr.delete(idx)
                    st.balloons()
                    st.success("Silindi!")
                    time.sleep(1)
                    st.rerun()
                st.divider()

elif module == "🎤 Bildiriler":
    st.header("🎤 Bildiri Yönetimi")
    mgr = BildiriManager(BILDIRILER_FILE)
    
    tab1, tab2 = st.tabs(["Bildiri Ekle", "Listele/Sil"])
    
    with tab1:
        st.info("Bildiri künyesini APA formatında yapıştırınız ve varsa PDF dosyasını ekleyiniz.")
        with st.form("bildiri_add"):
            citation = st.text_area("Bildiri Künyesi (APA Formatında)")
            pdf = st.file_uploader("Bildiri Dosyası (PDF)", type=["pdf"])
            
            if st.form_submit_button("Bildiriyi Ekle"):
                if not citation:
                    st.error("Lütfen künye bilgisini giriniz.")
                else:
                    path = save_pdf(pdf, BILDIRILER_DIR_ACTUAL) if pdf else None
                    mgr.add(citation, path)
                    st.balloons()
                    st.success("Bildiri Eklendi!")
                    time.sleep(1)
                    st.rerun()

    with tab2:
        for idx, item in enumerate(mgr.items):
            with st.container():
                c1, c2 = st.columns([5, 1])
                display_text = item.get('citation') or f"{item.get('baslik')}"
                c1.write(display_text)
                if item.get('link'):
                     c1.caption(f"Dosya: {item['link']}")
                
                if c2.button("Sil", key=f"del_bil_{idx}"):
                    mgr.delete(idx)
                    st.balloons()
                    st.success("Silindi!")
                    time.sleep(1)
                    st.rerun()
                st.divider()

elif module == "📖 Kitaplar (Yayın)":
    st.header("📖 Kitap ve Kitap Bölümleri")
    mgr = KitapYayinManager(KITAPLAR_FILE)
    
    tab1, tab2 = st.tabs(["Ekle", "Listele/Sil"])
    
    with tab1:
        st.info("Kitap veya Kitap Bölümü künyesini APA formatında ekleyebilirsiniz.")
        type_choice = st.radio("Tür Seçin", ["Kitap", "Kitap Bölümü"], horizontal=True)
        
        with st.form("kitap_yayin_add"):
            citation = st.text_area("Künye (APA Formatında)")
            pdf = st.file_uploader("Yayın Dosyası (PDF)", type=["pdf"])
            
            if st.form_submit_button("Kaydet"):
                if not citation:
                    st.error("Lütfen künye bilgisini giriniz.")
                else:
                    path = save_pdf(pdf, KITAPLAR_DIR) if pdf else None
                    if type_choice == "Kitap":
                        mgr.add_kitap(citation, path)
                        st.success("Kitap Eklendi!")
                    else:
                        mgr.add_bolum(citation, path)
                        st.success("Kitap Bölümü Eklendi!")
                    
                    st.balloons()
                    time.sleep(1)
                    st.rerun()

    with tab2:
        st.subheader("Kitaplar")
        for idx, item in enumerate(mgr.kitaplar):
            c1, c2 = st.columns([5, 1])
            display_text = item.get('citation') or f"{item.get('yazar')} - {item.get('baslik')}"
            c1.write(display_text)
            if item.get('link'): c1.caption(f"Dosya: {item['link']}")
            if c2.button("Sil", key=f"del_bk_{idx}"):
                mgr.delete_kitap(idx)
                st.balloons()
                st.success("Silindi!")
                time.sleep(1)
                st.rerun()
        
        st.divider()
        st.subheader("Kitap Bölümleri")
        for idx, item in enumerate(mgr.bolumler):
            c1, c2 = st.columns([5, 1])
            display_text = item.get('citation') or f"{item.get('yazar')} - {item.get('baslik')}"
            c1.write(display_text)
            if item.get('link'): c1.caption(f"Dosya: {item['link']}")
            if c2.button("Sil", key=f"del_ch_{idx}"):
                mgr.delete_bolum(idx)
                st.balloons()
                st.success("Silindi!")
                time.sleep(1)
                st.rerun()

elif module == "📘 Kitap Tavsiyeleri":
    st.header("📘 Kitap Tavsiye Yönetimi")
    mgr = KitapTavsiyeManager(KITAP_TAVSIYE_FILE)
    
    action = st.radio("İşlem", ["Yeni Kitap Ekle", "Listele/Sil"], horizontal=True)

    if action == "Yeni Kitap Ekle":
        with st.form("kitap_tav_add"):
            title = st.text_input("Başlık (Yazar: Kitap Adı)")
            content = st.text_area("İçerik / Tanıtım Yazısı", height=200)
            img = st.file_uploader("Kitap Kapağı", type=["jpg", "png", "webp"])
            if st.form_submit_button("Ekle"):
                path = save_image(img) if img else None
                mgr.add(title, content, path)
                st.balloons()
                st.success("Kitap Eklendi!")
                time.sleep(1)
                st.rerun()
    else:
        for item in mgr.items:
            with st.expander(f"{item['title']}"):
                c1, c2 = st.columns([1, 4])
                with c1:
                    if item.get('image'):
                        st.image(item['image'])
                    else:
                        st.write("Resim Yok")
                with c2:
                    st.write(item['content'])
                if st.button("Sil", key=f"del_ktav_{item['id']}"):
                    mgr.delete(item['id'])
                    st.balloons()
                    st.success("Silindi!")
                    time.sleep(1)
                    st.rerun()

elif module == "🎬 Film/Dizi Tavsiyeleri":
    st.header("🎬 Film/Dizi Tavsiye Yönetimi")
    mgr = FilmTavsiyeManager(FILM_TAVSIYE_FILE)
    
    action = st.radio("İşlem", ["Yeni Film Ekle", "Listele/Sil"], horizontal=True)

    if action == "Yeni Film Ekle":
        with st.form("film_tav_add"):
            title = st.text_input("Film/Dizi Adı")
            meta = st.text_area("Künye (Yönetmen, Oyuncular, Tarih)")
            imdb = st.text_input("IMDb Linki")
            content = st.text_area("İçerik / Yorum", height=150)
            img = st.file_uploader("Afiş", type=["jpg", "png", "webp"])
            if st.form_submit_button("Ekle"):
                path = save_image(img) if img else None
                mgr.add(title, content, meta, imdb, path)
                st.balloons()
                st.success("Film Eklendi!")
                time.sleep(1)
                st.rerun()
    else:
        for item in mgr.items:
            with st.expander(f"{item['title']}"):
                c1, c2 = st.columns([1, 4])
                with c1:
                    if item.get('image'):
                        st.image(item['image'])
                    else:
                        st.write("Resim Yok")
                    if item.get('imdb'):
                        st.markdown(f"[IMDb'ye Git]({item['imdb']})")
                with c2:
                    st.caption(item.get('meta', ''))
                    st.write(item['content'])
                if st.button("Sil", key=f"del_ftav_{item['id']}"):
                    mgr.delete(item['id'])
                    st.balloons()
                    st.success("Silindi!")
                    time.sleep(1)
                    st.rerun()

elif module == "📸 Anlar ve Anılar":
    st.header("📸 Anlar ve Anılar - Fotoğraf Galerisi")
    
    # Ensure directories exist
    if not os.path.exists(ANLAR_IMAGES_DIR):
        os.makedirs(ANLAR_IMAGES_DIR)
    
    mgr = AnlarManager(ANLAR_FILE)
    
    tab1, tab2 = st.tabs(["Fotoğraf Ekle", "Listele/Düzenle/Sil"])
    
    with tab1:
        # Show HEIC support status
        if HEIC_SUPPORT:
            st.success("✅ HEIC formatı destekleniyor (iPhone fotoğrafları)")
        else:
            st.warning("⚠️ HEIC desteği için 'pillow-heif' kurulmalı: pip install pillow-heif")
        
        st.info("Fotoğraf yükleyin ve tarih seçin.")
        with st.form("anlar_add"):
            col1, col2 = st.columns([2, 1])
            
            with col1:
                # Add HEIC to supported formats
                supported_formats = ["jpg", "jpeg", "png", "webp"]
                if HEIC_SUPPORT:
                    supported_formats.extend(["heic", "heif"])
                
                photo = st.file_uploader("Fotoğraf Seçin", type=supported_formats)
                title = st.text_input("Başlık")
                # DATE INPUT - Calendar
                date_val = st.date_input("Tarih Seçin", datetime.date.today())
                description = st.text_area("Açıklama (opsiyonel)", height=100)
            
            with col2:
                st.write("**Fotoğraf Boyut Bilgisi**")
                st.caption("Masonry layout için fotoğraf oranını belirtin:")
                orientation = st.radio(
                    "Oryantasyon",
                    ["Yatay (Landscape)", "Dikey (Portrait)", "Kare (Square)"],
                    help="Fotoğrafın genel şeklini seçin"
                )
                
                # Set dimensions based on orientation
                if orientation == "Yatay (Landscape)":
                    width, height = 400, 300
                elif orientation == "Dikey (Portrait)":
                    width, height = 400, 600
                else:  # Square
                    width, height = 400, 400
                
                st.caption(f"Oran: {width} x {height}")
            
            if st.form_submit_button("Fotoğrafı Ekle"):
                if not photo:
                    st.error("Lütfen bir fotoğraf seçin.")
                elif not title:
                    st.error("Lütfen başlık girin.")
                else:
                    try:
                        # Get file extension
                        file_ext = photo.name.split('.')[-1].lower()
                        date_str = str(date_val) # Convert date object to YYYY-MM-DD string
                        
                        # Process HEIC files
                        if file_ext in ['heic', 'heif']:
                            if not HEIC_SUPPORT:
                                st.error("HEIC formatı desteklenmiyor. Lütfen JPG/PNG formatında yükleyin.")
                            else:
                                # Convert HEIC to JPEG
                                img = Image.open(photo)
                                
                                # Create new filename with .jpg extension
                                new_filename = photo.name.rsplit('.', 1)[0] + '.jpg'
                                img_path = os.path.join(ANLAR_IMAGES_DIR, new_filename)
                                
                                # Save as JPEG
                                img.convert('RGB').save(img_path, 'JPEG', quality=90)
                                rel_path = f"images/anlar/{new_filename}"
                                
                                mgr.add(rel_path, title, date_str, description, width, height)
                                st.balloons()
                                st.success(f"✅ HEIC fotoğraf JPG'ye dönüştürüldü ve eklendi!")
                                time.sleep(1)
                                st.rerun()
                        else:
                            # Regular image processing (JPG, PNG, WEBP)
                            img_path = os.path.join(ANLAR_IMAGES_DIR, photo.name)
                            with open(img_path, "wb") as f:
                                f.write(photo.getbuffer())
                            
                            rel_path = f"images/anlar/{photo.name}"
                            mgr.add(rel_path, title, date_str, description, width, height)
                            st.balloons()
                            st.success("Fotoğraf başarıyla eklendi!")
                            time.sleep(1)
                            st.rerun()
                    
                    except Exception as e:
                        st.error(f"Hata oluştu: {str(e)}")
    
    with tab2:
        if not mgr.items:
            st.warning("Henüz fotoğraf eklenmemiş.")
        else:
            st.write(f"**Toplam {len(mgr.items)} fotoğraf**")
            st.divider()
            
            for item in mgr.items:
                with st.container():
                    col1, col2, col3 = st.columns([1, 3, 1])
                    
                    with col1:
                        # Show thumbnail - use .get() to avoid KeyError
                        src = item.get('src', '')
                        if src and os.path.exists(src):
                            st.image(src, width=150)
                        else:
                            st.warning("Resim bulunamadı")
                    
                    with col2:
                        st.write(f"**{item.get('title', 'Başlıksız')}**")
                        
                        # Handle date display (might be old format or new YYYY-MM-DD)
                        d = item.get('date', '')
                        st.caption(f"📅 {d}")
                        
                        if item.get('description'):
                            st.caption(f"📝 {item['description']}")
                        st.caption(f"📐 Boyut: {item.get('width', 400)} x {item.get('height', 400)}")
                        st.caption(f"📁 Dosya: {item.get('src', 'Yok')}")
                        
                        # Edit form in expander
                        with st.expander("✏️ Düzenle"):
                            with st.form(f"edit_{item.get('id', 0)}"):
                                new_title = st.text_input("Başlık", value=item.get('title', ''))
                                
                                # Try to parse existing date for date_input, fallback to today
                                try:
                                    # If it's YYYY-MM-DD
                                    existing_date = datetime.datetime.strptime(item.get('date', ''), '%Y-%m-%d').date()
                                except:
                                    existing_date = datetime.date.today()

                                new_date_val = st.date_input("Tarih", value=existing_date)
                                new_desc = st.text_area("Açıklama", value=item.get('description', ''), height=80)
                                
                                if st.form_submit_button("Güncelle"):
                                    mgr.update(item['id'], new_title, str(new_date_val), new_desc)
                                    st.success("Güncellendi!")
                                    time.sleep(1)
                                    st.rerun()

elif module == "📝 Genel Tavsiyeler":
    st.header("📝 Genel Tavsiye Yönetimi (Metin Odaklı)")
    mgr = GenelTavsiyeManager(GENEL_TAVSIYE_FILE)
    
    with st.expander("Yeni Genel Tavsiye Ekle"):
        with st.form("genel_tav_add"):
            title = st.text_input("Başlık")
            content = st.text_area("İçerik")
            if st.form_submit_button("Ekle"):
                mgr.add(title, content)
                st.balloons()
                st.success("Eklendi!")
                time.sleep(1)
                st.rerun()
    
    st.info("Not: 'Kitap Tavsiyeleri' ve 'Film Tavsiyeleri' başlıkları burada listelenir ancak içerikleri diğer menülerden yönetilir. Onları buradan silmeyiniz.")
    
    for item in mgr.items:
        with st.expander(f"{item['id']} - {item['title']}"):
            st.write(item['content'])
            if item['id'] not in [2, 3]:
                if st.button("Sil", key=f"del_gtav_{item['id']}"):
                    mgr.delete(item['id'])
                    st.balloons()
                    st.success("Silindi!")
                    time.sleep(1)
                    st.rerun()
            else:
                st.caption("Bu bir kategori başlığıdır, silinemez.")
