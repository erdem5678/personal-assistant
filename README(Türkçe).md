# Kişisel Asistanım – React & Tailwind Projesi

**Kişisel Asistanım**, günlük görevlerinizi, notlarınızı ve hatırlatıcılarınızı yönetmenizi sağlayan modern bir web uygulamasıdır. React, TailwindCSS ve Lucide React ikon kütüphanesi ile geliştirilmiştir.

---

## Özellikler

* Görev ekleme, tamamlama ve silme
* Not ekleme ve listeleme
* Hatırlatıcı ekleme (tarih ve saat ile)
* Öncelik göstergeleri (Yüksek, Orta, Düşük)
* Modern tasarım ve responsive arayüz

---

## Teknolojiler

* React v18.2.0
* Tailwind CSS v3.4.19
* Lucide React v0.276.0
* PostCSS & Autoprefixer
* React Scripts v5.0.1

---

## Başlangıç – Lokal Kurulum

1. Depoyu klonlayın:

```bash
git clone https://github.com/KULLANICI_ADIN/kisisel-asistan.git
```

2. Proje dizinine girin:

```bash
cd kisisel-asistan
```

3. Gerekli paketleri kurun:

```bash
npm install
```

> Önerilen sürümler:
>
> * react@18.2.0
> * react-dom@18.2.0
> * react-scripts@5.0.1
> * lucide-react@0.276.0
> * tailwindcss@3.4.19

4. Projeyi başlatın:

```bash
npm start
```

Tarayıcı otomatik olarak [http://localhost:3000](http://localhost:3000) adresinde açılacaktır.

---

## Yapı / Dizin

```
kisisel-asistan/
│
├── public/                 # Statik dosyalar
├── src/                    # Tüm React bileşenleri
│   ├── PersonalAssistant.jsx
│   └── index.js
├── package.json            # Bağımlılıklar ve scriptler
├── package-lock.json       # Kilitlenmiş bağımlılıklar
├── tailwind.config.js      # Tailwind yapılandırması
└── README.md               # Proje açıklamaları
```

---

## Notlar ve İpuçları

* Node.js sürümü: 18.x veya üstü önerilir.
* React sürümü: 18.2.0 kullanın; React 19 çalışmaz.
* TailwindCSS: tailwind.config.js ve PostCSS ayarları değiştirildiyse projeyi yeniden derleyin.
* Klasör ve dosya yapısı: node_modules ve package-lock.json projeyi sorunsuz çalıştırmak için temiz olmalıdır. Gerekirse yeniden npm install yapın.
* GitHub için: node_modules eklemeyin (gitignore ile zaten engellenmeli).

---

##

---

## İletişim

Projeyle ilgili sorular için: [bariserdemcaliskan@gamail.com](mailto:bariserdemcaliskan@gamail.com)
