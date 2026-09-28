// src/frontend/features/PortfolioSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { EventItem } from '@/types';

export default function PortfolioSection() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setEvents(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Gagal mengambil portofolio:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">Portofolio Event Unggulan</h2>
          <p className="mt-4 text-lg text-gray-600">Beberapa mahakarya event yang sukses kami selenggarakan di Pontianak.</p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Memuat portofolio...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col transition hover:shadow-xl">
                <div className="relative h-48 w-full bg-gray-200">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-amber-600 font-semibold mb-1">📅 {item.date} | 📍 {item.location}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-indigo-600 text-sm font-semibold hover:underline cursor-pointer">Detail Event &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}