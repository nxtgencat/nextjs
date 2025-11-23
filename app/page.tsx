import Image from "next/image";
import ServicesCards from "../components/services";
import ServicesBottom from "../components/servicesBottom";
import SkinTreatmentSlider from "../components/sliders";
export default function Home() {
  return (
    <>
    <ServicesCards/>
    <ServicesBottom/>
    <SkinTreatmentSlider />
    </>
  )
}
