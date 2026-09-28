// src/backend/validations/inquiryValidation.ts
import { ClientInquiry } from '../../types';

export function validateInquiryInput(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Nama lengkap wajib diisi minimal 2 karakter.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Format email tidak valid.');
  }

  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim().length < 10) {
    errors.push('Nomor WhatsApp / Telepon minimal 10 digit.');
  }

  if (!data.eventType || typeof data.eventType !== 'string') {
    errors.push('Jenis event wajib dipilih.');
  }

  if (!data.eventDate) {
    errors.push('Tanggal event wajib diisi.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Fungsi sederhana untuk sanitasi string (mencegah XSS dasar)
export function sanitizeInput(str: string): string {
  return str.replace(/[<>]/g, '');
}