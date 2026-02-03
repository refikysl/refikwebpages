function doPost(e) {
    if (typeof e === 'undefined') {
        return ContentService.createTextOutput("Bu fonksiyon elle çalıştırılamaz.");
    }

    var lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        var data = JSON.parse(e.postData.contents);

        // ==========================================
        // 1. CHAT AKSİYONU (Yapay Zeka)
        // ==========================================
        if (data.action === "chat") {
            var userQuestion = data.question;

            // API KEY BURAYA GİRİLECEK (Kullanıcıya sorulacak)
            var apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');

            if (!apiKey) {
                return ContentService.createTextOutput(JSON.stringify({
                    "result": "error",
                    "answer": "HATA: API Anahtarı bulunamadı. Lütfen Google Apps Script'te 'Proje Ayarları > Komut Dosyası Özellikleri' kısmına 'GEMINI_API_KEY' adıyla anahtarınızı ekleyin."
                })).setMimeType(ContentService.MimeType.JSON);
            }

            var answer = callGemini(userQuestion, apiKey);

            return ContentService
                .createTextOutput(JSON.stringify({ "result": "success", "answer": answer }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        // ==========================================
        // 2. İLETİŞİM FORMU (Mail)
        // ==========================================
        else if (data.action === "message") {
            var alici = "refik@kku.edu.tr";
            var konu = "Web Sitesinden Yeni Mesaj - " + data.ad_soyad;
            var icerik = "Web sitenizden yeni bir iletişim formu mesajı geldi.\n\n" +
                "Gönderen: " + data.ad_soyad + "\n" +
                "E-posta: " + data.email + "\n" +
                "Telefon: " + (data.telefon || "Belirtilmedi") + "\n\n" +
                "MESAJ:\n" + data.mesaj + "\n\n" +
                "Tarih: " + new Date().toLocaleString("tr-TR");

            MailApp.sendEmail(alici, konu, icerik);
            return ContentService.createTextOutput(JSON.stringify({ "result": "success" })).setMimeType(ContentService.MimeType.JSON);
        }

        // ==========================================
        // 3. DUYURU SİSTEMİ
        // ==========================================
        else if (data.action === "get_announcements") {
            var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Duyurular');
            if (!sheet) {
                return ContentService.createTextOutput(JSON.stringify({ "result": "success", "data": [] })).setMimeType(ContentService.MimeType.JSON);
            }

            var rows = sheet.getDataRange().getValues();
            var announcements = [];
            for (var i = rows.length - 1; i >= 1; i--) {
                var row = rows[i];
                announcements.push({
                    id: row[0],
                    date: (Object.prototype.toString.call(row[1]) === '[object Date]') ? row[1].toLocaleDateString("tr-TR") : row[1],
                    title: row[2],
                    summary: row[3],
                    content: row[4],
                    image_url: row[5]
                });
            }
            return ContentService.createTextOutput(JSON.stringify({ "result": "success", "data": announcements })).setMimeType(ContentService.MimeType.JSON);
        }
        else {
            return ContentService.createTextOutput(JSON.stringify({ "result": "success", "id": 0 })).setMimeType(ContentService.MimeType.JSON);
        }

    } catch (e) {
        return ContentService
            .createTextOutput(JSON.stringify({ "result": "error", "error": e.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}

// ==========================================
// GEMINI API ENTEGRASYONU (DEVRE DIŞI)
// ==========================================
function callGemini(question, apiKey) {
    // Chatbot özelliği kaldırıldı
    return "Chatbot özelliği şu anda kullanılamıyor.";
}
