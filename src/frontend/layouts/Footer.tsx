// src/frontend/layouts/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">EO Pontianak Khatulistiwa</h3>
            <p className="text-gray-400 text-sm">
              Mitra profesional terpercaya untuk mewujudkan event impian Anda di Pontianak dan seluruh Kalimantan Barat.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <p className="text-gray-400 text-sm mb-2">📍 Jl. A. Yani, Kota Pontianak, Kalimantan Barat</p>
            <p className="text-gray-400 text-sm mb-2">📞 WhatsApp: +62 812-3456-7890</p>
            <p className="text-gray-400 text-sm">✉️ info@eopontianakkhatulistiwa.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
            <p className="text-gray-400 text-sm mb-2">Senin - Jumat: 08.00 - 17.00 WIB</p>
            <p className="text-gray-400 text-sm">Sabtu - Minggu: Berdasarkan Perjanjian Event</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} EO Pontianak Khatulistiwa. All rights reserved.
        </div>
      </footer>
    );
  }