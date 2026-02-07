# Anlar ve Anılar - Fotoğraf Klasörü

Bu klasöre "Anlar ve Anılar" sayfasında gösterilecek fotoğrafları ekleyin.

## Kullanım

### 1. Fotoğraflarınızı bu klasöre ekleyin
- JPG, PNG, WEBP formatlarını kullanabilirsiniz
- Önerilen fotoğraf boyutları:
  - Genişlik: 800-1200px
  - Yükseklik: Orijinal oran korunabilir
- Dosya isimleri Türkçe karakter içermemeli (foto1.jpg, konferans2020.jpg gibi)

### 2. data/anlar.js dosyasını güncelleyin

```javascript
const anlarData = [
    {
        id: 1,
        src: 'images/anlar/foto1.jpg',        // Fotoğraf yolu
        title: 'Konferans 2020',              // Başlık
        date: '15 Mart 2020',                 // Tarih
        description: 'Uluslararası konferans',// Açıklama (opsiyonel)
        width: 400,                           // Genişlik (masonry layout için)
        height: 600                           // Yükseklik (masonry layout için)
    },
    // Daha fazla fotoğraf ekleyin...
];
```

### 3. Width ve Height değerleri

Masonry layout'un düzgün çalışması için her fotoğrafın genişlik/yükseklik oranını belirtmek önemlidir:
- Yatay fotoğraflar: width: 400, height: 300 (veya benzeri)
- Dikey fotoğraflar: width: 400, height: 600 (veya benzeri)
- Kare fotoğraflar: width: 400, height: 400

Oranları korumak yeterlidir, piksel değerleri tam olarak fotoğrafın gerçek boyutlarıyla aynı olmak zorunda değil.

## Admin Panel ile Yönetim (Gelecek)

İleride admin paneli eklendiğinde:
- Fotoğraflar otomatik yüklenebilecek
- Başlık ve tarih bilgileri form üzerinden girilebilecek
- Sıralama yapılabilecek
- Fotoğraflar silinebilecek

## Demo Fotoğraflar

Şu anda sayfa demo fotoğraflar (picsum.photos) kullanıyor. Gerçek fotoğraflarınızı ekledikten sonra data/anlar.js dosyasını güncelleyin.
