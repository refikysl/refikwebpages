const tavsiyelerData = [
    {
        "id": 1,
        "title": "Tavsiye 1. Ders çalışırken yapay zeka kullanımı",
        "content": `Öğrenciler olarak sınavlara çalışırken elinizde muazzam imkanlar var ama kullanmıyorsunuz. Örneğin yapay zeka (AI). Hepinizin cep telefonlarında chatgpt, gemini gibi uygulamalar mutlaka vardır. Yoksa da olmalı bence. Ama siz bu araçları yanlış kullanıyorsunuz. Yapay zeka sizin oyun arkadaşınız, bugün ne giysem diye soracağınız ya da yemek tarifi isteyebileceğiniz bir şey olmamalı bence. Bunları yapan pek çok uygulama zaten var. Yapay zekayı akademik işlerde kullanırken de yanlış kullanıyorsunuz. Chatgpt’ye soruyorsunuz. “Fransa kamu yönetimi sistemini anlat”. Yapay zeka genel geçer pek çok bilgiyi verir ama sınava bunlardan girmiyorsunuz. Hocanın anlattığı konular daha spesifik konular olabiliyor. Bu yüzden aldığınız cevaplar da hiçbir işinize yaramıyor. 
        
Yapay zekayı daraltılmış alanlarda soru sormak için kullanmak gerekiyor. 
Örneğin Karşılaştırmalı Kamu Yönetimi dersinde Fransa’yı çalışıyorsanız. Fransa tarihi ve bu tarihin Fransız yönetim yapısı üzerindeki etkileri kısmını okumuşsanız yapay zekaya şunu sorun: 
<br><em>“Sen bir üniversitede siyaset bilimi ve kamu yönetimi bölümünde karşılaştırmalı kamu yönetimi dersi veren profesörsün. Cevaplarını üretirken siyaset bilimi ve kamu yönetimi lisans öğrencisine anlatır şekilde cevap ver. Ağır profesör dili kullanma; lisans öğrencisinin anlayabileceği netlikte cevaplar ver.
Fransız tarihinin Fransız kamu yönetimi yapısı üzerindeki etkilerini dersin hocası şu şekilde sıraladı:
1…………….
2……………
3……………
Hem bu başlıkları genişleterek, örneklendirerek bana anlat hem de bunlar dışında faktörler varsa belirt.”</em>
<br><br>
Bu doğrudan bir chat ekranıyla yazışmada iyi bir yöntem olabilir. Ama bundan daha iyisi Google uygulaması olan <strong>NotebookLM</strong> kullanmanızı tavsiye ederim. 
NotebookLM üzerinde derse ait kaynak ya da kaynakları (örneğin dersin slaytlarını) yükleyerek bekleyin. Önce basit bir içerik tanımı yapacak ardından aşağıya üç soru çıkaracaktır. Onları deneyebilirsiniz. Ama daha doğru yöntem ilk soru olarak şunu sorun:
<em>“Sana yüklediğim kaynağın içeriğini bölümlere ayırdığında hangi başlıkları içermektedir listele.”</em> 
Sonra her bir başlığı yazıp bu başlık altında kaynak neyi anlatmaktadır diye sorabilirsiniz. 
<br><br>
<strong>SBKY 2. Sınıf dersi Yerel Siyaset için mesela şu soruları sorabilirsiniz:</strong>
<br>
<strong>Giriş ve Devletin Ortaya Çıkışı</strong>
1. Yazar, kamu yönetimi kavramlarını açıklarken neden teknik/didaktik bir dil yerine, "hayali bir devlet kurma" senaryosu (metaforu) kullanmayı tercih etmiştir? Bu yöntemin akademik metinlerdeki mesafeyi nasıl etkilediğini açıklayınız.
2. İnsanoğlunun yerleşik hayata geçiş sürecinde, "yönetme" ihtiyacı ve ilk devlet yapılanmaları (yöneten-yönetilen ayrımı) hangi tarihsel ve sosyolojik koşulların sonucunda ortaya çıkmıştır?
3. Max Weber devleti tanımlarken hangi "tekel" özelliğine vurgu yapmıştır ve bu özellik devletin hangi temel fonksiyonunu yerine getirmesini sağlar?
4. Tarihsel süreçte devletlerin ilk kurulan bakanlıkları (fonksiyonları) genellikle hangileridir? Modern zamanlardaki "sosyal devlet" anlayışı bu yapılanmayı nasıl değiştirmiştir?
<br><strong>Devlet Sistemleri (Üniter, Federal, Bölgeli)</strong>
5. Üniter devlet ile federal devletin oluşum süreçlerini karşılaştırdığımızda; üniter devletin bir "oluş", federal devletin ise bir "oldurulmuş" süreç olması ne anlama gelmektedir?
6. Federal devlet sisteminde egemenlik paylaşımı nasıldır? Federal devleti oluşturan birimlerin (eyaletlerin) yasama, yürütme ve yargı yetkileri açısından üniter devletin taşra birimlerinden farkı nedir?
7. "Bölgeli Devlet" (örneğin İspanya) sistemini federal devletten ayıran temel farklar nelerdir? Özellikle anayasa yapma yetkisi ve yetkilerin kaynağı (devredilmiş yetkiler) açısından karşılaştırınız.
8. Üniter ve federal devletlerde yerel yönetimlerin "vergi koyma" yetkileri arasında nasıl bir temel farklılık bulunmaktadır?
<br><strong>Hükümet Sistemleri</strong>
9. "Kuvvetler birliği" ilkesine dayanan hükümet sistemleri nelerdir? Türkiye tarihinde "Meclis Hükümeti" sistemine verilebilecek örnek hangisidir?
10. Yürütme organının seçimi ve yasama ile ilişkisi bağlamında; Parlamenter Sistem, Başkanlık Sistemi ve Yarı Başkanlık Sistemi arasındaki temel farklar nelerdir?
11. Başkanlık sistemindeki "sert kuvvetler ayrılığı" ile parlamenter sistemdeki "yumuşak kuvvetler ayrılığı" tanımlamaları neye dayanarak yapılmaktadır?
<br><strong>Merkezden Yönetim (Centralization)</strong>
12. Merkezden yönetimin sunduğu kamu hizmetlerinin en önemli avantajlarından biri olan "hizmetlerde yeknesaklık (standartlaşma)" ve "ölçek ekonomisi" kavramlarını açıklayınız.
13. Merkezi yönetimin aşırı büyümesi ve hizmetleri tek merkezden yürütmesinin doğurduğu temel sakıncalar nelerdir?
14. Hangi kamu hizmetleri (örneğin adalet, savunma) doğası gereği mutlaka merkezi yönetim tarafından yürütülmek zorundadır?
<br><strong>Taşra Yönetimi ve Yetki Genişliği</strong>
15. Taşra yönetimlerinin temel kuruluş amacı nedir? "Deconcentration" (yetki genişliği/odaklanmanın azaltılması) kavramı, merkezin yükünü hafifletme bağlamında neyi ifade eder?
16. Türk idare hukukunda kullanılan "yetki genişliği" (tevsi-i mezuniyet) kavramı ile valilerin sahip olduğu yetkiler arasındaki ilişkiyi açıklayınız. Bu yetki valiye hangi imkanları tanır?
<br><strong>Yerinden Yönetim (Decentralization)</strong>
17. Yerel yönetimlerin "demokratik" işlevi nedir? Vatandaşın ulusal siyasete etkisi ile yerel siyasete etkisi arasındaki farkı "mesafe" kavramı üzerinden tartışınız.
18. "Yerel Yönetimler" (mahalli idareler) ile "Hizmet Yerinden Yönetim" kuruluşları (örneğin Üniversiteler, KİT'ler) arasındaki dört temel farkı (tüzel kişilik türü, uzmanlık alanı, organların seçimi vb.) sıralayınız.
19. Bir kamu hizmetinin (örneğin TRT gibi yayıncılık hizmetlerinin) merkezi idare bürokrasisi dışına çıkarılarak özerk bir "hizmet yerinden yönetim" kuruluşuna devredilmesinin gerekçeleri nelerdir?
<br><strong>Subsidiyarite İlkesi ve Görev Paylaşımı</strong>
20. "Subsidiyarite" (hizmette yerellik) ilkesi nedir? Merkezi yönetim ile yerel yönetimler arasındaki görev paylaşımında kullanılan "Liste Yöntemi" ve "Genel Yetki İlkesi"ni açıklayınız.
<br><strong>Özerklik, Vesayet ve İdarenin Bütünlüğü</strong>
21. Yerel yönetimlerin özerkliğini dengeleyen "vesayet denetimi" nedir? Hiyerarşik denetimden farkı nedir ve "idarenin bütünlüğü" ilkesi açısından neden gereklidir?
<br><br>
Benzer bir yöntem zaten notebookLM içinde sağ taraftaki araçlarda yer almaktadır. Zihin haritasına bastığınızda yüklediğiniz kaynağın içeriğini başlıklara bölecek ve bir ağaç yapısında gösterecektir. Bu yapıda en uç noktalara kadar gidebileceğiniz gibi daha orta düzey başlıklara tıklayarak da değerlendirme yapmasını isteyebilirsiniz. 
<br>
Yine notebookLM üzerinde sesli ve videolu özetler hazırlatıp konuyu size anlatmasını sağlayabilirsiniz. Sesli özetler podcast mantığıyla üretilmekte ve iki kişinin karşılıklı konuşmasıyla ilerlemektedir. Dosyayı indirip cep telefonunuza yükleyip boş kaldığınız zamanlarda ya da yatarken 15 dakika dinlerseniz kalıcı bilgilere sahip olursunuz.`
    },
    {
        "id": 2,
        "title": "Kitap Tavsiyeleri",
        "isHtml": true,
        "content": `
        <details class="modern-details">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">1. Halis Çetin: Siyaset</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı (Sabit Genişlik) -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/siyaset_kitap.jpg" alt="Halis Çetin - Siyaset" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Halis Çetin’in ilk baskısı <em>Cumhur ve Başkanı</em> adıyla yayımlanan, güncellenmiş ve genişletilmiş versiyonuyla ise kısaca <strong>Siyaset</strong> başlığını taşıyan eseri, Türk siyasal kültürünün röntgenini çeken özgün bir çalışma niteliğindedir.
                         </p>
                         <p style="text-align: justify;">
                         Akademik kuramların soğukluğundan ziyade, Machiavelli’nin yöntemine atıfla mektuplar üzerinden şekillenen bu eser; kahvehanelerden kampüslere kadar hayatın tam merkezindeki pratik tecrübeleri merkeze alır. Yazar, siyasetin <em>"kitapta durduğu gibi hayatta durmadığı"</em> gerçeğinden hareketle; ideal ile gerçek, erdem ile ihtiras ve teori ile pratik arasındaki o derin uçurumu ironik ve akıcı bir üslupla irdeler.
                         </p>
                         <p style="text-align: justify;">
                         Türkiye’nin siyasal genetiğini, güç ve iktidar arayışındaki insan doğasıyla birleştirerek anlatan bu el kitabı, siyaseti sadece bir yönetim biçimi değil, zaaflar ve tutkularla örülü bir <em>"yaşama sanatı"</em> olarak okura sunmaktadır.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">2. Lewis Dartnell: Kökenler</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/kökenler_kitap.jpg" alt="Lewis Dartnell - Kökenler" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Lewis Dartnell’in <em>"Kökenler: Yeryüzünün Tarihi İnsanlık Tarihini Nasıl Şekillendirdi?"</em> başlıklı eseri, antropoloji ve tarih anlatısını alışılagelmiş kalıpların dışına çıkararak <strong>"büyük tarih" (big history)</strong> perspektifiyle ele alan etkileyici bir çalışmadır. Dartnell, insanlık serüvenini sadece siyasi kararlar veya ekonomik devrimlerle değil; levha tektoniği, iklim döngüleri ve jeolojik katmanların belirleyiciliği üzerinden okur.
                         </p>
                         <p style="text-align: justify;">
                         Kitap, bugünkü siyasi haritalardan tükettiğimiz gıdalara, hatta oy verme tercihlerimize kadar pek çok güncel durumun köklerini milyonlarca yıl önceki jeolojik olaylara dayandırır. Örneğin; Himalayalar'ın yükselişinin evrimimizi nasıl tetiklediğini veya antik deniz yataklarının modern seçim sonuçlarını nasıl etkilediğini disiplinlerarası bir titizlikle açıklar.
                         </p>
                         <p style="text-align: justify;">
                         Dartnell’in akıcı üslubu, teknik coğrafi bilgileri sosyal bilimlerin derinliğiyle birleştirerek, üzerinde yaşadığımız gezegenin sessiz ama mutlak belirleyiciliğini gözler önüne sermektedir.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">3. İdris Küçükömer: Düzenin Yabancılaşması</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/düzeninyabancilasmasi_kitap.jpg" alt="İdris Küçükömer - Düzenin Yabancılaşması" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         İdris Küçükömer’in Türk düşünce hayatında tabu deviren ve tartışmaları bugün dahi canlılığını koruyan kült eseri <em>"Düzenin Yabancılaşması"</em>, Türkiye’nin modernleşme serüvenine ve sınıfsal yapısına dair alışılagelmiş ezberleri sarsan bir başyapıttır. Küçükömer, Batılılaşma çabalarını bir "yabancılaşma" süreci olarak nitelerken, Türk siyasal hayatındaki geleneksel "sağ" ve "sol" kavramlarını tersyüz eden o meşhur tezini ileri sürer: Türkiye’de bürokratik seçkinlerin (ceberrut devlet geleneğinin temsilcileri) "ilerici" değil aslında statükocu; halkın değerlerini temsil eden geniş kitlelerin ise "gerici" değil, değişime açık ve sivil bir potansiyel barındırdığını savunur.
                         </p>
                         <p style="text-align: justify;">
                         Kitap, Tanzimat’tan Cumhuriyet’e uzanan süreçte devletin toplumla kurduğu mesafeyi ve bu mesafenin yarattığı kimlik krizini ekonomi-politik bir perspektifle irdeler. Küçükömer’in "sivil toplum" ve "bürokrasi" arasındaki bu gerilime dair yaptığı analizler, sadece tarihsel bir dönemi aydınlatmakla kalmaz; aynı zamanda Türkiye’nin güncel siyasal kutuplaşmalarının ve kurumsal tıkanıklıklarının kökenlerine dair de derinlemesine bir kavrayış sunar.
                         </p>
                    </div>
                </div>
            </div>
        </details>
        `
    }
];
