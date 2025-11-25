"use client";

import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function ReviewsSection() {
    return (
        <section className={`${urbanist.className} w-full bg-[#EAF7F8] px-4 md:px-10 lg:px-20 pb-12 md:pb-16 lg:pb-20`}>
            <div className="container mx-auto max-w-7xl">

                {/* ===================== HEADING + CIRCLES ROW ===================== */}
                <div className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                    <h3 className="text-[#1F325C] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-medium leading-tight text-center md:text-left">
                        Compassion You Can <br />
                        Feel, Care You Can Trust
                    </h3>

                    {/* RIGHT CIRCLES */}
                    <span className="flex items-center bg-[#1F325C] rounded-full px-3 md:px-4 py-2 md:py-3 w-max mx-auto md:mx-0">
                        {[1, 2, 3].map((i) => (
                            <span
                                key={i}
                                className="w-8 h-8 md:w-10 md:h-10 bg-[#EAF7F8] border-2 md:border-[3px] border-[#1F325C] rounded-full -ml-[6px] first:ml-0"
                            />
                        ))}

                        {/* LAST CIRCLE WITH ARROW */}
                        <span className="w-8 h-8 md:w-10 md:h-10 bg-[#E5F1F8] border-2 md:border-[3px] border-[#1F325C] rounded-full -ml-[6px] flex items-center justify-center">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#1F325C"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 md:w-[18px] md:h-[18px]"
                            >
                                <path d="M5 12h14" />
                                <path d="M13 5l7 7-7 7" />
                            </svg>
                        </span>
                    </span>
                </div>

                {/* ===================== REVIEWS ===================== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-transparent">

                            {/* Stars */}
                            <div className="flex gap-1 mb-3">
                                {Array(5).fill(0).map((_, i) => (
                                    <span key={i} className="text-[#1F325C] text-lg md:text-xl">★</span>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-[#1F325C] text-sm md:text-base leading-relaxed opacity-70">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>

                            {/* Name */}
                            <p className="mt-4 text-lg md:text-xl text-[#1F325C] font-medium">Your Name</p>
                            <p className="text-xs md:text-sm text-[#1F325C] opacity-70">Company Name</p>

                            {/* Quote Icon */}
                            <div className="flex justify-end mt-2">
                                <span className="text-[#1F325C] text-2xl md:text-3xl opacity-40">"</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
