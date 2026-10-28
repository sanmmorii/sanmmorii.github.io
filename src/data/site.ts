/**
 * =========================================================================
 * KONFIGURASI KONTEN SITUS PORTOFOLIO MAHASISWA (src/data/site.ts)
 * =========================================================================
 * Seluruh teks umum, nama, peran, kontak, dan tautan sosial media disimpan di sini.
 * Anda dapat mencari teks bertanda [NAMA ANDA], [EMAIL ANDA], dll. untuk menyesuaikan.
 */

export const siteConfig = {
  // Informasi SEO & Metadata
  meta: {
    title: "Bagus Sanjaya — Mahasiswa Informatika",
    description: "Portofolio pribadi Bagus Sanjaya, mahasiswa Informatika yang berfokus pada pengembangan web modern, UI/UX, dan AI.",
    siteUrl: "https://sanmmorii.github.io",
    ogImage: "/og-image.jpg",
    locale: "id_ID",
  },

  // Identitas Pribadi
  // Ganti nilai di bawah ini dengan data Anda sendiri:
  personal: {
    // [NAMA LENGKAP SAYA]
    name: "Bagus Sanjaya",
    // [NAMA PANGGILAN SAYA]
    shortName: "Bagus Sanjaya",
    // [JURUSAN & STATUS SAYA]
    role: "Mahasiswa Informatika",
    // [UNIVERSITAS / KAMPUS SAYA]
    university: "Institut Bisnis dan Teknologi Indonesia",
    // [KOTA / DOMISILI SAYA]
    location: "Gianyar & Bali, Indonesia",
    // [EMAIL SAYA]
    email: "siganteng@gmail.com",
    // [NOMOR WHATSAPP / TELEPON SAYA (Opsional)]
    phone: "+62 812-3456-7890",

    // Tautan Sosial Media
    social: {
      // [LINK GITHUB SAYA]
      github: "https://github.com/sanmmorii",
      // [LINK LINKEDIN SAYA]
      linkedin: "https://linkedin.com/in/",
      // [LINK INSTAGRAM SAYA]
      instagram: "https://instagram.com/",
    },

    // Bagian HERO (Beranda Atas)
    hero: {
      greeting: "Halo, saya",
      // Kutipan pendek pada badge bundar di samping foto hero:
      badgeQuote: "GAMERS & CALON S.PROMTER • ",
      // Deskripsi satu kalimat padat di bawah nama:
      summary: "Mahasiswa Informatika yang mencintai rekayasa web modern, eksplorasi kecerdasan buatan, dan perancangan antarmuka pengguna yang anggun serta berdaya guna.",
      ctaProject: "Lihat Proyek Saya",
      ctaContact: "Hubungi Saya",
      // Status ketersediaan (titik hijau berkedip di bawah tombol):
      statusText: "Selalu Siap Kapanpun Diperlukan",
    },

    // Bagian TENTANG SAYA (About Me)
    about: {
      badge: "TENTANG SAYA",
      heading: "Membangun Harmoni Antara Estetika Desain & Keandalan Kode",
      bio: [
        "Saya adalah mahasiswa Informatika yang memiliki ketertarikan tinggi pada persimpangan antara seni visual, pengalaman pengguna, dan performa arsitektur perangkat lunak.",
        "Selain mendalami materi perkuliahan, saya aktif terlibat dalam riset laboratorium kampus, kepanitiaan, organisasi mahasiswa, serta jago Tekken.",
        "Bagi saya, setiap baris kode adalah kesempatan untuk menyederhanakan masalah nyata dan memberikan dampak positif bagi orang banyak melalui teknologi yang ramah dan inklusif.",
      ],
      // Teks tanda tangan script (tulisan sambung warna merah/pink):
      signatureText: "Bagus Sanjaya",
      // Teks huruf cetak di bawah tanda tangan (bisa diubah atau dikosongkan jika tidak ingin ada):
      signatureSubtext: "Siganteng yang jago Tekken",
    },

    // Statistik Angka (Count-Up) di Strip Burgundy (#800020)
    // Angka ini juga dapat disesuaikan manual atau otomatis
    stats: {
      yearsExperience: {
        number: 3,
        suffix: "+",
        label: "Tahun Belajar & Berkarya",
      },
      projectsCompleted: {
        // Jika null/0, akan dihitung otomatis dari jumlah content collection projects
        number: 12,
        suffix: "+",
        label: "Proyek Terselesaikan",
      },
      activitiesCount: {
        // Jika null/0, akan dihitung otomatis dari jumlah content collection kegiatan
        number: 15,
        suffix: "+",
        label: "Kegiatan & Organisasi",
      },
      achievementsCount: {
        number: 8,
        suffix: "+",
        label: "Lomba & Sertifikasi",
      },
    },

    // Kemampuan Teknis & Alat (Skills)
    skills: [
      {
        category: "Pengembangan Web",
        description: "Teknologi inti untuk antarmuka cepat & responsif",
        items: [
          { name: "TypeScript", icon: "code" },
          { name: "Astro", icon: "rocket" },
          { name: "React / Next.js", icon: "layers" },
          { name: "Tailwind CSS", icon: "brush" },
          { name: "HTML5 & CSS3", icon: "layout" },
        ],
      },
      {
        category: "Backend & Basis Data",
        description: "Fondasi server, logika bisnis, dan data",
        items: [
          { name: "Node.js", icon: "server" },
          { name: "Python", icon: "terminal" },
          { name: "PostgreSQL", icon: "database" },
          { name: "RESTful API", icon: "network" },
        ],
      },
      {
        category: "Desain & Alat",
        description: "Perancangan visual dan alur kerja kolaboratif",
        items: [
          { name: "Figma", icon: "figma" },
          { name: "Git & GitHub", icon: "git" },
          { name: "UI/UX Research", icon: "search" },
          { name: "VS Code", icon: "cpu" },
        ],
      },
    ],

    // Bagian Testimoni (Opsional: otomatis disembunyikan jika text kosong / null)
    testimonial: {
      enabled: true,
      quote: "Jadilah mahasiswa kupu-kupu dan jago Tekken.",
      author: "Kata orang ganteng.",
      title: "Mahasiswa bingung",
    },

    // Ajakan Kontak (CTA Box)
    contactCTA: {
      badge: "KOLABORASI",
      title: "Punya Ide atau Kesempatan Menarik?",
      description: "Saya selalu antusias menyambut ide baru, riset kolaboratif, kompetisi teknologi, maupun sekadar berdiskusi santai seputar dunia rekayasa perangkat lunak.",
      buttonText: "Kirim Pesan Melalui Email",
      subjectPrefill: "Halo Bagus Sanjaya - Peluang Kolaborasi / Lawan Tekken",
    },
  },
};
