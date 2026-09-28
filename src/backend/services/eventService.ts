// src/backend/services/eventService.ts

export interface EventItem {
    id: string;
    title: string;
    category: 'Wedding' | 'Corporate' | 'Exhibition' | 'Concert';
    date: string;
    location: string;
    description: string;
    imageUrl: string;
  }
  
  export async function getAllEvents(): Promise<EventItem[]> {
    return [
      {
        id: '1',
        title: 'Grand Wedding Mahligai Khatulistiwa',
        category: 'Wedding',
        date: '2026-05-12',
        location: 'Hotel Qubu Resort, Pontianak',
        description: 'Resepsi pernikahan adat Melayu Pontianak modern dengan dekorasi megah berornamen khas.',
        imageUrl: '/images/pernikahan.jpg', // <-- Mengambil dari public/images/wedding.jpg
      },
      {
        id: '2',
        title: 'Borneo Corporate Annual Gathering 2025',
        category: 'Corporate',
        date: '2025-12-20',
        location: 'Swiss-Belhotel Danau Singkarak / Pontianak',
        description: 'Gala dinner tahunan perusahaan perkebunan sawit regional Kalbar dengan hiburan artis lokal.',
        imageUrl: '/images/sawit.jpg', // <-- Mengambil dari public/images/corporate.jpg
      },
      {
        id: '3',
        title: 'Festival Kuliner & UMKM Pontianak Expo',
        category: 'Exhibition',
        date: '2025-08-17',
        location: 'Kawasan Tugu Digulis, Pontianak',
        description: 'Pameran UMKM terbesar menghadirkan kuliner khas seperti Chai Kue dan Sotong Pangkong.',
        imageUrl: '/images/umkm.jpg', // <-- Mengambil dari public/images/exhibition.jpg
      },
    ];
  }