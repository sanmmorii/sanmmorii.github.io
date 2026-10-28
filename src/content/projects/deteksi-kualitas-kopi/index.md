---
title: "Aplikasi Mobile Klasifikasi Mutu Biji Kopi"
description: "Sistem cerdas berbasis visi komputer untuk mendeteksi mutu dan cacat biji kopi robusta petani lokal secara real-time di kebun."
role: "Mobile Developer & ML Engineer"
tech: ["Flutter", "TensorFlow Lite", "Python", "Figma"]
year: 2025
demoUrl: "https://kopi-lokal.demo.id"
repoUrl: "https://github.com/mahasiswa/deteksi-biji-kopi"
cover: "./cover.jpg"
featured: true
---

## Gambaran Proyek

Bermitra dengan kelompok tani kopi di Jawa Barat, proyek ini bertujuan membantu proses sortir biji kopi pasca-panen. Aplikasi mobile ini memanfaatkan model machine learning ringan yang dapat dijalankan secara offline di perkebunan terpencil tanpa koneksi internet.

## Metodologi & Arsitektur

- Mengumpulkan dataset mandiri sebanyak 2.500 foto biji kopi dalam berbagai kondisi cacat (pecah, berlubang serangga, hitam, dan matang sempurna).
- Melatih model Convolutional Neural Network (MobileNetV2) dengan optimasi kuantisasi int8 untuk performa tinggi pada perangkat seluler berdaya rendah.
- Antarmuka dirancang sederhana dan intuitif dengan kontras tinggi agar nyaman digunakan di bawah sinar matahari langsung.

## Fitur Utama

1. **Pemindaian Instan Kamera:** Deteksi kondisi biji kopi dalam waktu kurang dari 0.3 detik per frame.
2. **Kalkulator Standar SNI:** Menghitung persentase cacat mutu sesuai Standar Nasional Indonesia (SNI Kopi Biji).
3. **Riwayat Penyimpanan Batch:** Catatan hasil sortir per panen dapat disimpan lokal dan disinkronkan saat ada jaringan internet.
4. **Panduan Visual Perawatan:** Tips edukasi agrikultur praktis bagi petani pemula.

## Capaian

Proyek ini meraih Juara 2 dalam Kompetisi Inovasi Teknologi Tepat Guna Tingkat Mahasiswa Nasional tahun 2025.
