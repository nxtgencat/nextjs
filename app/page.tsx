import Image from "next/image";
import ServicesCards from "../components/services";
import ServicesBottom from "../components/servicesBottom";
import SkinTreatmentSlider from "../components/sliders";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
    
    <Hero />
    <ServicesCards/>
    <ServicesBottom/>
    <SkinTreatmentSlider />
    </>
  )
}
