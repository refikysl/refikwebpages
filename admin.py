import streamlit as st
import os
import re
import json
import datetime

# --- CONFIGURATION ---
DERKENAR_FILE = "data/derkenar.js"
DUYURULAR_FILE = "data/duyurular.js"
KITAP_TAVSIYE_FILE = "data/tavsiyeler_kitap.js"
FILM_TAVSIYE_FILE = "data/tavsiyeler_film.js"
GENEL_TAVSIYE_FILE = "data/tavsiyeler.js"
IMAGES_DIR = "images"

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

    # Simple tokenizer/parser because regex is fragile with nested braces
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
        # Generic key extraction
        # Matches: key: value, "key": value, "key": "value", "key": `value`
        # We need specific extractors for known fields to be safe
        
        def extract(key):
            # Try matches for: key: "..." | key: `...` | key: 123
            # value can be in quotes, backticks, or bare number/bool
            m = re.search(r'["\']?' + key + r'["\']?\s*:\s*(`[\s\S]*?`|"(.*?)"|(\d+)|true|false)', obj_str)
            if m:
                val = m.group(1)
                if val.startswith('`'): return val[1:-1]
                if val.startswith('"'): return val[1:-1]
                return val
            return None

        for key in ['id', 'title', 'date', 'summary', 'content', 'image', 'meta', 'imdb', 'yazar', 'yil', 'baslik', 'yayin', 'link']:
            val = extract(key)
            if val is not None:
                if key == 'id': item[key] = int(val)
                else: item[key] = val
                
        # Handle 'isHtml' specifically
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
        self.items.insert(0, item) # Insert at top
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
        self.items.insert(0, item)
        self.save()

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
        # Ensure we don't conflict with reserved IDs if any, although 1, 2, 3 are used.
        # User adds "General Advice".
        # We should check max id safely.
        while any(i['id'] == new_id for i in self.items):
            new_id += 1
            
        item = {"id": new_id, "title": title, "content": content}
        self.items.append(item)
        self.save()
        
    def delete(self, id):
        # Prevent deleting the placeholder IDs 2 and 3 potentially?
        # User might want to delete them if they don't want them displayed?
        # But script.js depends on them existing? No, script.js checks if item.id == 2.
        # If user deletes ID 2, "Kitap Tavsiyeleri" header disappears.
        # We should probably protect ID 2 and 3 or warn.
        if id in [2, 3]:
            # Actually, let's allow deleting it if they want to hide the section.
            pass
        self.items = [i for i in self.items if i['id'] != id]
        self.save()

# --- SIDEBAR & MAIN LOGIC ---

st.sidebar.title("Yönetim Paneli")
module = st.sidebar.radio("Modül Seçin", [
    "📢 Duyurular", 
    "📚 Derkenar", 
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
                st.success("Duyuru eklendi!")
                st.rerun()

    with tab2:
        for item in mgr.items:
            c1, c2 = st.columns([5, 1])
            c1.info(f"**{item.get('date')}** - {item['title']}")
            if c2.button("Sil", key=f"del_duyuru_{item['id']}"):
                mgr.delete(item['id'])
                st.success("Silindi!")
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
                st.success("Kaydedildi!")
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
                # Optional: Update image logic could be added here
                if st.form_submit_button("Güncelle"):
                    item['title'] = new_title
                    item['content'] = new_content
                    mgr.save()
                    st.success("Güncellendi!")
                    st.rerun()
            
            if st.button("Bu Kaydı Sil", type="primary"):
                mgr.delete(sel_id)
                st.success("Silindi!")
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
                st.success("Kitap Eklendi!")
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
                st.success("Film Eklendi!")
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
                st.success("Eklendi!")
                st.rerun()
    
    st.info("Not: 'Kitap Tavsiyeleri' ve 'Film Tavsiyeleri' başlıkları burada listelenir ancak içerikleri diğer menülerden yönetilir. Onları buradan silmeyiniz.")
    
    for item in mgr.items:
        with st.expander(f"{item['id']} - {item['title']}"):
            st.write(item['content'])
            # Protect magic IDs?
            if item['id'] not in [2, 3]:
                if st.button("Sil", key=f"del_gtav_{item['id']}"):
                    mgr.delete(item['id'])
                    st.rerun()
            else:
                st.caption("Bu bir kategori başlığıdır, silinemez.")
