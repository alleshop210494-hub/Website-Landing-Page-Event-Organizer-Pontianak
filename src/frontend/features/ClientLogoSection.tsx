// src/frontend/features/ClientLogoSection.tsx
import React from 'react';

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

const partners: Partner[] = [
  { id: '1', name: 'Bank Kalbar', logoUrl: '/images/aurora.png' },
  { id: '2', name: 'Wilmar Group', logoUrl: '/images/sawit.png' },
  { id: '3', name: 'Sinar Mas Land', logoUrl: '/images/graha.png' },
  { id: '4', name: 'Pertamina', logoUrl: '/images/fuel.png' },
  { id: '5', name: 'Telkomsel', logoUrl: '/images/provider.png' },
];

export default function ClientLogoSection() {
  return (
    <section className="py-20 bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">
          Dipercaya oleh Perusahaan, BUMN, & Instansi Terkemuka di Kalimantan Barat
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 items-center justify-center">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex items-center justify-center p-2 transition duration-300 hover:scale-110"
            >
              <img
                src={partner.logoUrl}
                alt={partner.name}
                className="max-w-full max-h-24 sm:max-h-28 w-auto h-auto object-contain brightness-125 contrast-110 drop-shadow-[0_4px_16px_rgba(255,255,255,0.2)] transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}