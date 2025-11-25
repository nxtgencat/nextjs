import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesGrid from "../components/ServicesGrid";
import WelcomeSection from "../components/WelcomeSection";
import SplitContentSection from "../components/SplitContentSection";
import PhotoGallerySection from "../components/PhotoGallerySection";
import CTASection from "../components/CTASection";
import WhyChooseSection from "../components/WhyChooseSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesGrid />
      <WelcomeSection />
      <SplitContentSection />
      <PhotoGallerySection />
      <CTASection />
      <WhyChooseSection />
      <Footer />
    </>
  );
}
