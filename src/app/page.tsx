// src/app/page.tsx
import Navbar from '../frontend/layouts/Navbar';
import Footer from '../frontend/layouts/Footer';
import HeroSection from '../frontend/features/HeroSection';
import PortfolioSection from '../frontend/features/PortfolioSection';
import BookingForm from '../frontend/features/BookingForm';

export default function PublicLandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-amber-500 selection:text-white">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <BookingForm />
      <Footer />
    </main>
  );
}