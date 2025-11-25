import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesGrid from "../components/ServicesGrid";
import AboutSection from "../components/AboutSection";
import TreatmentSlider from "../components/TreatmentSlider";
import CTASection from "../components/CTASection";
import ReviewsSection from "../components/ReviewsSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesGrid />
      <AboutSection />
      <TreatmentSlider />
      <CTASection />
      <ReviewsSection />
    </>
  );
}
