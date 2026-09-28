// src/frontend/features/HeroSection.tsx
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-gray-900 text-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase border border-amber-500/30">
          Event Organizer #1 di Pontianak & Kalbar
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Wujudkan Event Impian Anda dengan <span className="text-amber-400">Sentuhan Profesional</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Spesialis Wedding Mewah, Corporate Gathering, Konser, dan Pameran megah di Pontianak dengan standar kualitas eksekutif.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-4 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
          >
            Mulai Rancang Event
          </Link>
          <Link
            href="#portfolio"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-4 rounded-xl backdrop-blur transition"
          >
            Lihat Portofolio Kami
          </Link>
        </div>
      </div>
    </section>
  );
}