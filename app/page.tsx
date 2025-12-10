import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
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
