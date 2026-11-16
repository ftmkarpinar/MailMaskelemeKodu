# 🛡️ Mail Maskeleme Pro

> E-posta adreslerinizi paylaşırken gizliliğinizi koruyun. Tamamen tarayıcıda çalışan, %100 mobil uyumlu ve açık kaynaklı e-posta maskeleme aracı.

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License">
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white" alt="Bootstrap 5.3">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black" alt="Vanilla JavaScript">
  <img src="https://img.shields.io/badge/Mobile-100%25-success" alt="Mobile Friendly">
  <img src="https://img.shields.io/badge/Privacy-Client--Side-blueviolet" alt="Client-Side Privacy">
</p>

---

## 📑 İçindekiler

- [📖 Proje Hakkında](#proje-hakkinda)
- [✨ Özellikler](#ozellikler)
- [🚀 Canlı Demo ve Kurulum](#canli-demo-ve-kurulum)
- [🧭 Nasıl Kullanılır?](#nasil-kullanilir)
  - [Tek E-posta Maskeleme](#tek-e-posta-maskeleme)
  - [Toplu E-posta Maskeleme](#toplu-e-posta-maskeleme)
  - [QR Kod ile Paylaşım](#qr-kod-ile-paylasim)
- [🛠️ Teknoloji Yığını](#teknoloji-yigini)
- [📁 Proje Yapısı](#proje-yapisi)
- [🔐 Gizlilik ve Veri Politikası](#gizlilik-ve-veri-politikasi)
- [🤝 Katkıda Bulunma](#katkida-bulunma)
- [👥 Geliştirenler](#gelistirenler)
- [📜 Sürüm Geçmişi](#surum-gecmisi)
- [📄 Lisans](#lisans)
- [🙏 Teşekkürler](#tesekkurler)

---

<a id="proje-hakkinda"></a>
## 📖 Proje Hakkında

**Mail Maskeleme Pro**, e-posta adreslerinizi internet ortamında paylaşmanız gerektiğinde adresin tamamını göstermek yerine belirli karakterlerini koruyarak geri kalan kısmı yıldız (`*`) karakterleriyle gizleyen ücretsiz bir web uygulamasıdır.

Bir web sitesinde, forumda, yorum alanında veya ekran görüntüsünde e-posta adresinizi paylaşırken kişisel bilgilerinizin tamamını açıkça göstermek zorunda kalmazsınız.

**Örnek maskeleme:**

| Orijinal E-posta | Maskelenmiş E-posta |
|---|---|
| `fatmakarpinar46@gmail.com` | `f************6@gmail.com` |
| `arslanengin3175@gmail.com` | `a*************5@gmail.com` |

Maskeleme işlemi, e-posta adresinin belirli bölümlerini gizleyerek paylaşım sırasında görünürlüğünü azaltır. Böylece adresin tanınabilirliği korunurken doğrudan kopyalanması zorlaştırılır.

> **Gizlilik önceliği:** Uygulama tüm maskeleme işlemlerini kullanıcının tarayıcısında gerçekleştirir. E-posta adresleri herhangi bir uygulama sunucusuna gönderilmez.

---

<a id="ozellikler"></a>
## ✨ Özellikler

### 🎯 E-posta Maskeleme

- **5 farklı maskeleme stili:**
  - İlk + Son karakteri göster.
  - İlk 2 + Son 2 karakteri göster.
  - Yalnızca domain bölümünü göster.
  - Domain bölümünü gizle.
  - E-posta adresinin tamamını gizle.
- Tek bir e-posta adresini maskeleme.
- Yüzlerce e-posta adresini toplu olarak işleme.
- Virgül, noktalı virgül ve satır sonu ile ayrılmış girişleri destekleme.
- `@` kontrolü, boş giriş ve kısa adres doğrulaması.
- Anlaşılır hata mesajları ve kullanıcı yönlendirmeleri.

### 📱 Arayüz ve Kullanıcı Deneyimi

- **3 adımlı sihirbaz:** Mod → Giriş → Sonuç.
- Bootstrap 5.3 tabanlı responsive arayüz.
- Mobil, tablet ve masaüstü ekranlarla uyumlu tasarım.
- Mobil cihazlar için offcanvas menü.
- Kolay kullanım sağlayan dokunmatik kontroller.
- Karanlık ve aydınlık tema desteği.
- Tema tercihinin `localStorage` üzerinde saklanması.
- Her adımda geri dönüş imkânı.
- Sonuç ekranında yeniden maskeleme seçenekleri.
- Toast bildirimleri ve animasyonlu geçişler.

### 📲 QR Kod İşlemleri

- Maskelenmiş veya maskelenmemiş e-posta adresi için QR kod oluşturma.
- Maskesiz ↔ Maskeli görünüm seçeneği.
- Tekli ve toplu QR kod desteği.
- QR kodları PNG formatında indirme.
- Tüm QR kodlarını toplu olarak indirme.

### 💾 Geçmiş ve Veri Yönetimi

- `localStorage` tabanlı işlem geçmişi.
- Son 50 kaydı saklama.
- CSV formatında dışa aktarma.
- Excel uyumlu, UTF-8 BOM destekli CSV çıktısı.
- JSON formatında dışa aktarma.
- Kullanıcı onayıyla geçmişi temizleme.
- Verilerin nerede saklandığını ve nasıl silinebileceğini açıklayan bilgilendirme alanı.

### 🔒 Güvenlik ve Gizlilik

- İstemci tarafında çalışan uygulama mimarisi.
- E-posta verilerini uygulama sunucusuna göndermeme.
- Harici API gerektirmeyen maskeleme mantığı.
- HTML çıktılarında XSS riskini azaltmak için `escapeHtml` kullanımı.
- Harici bağlantılarda `rel="noopener noreferrer"` kullanımı.
- Kullanıcı verilerinin tarayıcı depolaması üzerinden yönetilmesi.

### 👨‍💻 Geliştirenler Menüsü

- Proje sahibi ve katkıda bulunan bilgileri.
- GitHub profili bağlantıları.
- E-posta iletişim bağlantıları.
- YouTube kanal bağlantısı.
- Harici bağlantıların yeni sekmede açılması.

---

<a id="canli-demo-ve-kurulum"></a>
## 🚀 Canlı Demo ve Kurulum

### Projeyi Yerel Ortamda Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

**1. Depoyu klonlayın:**

```bash
git clone https://github.com/ftmkarpinar/mail-maskeleme-pro.git
```

**2. Proje dizinine geçin:**

```bash
cd mail-maskeleme-pro
```

**3. Uygulamayı başlatın:**

Proje klasöründeki `index.html` dosyasını herhangi bir güncel web tarayıcısında açın.

### Sistem Gereksinimleri

- Güncel bir web tarayıcısı (Chrome, Edge, Firefox vb.).
- İnternet bağlantısı (CDN üzerinden yüklenen kütüphaneler için).
- HTML, CSS ve JavaScript desteği.

> **Bilgilendirme:** QR kod üretimi, Bootstrap ve ikonlar CDN üzerinden yüklenir. Bu nedenle ilgili kaynakların yüklenebilmesi için internet bağlantısı gerekir. Uygulamanın temel maskeleme işlemleri harici sunucuya ihtiyaç duymaz.

---

<a id="nasil-kullanilir"></a>
## 🧭 Nasıl Kullanılır?

<a id="tek-e-posta-maskeleme"></a>
### 1. Tek E-posta Maskeleme

1. Uygulamayı açın.
2. **Tek E-posta** kartını seçin.
3. Maskelemek istediğiniz e-posta adresini girin.
4. Kullanmak istediğiniz maskeleme stilini belirleyin.
5. **Maskele** butonuna tıklayın.
6. Oluşturulan sonucu kopyalayın veya QR kod olarak indirin.

<a id="toplu-e-posta-maskeleme"></a>
### 2. Toplu E-posta Maskeleme

1. Uygulamada **Toplu** seçeneğini açın.
2. E-posta adreslerini metin alanına yapıştırın.
3. Adresleri satır satır, virgülle veya noktalı virgülle ayırın.
4. **Hepsini Maskele** butonuna tıklayın.
5. Tüm maskelenmiş sonuçları görüntüleyin.
6. İhtiyaç duyduğunuz sonuçları kopyalayın veya QR kodlarını indirin.

<a id="qr-kod-ile-paylasim"></a>
### 3. QR Kod ile Paylaşım

1. Sağ üst köşedeki menüyü açın.
2. QR bölümüne gidin.
3. Maskesiz ↔ Maskeli kaydırıcısını kullanarak istediğiniz görünümü seçin.
4. Oluşturulan QR kodunu görüntüleyin.
5. QR kodlarını tek tek veya **Tümünü İndir** seçeneğiyle PNG formatında kaydedin.

---

<a id="teknoloji-yigini"></a>
## 🛠️ Teknoloji Yığını

| Katman | Kullanılan Teknolojiler |
|---|---|
| HTML | HTML5, semantik HTML, Open Graph, SVG Favicon |
| CSS | Bootstrap 5.3, özel CSS, CSS değişkenleri, animasyonlar |
| JavaScript | Vanilla JavaScript, ES6+ |
| QR Kod | qrcodejs |
| Veri Saklama | localStorage |
| Dışa Aktarma | CSV, JSON |
| Arayüz | Responsive tasarım, Offcanvas, Toast |
| Bağımlılıklar | CDN üzerinden yüklenen kütüphaneler |

**Teknik yaklaşım:** Uygulamanın temel işlevleri Vanilla JavaScript ile gerçekleştirilmiştir. Maskeleme işlemi için bir backend veya veritabanı gerektirmez.

---

<a id="proje-yapisi"></a>
## 📁 Proje Yapısı

```text
mail-maskeleme-pro/
│
├── arayuzler       # Projenin arayüz görsellerinin bulunduğu klasör
├── index.html      # Uygulamanın ana sayfası ve arayüz yapısı
├── style.css       # Özel stiller, temalar ve animasyonlar
├── app.js          # Maskeleme, QR kod, geçmiş ve uygulama mantığı
└── README.md       # Proje dokümantasyonu
```

---

<a id="gizlilik-ve-veri-politikasi"></a>
## 🔐 Gizlilik ve Veri Politikası

Mail Maskeleme Pro, gizlilik odaklı bir uygulama olarak tasarlanmıştır.

Uygulamanın veri yönetimi yaklaşımı:

- ❌ **Uygulama sunucusu yok:** E-posta adresleri uygulamanın kendi sunucusuna gönderilmez.
- ❌ **Maskeleme API'si yok:** Maskeleme işlemi harici bir API üzerinden gerçekleştirilmez.
- ❌ **Takip sistemi yok:** Proje kapsamında analytics, takip pikseli veya reklam izleme sistemi kullanılmaz.
- ✅ **Yerel veri saklama:** İşlem geçmişi ve tema tercihi tarayıcının `localStorage` alanında tutulur.
- ✅ **Veri kontrolü kullanıcıda:** Geçmiş, uygulamadaki temizleme seçeneği veya tarayıcı ayarları üzerinden silinebilir.

### Veriler Nerede Saklanır?

Uygulama tarafından `localStorage` alanına kaydedilen veriler, ilgili tarayıcı ve site ortamında saklanır. Bu verilere başka bir cihazdan otomatik olarak erişilemez.

### Veriler Nasıl Silinir?

1. Uygulamanın menüsünden **Geçmişi Temizle** seçeneğini kullanabilirsiniz.
2. Alternatif olarak tarayıcınızın site verileri ayarlarından ilgili siteye ait yerel verileri temizleyebilirsiniz.

> **Güvenlik notu:** E-posta maskeleme, kişisel verilerin görünürlüğünü azaltmaya yardımcı olur; ancak anonimlik veya mutlak güvenlik garantisi sağlamaz. QR kodun maskesiz görünümde oluşturulması hâlinde orijinal e-posta adresi QR kod içeriğinde bulunabilir. Paylaşmadan önce QR kodun hangi veriyi içerdiğini kontrol edin.

---

<a id="katkida-bulunma"></a>
## 🤝 Katkıda Bulunma

Mail Maskeleme Pro'nun geliştirilmesine katkıda bulunmak isteyen geliştiricilerin katkıları memnuniyetle karşılanır.

Katkıda bulunmak için aşağıdaki adımları izleyebilirsiniz:

**1.** Depoyu fork'layın.

**2.** Yeni bir geliştirme dalı oluşturun:

```bash
git checkout -b ozellik/yeni-ozellik
```

**3.** Değişikliklerinizi commit edin:

```bash
git commit -m "feat: yeni özellik eklendi"
```

**4.** Dalınızı GitHub'a gönderin:

```bash
git push origin ozellik/yeni-ozellik
```

**5.** GitHub üzerinden Pull Request oluşturun.

### Commit Mesajı Kuralları

| Önek | Açıklama |
|---|---|
| `feat:` | Yeni özellik ekleme |
| `fix:` | Hata düzeltme |
| `docs:` | Dokümantasyon değişikliği |
| `style:` | Kodun çalışma mantığını değiştirmeyen biçimlendirme |
| `refactor:` | Kod iyileştirme ve yeniden düzenleme |

Katkı göndermeden önce mevcut kod yapısını incelemeniz ve değişikliklerin uygulamanın mevcut işlevlerini bozmadığından emin olmanız önerilir.

---

<a id="gelistirenler"></a>
## 👥 Geliştirenler

### 👑 Proje Sahibi – Fatma KARPINAR

**GitHub:** [@ftmkarpinar](https://github.com/ftmkarpinar)

**E-posta:** [ftmkarpinar46@gmail.com](mailto:ftmkarpinar46@gmail.com)

Orijinal maskeleme fikrinin ve temel `maskEmail()` fonksiyonunun sahibidir.

### 🛠️ Katkıda Bulunan – Engin ARSLAN

**GitHub:** [@EnginArslan49](https://github.com/EnginArslan49)

**E-posta:** [arslanengin3175@gmail.com](mailto:arslanengin3175@gmail.com)

**YouTube:** [@ramkafe](https://www.youtube.com/@ramkafe)

**Katkı alanları:**

- Kullanıcı arayüzünün modernleştirilmesi.
- 3 adımlı sihirbaz akışının geliştirilmesi.
- 5 farklı maskeleme stilinin uygulanması.
- Tekli ve toplu e-posta işleme altyapısı.
- QR kod entegrasyonu ve PNG indirme özellikleri.
- `localStorage` tabanlı geçmiş yönetimi.
- CSV ve JSON dışa aktarma özellikleri.
- Geliştirenler menüsünün oluşturulması.
- SEO, AEO ve GEO odaklı düzenlemeler.
- Mobil uyumluluk ve kullanıcı deneyimi iyileştirmeleri.

---

<a id="surum-gecmisi"></a>
## 📜 Sürüm Geçmişi

### v2.0.0 – Tam Kapsamlı Sürüm

- ✅ Bootstrap 5.3 tabanlı modern arayüz.
- ✅ 3 adımlı sihirbaz sistemi.
- ✅ 5 farklı e-posta maskeleme stili.
- ✅ Tekli ve toplu e-posta işleme.
- ✅ QR kod oluşturma ve PNG indirme.
- ✅ Maskesiz/Maskeli QR kod seçeneği.
- ✅ `localStorage` tabanlı işlem geçmişi.
- ✅ CSV ve JSON dışa aktarma.
- ✅ Karanlık ve aydınlık tema desteği.
- ✅ Geliştirenler menüsü.
- ✅ SEO, AEO ve GEO odaklı düzenlemeler.
- ✅ Mobil uyumlu responsive tasarım.

### v1.0.0 – Başlangıç Sürümü

**Geliştirici:** Fatma Karpınar

- ✅ İlk e-posta maskeleme işlevi.
- ✅ İlk + Son karakter maskeleme stili.
- ✅ Temel `index.html` ve `app.js` yapısı.
- ✅ Sabit e-posta adresiyle demo uygulaması.

---

<a id="lisans"></a>
## 📄 Lisans

Bu proje [MIT Lisansı](https://opensource.org/licenses/MIT) altında yayımlanmıştır.

MIT Lisansı kapsamında projeyi kullanabilir, inceleyebilir, değiştirebilir ve dağıtabilirsiniz. Kullanım ve dağıtım sırasında lisans koşullarına uyulması gerekir.

---

<a id="tesekkurler"></a>
## 🙏 Teşekkürler

Projenin geliştirilmesinde kullanılan açık kaynak teknolojilere ve katkı sağlayan topluluklara teşekkür ederiz.

- [Bootstrap](https://getbootstrap.com/) – Responsive arayüz altyapısı.
- [Bootstrap Icons](https://icons.getbootstrap.com/) – İkon kütüphanesi.
- [qrcodejs](https://github.com/davidshimjs/qrcodejs) – QR kod oluşturma kütüphanesi.
- [MDN Web Docs](https://developer.mozilla.org/) – HTML, CSS ve JavaScript dokümantasyonu.
- Tüm açık kaynak yazılım topluluğu.

---

<p align="center">
  <strong>Mail Maskeleme Pro</strong>
  <br>
  Gizliliğinizi koruyarak paylaşın.
  <br><br>
  <sub>Fatma Karpınar tarafından başlatılmış, Engin Arslan katkılarıyla geliştirilmiştir.</sub>
</p>