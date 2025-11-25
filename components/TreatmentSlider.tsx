"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Urbanist } from "next/font/google";

export const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function TreatmentSlider() {
    const [visible, setVisible] = useState(3);

    // Responsive card count
    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth < 640) {
                setVisible(1); // Mobile view
            } else if (window.innerWidth < 1024) {
                setVisible(2); // Tablet view
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
        { img: "/card1.png", heading: "Skin Treatment", desc },
        { img: "/card1.png", heading: "Skin Care", desc },
    ];

    const [index, setIndex] = useState(0);

    const prev = () =>
        setIndex((i) => (i - 1 + items.length) % items.length);

    const next = () =>
        setIndex((i) => (i + 1) % items.length);

    const offset = (index * 100) / visible;

    return (
        <section className={`${urbanist.className} w-full bg-[#fdeef1] py-8 md:py-12 px-4 sm:px-6 lg:px-16 rounded-lg`}>
            <div className="container mx-auto max-w-7xl">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-[#3A0A2A] mb-6 md:mb-8">
                    Best Skin Treatment in Hyderabad, Vijayawada
                </h2>

                {/* Slider */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${offset}%)`,
                        }}
                    >
                        {items.map((item, i) => (
                            <div
                                key={i}
                                className="rounded-2xl flex-shrink-0 p-3 md:p-4 flex flex-col relative bg-[#FFD4EE]"
                                style={{
                                    minWidth: `${100 / visible}%`,
                                    minHeight: "320px",
                                }}
                            >
                                {/* Image */}
                                <div className="w-full h-40 sm:h-48 md:h-52 rounded-xl overflow-hidden relative">
                                    <Image
                                        src={item.img}
                                        alt={item.heading}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Heading */}
                                <h3
                                    className="font-bold text-[#3A0A2A] mt-3"
                                    style={{
                                        fontFamily: "DM Sans",
                                        fontSize: "16px",
                                        lineHeight: "20px",
                                    }}
                                >
                                    {item.heading}
                                </h3>

                                {/* Description */}
                                <div
                                    className="text-[#3A0A2A] text-xs md:text-sm leading-relaxed mt-1 pr-1 overflow-hidden flex-grow"
                                    dangerouslySetInnerHTML={{ __html: item.desc }}
                                />

                                {/* Bottom-Right Arrow */}
                                <button
                                    className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#5C0038] flex items-center justify-center text-white absolute bottom-3 right-3 hover:opacity-90 transition"
                                    aria-label={`View details for ${item.heading}`}
                                >
                                    <span className="block transform -rotate-30">→</span>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Slider Nav Buttons */}
                    <div className="flex items-center justify-start gap-3 md:gap-4 mt-6 md:mt-8">
                        <button
                            onClick={prev}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-200 flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
                            aria-label="Previous slide"
                        >
                            <span className="text-[#6b2d3a] text-2xl md:text-3xl">←</span>
                        </button>

                        <button
                            onClick={next}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-200 flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
                            aria-label="Next slide"
                        >
                            <span className="text-[#6b2d3a] text-2xl md:text-3xl">→</span>
                        </button>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center mt-6 md:mt-8">
                        <button className="bg-[#350519] text-white px-8 md:px-12 py-3 md:py-4 rounded-full shadow-sm hover:opacity-90 transition text-sm md:text-base">
                            View Stories
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
