import type { ImageMetadata } from 'astro';

// Vite eager glob to read all images within src/content/kegiatan dynamically
const allKegiatanImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/kegiatan/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true }
);

export interface KegiatanPhoto {
  slug: string;
  filename: string;
  image: ImageMetadata;
  isCover: boolean;
}

export interface GalleryItem extends KegiatanPhoto {
  albumTitle: string;
  albumDate: string;
  albumCategory: string;
  albumDescription: string;
}

/**
 * Mengambil seluruh foto di dalam folder kegiatan tertentu berdasarkan slug
 */
export function getAlbumPhotos(slug: string): KegiatanPhoto[] {
  const prefix = `/src/content/kegiatan/${slug}/`;
  const photos: KegiatanPhoto[] = [];

  for (const [path, module] of Object.entries(allKegiatanImages)) {
    if (path.startsWith(prefix)) {
      const filename = path.replace(prefix, '');
      const isCover = filename.toLowerCase().startsWith('cover.');
      photos.push({
        slug,
        filename,
        image: module.default,
        isCover,
      });
    }
  }

  // Urutkan: cover terlebih dahulu, kemudian alfabetik
  return photos.sort((a, b) => {
    if (a.isCover) return -1;
    if (b.isCover) return 1;
    return a.filename.localeCompare(b.filename);
  });
}

/**
 * Mengambil semua foto dari seluruh kegiatan beserta data albumnya untuk galeri terpadu
 */
export function getAllPhotosWithAlbumData(albums: any[]): GalleryItem[] {
  const items: GalleryItem[] = [];

  for (const album of albums) {
    const photos = getAlbumPhotos(album.id);
    for (const photo of photos) {
      items.push({
        ...photo,
        albumTitle: album.data.title,
        albumDate: album.data.date,
        albumCategory: album.data.category,
        albumDescription: album.data.description,
      });
    }
  }

  // Urutkan dari tanggal kegiatan terbaru
  return items.sort((a, b) => new Date(b.albumDate).getTime() - new Date(a.albumDate).getTime());
}

/**
 * Format tanggal Indonesia: contoh "14 Agustus 2026"
 */
export function formatTanggalIndonesia(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  } catch {
    return dateStr;
  }
}
