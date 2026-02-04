document.addEventListener('DOMContentLoaded', () => {
    // API URL ve Veri İşlemleri değişmedi
    const API_URL = "https://script.google.com/macros/s/AKfycbzQKJQHdjm2UYzamuOWO0MpyQQNd9ru6B5uvZVNyAnOjeQKWtHVh4oTfUG0zBA5oPUS/exec";

    // Navigation Logic
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownLinks = document.querySelectorAll('.dropdown-link'); // YENİ
    const sections = document.querySelectorAll('section');

    function showSection(targetId) {
        // Hide all
        sections.forEach(sec => sec.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));

        // Show target section
        const targetSection = document.getElementById(targetId);

        // Eğer bir dropdown elemanına tıklandıysa, üst menüsünü aktif yap
        // Bu biraz karmaşık olabilir, şimdilik sadece section'ı açalım.
        const targetLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);

        if (targetSection) {
            targetSection.classList.add('active');
            window.scrollTo(0, 0);

            // Eğer "tavsiyeler" bölümüne geçildiyse, tüm açık akordiyonları kapat
            if (targetId === 'tavsiyeler') {
                document.querySelectorAll('.tavsiye-content').forEach(el => el.style.display = 'none');
                document.querySelectorAll('.tavsiye-header .arrow-icon').forEach(el => el.style.transform = 'rotate(0deg)');
            }
        }
        if (targetLink) {
            targetLink.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Eğer dropdown tetikleyicisiyse (data-target yoksa veya # ise) varsayılanı engelleme
            const t = link.getAttribute('data-target');
            if (t) {
                e.preventDefault();
                showSection(t);
            }
        });
    });

    // Dropdown Linkleri için Tıklama Olayı (YENİ)
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const t = link.getAttribute('data-target');
            if (t) showSection(t);
        });
    });

    // Varsayılan açılış
    showSection('anasayfa');

    // --- DUYURU SİSTEMİ (Copy-Paste Logic) ---
    async function fetchAnnouncements() {
        const container = document.getElementById('duyuru-container');
        if (!container) return;

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ action: 'get_announcements' })
            });

            const result = await response.json();

            if (result.result === 'success' && result.data && result.data.length > 0) {
                container.innerHTML = '';

                result.data.forEach(item => {
                    // Modern Card HTML
                    const card = document.createElement('div');
                    card.className = 'announcement-card';
                    card.innerHTML = `
                        <h4 class="announcement-title">${item.title}</h4>
                        <p class="announcement-summary">${item.summary}</p>
                    `;

                    // Click event
                    card.addEventListener('click', () => openModal(item));
                    container.appendChild(card);
                });
            } else {
                container.innerHTML = '<div class="modern-card">Duyuru bulunamadı.</div>';
            }

        } catch (error) {
            console.error(error);
            container.innerHTML = '<div class="modern-card">Bağlantı hatası.</div>';
        }
    }

    // Modal Logic
    const modal = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal-btn');

    function openModal(item) {
        if (!modal) return;
        modalTitle.innerText = item.title;
        modalDate.innerText = item.date;
        modalBody.innerHTML = item.content.replace(/\n/g, '<br>');
        modal.classList.add('open');
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('open');
        });
    }

    // Close on background click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('open');
        });
    }

    fetchAnnouncements();


    // --- İLETİŞİM FORMU ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const oldText = btn.innerText;
            btn.innerText = 'Gönderiliyor...';
            btn.disabled = true;

            const formData = new FormData(contactForm);
            const data = {
                action: 'message',
                ad_soyad: formData.get('name'),
                email: formData.get('email'),
                mesaj: formData.get('message')
            };

            try {
                await fetch(API_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(data)
                });
                alert('Mesajınız alındı.');
                contactForm.reset();
            } catch (err) {
                alert('Hata oluştu.');
            } finally {
                btn.innerText = oldText;
                btn.disabled = false;
            }
        });
    }


    // --- BOOK MODAL ---
    const bookModal = document.getElementById('book-modal-overlay');
    const closeBookBtn = document.querySelector('.close-book-modal-btn');

    window.openBookModal = function () {
        if (bookModal) {
            bookModal.classList.add('open');
        }
    };

    if (closeBookBtn) {
        closeBookBtn.addEventListener('click', () => {
            bookModal.classList.remove('open');
        });
    }

    // Close on background click
    if (bookModal) {
        bookModal.addEventListener('click', (e) => {
            if (e.target === bookModal) bookModal.classList.remove('open');
        });
    }

    // --- MAKALELER VERİ YÜKLEME (JSON yerine JS Variable) ---
    function loadArticles() {
        const container = document.getElementById('makaleler-container');
        if (!container) return;

        // data/makaleler.js dosyasından gelen global değişkeni kontrol et
        if (typeof makalelerData !== 'undefined' && Array.isArray(makalelerData)) {
            container.innerHTML = '';

            makalelerData.forEach(makale => {
                const div = document.createElement('div');
                div.className = 'modern-card article-item';

                // Link varsa karta class ve tıklama özelliği ekle
                if (makale.link) {
                    div.classList.add('has-link');
                    div.title = "Makaleyi görüntülemek için tıklayın";
                    div.onclick = (e) => {
                        // Eğer DOI linkine tıklandıysa kartın linkini açma (çakışmayı önle)
                        if (!e.target.closest('a')) {
                            window.open(makale.link, '_blank');
                        }
                    };
                }

                let doiHtml = '';
                if (makale.doi) {
                    doiHtml = ` <a href="https://doi.org/${makale.doi}" target="_blank" style="color:var(--primary-color); text-decoration:none;">https://doi.org/${makale.doi}</a>`;
                }

                // Link butonu artık yok, tüm kart tıklanabilir.
                // let linkHtml = ... iptal.

                div.innerHTML = `
                    <p class="article-reference">
                        ${makale.yazar} (${makale.yil}). ${makale.baslik}. 
                        <em>${makale.dergi}, ${makale.cilt}</em>(${makale.sayi}), ${makale.sayfa}.${doiHtml}
                    </p>
                `;
                container.appendChild(div);
            });
        } else {
            console.error('Veri bulunamadı (makalelerData)');
            container.innerHTML = '<p>Makale listesi yüklenemedi.</p>';
        }
    }

    // Makaleleri yükle
    loadArticles();

    // --- KİTAPLAR VERİ YÜKLEME ---
    function loadBooks() {
        const container = document.getElementById('kitaplar-container');
        if (!container) return;

        if (typeof kitaplarData !== 'undefined') {
            container.innerHTML = '';

            // 1. Kitaplar
            if (kitaplarData.kitaplar && kitaplarData.kitaplar.length > 0) {
                const h3 = document.createElement('h3');
                h3.innerText = 'Kitaplar';
                h3.style.color = 'var(--primary-color)';
                h3.style.fontSize = '1.1rem';
                h3.style.margin = '0 0 1rem 0';
                h3.style.borderBottom = '1px solid #eee';
                h3.style.paddingBottom = '0.5rem';
                container.appendChild(h3);

                kitaplarData.kitaplar.forEach(item => createBookItem(item, container));
            }

            // 2. Bölümler
            if (kitaplarData.bolumler && kitaplarData.bolumler.length > 0) {
                const h3 = document.createElement('h3');
                h3.innerText = 'Kitap Bölümleri';
                h3.style.color = 'var(--primary-color)';
                h3.style.fontSize = '1.1rem';
                h3.style.margin = '2rem 0 1rem 0';
                h3.style.borderBottom = '1px solid #eee';
                h3.style.paddingBottom = '0.5rem';
                container.appendChild(h3);

                kitaplarData.bolumler.forEach(item => createBookItem(item, container));
            }
        } else {
            console.error('Veri bulunamadı (kitaplarData)');
            container.innerHTML = '<p>Kitap listesi yüklenemedi.</p>';
        }
    }

    function createBookItem(item, container) {
        const div = document.createElement('div');
        div.className = 'modern-card article-item'; // Makale stili ile aynı

        if (item.link) {
            div.classList.add('has-link');
            div.title = "Görüntülemek için tıklayın";
            div.onclick = (e) => {
                if (!e.target.closest('a')) window.open(item.link, '_blank');
            };
        }

        div.innerHTML = `
            <p class="article-reference">
                ${item.yazar} (${item.yil}). ${item.baslik}. 
                <em>${item.yayin}</em>
            </p>
        `;
        container.appendChild(div);
    }

    loadBooks();

    // --- HOCADAN TAVSİYELER VERİ YÜKLEME ---
    function loadTavsiyeler() {
        const container = document.getElementById('tavsiyeler-container');
        if (!container) return;

        if (typeof tavsiyelerData !== 'undefined' && Array.isArray(tavsiyelerData)) {
            container.innerHTML = '';

            tavsiyelerData.forEach(item => {
                const div = document.createElement('div');
                div.className = 'modern-card tavsiye-item';
                div.style.marginBottom = '1rem';
                div.style.padding = '0'; // Padding'i CSS ile içeride yöneteceğiz

                // Başlık
                const header = document.createElement('div');
                header.className = 'tavsiye-header';
                header.style.padding = '1rem';
                header.style.cursor = 'pointer';
                header.style.display = 'flex';
                header.style.alignItems = 'center';
                header.style.justifyContent = 'space-between';

                header.innerHTML = `
                    <h3 style="margin:0; color:var(--primary-color); font-size:1.1rem; display:flex; align-items:center; gap:0.5rem;">
                        <i class='bx bx-chevron-right arrow-icon' style="transition:transform 0.3s;"></i> ${item.title}
                    </h3>
                `;

                // İçerik
                const content = document.createElement('div');
                content.className = 'tavsiye-content';
                content.style.display = 'none';
                content.style.padding = '0 1.5rem 1.5rem 1.5rem';
                content.style.borderTop = '1px solid #eee';

                content.innerHTML = `
                    <p style="color:var(--text-dark); line-height:1.7; margin-top:1rem;">
                        ${item.content.replace(/\n/g, '<br>')}
                    </p>
                `;

                if (item.isHtml) {
                    content.innerHTML = `<div style="margin-top:1rem;">${item.content}</div>`;
                }

                // Tıklama Logic
                header.addEventListener('click', () => {
                    const arrow = header.querySelector('.arrow-icon');
                    if (content.style.display === 'none') {
                        content.style.display = 'block';
                        arrow.style.transform = 'rotate(90deg)';
                    } else {
                        content.style.display = 'none';
                        arrow.style.transform = 'rotate(0deg)';
                    }
                });

                div.appendChild(header);
                div.appendChild(content);
                container.appendChild(div);
            });
        } else {
            console.error('Veri bulunamadı (tavsiyelerData)');
            container.innerHTML = '<p>Tavsiye listesi yüklenemedi.</p>';
        }
    }

    // Tavsiyeleri yükle
    loadTavsiyeler();

});
