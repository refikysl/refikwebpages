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
        "title": "Tavsiye 2. Kitap Tavsiyeleri",
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

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">4. Yıldıray Oğur: Alternatif Türkiye Tarihi I</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/alternatiftarih_kitap.jpg" alt="Yıldıray Oğur - Alternatif Türkiye Tarihi I" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Yıldıray Oğur’un <em>"Alternatif Türkiye Tarihi 1"</em> başlıklı eseri, resmi tarih anlatısının gölgesinde kalmış, unutulmuş veya kasten perdelenmiş olayları ve şahsiyetleri merkeze alan bir iade-i itibar çalışmasıdır. Kitap, Türkiye’nin yakın tarihini kazananların yazdığı doğrusal bir metin olmaktan çıkarıp; kaybedenlerin, itiraz edenlerin ve satır aralarında kalanların perspektifinden yeniden kurgular. Oğur, titiz bir arşiv taraması ve akıcı bir anlatımla, bildiğimizi sandığımız tarihsel kırılma anlarının aslında ne kadar farklı dinamiklerle şekillendiğini çarpıcı örneklerle ortaya koyar.
                         </p>
                         <p style="text-align: justify;">
                         Eser, ideolojik kalıplara sığınmak yerine belgelerin izini sürerek; Jön Türkler’den tek parti dönemine, faili meçhul kalmış siyasi cinayetlerden toplumsal hafızadaki beyaz lekelere kadar geniş bir yelpazede "öteki" hikâyeleri anlatır. Yazarın bu çalışması, sadece geçmişe dair yeni bir bilgi sunmakla kalmaz; aynı zamanda bugünün Türkiye’sini anlamak için elzem olan o saklı genetik kodları deşifre ederek okuru sarsıcı bir yüzleşmeye davet eder.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">5. Richard Sennett: Ten ve Taş (Batı Uygarlığında Beden ve Şehir)</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/tenvetas_kitap.jpg" alt="Richard Sennett - Ten ve Taş" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Richard Sennett’in modern bir klasik sayılan <em>"Ten ve Taş: Batı Uygarlığında Vücut ve Şehir"</em> adlı eseri, kentsel mekânın tarihini mimari formlardan ziyade insanın fiziksel deneyimi ve bedensel algısı üzerinden okuyan sarsıcı bir çalışmadır. Sennett, antik Atina’dan modern New York’a uzanan geniş bir tarihsel perspektifte, şehirlerin sadece taştan ve çelikten ibaret olmadığını; aksine insan bedeninin arzularını, acılarını ve toplumsal hiyerarşilerini yansıtan birer "deri" olduğunu savunur. Yazar, çıplaklığın demokrasideki rolünden disiplin altındaki bedenlere kadar, fiziksel yapının toplumsal ilişkileri nasıl şekillendirdiğini veya körelttiğini çarpıcı örneklerle irdeler.
                         </p>
                         <p style="text-align: justify;">
                         Kitabın temel izleği, modern kentin bireyi "pasif bir izleyiciye" dönüştürerek bedensel duyuları nasıl uyuşturduğudur. Sennett, hız ve konfor odaklı çağdaş şehircilik anlayışının, insanları birbirine yabancılaştırdığını ve ötekinin acısına karşı duyarsızlaştırdığını iddia eder. <em>Ten ve Taş</em>, şehri sadece bir yerleşim birimi olarak değil, insan varoluşunun mekânsal bir tezahürü olarak anlamak isteyenler için derinlikli bir felsefi ve sosyolojik rehber sunmaktadır.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">6. Ahmet Hamdi Tanpınar: Beş Şehir</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/bessehir_kitap.jpg" alt="Ahmet Hamdi Tanpınar - Beş Şehir" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Ahmet Hamdi Tanpınar’ın ölümsüz eseri <em>"Beş Şehir"</em>, Ankara, Erzurum, Konya, Bursa ve İstanbul’un ruhunu; tarih, kültür ve estetik imbiğinden süzerek anlatan eşsiz bir medeniyet okumasıdır. Tanpınar, bu şehirleri sadece coğrafi mekanlar ya da mimari yapılar toplamı olarak değil; süreklilik içindeki değişimlerin, hatıraların ve "terkip" kabiliyetimizin birer tezahürü olarak ele alır. Yazarın o meşhur "devam ederek değişmek, değişerek devam etmek" düşüncesinin en somut yansıması olan bu eser, kaybolan güzelliklerin ardından tutulan bir yas değil, o güzellikleri bugünün bilinciyle yeniden inşa etme çabasıdır.
                         </p>
                         <p style="text-align: justify;">
                         Kitap, her bir şehri kendine has bir mizaç ve karakterle resmederken; Selçuklu’nun ağırbaşlılığından Osmanlı’nın görkemine, oradan Cumhuriyet’in taze heyecanına uzanan tarihsel bir sürekliliğin izini sürer. Tanpınar’ın şiirsel üslubu ve derin tefekkürüyle şekillenen bu denemeler, okuru sadece bir şehir gezisine çıkarmaz; aynı zamanda Türk ruhunun köklerine, musikisine ve estetik değerlerine doğru içsel bir yolculuğa davet eder.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">7. Ahmet Hamdi Tanpınar: Saatleri Ayarlama Enstitüsü</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/saatleriayarlama_kitap.jpg" alt="Ahmet Hamdi Tanpınar - Saatleri Ayarlama Enstitüsü" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Roman, aslında hiçbir işlevi olmayan ancak devasa bir bürokratik mekanizmaya dönüşen bir kurumun ("Saatleri Ayarlama Enstitüsü") kuruluş ve yükseliş hikâyesidir. Halit Ayarcı’nın pragmatik ve vizyoner (fakat içi boş) liderliği ile Hayri İrdal’ın geleneksel ve teslimiyetçi karakteri arasındaki çatışma, Türkiye’nin modernleşme sancılarını simgeler. Tanpınar; saati, zamanı ve insanı merkezine alarak; tepeden inme reformların, anlamını yitirmiş ritüellerin ve "mış gibi yapan" bir bürokrasinin toplumu nasıl bir trajikomediye sürüklediğini anlatır.
                         </p>
                         <p style="text-align: justify;">
                         Eser, kurumların insan ruhunu nasıl dönüştürdüğünü ve gerçeğin yerine inşa edilen "resmi yalanların" nasıl kurumsallaştığını dâhice bir ironiyle gözler önüne seren sosyolojik bir laboratuvar niteliğindedir.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">8. Kemal Tahir: Devlet Ana</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/devletana_kitap.jpg" alt="Kemal Tahir - Devlet Ana" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Kemal Tahir’in Türk edebiyatının zirve noktalarından biri kabul edilen dev eseri <em>"Devlet Ana"</em>, Osmanlı Devleti’nin kuruluş dönemini bir "aşiret" yapısından "devlet" formuna geçiş sancılarıyla ele alan epik bir romandır. Tahir, bu eserinde Batılı feodalizm ile Doğu’nun "Asya Tipi Üretim Tarzı" (ATÜT) arasındaki yapısal farkları sorunsallaştırarak, Türk devlet geleneğinin insancıl ve koruyucu niteliğini "Kerim Devlet" kavramı üzerinden temellendirir. Roman, sadece bir tarih anlatısı değil; aynı zamanda Batı’nın "şövalye" kültürüne karşı Doğu’nun "alp-eren" ahlakını ve mülkiyet rejimindeki farklılıkları savunan siyasi bir manifestodur.
                         </p>
                         <p style="text-align: justify;">
                         Eser, Bizans sınırındaki Söğüt ve çevresinde gelişen olayları; Osman Bey’in stratejik dehasını, Şeyh Edebali’nin bilgeliğini ve halkın devlete bakışını canlı, yerli ve oldukça zengin bir dille aktarır. Kemal Tahir, <em>Devlet Ana</em> ile Türk toplumunun tarihsel genetiğinde yer alan "adalet" ve "nizam" arayışını, Marksist tarih okumasını yerel dinamiklerle harmanlayarak yeniden kurgular. Bu yönüyle kitap, Türkiye’nin kendi modernleşme ve devletleşme modelini anlamak isteyen her okur için vazgeçilmez bir referans kaynağıdır.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">9. Ayn Rand: Atlas Shrugged (Atlas Vazgeçti)</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/atlasvazgeçti_kitap.jpg" alt="Ayn Rand - Atlas Vazgeçti" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Ayn Rand’ın dev eseri <em>"Atlas Vazgeçti"</em> (Atlas Shrugged), bireysel yaratıcılığın, akılcılığın ve serbest piyasa ahlakının ödünsüz bir savunusudur. Roman, dünyanın en üretken zihinlerinin —mucitlerin, sanayicilerin ve sanatçıların— kolektivist bir devlet baskısına ve "kamu yararı" adına yapılan haksız müdahalelere tepki olarak dünyadan elini eteğini çekmesini konu alır. Rand, "Dünyanın motoru durursa ne olur?" sorusunun peşinden giderek, yaratıcı azınlığın greve gitmesiyle çöküşe sürüklenen bir toplumun distopik tablosunu çizer.
                         </p>
                         <p style="text-align: justify;">
                         Eser, sadece bir roman değil, aynı zamanda devletin ekonomiye ve bireysel mülkiyete müdahalesine karşı radikal bir kapitalist manifestodur. Rand; yeteneğin cezalandırıldığı, liyakatin yerini sadakatin aldığı ve bürokrasinin üretim araçlarını felç ettiği bir düzende, bireyin kendi mutluluğunu ve emeğini savunmasının en yüce erdem olduğunu iddia eder. John Galt karakteri üzerinden somutlaşan bu felsefe, modern siyasal düşüncede devlet-birey ilişkisine dair en çok tartışılan ve sarsıcı argümanlardan birini temsil etmektedir.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">10. Ömer Çaha: İçindeki Şakirti Öldürmek</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/sakirtioldürmek_kitap.jpg" alt="Ömer Çaha - İçindeki Şakirti Öldürmek" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Ömer Çaha’nın <em>"İçindeki Şakirti Öldürmek"</em> adlı romanı Türkiye’nin yakın siyasal tarihinde devlet ve toplum yapısına ciddi zararlar veren Fethullahçı Terör Örgütü’nün (FETÖ) zihniyet dünyasını, bireyi nasıl araçsallaştırdığını ve sosyolojik kodlarını analiz eden kritik bir çalışmadır. Çaha bu romanda örgüt yapısı içindeki "şakirt" kimliğinin, bireyin özgür iradesini ve eleştirel düşünme yetisini nasıl yok ederek onu mutlak bir itaat nesnesine dönüştürdüğünü irdeler. Kitap, kolektif bir körleşmenin ve irade teslimiyetinin yarattığı tahribatı merkeze alan bir yapı söküm çalışması niteliğindedir.
                         </p>
                         <p style="text-align: justify;">
                         Eser, FETÖ’nün sivil toplum maskesi altındaki totaliter doğasını deşifre ederken, dini duyguların bir güç ve iktidar mekanizmasına nasıl kurban edildiğini ortaya koyar. Bu çalışma, sadece bir örgütün anatomisini çıkarmakla kalmaz; aynı zamanda Türkiye’deki cemaat görünümlü illegal yapıların siyaset ve bürokrasi üzerindeki yansımalarını anlamak için önemli bir sosyolojik kaynak sunar.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">11. Ömer Çaha: Sayın Vekilim</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/sayinvekilim_kitap.jpg" alt="Ömer Çaha - Sayın Vekilim" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Ömer Çaha’nın <em>"Sayın Vekilim"</em> adlı eseri, hayatını öğrencilerine ve akademik çalışmalara adamış bir siyaset bilimi profesörünün, teoride çok iyi bildiği siyasetin "mutfağına" girme çabasını anlatan çarpıcı bir romandır. Bir akademisyenin milletvekili adaylığı süreciyle başlayan bu yolculuk; kitaplardaki ideal rasyonel siyaset ile sahadaki geleneksel, pragmatik ve kimi zaman acımasız gerçeklik arasındaki derin çatışmayı tüm çıplaklığıyla gözler önüne serer.
                         </p>
                         <p style="text-align: justify;">
                         Çaha, başkahramanının yaşadığı hayal kırıklıkları, etik ikilemler ve yerel siyasetin kendine has informel kuralları üzerinden, Türkiye’deki güç ilişkilerini ve siyasal kültürü içeriden bir bakışla, akıcı ve edebi bir dille sorgular. "Siyasetin ateşi halktır" düsturuyla şekillenen bu roman, bir aydının fildişi kulesinden inip toplumsal gerçekliğin sert zeminine çarpışının hikâyesidir.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">12. Max Weber: Protestan Ahlakı ve Kapitalizmin Ruhu</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/protestanahlak_kitap.jpg" alt="Max Weber - Protestan Ahlakı ve Kapitalizmin Ruhu" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Max Weber’in sosyoloji ve ekonomi-politik alanında çığır açan eseri <em>"Protestan Ahlakı ve Kapitalizmin Ruhu"</em>, modern rasyonel kapitalizmin neden başka bir yerde değil de Batı Avrupa’da doğduğunu sorgulayan bir başyapıttır. Weber, Marx’ın aksine değişimi sadece maddi-ekonomik temellere dayandırmaz; zihniyet dünyasının, yani "fikirlerin" de tarihi şekillendirebileceğini savunur. Kitabın merkezinde, özellikle Kalvinizm öğretisinin birey üzerinde yarattığı psikolojik etkinin, farkında olmadan kapitalist bir çalışma disiplinine nasıl dönüştüğü yer alır.
                         </p>
                         <p style="text-align: justify;">
                         Weber’e göre Protestanlık, özellikle de "dünyevi asketizm" (çilecilik), çalışmayı Tanrı’nın bir inayeti ve kişisel bir "çağrı" (Beruf) olarak kutsar. Bireyin kurtuluşa erip ermediğine dair duyduğu derin kaygı, onu daha çok çalışmaya ama kazandığını lüks tüketime değil, yeniden yatırıma yöneltmeye iter. Bu süreç, zamanla dinsel köklerinden koparak rasyonel, kâr odaklı ve "çelik kafes" olarak adlandırılan modern bürokratik/kapitalist düzeni doğurmuştur. Eser, din sosyolojisi ile ekonomi tarihi arasındaki o görünmez bağı deşifre eden en temel metinlerden biridir.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">13. Buket Uzuner: Su Toprak Hava Ateş</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/toprakhavasu_kitap.jpg" alt="Buket Uzuner - Su Toprak Hava Ateş" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Buket Uzuner’in <em>"Uyumsuz Defne Kaman’ın Maceraları"</em> serisi, Türk mitolojisindeki "Kamanlık" (Şamanizm) geleneğiyle güncel ekolojik krizleri birleştiren bir "yeryüzü manifestosu" niteliğindedir. Dörtleme; polisiye kurguyu eko-eleştirel bir yaklaşımla ele alırken her kitapta bir doğa elementini merkeze alır:
                         </p>
                         <ul style="list-style-type: none; padding-left: 0; margin-top: 0.5rem;">
                            <li style="margin-bottom: 0.5rem;"><strong>Su (İstanbul):</strong> Kadın cinayetleri ve su kaynaklarının kirliliğini işlerken "Umay Nine" üzerinden kadim bilgeliği tanıtır.</li>
                            <li style="margin-bottom: 0.5rem;"><strong>Toprak (Çorum):</strong> Hititlerden bugüne tohumun kutsallığını, tarihî eser kaçakçılığını ve biyolojik çeşitliliğin korunmasını odağına alır.</li>
                            <li style="margin-bottom: 0.5rem;"><strong>Hava (Kayseri):</strong> Hava kirliliği ve nükleer enerji gibi meseleleri "Hava Han" sembolizmi ve insan hakları ekseninde tartışır.</li>
                            <li style="margin-bottom: 0.5rem;"><strong>Ateş (Mardin):</strong> Enerji sorunları ve toplumsal yangınları (savaş, göç) ele alarak; doğa ile insan arasındaki dengenin toplumsal barıştan geçtiğini savunur.</li>
                         </ul>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">14. Erich Scheurmann: Göğü Delen Adam</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/gogudelenadam_kitap.jpg" alt="Erich Scheurmann - Göğü Delen Adam" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Erich Scheurmann tarafından kaleme alınan <em>"Göğü Delen Adam"</em> (Der Papalagi), Batı medeniyetine ve modern yaşam biçimine yönelik en çarpıcı, en ironik eleştirilerden biridir. Samoa yerlisi bir kabile reisinin (Tuiavii), Avrupa seyahati sonrası kendi halkını "beyaz adamın" (Papalagi) tuhaf ve doğadan kopuk yaşamına karşı uyarmak için yaptığı konuşmalardan oluşur.
                         </p>
                         <p style="text-align: justify;">
                         Kitap, "medeni" insanın zamanı parçalara bölüp ona köle olmasını, bedeni giysilerle hapsetmesini, parayı bir put haline getirmesini ve "taş kutularda" (evlerde) yaşayarak gökyüzüyle bağını koparmasını son derece sade ama bir o kadar sarsıcı bir dille eleştirir. Modern insanın eşya tutkusunu ve doğayı mülkleştirme çabasını "ilkel" bir gözün saf mantığıyla deşifre eden eser, okura "İlerleme dediğimiz şey aslında büyük bir yabancılaşma mı?" sorusunu sordurur.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">15. Daniel Quinn: İsmail</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/ismail_kitap.jpg" alt="Daniel Quinn - İsmail" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Daniel Quinn tarafından kaleme alınan <em>"İsmail"</em> (Ishmael), insan merkezli dünya görüşünü kökten sarsan, Sokratik diyalog yöntemini kullanan çarpıcı bir felsefi romandır. Bir gazete ilanının peşine düşen anlatıcı, "öğretmen" olarak karşısında konuşabilen bir gorili bulur. İsmail adındaki bu bilge canlı, insanlık tarihini "Alanlar" (modern medeniyet) ve "Bırakanlar" (doğayla uyumlu yaşayan kabileler) şeklinde ikiye ayırarak büyük bir kültürel eleştiri sunar.
                         </p>
                         <p style="text-align: justify;">
                         Eser; tarım devrimiyle başlayan "dünyanın insana ait olduğu" mitini yıkarak, insanın dünyanın sahibi değil, onun bir parçası olduğunu savunur. Modern insanın ilerleme dediği şeyin aslında ekolojik bir felakete giden "serbest düşüş" olduğunu iddia eden kitap, okuru kendi türünün hikayesini yeniden kurgulamaya davet eder.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">16. Yuval Noah Harari: Homo Sapiens</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/sapiens_kitap.jpg" alt="Yuval Noah Harari - Homo Sapiens" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Yuval Noah Harari’nin dünya çapında ses getiren eseri <em>"Sapiens: Hayvanlardan Tanrılara"</em>, sıradan bir primat türünün nasıl olup da gezegenin mutlak hâkimi haline geldiğini provokatif bir dille sorgulayan bir insanlık tarihidir. Harari’nin temel tezi, insanı diğer türlerden ayıran asıl gücün fiziksel kapasitesi değil, devlet, para, din ve hukuk gibi "kolektif mitler" yaratabilme ve bu hayali kurgular etrafında milyonlarca yabancıyla iş birliği yapabilme yeteneğidir.
                         </p>
                         <p style="text-align: justify;">
                         Tarım Devrimi’ni "tarihin en büyük aldatmacası" olarak niteleyen ve yerleşik hayata geçişi bir ilerleme değil, özgürlüğün kaybı olarak sunan eser; biyolojiden antropolojiye uzanan geniş bir düzlemde modern dünyanın temellerini sarsan bir perspektif sunar.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">17. Kojin Karatani: İzonomi ve Felsefenin Kökenleri</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/izonomi_kitap.jpg" alt="Kojin Karatani - İzonomi ve Felsefenin Kökenleri" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Karatani, izonomi kavramını; yöneten ve yönetilen ayrımının olmadığı, insanların hem özgür hem de eşit olduğu bir "hareket tarzı" olarak tanımlar. Atina demokrasisinin aslında mülkiyet sahibi bir azınlığın tahakkümü olduğunu ve "çoğunluğun diktatörlüğüne" dönüştüğünü iddia ederken; İyonya’daki izonomik yapının, mülkiyet hırsından arınmış, göçebe ruhlu ve sınıfsız bir toplumsal düzen sunduğunu belirtir.
                         </p>
                         <p style="text-align: justify;">
                         Thales’ten Herakleitos’a kadar uzanan İyonya filozoflarının düşüncelerini, bu siyasi ve toplumsal arka planla ilişkilendirerek; felsefenin aslında bir "polis" (şehir) içi iktidar kavgası değil, bir yaşam biçimi arayışı olduğunu gösterir. Yazara göre izonomi, devletin baskıcı aygıtları ve piyasa ekonomisinin eşitsizliği arasında sıkışan modern insan için, kökleri Anadolu’da olan radikal bir çıkış yoludur.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">18. Lee Mcintyre: Hakikat Sonrası</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/hakikatsonrası_kitap.jpg" alt="Lee Mcintyre - Hakikat Sonrası" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Mcintyre, hakikat-sonrası çağın köklerini; bilimsel şüpheciliğin istismar edilmesine, sosyal medya algoritmalarının yarattığı yankı odalarına ve ana akım medyanın gerilemesine dayandırır. Yazar, insanların artık "gerçeğin ne olduğunu" değil, "neyin doğru olmasını istediklerini" referans aldıklarını iddia eder. Bilişsel önyargılarımızın (özellikle doğrulama yanlılığının) bizi manipülasyona ne kadar açık hale getirdiğini örneklerle açıklarken; bu durumun demokrasiyi, bilimi ve toplumsal güveni nasıl temelinden sarstığını gösterir.
                         </p>
                         <p style="text-align: justify;">
                         Kitap, hakikati savunmanın artık sadece entelektüel bir uğraş değil, siyasi ve ahlaki bir zorunluluk olduğunu vurgulayan sert bir uyarı niteliğindedir.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">19. Amin Maalouf: Ölümcül Kimlikler</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/olumculkimlikler_kitap.jpg" alt="Amin Maalouf - Ölümcül Kimlikler" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Amin Maalouf, bu sarsıcı denemesinde kimlik kavramının bireyi özgürleştiren bir aidiyetten ziyade, başkalarını yok etmeye programlı bir silaha dönüşme sürecini inceler. Yazara göre insan; diliyle, diniyle, mesleğiyle ve kökeniyle çok katmanlı bir varlıktır. Ancak ne zaman ki bu katmanlardan biri (örneğin din veya etnik köken) diğerlerinin üzerine çıkarak "tekil bir aidiyet" haline getirilirse, kimlik o noktada "ölümcül"leşmeye başlar.
                         </p>
                         <p style="text-align: justify;">
                         Maalouf, küreselleşen dünyada insanların kendilerini tehdit altında hissettikçe daha dar ve dışlayıcı kimliklere sığındığını savunur. Kitap, "biz" ve "onlar" ayrımının nasıl inşa edildiğini deşifre ederken, bir arada yaşamanın anahtarının kimlikleri yarıştırmak değil, onların akışkanlığını ve çeşitliliğini kabul etmek olduğunu vurgulayan evrensel bir barış çağrısıdır.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">20. Albert Camus: Yabancı</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/yabancı_kitap.jpg" alt="Albert Camus - Yabancı" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Roman, annesinin ölümü karşısında bile beklenen duygusal tepkileri vermeyen, hayatı bir dizi rastlantıdan ibaret gören Meursault’nun hikayesini konu alır. Bir gün sahilde, hiçbir geçerli sebebi yokken "güneşin gözünü alması" gibi absürt bir etkiyle bir Arabı öldüren Meursault, yargılanma sürecinde işlediği cinayetten ziyade, toplumun ahlak kurallarına uymadığı (örneğin annesinin cenazesinde ağlamadığı) için mahkûm edilir.
                         </p>
                         <p style="text-align: justify;">
                         Camus; bireyin dünyaya, topluma ve hatta kendi benliğine duyduğu yabancılaşmayı Meursault’nun duygusuz ve mesafeli anlatımıyla işler. Eser; adaletin bir "hakikat" arayışı değil, toplumsal bir tiyatro olduğunu ve insanın kaçınılmaz ölümü karşısında evrenin derin sessizliğini ("saçma"yı) çarpıcı bir dille gözler önüne serer.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">21. Zygmunt Bauman: Akışkan Modernite</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/akiskanmodernite_kitap.jpg" alt="Zygmunt Bauman - Akışkan Modernite" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Bauman’a göre "akışkan" dönemde hiçbir sosyal form (bağlar, kurumlar, değerler) kendi şeklini uzun süre koruyamaz; her şey bir an önce tüketilmek ve yenisiyle değiştirilmek üzere tasarlanmıştır. Bu yeni dünyada mekânlar işlevsizleşmiş, zaman hızlanmış ve birey "belirsizlik" denizi ortasında tek başına bırakılmıştır. Artık bir yere kök salmak değil, sürekli hareket halinde olmak ve esneklik birer erdem sayılır.
                         </p>
                         <p style="text-align: justify;">
                         Ancak bu akışkanlık, beraberinde büyük bir güvenlik kaybını ve aidiyet krizini getirir. Bauman; iş yaşamından ikili ilişkilere, mülkiyetten toplumsal kimliğe kadar her şeyin "akışkan" bir kıvama geldiği bu çağda, insanın özgürleştiğini sanırken aslında sorumlulukları ve riskleriyle baş başa kalan bir "yalnız avcıya" dönüştüğünü dâhiçe bir üslupla anlatır.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">22. Italo Calvino: Görünmez Kentler</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/gorunmezkentler_kitap.jpg" alt="Italo Calvino - Görünmez Kentler" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Marco Polo, Kubilay Han’a imparatorluğun uzak köşelerindeki elli beş farklı kenti anlatır. Ancak bu kentler bildiğimiz coğrafi mekanlar değil; arzuların, anıların, ölümlerin, gözlerin ve işaretlerin şekillendirdiği zihinsel kurgulardır. İsimleri kadın adlarından oluşan bu kentler aracılığıyla Calvino; kentin sadece taştan ve demirden ibaret olmadığını, aslında insan ilişkilerinin, hafızanın ve dilin bir örüntüsü olduğunu savunur.
                         </p>
                         <p style="text-align: justify;">
                         Kitap boyunca Polo, aslında tek bir kenti, yani kendi şehri Venedik’i anlatmaktadır; çünkü her yeni şehir, eskisinin bir aynasıdır. Eser, okura modern metropollerin karmaşasından kaçıp, kentin ruhunu ve insan ruhuyla kurduğu o görünmez bağı keşfetme imkanı sunar.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">23. William Golding: Sineklerin Tanrısı</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/sineklerintanrisi_kitap.png" alt="William Golding - Sineklerin Tanrısı" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Issız bir adaya düşen bir grup Britanyalı çocuğun, hayatta kalmak ve bir düzen kurmak için verdikleri mücadeleyi konu alır. Başlangıçta demokratik bir yönetim kurmaya çalışan çocuklar (deniz kabuğunun simgelediği ifade özgürlüğü ve meclis), kısa sürede ikiye bölünür. Ralph medeniyeti, rasyonaliteyi ve düzeni temsil ederken; Jack avcılığı, şiddeti ve otoriter hayvani dürtüleri simgeler.
                         </p>
                         <p style="text-align: justify;">
                         Düzenin hızla çözüldüğü adada, korku (hayali canavar) bir yönetim aracına dönüşür ve çocuklar birbirlerini yok etmeye başlar. Golding, adada yaşanan bu mikro savaş üzerinden; devletin olmadığı bir ortamda ("doğa durumu") insanın özündeki şiddet eğiliminin nasıl galip geldiğini ve toplumsal kuralların aslında ne kadar kırılgan olduğunu kanıtlar.
                         </p>
                    </div>
                </div>
            </div>
        </details>

        <details class="modern-details" style="margin-top: 1rem;">
            <summary>
                <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">24. Ray Bradbury: Fahrenheit 451</span>
                <i class='bx bx-chevron-down summary-icon'></i>
            </summary>
            <div class="details-content">
                <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                    <!-- Sol: Kitap Kapağı -->
                    <div style="flex-shrink: 0; width: 150px;">
                        <img src="images/fahrenheit_kitap.jpg" alt="Ray Bradbury - Fahrenheit 451" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                    </div>
                    
                    <!-- Sağ: Açıklama -->
                    <div style="flex-grow: 1;">
                         <p style="text-align: justify; margin-top:0;">
                         Roman; itfaiyecilerin yangın söndürmek yerine, insanların düşünmesini ve sorgulamasını sağlayan "tehlikeli" kitapları yakmakla görevli olduğu karanlık bir geleceği anlatır. Ana karakter Guy Montag, işini sorgulamadan yapan bir itfaiyeciyken, çaldığı bir kitabı okumasıyla sistemin işleyişine karşı bir uyanış yaşar.
                         </p>
                         <p style="text-align: justify;">
                         Bradbury; kitapların neden yasaklandığını açıklarken, bunun sadece baskıcı bir devletin zorbalığı değil, aynı zamanda düşünmekten yorulan ve "basit eğlencelerle" mutlu olmayı seçen halkın bir tercihi (pasif rızası) olduğunu vurgular. Televizyon duvarlarıyla sarılı, derinliksiz ve hafızasız bir toplumda; kitapları korumaya çalışan "kitap insanlar"ın mücadelesi, entelektüel direnişin en güçlü metaforlarından biridir.
                         </p>
                    </div>
                </div>
            </div>
        </details>
        `
    },
    {
        "id": 3,
        "title": "Tavsiye 3. Film ve Dizi Tavsiyeleri",
        "isHtml": true,
        "content": `
            <div style="margin-bottom: 1.5rem; font-style: italic; color: var(--text-color);">
                Burada tavsiye edilen filmler ve diziler tamamen hocanın kişisel beğenisini yansıtmaktadır. Herkes tarafından bilinen film ve diziler yerine az bilinenler gözden kaçmışlar tercih edilmiştir. Ama önerilen her film ya da dizi sıradanlıktan uzak konusu, tarzı ya da sonucuyla çarpıcı örneklerdir. Önerilerin sayısı zaman içinde arttırılacaktır.
            </div>

            <details class="modern-details">
                <summary>
                    <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">1. Capernaum (Kefernahum)</span>
                    <i class='bx bx-chevron-down summary-icon'></i>
                </summary>
                <div class="details-content">
                    <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                        <!-- Sol: Afiş -->
                        <div style="flex-shrink: 0; width: 150px;">
                            <img src="images/capernaum_film.jpg" alt="Capernaum" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                        </div>
                        
                        <!-- Sağ: Açıklama -->
                        <div style="flex-grow: 1;">
                             <p style="text-align: justify; margin-top:0;">
                             Capernaum, Beyrut’un tozlu ve kalabalık sokaklarında, sistemin çoktan vazgeçtiği çocukların çığlığı gibi bir film. Başrolündeki Zain’in hikayesi üzerinden; bir insanın sadece "var olduğu" için verdiği o ağır mücadeleyi, göçün insanı nasıl köksüz ve kimliksiz bıraktığını iliklerinize kadar hissediyorsunuz.
                             </p>
                             <p style="text-align: justify;">
                             Labaki, bizi sadece bir dramla değil, evrakların ve sınırların arasına sıkışmış, hiçbir yere ait olamamanın getirdiği o büyük yıkımla yüzleştiriyor. Göçün sadece bir yer değiştirme değil, bir insanın çocukluğunu, geleceğini ve hatta ismini nasıl elinden aldığını izlerken; Zain’in "beni neden dünyaya getirdiniz?" sorusu, modern dünyanın vicdanına sorulmuş en sert soru olarak hafızanıza kazınıyor.
                             </p>
                             <div style="margin-top: 1rem;">
                                <a href="https://www.imdb.com/title/tt8267604/" target="_blank" style="text-decoration: none; color: #f5c518; font-weight: bold; display: inline-flex; align-items: center; gap: 4px;">
                                    <i class='bx bxl-imdb' style="font-size: 1.2rem;"></i> IMDb
                                </a>
                             </div>
                        </div>
                    </div>
                </div>
            </details>

            <details class="modern-details" style="margin-top: 1rem;">
                <summary>
                    <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">2. The Man From Earth (Dünyalı)</span>
                    <i class='bx bx-chevron-down summary-icon'></i>
                </summary>
                <div class="details-content">
                    <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                        <!-- Sol: Afiş -->
                        <div style="flex-shrink: 0; width: 150px;">
                            <img src="images/themanfromearth_film.jpg" alt="The Man From Earth" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                        </div>
                        
                        <!-- Sağ: Açıklama -->
                        <div style="flex-grow: 1;">
                             <p style="text-align: justify; margin-top:0;">
                             Hayal edin; bir akşam arkadaşlarınızla veda kahvesi içiyorsunuz ve içlerinden biri aniden, "Ben tam 14 bin yıldır yaşıyorum," diyor. The Man from Earth, işte bu akılalmaz iddiayla başlayıp sizi oturduğunuz koltuğa çivileyen, kelimenin tam anlamıyla bir "beyin fırtınası" şöleni. Ne özel efekt var ne de büyük bütçeli sahneler; sadece bir oda, bir avuç insan ve insanlık tarihini, inançları, sanatı yeniden sorgulatan o büyüleyici hikâye.
                             </p>
                             <p style="text-align: justify;">
                             İzlerken kendinizi o odadaki misafirlerden biri gibi hissedecek, anlatılanların gerçek olup olmadığını çözmeye çalışırken zamanın nasıl geçtiğini anlamayacaksınız. "Bir film sadece konuşarak ne kadar sürükleyici olabilir?" diyorsanız, bu deneyimi kaçırmayın; bittiğinde dünyaya bakış açınızın biraz değiştiğini fark edeceksiniz.
                             </p>
                             <div style="margin-top: 1rem;">
                                <a href="https://www.imdb.com/title/tt0756683/" target="_blank" style="text-decoration: none; color: #f5c518; font-weight: bold; display: inline-flex; align-items: center; gap: 4px;">
                                    <i class='bx bxl-imdb' style="font-size: 1.2rem;"></i> IMDb
                                </a>
                             </div>
                        </div>
                    </div>
                </div>
            </details>

            <details class="modern-details" style="margin-top: 1rem;">
                <summary>
                    <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">3. The Usual Suspects (Olağan Şüpheliler)</span>
                    <i class='bx bx-chevron-down summary-icon'></i>
                </summary>
                <div class="details-content">
                    <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                        <!-- Sol: Afiş -->
                        <div style="flex-shrink: 0; width: 150px;">
                            <img src="images/olagansupheliler_film.webp" alt="Olağan Şüpheliler" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                        </div>
                        
                        <!-- Sağ: Açıklama -->
                        <div style="flex-grow: 1;">
                             <p style="text-align: justify; margin-top:0;">
                             Bir limanda patlayan gemi, arkada bırakılan onlarca ceset ve polisin elindeki tek koz: Sağ kurtulan ve olan biteni anlatmaya dünden razı, "topal" bir dolandırıcı. Ama sakın anlatılanlara hemen inanmayın; çünkü bu film, bir yalanın ne kadar kusursuz bir sanat eserine dönüşebileceğinin en büyük kanıtı. "Kayser Söze" isminin gizemi etrafında dönen hikâye, sizi karmaşık bir yapbozun içine öyle bir fırlatıyor ki, her parçayı yerleştirdiğinizi sandığınız an oyun yeniden başlıyor.
                             </p>
                             <p style="text-align: justify;">
                             Sinema tarihinin en efsanevi final sahnelerinden birine sahip olan bu yapım, bittiğinde sizi ekran karşısında dakikalarca donup kalmaya davet ediyor. Şeytanın yaptığı en büyük kurnazlığın, dünyayı kendisinin var olmadığına inandırmak olduğunu bu filmle iliklerinize kadar hissedeceksiniz.
                             </p>
                             <div style="margin-top: 1rem;">
                                <a href="https://www.imdb.com/title/tt0114814/" target="_blank" style="text-decoration: none; color: #f5c518; font-weight: bold; display: inline-flex; align-items: center; gap: 4px;">
                                    <i class='bx bxl-imdb' style="font-size: 1.2rem;"></i> IMDb
                                </a>
                             </div>
                        </div>
                    </div>
                </div>
            </details>

            <details class="modern-details" style="margin-top: 1rem;">
                <summary>
                    <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">4. Rain Man (Yağmur Adam)</span>
                    <i class='bx bx-chevron-down summary-icon'></i>
                </summary>
                <div class="details-content">
                    <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                        <!-- Sol: Afiş -->
                        <div style="flex-shrink: 0; width: 150px;">
                            <img src="images/yagmuradam_film.jpg" alt="Yağmur Adam" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                        </div>
                        
                        <!-- Sağ: Açıklama -->
                        <div style="flex-grow: 1;">
                             <p style="text-align: justify; margin-top:0;">
                             Biri hayatı sadece sayılarla ve kurallarla algılayan bir dahi, diğeri ise dünyayı sadece çıkarlardan ibaret sanan hırslı bir kardeş... Yağmur Adam, babasından kalan mirasın peşine düşen bencil bir adamın, varlığından bile haberdar olmadığı abisiyle çıktığı o meşhur yolculuğun hikâyesi. Ama bu bildiğiniz yol filmlerinden değil; bu, birbirine dokunmanın bile imkânsız olduğu iki farklı dünyanın çarpışıp sonunda birbirine karışması.
                             </p>
                             <p style="text-align: justify;">
                             Dustin Hoffman’ın o büyüleyici performansı ve Tom Cruise’un karakterindeki o insani değişim, izlerken bazen yüzünüzde kocaman bir tebessüm bırakacak, bazen de boğazınızı düğümleyecek.
                             </p>
                             <div style="margin-top: 1rem;">
                                <a href="https://www.imdb.com/title/tt0095953/" target="_blank" style="text-decoration: none; color: #f5c518; font-weight: bold; display: inline-flex; align-items: center; gap: 4px;">
                                    <i class='bx bxl-imdb' style="font-size: 1.2rem;"></i> IMDb
                                </a>
                             </div>
                        </div>
                    </div>
                </div>
            </details>

            <details class="modern-details" style="margin-top: 1rem;">
                <summary>
                    <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">5. House of Cards (Dizi)</span>
                    <i class='bx bx-chevron-down summary-icon'></i>
                </summary>
                <div class="details-content">
                    <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                        <!-- Sol: Afiş -->
                        <div style="flex-shrink: 0; width: 150px;">
                            <img src="images/houseofcards_dizi.jpg" alt="House of Cards" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                        </div>
                        
                        <!-- Sağ: Açıklama -->
                        <div style="flex-grow: 1;">
                             <p style="text-align: justify; margin-top:0;">
                             "Politika denen şey aslında nedir?" diye merak ediyorsanız, bu dizi size o çok konuşulan "kapalı kapılar ardındaki" dünyayı bir balyoz gibi indiriyor. Demokrasinin aslında ne kadar karanlık koridorlardan geçtiğini görmek istiyorsanız, Frank Underwood ile tanışma vaktiniz gelmiş demektir. House of Cards, bir adamın iktidar basamaklarını tırmanırken önüne çıkan her şeyi ve herkesi nasıl soğukkanlılıkla ezebileceğinin hikâyesi.
                             </p>
                             <p style="text-align: justify;">
                             Ama asıl büyüleyici olan, Frank’in zaman zaman kameraya, yani doğrudan sizin gözlerinizin içine bakıp o kirli oyunun parçası haline getirmesi. Güç tutkusunun bir insanı ne kadar acımasız kılabileceğini, sadakatin nasıl bir pazarlık payına dönüştüğünü izlerken hem dehşete düşecek hem de kendinizi bu manipülasyon ustasının zekasına hayran kalmaktan alıkoyamayacaksınız. "İktidar, gayrimenkul gibidir; önemli olan konumdur," diyen bir dünyada, her bölüm bittiğinde kendinizi derin bir nefes alma ihtiyacı içinde bulacaksınız.
                             </p>
                             <div style="margin-top: 1rem;">
                                <a href="https://www.imdb.com/title/tt1856010/" target="_blank" style="text-decoration: none; color: #f5c518; font-weight: bold; display: inline-flex; align-items: center; gap: 4px;">
                                    <i class='bx bxl-imdb' style="font-size: 1.2rem;"></i> IMDb
                                </a>
                             </div>
                        </div>
                    </div>
                </div>
            </details>

            <details class="modern-details" style="margin-top: 1rem;">
                <summary>
                    <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">6. Mother! (Anne)</span>
                    <i class='bx bx-chevron-down summary-icon'></i>
                </summary>
                <div class="details-content">
                    <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                        <!-- Sol: Afiş -->
                        <div style="flex-shrink: 0; width: 150px;">
                            <img src="images/mother_film.png" alt="Mother!" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                        </div>
                        
                        <!-- Sağ: Açıklama -->
                        <div style="flex-grow: 1;">
                             <p style="text-align: justify; margin-top:0;">
                             Peşinen uyarayım sizi. Bu film "mısırımı alayım da rahat rahat izleyeyim" diyebileceğiniz bir film değil, sizi ruhsal bir türbülansa sokacak bir deneyim var karşımızda. Darren Aronofsky, Mother! ile sinir uçlarınızla oynamaya geliyor. Kendi kabuğuna çekilmiş, huzur dolu bir ev hayal edin; sonra bu eve davetsiz misafirlerin birer birer doluştuğunu ve o çok değer verdiğiniz sükuneti bir kaosa çevirdiğini... Mother!, başladığı andan itibaren tırnaklarınızı koltuğa geçirtecek kadar gerilimli, bir o kadar da sürreal bir yolculuk.
                             </p>
                             <p style="text-align: justify;">
                             Jennifer Lawrence’ın adeta eviyle bütünleşen o tedirgin haliyle, Javier Bardem’in yaratma sancısı çeken gizemli duruşu arasında sıkışıp kalıyorsunuz. Bittiğinde "az önce ne izledim ben?" dedirten,  saatlerce üzerine kafa yormak isteyeceğiniz, ezber bozan bir yapım arıyorsanız; kendinizi bu çılgın evin içine bırakın. Ama uyarayım, kapı çalındığında artık hiçbir şey eskisi gibi olmayacak.
                             </p>
                             <div style="margin-top: 1rem;">
                                <a href="https://www.imdb.com/title/tt5109784/" target="_blank" style="text-decoration: none; color: #f5c518; font-weight: bold; display: inline-flex; align-items: center; gap: 4px;">
                                    <i class='bx bxl-imdb' style="font-size: 1.2rem;"></i> IMDb
                                </a>
                             </div>
                        </div>
                    </div>
                </div>
            </details>

            <details class="modern-details" style="margin-top: 1rem;">
                <summary>
                    <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">7. Karthik Calling Karthik</span>
                    <i class='bx bx-chevron-down summary-icon'></i>
                </summary>
                <div class="details-content">
                    <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                        <!-- Sol: Afiş -->
                        <div style="flex-shrink: 0; width: 150px;">
                            <img src="images/Karthik_film.jpg" alt="Karthik Calling Karthik" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                        </div>
                        
                        <!-- Sağ: Açıklama -->
                        <div style="flex-grow: 1;">
                             <p style="text-align: justify; margin-top:0;">
                             Karthik Calling Karthik, klasik Bollywood filmlerinden çok farklı, psikolojik derinliği olan tam bir "merak uyandırıcı" hikâye. Kendi gölgesinden bile çekinen, hayatta pek de görünür olmayan sıradan bir adamın, bir sabah gelen gizemli bir telefonla tüm dünyasının değiştiğini düşünün. Telefonun ucundaki ses ise kendisine tıpatıp benzeyen bir başkası! Karthik Calling Karthik, bir adamın özgüven kazanma yolculuğu gibi başlayıp, adım adım sizi gerilimin ve belirsizliğin içine çeken müthiş bir kurgu.
                             </p>
                             <p style="text-align: justify;">
                             Film ilerledikçe, karakterin başarısının arkasındaki bu gizemli yardımcının aslında bir lütuf mu yoksa bir kabus mu olduğunu çözmeye çalışırken buluyorsunuz kendinizi. Her sahnesi zekice işlenmiş bir metafor barındıran bu yapım, "insan aslında en çok kimden kaçamaz?" sorusuna sarsıcı bir cevap arıyor. Eğer son ana kadar sizi ters köşe yapacak, zihin yoran bir gizem arıyorsanız, Karthik’in telefonuna mutlaka cevap verin derim.
                             </p>
                             <div style="margin-top: 1rem;">
                                <a href="https://www.imdb.com/title/tt1373148/" target="_blank" style="text-decoration: none; color: #f5c518; font-weight: bold; display: inline-flex; align-items: center; gap: 4px;">
                                    <i class='bx bxl-imdb' style="font-size: 1.2rem;"></i> IMDb
                                </a>
                             </div>
                        </div>
                    </div>
                </div>
            </details>

            <details class="modern-details" style="margin-top: 1rem;">
                <summary>
                    <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">8. The Terminal (Terminal)</span>
                    <i class='bx bx-chevron-down summary-icon'></i>
                </summary>
                <div class="details-content">
                    <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                        <!-- Sol: Afiş -->
                        <div style="flex-shrink: 0; width: 150px;">
                            <img src="images/terminal_film.jpg" alt="The Terminal" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                        </div>
                        
                        <!-- Sağ: Açıklama -->
                        <div style="flex-grow: 1;">
                             <p style="text-align: justify; margin-top:0;">
                             Bir gün bir havaalanına iniyorsunuz ve tam o sırada ülkenizde darbe olduğu için pasaportunuzun geçersiz kaldığını öğreniyorsunuz. Ne geri dönebiliyorsunuz ne de havaalanından dışarı adım atabiliyorsunuz; artık siz hiçbir yere ait olmayan, "transit" bir insansınız. The Terminal, işte bu trajikomik durumun içinden devasa bir yaşam dersi çıkarıyor. Tom Hanks’in canlandırdığı Viktor Navorski karakterinin, o soğuk ve bürokratik havaalanı terminalini nasıl bir "yuvaya" dönüştürdüğünü izlerken, sabrın ve insan kalabilmenin ne demek olduğunu yeniden hatırlayacaksınız.
                             </p>
                             <p style="text-align: justify;">
                             Filmdeki terminal binası, aslında modern dünyanın ve sınırların insan ruhunu nasıl sıkıştırdığına dair kocaman bir metafor gibi karşımızda duruyor. Beklemenin sadece bir zaman kaybı değil, bazen bir hayat biçimi olduğunu anlatan bu sıcacık hikâyeyi izlerken, Viktor’un o naif inadına hayran kalacaksınız.
                             </p>
                             <div style="margin-top: 1rem;">
                                <a href="https://www.imdb.com/title/tt0362227/" target="_blank" style="text-decoration: none; color: #f5c518; font-weight: bold; display: inline-flex; align-items: center; gap: 4px;">
                                    <i class='bx bxl-imdb' style="font-size: 1.2rem;"></i> IMDb
                                </a>
                             </div>
                        </div>
                    </div>
                </div>
            </details>

            <details class="modern-details" style="margin-top: 1rem;">
                <summary>
                    <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">9. Barfi!</span>
                    <i class='bx bx-chevron-down summary-icon'></i>
                </summary>
                <div class="details-content">
                    <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                        <!-- Sol: Afiş -->
                        <div style="flex-shrink: 0; width: 150px;">
                            <img src="images/barfi_film.jpg" alt="Barfi!" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                        </div>
                        
                        <!-- Sağ: Açıklama -->
                        <div style="flex-grow: 1;">
                             <p style="text-align: justify; margin-top:0;">
                             Dünyayı duyamıyor ya da konuşamıyor olabilirsiniz, ama bu durum hayatın tadını çıkarmanıza ve sırılsıklam aşık olmanıza engel mi? Kesinlikle hayır! Barfi!, her anı bir tablodan fırlamış gibi duran renkleri, büyüleyici müzikleri ve insanı hayata bağlayan neşesiyle tam bir görsel şölen. Ranbir Kapoor’un Charlie Chaplin naifliğindeki performansı, sizi o bildiğiniz klişe aşk hikâyelerinden alıp çok daha derin ve saf bir yere götürüyor.
                             </p>
                             <p style="text-align: justify;">
                             Film, sevginin sadece sözcüklerden ibaret olmadığını, bazen bir bakışın bazen de küçük bir sakarlığın dünyadaki tüm cümlelerden daha anlamlı olabileceğini kanıtlayan koca bir metafor. İzlerken hem gözleriniz dolacak hem de kalbinizin ısındığını hissedeceksiniz. Eğer hayata karşı enerjinizin düştüğünü hissediyorsanız, bu film size ihtiyacınız olan o mutluluk aşısını fazlasıyla verecek.
                             </p>
                             <div style="margin-top: 1rem;">
                                <a href="https://www.imdb.com/title/tt2082197/" target="_blank" style="text-decoration: none; color: #f5c518; font-weight: bold; display: inline-flex; align-items: center; gap: 4px;">
                                    <i class='bx bxl-imdb' style="font-size: 1.2rem;"></i> IMDb
                                </a>
                             </div>
                        </div>
                    </div>
                </div>
            </details>

            <details class="modern-details" style="margin-top: 1rem;">
                <summary>
                    <span class="summary-text" style="font-weight:bold; color:var(--primary-color);">10. PK</span>
                    <i class='bx bx-chevron-down summary-icon'></i>
                </summary>
                <div class="details-content">
                    <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                        <!-- Sol: Afiş -->
                        <div style="flex-shrink: 0; width: 150px;">
                            <img src="images/pk_film.jpg" alt="PK" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: block;">
                        </div>
                        
                        <!-- Sağ: Açıklama -->
                        <div style="flex-grow: 1;">
                             <p style="text-align: justify; margin-top:0;">
                             Dünyaya çok uzak bir gezegenden gelen bir yabancının, kaybettiği bir eşyayı bulmak için bizim karmaşık ritüellerimizle dolu dünyamıza ayak uydurmaya çalıştığını hayal edin. PK, dışarıdan bakan bir çift gözün, alışageldiğimiz toplumsal normlara ve farklı inanç pratiklerine sorduğu o naif ama sarsıcı soruların hikâyesi. Aamir Khan’ın çocuksu bir merakla canlandırdığı karakterin yaşadığı komik maceralar, aslında bizlerin "normal" kabul ettiği birçok davranışın ne kadar tuhaf olabileceğine dair devasa bir metafor.
                             </p>
                             <p style="text-align: justify;">
                             İzlerken bir yandan kahkahalara boğulurken bir yandan da kendinizi "Sahi, neden böyle yapıyoruz?" diye düşünürken bulacaksınız. İnsani değerleri ve ön yargıları en saf haliyle ele alan bu film, bittiğinde dünyaya çok daha geniş bir pencereden bakmanızı sağlayacak.
                             </p>
                             <div style="margin-top: 1rem;">
                                <a href="https://www.imdb.com/title/tt2338151/" target="_blank" style="text-decoration: none; color: #f5c518; font-weight: bold; display: inline-flex; align-items: center; gap: 4px;">
                                    <i class='bx bxl-imdb' style="font-size: 1.2rem;"></i> IMDb
                                </a>
                             </div>
                        </div>
                    </div>
                </div>
            </details>
        `
    }
];
