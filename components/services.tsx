// components/ServicesCards.tsx
import Image from "next/image";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function ServicesCards() {
  return (
    <div className="px-4 sm:px-10 lg:px-20 py-16 bg-[#F9F7F4]">

      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-serif font-normal text-black tracking-tight">
          Our Services
        </h2>

        <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed">
          Our dentists provide a range of services to all ages and needs to keep<br />
          their teeth and gums healthy for life.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">

        {/* Card 1 */}
        <div className="w-full h-[300px] sm:w-[280px] bg-[#F4EFCA] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold italic leading-tight text-[#3D3400]">
              Acne<br />Treatment
            </h3>

            <p className="text-sm mt-2 font-bold italic text-[#3D3400]/70">
              Targeted solutions to reduce acne and promote clear, healthy skin.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image src="/card1.png" alt="" width={200} height={200} />
            </div>

            <button className="w-9 h-9 rounded-full bg-[#585019] flex items-center justify-center text-white">
              <span className="block transform -rotate-30">→</span>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full h-[300px] sm:w-[280px] bg-[#A2C8E8] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold italic leading-tight text-[#1D3053]">
              BB Glow<br />Treatment
            </h3>

            <p className="text-sm mt-2 font-bold italic text-[#1D3053]/70">
              Semi-permanent treatment for glowing, poreless skin.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image src="/card2.png" alt="" width={200} height={200} />
            </div>

            <button className="w-9 h-9 rounded-full bg-[#1A386B] flex items-center justify-center text-white">
              <span className="block transform -rotate-30">→</span>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full h-[300px] sm:w-[280px] bg-[#D6D4C5] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold italic leading-tight text-[#37350C]">
              HydraFacial
            </h3>

            <p className="text-sm mt-2 font-bold italic text-[#37350C]/70">
              Deep cleansing and hydration for refreshed skin.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image src="/card3.png" alt="" width={200} height={200} />
            </div>

            <button className="w-9 h-9 rounded-full bg-[#3E4928] flex items-center justify-center text-white">
              <span className="block transform -rotate-30">→</span>
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full h-[300px] sm:w-[280px] bg-[#FFD4EE] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold italic leading-tight text-[#3D3400]">
              Pigmentation<br />Treatment
            </h3>

            <p className="text-sm mt-2 font-bold italic text-[#3D3400]/70">
              Lighten dark spots and even out skin tone.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image src="/card4.png" alt="" width={200} height={200} />
            </div>

            <button className="w-9 h-9 rounded-full bg-[#5C0038] flex items-center justify-center text-white">
              <span className="block transform -rotate-30">→</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
