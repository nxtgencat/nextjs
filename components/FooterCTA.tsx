"use client";
import Image from "next/image";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function ReviewSection() {
  return (
    <section className={`${urbanist.className} w-full bg-[#EAF7F8] pt-20 pb-24 px-4 md:px-10 lg:px-20`}>

      {/* ===================== CTA BOX ===================== */}
      <div className="w-full bg-[#1F325C] rounded-xl py-16 md:py-20 px-6 md:px-20 relative overflow-hidden">

       {/* LEFT SIDE DECOR SHAPES (DIAGONAL) */}
<div className="absolute left-0 bottom-10 w-32 h-32 border border-white/40 rounded-xl"></div>
<div className="absolute left-10 bottom-0 w-28 h-28 border border-white/40 rounded-xl"></div>
<div className="absolute left-0 bottom-0 w-24 h-24 border border-white/40 rounded-xl"></div>

{/* RIGHT SIDE DECOR SHAPES (DIAGONAL MIRROR) */}
<div className="absolute right-10 top-10 w-32 h-32 border border-white/40 rounded-xl"></div>
<div className="absolute right-10 top-0 w-28 h-28 border border-white/40 rounded-xl"></div>
<div className="absolute right-0 top-0 w-24 h-24 border border-white/40 rounded-xl"></div>


        {/* CTA TEXT */}
        <div className="text-center relative z-10">
          <h2 className="text-white text-[30px] md:text-[42px] lg:text-[48px] leading-tight font-medium">
            Walk In or Book <br /> Online — We’re Ready
          </h2>

          <button className="mt-8 bg-white text-[#1F325C] px-8 py-3 rounded-full text-[16px] font-medium">
            Contact Now
          </button>
        </div>
      </div>



      {/* ===================== HEADING + CIRCLES ROW ===================== */}
<div className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

 <h3 className="ml-10 text-[#1F325C] text-[34px] md:text-[36px] lg:text-[44px] font-medium leading-tight">
  Compassion You Can <br />
  Feel, Care You Can Trust
</h3>


  {/* RIGHT CIRCLES */}
  <span className="mr-30 flex items-center bg-[#1F325C] rounded-full px-4 py-3">

    {[1, 2, 3].map((i) => (
      <span
        key={i}
        className="w-10 h-10 bg-[#EAF7F8] border-[3px] border-[#1F325C] rounded-full -ml-[6px] first:ml-0"
      />
    ))}

    {/* LAST CIRCLE WITH ARROW */}
    <span className="w-10 h-10 bg-[#E5F1F8] border-[3px] border-[#1F325C] rounded-full -ml-[6px] flex items-center justify-center">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1F325C"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M13 5l7 7-7 7" />
      </svg>
    </span>
  </span>
</div>




      {/* ===================== REVIEWS ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">

        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-transparent">
            
            {/* Stars */}
            <div className="flex gap-1 mb-3">
  {Array(5).fill().map((_, i) => (
    <span key={i} className="text-[#1F325C] text-xl">★</span>
  ))}
</div>


            {/* Description */}
            <p className="text-[#1F325C] text-[15px] leading-relaxed opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>

            {/* Name */}
            <p className="mt-4 text-[20px] text-[#1F325C] font-medium">Your Name</p>
            <p className="text-[14px] text-[#1F325C] opacity-70">Company Name</p>

            {/* Quote Icon */}
            <div className="flex justify-end mt-2">
              <span className="text-[#1F325C] text-3xl opacity-40">”</span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
