# 🎓 Portofolio Pribadi Mahasiswa

Website portofolio pribadi modern, minimalis, dan elegan untuk mahasiswa yang dibangun menggunakan **Astro**, **Tailwind CSS**, dan **TypeScript**. Desain mengusung tema editorial dengan palet warna hangat (*Warm Ivory*, *Burgundy*, dan *Rose Accent*), tipografi serif mewah (*Cormorant Garamond*), foto profil dalam bingkai lengkung (*arch frame*), dan galeri dokumentasi kegiatan responsif dengan lightbox interaktif.

---

## 📑 Daftar Isi
1. [Fitur Unggulan](#-fitur-unggulan)
2. [Lokasi Pengisian Data Pribadi](#-lokasi-pengisian-data-pribadi)
3. [Cara Menjalankan Proyek Secara Lokal](#-cara-menjalankan-proyek-secara-lokal)
4. [Cara Menambah Kegiatan & Foto Baru](#-cara-menambah-kegiatan--foto-baru)
5. [Cara Menambah Proyek Baru](#-cara-menambah-proyek-baru)
6. [Cara Menambah Entri Timeline / Perjalanan](#-cara-menambah-entri-timeline--perjalanan)
7. [Cara Mengganti Foto Profil & Aset Gambar](#-cara-mengganti-foto-profil--aset-gambar)
8. [Panduan Deploy Gratis](#-panduan-deploy-gratis-ke-vercel-netlify-atau-github-pages)
9. [Struktur Folder Proyek](#-struktur-folder-proyek)

---

## ✨ Fitur Unggulan

- **Desain Editorial & Minimalis**: Terinspirasi dari tata letak majalah kelas atas dengan proporsi warna 60-30-10 (`#FFF9F2`, `#F3E6D5`, `#800020`, dan `#D45060`).
- **Arch Photo Frame**: Foto potret dalam bingkai lengkungan Romawi (*arch*) dilengkapi badge bundar berputar (*rotating quote badge*).
- **Galeri Kegiatan Otomatis (Fitur Terpenting)**:
  - Cukup buat folder baru di `src/content/kegiatan/<nama-kegiatan>/` dan masukkan foto-foto kegiatan.
  - Sistem otomatis membaca, mengurutkan, dan mengoptimalkan gambar ke format WebP/AVIF tanpa perlu menulis atau mengubah kode program.
  - Dilengkapi filter kategori, filter tahun, tombol *Muat Lebih Banyak*, dan **Lightbox** layar penuh (mendukung keyboard `←`, `→`, `Esc` dan gestur *swipe* di HP).
- **Koleksi Proyek Lengkap**: Halaman daftar `/projects` dengan filter teknologi & tahun, serta halaman detail `/projects/[slug]` berbasis Markdown.
- **Timeline Interaktif**: Riwayat pendidikan, organisasi, lomba, magang, dan sertifikasi (horizontal di desktop, vertikal di mobile).
- **Statistik Count-Up**: Angka beranimasi saat digulir ke dalam layar.
- **100% Bahasa Indonesia**: Seluruh teks, atribut SEO, Open Graph, dan format tanggal otomatis ("14 Agustus 2026").
- **Aksesibilitas & SEO Maksimal**: Kontras warna WCAG AA, HTML semantik, sitemap otomatis, dan performa tinggi.

---

## 📍 Lokasi Pengisian Data Pribadi

Anda dapat langsung mengganti data placeholder seperti `[NAMA SAYA]`, `[JURUSAN SAYA]`, dan lainnya pada file-file berikut:

| Data yang Ingin Diubah | File Lokasi | Keterangan |
| :--- | :--- | :--- |
| **Nama, Jurusan, Kampus, Bio, Kontak & Medsos** | `src/data/site.ts` | Pusat semua teks umum, hero, tentang saya, email, LinkedIn, GitHub, Instagram, dan kutipan badge. |
| **Timeline (Pendidikan, Lomba, Magang, Organisasi)** | `src/data/timeline.ts` | Daftar perjalanan belajar dan milestone prestasi mahasiswa. |
| **Proyek & Karya** | `src/content/projects/<slug>/index.md` | Setiap folder mewakili 1 proyek lengkap beserta tangkapan layarnya. |
| **Foto Kegiatan & Album** | `src/content/kegiatan/<slug>/` | Folder album kegiatan beserta seluruh file fotonya. |
| **Foto Profil & Foto Sekunder** | `src/assets/hero-portrait.jpg` & `src/assets/about-vase.jpg` | Foto potret beranda dan foto kedua pada bagian tentang saya. |

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18 ke atas atau LTS terbaru).

### 1. Pasang Dependensi
Buka terminal pada folder proyek, lalu jalankan:
```bash
npm install
```

### 2. Jalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Buka browser dan akses alamat: **`http://localhost:4321`**

> **Catatan Windows PowerShell**: Proyek ini juga mendukung perintah `astro dev --background` untuk menjalankan server di latar belakang.

### 3. Uji Build Produksi (Static HTML)
Untuk memastikan situs statis siap di-deploy tanpa kesalahan:
```bash
npm run build
```
Hasil build yang telah dioptimasi akan berada di folder `dist/`. Anda dapat mempratinjaunya dengan:
```bash
npm run preview
```

---

## 📸 Cara Menambah Kegiatan & Foto Baru

Sistem galeri dirancang agar **bisa ditambah kapan saja tanpa menyentuh kode program**. 

### Langkah demi langkah:

1. Buat folder baru di dalam `src/content/kegiatan/`, misalnya:
   ```text
   src/content/kegiatan/lomba-uiux-gemastik-2026/
   ```
2. Buat file `index.md` di dalam folder tersebut dengan isi seperti berikut:
   ```markdown
   ---
   title: "Juara 1 Lomba Desain Pengalaman Pengguna (UI/UX) Gemastik"
   date: "2026-09-25"
   category: "Lomba"
   description: "Perancangan aplikasi inklusif untuk penyandang disabilitas sensorik bersama tim riset kampus."
   cover: "./cover.jpg"
   ---

   ## Pengalaman & Pembelajaran

   Tuliskan cerita, kesan, atau narasi kegiatan di sini. Teks ini akan otomatis tampil di halaman detail kegiatan.
   ```

3. Letakkan foto-foto kegiatan di dalam folder yang sama:
   ```text
   src/content/kegiatan/lomba-uiux-gemastik-2026/
   ├── index.md
   ├── cover.jpg          <-- Foto utama (wajib bernama cover.jpg/png/webp)
   ├── dokumentasi-1.jpg  <-- Foto tambahan bebas
   ├── dokumentasi-2.jpg
   └── panggung-juara.jpg
   ```

4. **Selesai!** Kegiatan baru akan **otomatis**:
   - Muncul di halaman beranda (bagian Sorotan Kegiatan jika termasuk yang terbaru).
   - Muncul di halaman `/kegiatan` dalam tata letak Masonry.
   - Masuk ke opsi filter kategori dan tahun.
   - Memiliki halaman detail tersendiri di `/kegiatan/lomba-uiux-gemastik-2026`.
   - Seluruh fotonya dapat diklik dan diperbesar melalui Lightbox.

---

## 💼 Cara Menambah Proyek Baru

1. Buat folder baru di `src/content/projects/`, contoh: `src/content/projects/aplikasi-presensi-kampus/`.
2. Masukkan file cover gambar `cover.jpg` (ukuran rasio 16:10 disarankan).
3. Buat file `index.md` dengan format *frontmatter*:
   ```markdown
   ---
   title: "Sistem Presensi Mahasiswa Berbasis Geofencing"
   description: "Aplikasi mobile dan dashboard admin untuk pencatatan kehadiran mahasiswa secara otomatis di area kampus."
   role: "Lead Mobile Developer"
   tech: ["Flutter", "Node.js", "PostgreSQL", "Tailwind CSS"]
   year: 2026
   demoUrl: "https://demo-presensi.com"
   repoUrl: "https://github.com/username/presensi-kampus"
   cover: "./cover.jpg"
   featured: true
   ---

   ## Ringkasan Proyek
   Jelaskan tantangan, solusi yang Anda buat, dan fitur unggulan dari proyek ini di sini...
   ```
4. Jika `featured: true`, proyek akan tampil di Beranda pada bagian **Proyek Unggulan**. Jika `featured: false`, proyek tetap tampil di halaman `/projects`.

---

## ⏱ Cara Menambah Entri Timeline / Perjalanan

Buka file **`src/data/timeline.ts`**, lalu tambahkan objek baru ke dalam array `timelineData`:

```typescript
{
  id: "magang-traveloka-2026",
  tahun: "2026",
  judul: "Software Engineer Intern",
  institusi: "Traveloka Indonesia",
  deskripsi: "Mengembangkan fitur pencarian dan mengoptimalkan kecepatan muat halaman web sebesar 30%.",
  tipe: "magang", // Pilihan: 'pendidikan' | 'organisasi' | 'lomba' | 'magang' | 'sertifikat'
  sorotan: "Magang Industri",
},
```

---

## 🖼 Cara Mengganti Foto Profil & Aset Gambar

1. **Foto Profil Hero (Bingkai Arch)**:
   - Ganti file `src/assets/hero-portrait.jpg` dengan foto potret Anda (orientasi vertikal / 3:4 atau 4:5 disarankan).
2. **Foto Sekunder Tentang Saya**:
   - Ganti file `src/assets/about-vase.jpg` dengan foto estetik suasana meja belajar, laptop, atau foto kedua Anda.
3. **Favicon**:
   - Anda dapat menyesuaikan logo ikon kecil di `public/favicon.svg`.

---

## 🌐 Panduan Deploy Gratis ke Vercel, Netlify, atau GitHub Pages

Proyek ini menghasilkan situs statis (SSG) murni, sehingga dapat di-hosting secara **100% gratis** dengan performa CDN global super cepat.

### Opsi A: Deploy ke Vercel (Paling Direkomendasikan & Termudah)
1. Unggah kode proyek Anda ke repositori **GitHub**.
2. Buka [vercel.com](https://vercel.com/) dan login menggunakan akun GitHub Anda.
3. Klik tombol **"Add New..."** -> **"Project"**.
4. Pilih repositori portofolio Anda.
5. Vercel akan otomatis mendeteksi framework **Astro**.
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Klik **"Deploy"**. Dalam hitungan detik, situs Anda sudah aktif di internet dengan domain gratis (contoh: `portofolio-nama.vercel.app`) dan SSL otomatis!

---

### Opsi B: Deploy ke Netlify
1. Unggah kode proyek ke GitHub.
2. Buka [netlify.com](https://www.netlify.com/) dan klik **"Add new site"** -> **"Import an existing project"**.
3. Hubungkan dengan akun GitHub Anda dan pilih repositori ini.
4. Pengaturan:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Klik **"Deploy site"**.

---

### Opsi C: Deploy ke GitHub Pages
1. Pastikan Anda mengaktifkan GitHub Actions di tab **Settings** -> **Pages** repositori GitHub Anda (pilih *Source: GitHub Actions*).
2. Di file `astro.config.mjs`, sesuaikan `site`:
   ```javascript
   export default defineConfig({
     site: 'https://username.github.io',
     base: '/nama-repo', // jika menggunakan sub-path
   });
   ```
3. Commit dan push, GitHub Actions akan melakukan build dan mempublikasikannya otomatis.

---

## 📁 Struktur Folder Proyek

```text
portofolio_web/
├── public/                     # Aset statis publik (favicon, robots.txt)
│   └── favicon.svg
├── src/
│   ├── assets/                 # Foto profil dan foto sekunder teroptimasi
│   │   ├── hero-portrait.jpg   # Foto profil bingkai Arch
│   │   └── about-vase.jpg      # Foto sekunder pada Tentang Saya
│   ├── components/             # Komponen antarmuka modular
│   │   ├── ContactSection.astro
│   │   ├── FeaturedProjects.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Icon.astro
│   │   ├── KegiatanHighlights.astro
│   │   ├── Lightbox.astro
│   │   ├── Navbar.astro
│   │   ├── ProjectCard.astro
│   │   ├── SkillsAbout.astro
│   │   ├── StatsStrip.astro
│   │   └── TimelineSection.astro
│   ├── content/                # Content Collections (Data Proyek & Kegiatan)
│   │   ├── kegiatan/           # Album kegiatan (foto & markdown)
│   │   │   ├── hackathon-inovasi-nasional/
│   │   │   ├── pengabdian-literasi-digital/
│   │   │   └── seminar-nasional-ai-kampus/
│   │   └── projects/           # Proyek portofolio (cover & markdown)
│   │       ├── deteksi-kualitas-kopi/
│   │       ├── platform-mentoring-mahasiswa/
│   │       └── sistem-beasiswa-kampus/
│   ├── data/                   # KONTEN TERPUSAT
│   │   ├── site.ts             # Tempat mengganti nama, bio, email, medsos
│   │   └── timeline.ts         # Tempat menambah riwayat perjalanan/prestasi
│   ├── layouts/
│   │   └── BaseLayout.astro    # Layout HTML utama dengan SEO & fonts
│   ├── pages/
│   │   ├── index.astro         # Halaman Beranda lengkap
│   │   ├── kegiatan/
│   │   │   ├── index.astro     # Galeri kegiatan (Masonry + Filter)
│   │   │   └── [slug].astro    # Halaman album kegiatan detail
│   │   └── projects/
│   │       ├── index.astro     # Katalog semua proyek + Filter
│   │       └── [slug].astro    # Halaman detail proyek
│   ├── styles/
│   │   └── global.css          # Tema Tailwind v4, variabel CSS, warna & font
│   ├── utils/
│   │   └── kegiatan.ts         # Helper pembacaan foto dinamis & tanggal ID
│   └── content.config.ts       # Skema validasi Astro 5 Content Collections
├── astro.config.mjs            # Konfigurasi Astro + Tailwind + Sitemap
├── package.json                # Dependensi proyek
└── README.md                   # Panduan dokumentasi lengkap berbahasa Indonesia
```

---

*Dibuat dengan dedikasi untuk portofolio mahasiswa berstandar industri.*
