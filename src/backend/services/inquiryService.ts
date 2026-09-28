// src/backend/services/inquiryService.ts
import { ClientInquiry, ApiResponse } from '../../types';
import { sanitizeInput } from '../validations/inquiryValidation';

export async function processClientInquiry(data: ClientInquiry): Promise<ApiResponse> {
  try {
    // Sanitasi data sebelum diproses / disimpan ke database
    const sanitizedData: ClientInquiry = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      phone: sanitizeInput(data.phone),
      eventType: sanitizeInput(data.eventType),
      eventDate: sanitizeInput(data.eventDate),
      budget: sanitizeInput(data.budget || 'Belum ditentukan'),
      message: sanitizeInput(data.message || ''),
    };

    // Simulasi penyimpanan ke database (bisa dihubungkan ke PostgreSQL/MongoDB nantinya)
    console.log('[SECURE BACKEND LOG] Inquiry baru diterima:', sanitizedData);

    // Di sini Anda bisa menambahkan logic kirim email notifikasi (Nodemailer / Resend API)

    return {
      success: true,
      message: 'Pesan pemesanan event berhasil dikirim! Tim EO Pontianak akan segera menghubungi Anda via WhatsApp.',
      data: sanitizedData,
    };
  } catch (error) {
    console.error('[BACKEND ERROR] Gagal memproses inquiry:', error);
    return {
      success: false,
      message: 'Terjadi kesalahan pada server internal.',
      error: String(error),
    };
  }
}