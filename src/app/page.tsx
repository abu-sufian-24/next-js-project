import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import AnimationCard from '@/components/AnimationCard';
import UpcomingWeviners from '@/components/UpcomingWeviners';
import Inistructor from '@/components/Inistructor';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <AnimationCard />
      <UpcomingWeviners />
      <Inistructor />
      <Footer />
    </main>
  );
}
