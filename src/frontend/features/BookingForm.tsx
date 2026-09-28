// src/frontend/features/BookingForm.tsx
'use client';

import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    budget: 'Rp 50jt - 100jt',
    message: '',
  });

  const [status, setStatus] = useState<{ loading: boolean; success?: boolean; message?: string; errors?: string[] }>({
    loading: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true });

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, message: data.message });
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: 'Wedding',
          eventDate: '',
          budget: 'Rp 50jt - 100jt',
          message: '',
        });
      } else {
        setStatus({ loading: false, success: false, message: data.message, errors: data.errors });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, message: 'Terjadi kesalahan jaringan atau server.' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Konsultasikan Event Anda</h2>
          <p className="mt-2 text-gray-600">Isi formulir di bawah ini dan tim EO Pontianak kami akan segera merespons via WhatsApp.</p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm">
          {status.success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
              {status.message}
            </div>
          )}

          {status.message && !status.success && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
              <p className="font-semibold">{status.message}</p>
              {status.errors && (
                <ul className="mt-2 list-disc list-inside">
                  {status.errors.map((err, idx) => (
                    <li key={idx}>{err}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Cth: Andi Pratama"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Cth: 081234567890"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Event *</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-gray-900"
                >
                  <option value="Wedding">Pernikahan (Wedding)</option>
                  <option value="Corporate">Corporate Gathering</option>
                  <option value="Concert">Konser / Musik</option>
                  <option value="Exhibition">Pameran & Expo</option>
                  <option value="Birthday">Ulang Tahun / Lainnya</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimasi Tanggal Event *</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimasi Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-gray-900"
                >
                  <option value="< 50jt">&lt; Rp 50 Juta</option>
                  <option value="Rp 50jt - 100jt">Rp 50 Juta - 100 Juta</option>
                  <option value="Rp 100jt - 300jt">Rp 100 Juta - 300 Juta</option>
                  <option value="> 300jt">&gt; Rp 300 Juta</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Catatan / Detail Tambahan</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Ceritakan konsep atau lokasi event yang Anda inginkan di Pontianak..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-gray-900"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transition duration-200 disabled:opacity-50"
            >
              {status.loading ? 'Mengirim Pesan...' : 'Kirim Permintaan Konsultasi'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}