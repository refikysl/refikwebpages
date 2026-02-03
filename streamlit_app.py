import streamlit as st
import os
import base64
from pathlib import Path

# Sayfa yapılandırması
st.set_page_config(
    page_title="Dr. Refik Yaslıkaya - Akademik Web Sitesi",
    page_icon="📚",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Tüm Streamlit UI elementlerini gizle
hide_streamlit_style = """
<style>
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    .stDeployButton {display:none;}
    div[data-testid="stToolbar"] {display: none;}
    div[data-testid="stDecoration"] {display: none;}
    div[data-testid="stStatusWidget"] {display: none;}
    .main > div {
        padding: 0 !important;
        max-width: 100% !important;
    }
    .block-container {
        padding: 0 !important;
        max-width: 100% !important;
    }
    iframe {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw !important;
        height: 100vh !important;
        border: none;
        margin: 0;
        padding: 0;
    }
</style>
"""
st.markdown(hide_streamlit_style, unsafe_allow_html=True)

# Görseli base64'e çevir
def image_to_base64(image_path):
    try:
        with open(image_path, "rb") as img_file:
            return base64.b64encode(img_file.read()).decode()
    except:
        return None

# HTML dosyasını oku
html_file_path = os.path.join(os.path.dirname(__file__), "index.html")
with open(html_file_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

# CSS dosyasını oku
css_file_path = os.path.join(os.path.dirname(__file__), "style.css")
with open(css_file_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

# JS dosyasını oku
js_file_path = os.path.join(os.path.dirname(__file__), "script.js")
with open(js_file_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# images klasöründeki tüm görselleri base64'e çevir
images_dir = os.path.join(os.path.dirname(__file__), "images")
if os.path.exists(images_dir):
    for img_file in os.listdir(images_dir):
        img_path = os.path.join(images_dir, img_file)
        if os.path.isfile(img_path):
            img_base64 = image_to_base64(img_path)
            if img_base64:
                ext = img_file.split('.')[-1].lower()
                mime_type = f"image/{ext}" if ext != 'svg' else "image/svg+xml"
                
                html_content = html_content.replace(
                    f'src="images/{img_file}"',
                    f'src="data:{mime_type};base64,{img_base64}"'
                )
                html_content = html_content.replace(
                    f'src="./images/{img_file}"',
                    f'src="data:{mime_type};base64,{img_base64}"'
                )

# placeholder_logo.png dosyasını da base64'e çevir
logo_path = os.path.join(os.path.dirname(__file__), "placeholder_logo.png")
if os.path.exists(logo_path):
    logo_base64 = image_to_base64(logo_path)
    if logo_base64:
        html_content = html_content.replace(
            'src="placeholder_logo.png"',
            f'src="data:image/png;base64,{logo_base64}"'
        )

# CSS ve JS'yi HTML'e göm
html_content = html_content.replace('</head>', f'<style>{css_content}</style></head>')
html_content = html_content.replace('</body>', f'<script>{js_content}</script></body>')

# Body'ye tam ekran stilleri ekle
html_content = html_content.replace('<body>', '<body style="margin:0; padding:0; overflow-x:hidden;">')

# HTML'i tam ekran göster
st.components.v1.html(html_content, height=None, scrolling=False)
