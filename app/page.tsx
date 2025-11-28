import TopBanner from "../components/TopBanner";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesGrid from "../components/ServicesGrid";
import OverviewSection from "../components/OverviewSection";
import GallerySection from "../components/GallerySection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <TopBanner />
      <Header />
      <HeroSection />
      <OverviewSection />
      <GallerySection />
      <ServicesGrid />
      <FeaturesSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
  
    </>
  );
}
