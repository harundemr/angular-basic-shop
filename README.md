# Merhaba!

Bu benim angular öğrenme serüvenimde geliştirmiş olduğum ilk uygulamadır. Amacım angular frameworkünü temel anlamda öğrenmek ve uygulamaktır.

* * *

### Kullandığım Bileşen ve Kütüphaneler

*   Angular CLI 11.0.7
*   TypeScript 4.0.2
*   Bootstrap
*   BootsWatch / Litera
*   Font Awesome
*   Alertfy Js
*   Json Server

* * *

### Uygulamanın Özellikleri

*   Ürünleri Listeleme
*   Ürün Ekleme (Authorize Kontrollü) - Klasik Form Kullanıldı
*   Kategori Listeleme
*   Kategori Ekleme (Authorize Kontrollü) - Reactive Form Kullanıldı
*   Login ve LogOut İşlemleri
*   Kategorilere Göre Ürün Filtreleme
*   Ürün İsmi Aramasına Göre Ürün Filtreleme
*   Tüm Operasyonlarda Alertfy İle Alert Gösterimi
*   Sepete Ekleme (Sadece Alertfy Uyarısı Gösterilir)

* * *

#### Açıklamalar

*   Öncelikle bu proje angular ile geliştirdiğim ilk proje olması sebebiyle bazı noktaları öğrenmek için birtakım önemli detaylar es geçilmiştir.
*   Proje angular'ın component yapısına uygun şekilde geliştirilmiştir. Oluşturduğum componentler category, product,login,product-add,category-add,nav componentleridir.
*   Ayrıca backend ile iletişim ve bazı operasyonlar için servisler oluşturulmuştur. Oluşturduğum serviceler CategoryService, ProductService, AccountService, AlertfyService serviceleridir.
*   Login işlem kontrolleri için CanActivated dan türettiğim LoginGuard classı oluşturulmuştur. app-routing.module.ts dosyası üzerinden de login kontrolü yapılacak route'lara canActivate olarak eklenerek ilgili linklere erişimde kontolün gerçekleşmesi sağlanmıştır.
*   AccountService içerisinde oturum bilgilisi LocaleStorage ye eklenmiş ve logOut sırasında silinerek oturum sonlandırılmıştır. Fakat LocaleStorage kullanımından kaynaklı uygulama servisi yeniden başlatıldığında oturum bilgileri silinmektedir.
*   Proje genelinde kullanılan iki adet form vardır. Öğrenmek amacıyla product ekleme formu klasik form yöntemiyle, category ekleme formu reactive form yöntemiyle yapılmıştır.
*   Projede kullanılan her iki form dada validation işlemleri yapılmıştır ve reactive form kullanımında comoponentin ts dosyasından birçok işlemin gerçekleştirilebilmesi daha rahat olduğundan sonraki projelerde reactive form kullanma kararı alınmıştır.

* * *

### Uygulamayı Ayağa Kaldırmak için;

Öncelikle node js, angular cli ve json-server bilgisayarınız da yüklü olduğundan emin olun.

1.  Projeyi github'dan indirdiniz ve vs code ile açtınız.
2.  Terminal'den "npm install" komutu çalıştırıp node paketlerinin yüklenmesini sağlıyoruz.
3.  Terminal'den proje ana dizinine yani db.json dosyasının olduğu dizinde olduğumuzdan emin oluyoruz ve "json-server -w db.json" komutunu çalıştırarak back-end servisimizi aktif ediyoruz.
4.  Mevcut terminal penceresini kapatmadan yeni bir terminal penceresi açıyoruz ve ng serve --open komutunu çalışıtıyoruz.
5.  Proje tarayıcıda açılacaktır.

* * *

Daha fazla bilgi için bana linked in üzerinden ulaşabilirsiniz. [Tıklayın.](https://www.linkedin.com/in/harundemirp/)
