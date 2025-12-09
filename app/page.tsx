import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
