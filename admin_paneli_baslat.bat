@echo off
echo Admin Paneli Baslatiliyor...
echo Pencereyi kapatmadiginiz surece panel calismaya devam eder.
cd /d "%~dp0"
python -m streamlit run admin.py
pause
