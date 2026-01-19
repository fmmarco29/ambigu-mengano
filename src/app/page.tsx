import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import MusicalSection from '@/components/sections/MusicalSection';
import AtmosphereGallery from '@/components/sections/AtmosphereGallery';
import MenuGrid from '@/components/sections/MenuGrid';
import AgendaSection from '@/components/sections/AgendaSection';
import EventsTimeline from '@/components/sections/EventsTimeline';
import DanceFloor from '@/components/sections/DanceFloor';
import VipSection from '@/components/sections/VipSection';
import GiftSection from '@/components/sections/GiftSection';
import ReservationForm from '@/components/sections/ReservationForm';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white relative font-body selection:bg-primary selection:text-black">
      {/* Noise Filter */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
      />

      <Header />
      <Hero />
      <MusicalSection />
      <AtmosphereGallery />
      <MenuGrid />
      <AgendaSection />
      <EventsTimeline />
      <DanceFloor />
      <VipSection />
      <GiftSection />
      <ReservationForm />
      <Footer />
    </main>
  );
}
