// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'react';

export const metadata: Metadata = {
  title: 'EO Pontianak Khatulistiwa - Professional Event Organizer',
  description: 'Wujudkan event impian Anda di Pontianak bersama EO Profesional.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}