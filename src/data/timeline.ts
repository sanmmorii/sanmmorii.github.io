/**
 * =========================================================================
 * DATA PERJALANAN / TIMELINE (src/data/timeline.ts)
 * =========================================================================
 * Berisi riwayat pendidikan, organisasi, lomba, magang, dan sertifikasi.
 * Tipe yang didukung: 'pendidikan' | 'organisasi' | 'lomba' | 'magang' | 'sertifikat'
 */

export type TimelineType = 'pendidikan' | 'organisasi' | 'lomba' | 'magang' | 'sertifikat';

export interface TimelineItem {
  id: string;
  tahun: string;
  judul: string;
  institusi: string;
  deskripsi: string;
  tipe: TimelineType;
  sorotan?: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: "magang-frontend-2026",
    tahun: "2026",
    judul: "Software Engineer Intern (Frontend)",
    institusi: "PT Teknologi Inovasi Nusantara",
    deskripsi: "Mengembangkan komponen antarmuka sistem enterprise menggunakan Next.js dan Tailwind CSS, serta mengoptimalkan performa halaman hingga 40%.",
    tipe: "magang",
    sorotan: "Magang Industri",
  },
  {
    id: "hackathon-nasional-2026",
    tahun: "2026",
    judul: "Juara 1 Hackathon Solusi Digital Nasional",
    institusi: "Kementerian Komunikasi & Informatika RI",
    deskripsi: "Memimpin tim 4 orang membangun purwarupa pemantau efisiensi energi terbarukan berbasis web dalam sprint 48 jam.",
    tipe: "lomba",
    sorotan: "Prestasi Nasional",
  },
  {
    id: "asisten-lab-2025",
    tahun: "2025",
    judul: "Koordinator Asisten Laboratorium RPL",
    institusi: "Fakultas Ilmu Komputer, Kampus",
    deskripsi: "Membimbing 180+ mahasiswa dalam praktikum Pemrograman Web dan Struktur Data, serta merancang modul pembelajaran interaktif.",
    tipe: "organisasi",
    sorotan: "Akademik Kampus",
  },
  {
    id: "sertifikasi-aws-2025",
    tahun: "2025",
    judul: "AWS Certified Cloud Practitioner",
    institusi: "Amazon Web Services",
    deskripsi: "Sertifikasi resmi kompetensi pemahaman arsitektur komputasi awan, keamanan, dan deployment aplikasi berskala global.",
    tipe: "sertifikat",
    sorotan: "Sertifikasi Global",
  },
  {
    id: "bem-divisi-iptek-2024",
    tahun: "2024",
    judul: "Staff Departemen Pengembangan IPTEK",
    institusi: "Badan Eksekutif Mahasiswa (BEM)",
    deskripsi: "Menginisiasi program pelatihan coding mingguan untuk 80+ mahasiswa baru dan menyelenggarakan festival inovasi kampus.",
    tipe: "organisasi",
    sorotan: "Pengembangan Komunitas",
  },
  {
    id: "kuliah-s1-2023",
    tahun: "2023 - Sekarang",
    judul: "S1 Teknik Informatika",
    institusi: "Universitas Indonesia",
    deskripsi: "Fokus konsentrasi pada Rekayasa Perangkat Lunak & Sistem Cerdas dengan IPK 3.88/4.00, aktif dalam riset web modern.",
    tipe: "pendidikan",
    sorotan: "Pendidikan Tinggi",
  },
];

export const tipeLabels: Record<TimelineType, { label: string; icon: string }> = {
  pendidikan: { label: "Pendidikan", icon: "academic-cap" },
  organisasi: { label: "Organisasi", icon: "user-group" },
  lomba: { label: "Lomba & Prestasi", icon: "trophy" },
  magang: { label: "Magang & Karir", icon: "briefcase" },
  sertifikat: { label: "Sertifikasi", icon: "badge-check" },
};
