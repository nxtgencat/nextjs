"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function SkinTreatmentSlider() {
  const [visible, setVisible] = useState(3);

  // ⭐ Responsive card count (fixes mobile sliding issue)
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisible(1); // Mobile view
      } else {
        setVisible(3); // Desktop view
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const desc = `
    Skin breakouts refer to the appearance of pimples,<br/>
    blackheads,<br/>
    whiteheads,<br/>
    or other blemishes on the skin.<br/>
  `;

  const items = [
    { img: "/Images.png", heading: "Skin Breakouts", desc },
    { img: "/Images.png", heading: "Skin Rejuvenation", desc },
    { img: "/Images.png", heading: "Coming Soon", desc },
    { img: "/card1.png", heading: "Skin", desc },
    { img: "/card1.png", heading: "Skin", desc },
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + items.length) % items.length);

  const next = () =>
    setIndex((i) => (i + 1) % items.length);

  const offset = (index * 100) / visible;

  return (
    <section className="w-full bg-[#fdeef1] py-12 px-6 lg:px-16 rounded-lg">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <h2 className="text-[56px] leading-[64px] font-medium text-[#3A0A2A]">
          Best Skin Treatment in Hyderabad, Vijayawada
        </h2>

        {/* Slider */}
        <div className="mt-8 relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${offset}%)`,
            }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl flex-shrink-0 p-3 flex flex-col relative"
                style={{
                  minWidth: `${100 / visible}%`,
                  height: "350px",
                  backgroundColor: "#FFD4EE",
                }}
              >
                {/* Image */}
                <div className="w-full h-[200px] rounded-xl overflow-hidden relative">
                  <Image
                    src={item.img}
                    alt={item.heading}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Heading */}
                <h3
                  className="font-bold text-[#3A0A2A] mt-2"
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "18px",
                    lineHeight: "22px",
                  }}
                >
                  {item.heading}
                </h3>

                {/* Description */}
                <div
                  className="text-[#3A0A2A] text-[14px] leading-[18px] mt-1 pr-1 overflow-hidden"
                  style={{ flexGrow: 1 }}
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />

                {/* ⭐ Bottom-Right Arrow (No Layout Break) */}
                <button
                  className="w-9 h-9 rounded-full bg-[#5C0038] flex items-center justify-center text-white absolute bottom-3 right-3"
                >
                  <span className="block transform -rotate-30">→</span>
                </button>
              </div>
            ))}
          </div>

          {/* Slider Nav Buttons */}
          <div className="flex items-center justify-start gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center shadow-sm hover:scale-[1.03]"
            >
              <span className="text-[#6b2d3a] text-3xl">←</span>
            </button>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center shadow-sm hover:scale-[1.03]"
            >
              <span className="text-[#6b2d3a] text-3xl">→</span>
            </button>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-8">
            <button className="bg-[#350519] text-white px-12 py-4 rounded-full shadow-sm">
              View Stories
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .flex > div[style] {
            min-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
