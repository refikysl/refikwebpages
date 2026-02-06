import streamlit as st
import os
import re
import shutil

# --- CONFIGURATION ---
DATA_FILE = "data/derkenar.js"
IMAGES_DIR = "images"

st.set_page_config(
    page_title="Derkenar Yönetim Paneli",
    page_icon="📚",
    layout="wide"
)

# --- BACKEND LOGIC ---

class DerkenarManager:
    def __init__(self, filepath):
        self.filepath = filepath
        self.intro_raw = ""
        self.items = []
        self.load()

    def load(self):
        if not os.path.exists(self.filepath):
            st.error(f"Dosya bulunamadı: {self.filepath}")
            return

        with open(self.filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # 1. Intro kısmını ayır (Regex ile yakala)
        # "intro": [ ... ],
        intro_match = re.search(r'("intro"\s*:\s*\[[\s\S]*?\s*\]\s*,)', content)
        if intro_match:
            self.intro_raw = intro_match.group(1)
        else:
            self.intro_raw = '"intro": [],' # Fallback

        # 2. Konular kısmını ayır
        # "konular": [ ... ] veya konular: [ ... ]
        konular_match = re.search(r'(["\'])?konular\1\s*:\s*\[([\s\S]*)\]\s*};?', content)
        
        if konular_match:
            raw_items_str = konular_match.group(2)
            self.items = self.parse_items(raw_items_str)
        else:
            self.items = []

    def parse_items(self, raw_str):
        items = []
        # Her bir obje { ... } içindedir.
        # Basitçe "id": yakalayarak split edebiliriz veya regex ile loop yapabiliriz.
        # Regex ile her bir objeyi yakalayalım: { ... }
        # Dikkat: content içinde } geçebilir mi? Backtick ` ` içinde geçebilir.
        # Bu yüzden regexi dikkatli kurmalıyız.
        
        # Strateji: id, title, image, content alanlarını tek tek yakala
        # Objeler virgül ile ayrılır.
        
        # Objeleri ayırmak zor olduğu için, tüm string içinde "id": ... desenlerini bulup indexlerini alalım.
        
        # Daha güvenli yöntem: Regex ile item özelliklerini çekmek
        # Varsayım: Her item { ile başlar, } ile biter ve sıralı alanlar vardır.
        
        # Regex:
        # "id": (\d+)
        # "title": "(.*?)"
        # "image": "(.*?)" (Opsiyonel)
        # "content": (`[\s\S]*?`|"(.*?)")
        
        # Bu regex tüm dosyayı tek seferde parse edemez çünkü aradaki virgülleri atlaması lazım.
        # Ancak finditer kullanırsak sırayla bulur.
        
        pattern = re.compile(
            r'\{\s*'
            r'["\']?id["\']?\s*:\s*(?P<id>\d+)\s*,\s*'
            r'["\']?title["\']?\s*:\s*"(?P<title>.*?)"\s*,\s*'
            r'(?:["\']?image["\']?\s*:\s*"(?P<image>.*?)"\s*,\s*)?'
            r'["\']?content["\']?\s*:\s*(?P<content_backtick>`[\s\S]*?`|"(?P<content_doublequote>.*?)")'
            r'\s*\}',
            re.MULTILINE | re.DOTALL
        )
        
        for match in pattern.finditer(raw_str):
            item = {
                "id": int(match.group("id")),
                "title": match.group("title"),
                "image": match.group("image"), # None olabilir
                "content": ""
            }
            
            # Content temizle (backtickleri veya tırnakları kaldır)
            if match.group("content_backtick"):
                raw_content = match.group("content_backtick")
                if raw_content.startswith('`'):
                    item["content"] = raw_content[1:-1]
                elif raw_content.startswith('"'):
                    item["content"] = raw_content[1:-1]
            
            items.append(item)
            
        return items

    def save(self):
        # Dosyayı yeniden oluştur
        output = "const derkenarData = {\n"
        output += "    " + self.intro_raw + "\n"
        output += '    "konular": [\n'
        
        # Itemları stringe çevir (LIFO sırasına sadık kalacağız, liste zaten öyle olmalı)
        # Ancak ekleme yaparken başa ekliyoruz.
        # Yazarken listedeki sırayla yazacağız.
        
        for i, item in enumerate(self.items):
            content_str = item['content'].replace('`', '\\`') # Backtick escape
            
            image_line = ""
            if item.get("image"):
                image_line = f'        "image": "{item["image"]}",\n'
                
            entry_str = f"""    {{
        "id": {item['id']},
        "title": "{item['title']}",
{image_line}        "content": `{content_str}`
    }}"""
            if i < len(self.items) - 1:
                entry_str += ","
            
            output += entry_str + "\n"
            
        output += "    ]\n};\n"
        
        with open(self.filepath, "w", encoding="utf-8") as f:
            f.write(output)

    def add_item(self, title, content, image_file=None):
        new_id = 1
        if self.items:
            new_id = max(item["id"] for item in self.items) + 1
            
        image_path = None
        if image_file:
            if not os.path.exists(IMAGES_DIR):
                os.makedirs(IMAGES_DIR)
            with open(os.path.join(IMAGES_DIR, image_file.name), "wb") as f:
                f.write(image_file.getbuffer())
            image_path = f"images/{image_file.name}"
            
        new_item = {
            "id": new_id,
            "title": title,
            "content": content,
            "image": image_path
        }
        
        # Başa ekle (LIFO)
        self.items.insert(0, new_item)
        self.save()
        return new_id

    def update_item(self, item_id, title, content, image_file=None, keep_existing_image=True):
        for item in self.items:
            if item["id"] == item_id:
                item["title"] = title
                item["content"] = content
                
                if image_file:
                    # Yeni resim yüklendiyse kaydet ve güncelle
                    if not os.path.exists(IMAGES_DIR):
                        os.makedirs(IMAGES_DIR)
                    with open(os.path.join(IMAGES_DIR, image_file.name), "wb") as f:
                        f.write(image_file.getbuffer())
                    item["image"] = f"images/{image_file.name}"
                elif not keep_existing_image:
                    # Resim silinmişse (bu opsiyonu UI'da sunarsak)
                    item["image"] = None
                    
                self.save()
                return True
        return False
        
    def delete_item(self, item_id):
        initial_len = len(self.items)
        self.items = [i for i in self.items if i["id"] != item_id]
        if len(self.items) < initial_len:
            self.save()
            return True
        return False

# --- UI ---

st.title("📚 Derkenar Yönetim Paneli")

manager = DerkenarManager(DATA_FILE)

# Sidebar Menu
menu = st.sidebar.radio("İşlem Seçin", ["➕ Yeni Ekle", "✏️ Düzenle", "🗑️ Sil", "📋 Listele"])

if menu == "➕ Yeni Ekle":
    st.header("Yeni Derkenar Ekle")
    with st.form("add_form", clear_on_submit=True):
        title = st.text_input("Başlık")
        content = st.text_area("İçerik", height=200)
        img = st.file_uploader("Resim (Opsiyonel)", type=["jpg", "png", "webp"])
        submitted = st.form_submit_button("Kaydet")
        
        if submitted:
            if title and content:
                new_id = manager.add_item(title, content, img)
                st.success(f"Eklendi! ID: {new_id}")
                st.rerun() # Refresh list
            else:
                st.error("Başlık ve içerik zorunludur.")

elif menu == "✏️ Düzenle":
    st.header("Derkenar Düzenle")
    if not manager.items:
        st.info("Düzenlenecek kayıt yok.")
    else:
        # Selectbox için format: "ID - Başlık"
        options = {f"{item['id']} - {item['title']}": item for item in manager.items}
        selection = st.selectbox("Düzenlenecek Kaydı Seçin", list(options.keys()))
        selected_item = options[selection]
        
        with st.form("edit_form"):
            new_title = st.text_input("Başlık", value=selected_item["title"])
            new_content = st.text_area("İçerik", value=selected_item["content"], height=300)
            
            # Mevcut resmi göster
            if selected_item.get("image"):
                st.image(selected_item["image"], caption="Mevcut Resim", width=200)
                st.info(f"Mevcut Resim Yolu: {selected_item['image']}")
                
            new_img = st.file_uploader("Resmi Değiştir (Opsiyonel)", type=["jpg", "png", "webp"])
            
            col1, col2 = st.columns([1, 4])
            with col1:
                submitted = st.form_submit_button("Güncelle")
            
            if submitted:
                manager.update_item(selected_item["id"], new_title, new_content, new_img)
                st.success("Güncellendi!")
                st.rerun()

elif menu == "🗑️ Sil":
    st.header("Derkenar Sil")
    if not manager.items:
        st.info("Silinecek kayıt yok.")
    else:
        options = {f"{item['id']} - {item['title']}": item for item in manager.items}
        selection = st.selectbox("Silinecek Kaydı Seçin", list(options.keys()))
        selected_item = options[selection]
        
        st.warning(f"**{selected_item['title']}** başlıklı kaydı silmek üzeresiniz. Bu işlem geri alınamaz!")
        
        if st.button("Silmeyi Onayla", type="primary"):
            manager.delete_item(selected_item["id"])
            st.success("Silindi!")
            st.rerun()

elif menu == "📋 Listele":
    st.header("Mevcut Kayıtlar")
    for item in manager.items:
        with st.expander(f"{item['id']} - {item['title']}"):
            if item.get("image"):
                st.image(item["image"], width=150)
            st.markdown(item["content"])
