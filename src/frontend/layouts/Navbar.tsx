// src/frontend/layouts/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600 tracking-tight">
          EO Pontianak <span className="text-amber-500">Khatulistiwa</span>
        </Link>
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="#home" className="hover:text-indigo-600 transition">Beranda</Link>
          <Link href="#portfolio" className="hover:text-indigo-600 transition">Portofolio</Link>
          <Link href="#contact" className="hover:text-indigo-600 transition">Kontak & Booking</Link>
        </nav>
        <div>
          <Link 
            href="#contact" 
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-medium shadow hover:bg-indigo-700 transition"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </div>
    </header>
  );
}