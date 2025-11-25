"use client";

import Image from "next/image";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function HeroSection() {
    return (
        <section className={`${urbanist.className} bg-[#EAF7F8] overflow-hidden`}>
            {/* ================= HERO SECTION ================= */}
            <div className="pt-6 md:pt-8 pb-12 md:pb-16 lg:pb-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-center">

                        {/* LEFT CONTENT */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-medium text-[#1A1A1A]">
                                Get Radiant{" "}

                                <span className="inline-flex items-center gap-2 align-middle">
                                    {/* Circles Container */}
                                    <span className="flex items-center bg-[#1F325C] rounded-full px-2 md:px-3 py-1 md:py-2">
                                        {[1, 2, 3].map((i) => (
                                            <span
                                                key={i}
                                                className="w-6 h-6 md:w-8 md:h-8 bg-[#EAF7F8] border-2 md:border-[3px] border-[#1F325C] rounded-full -ml-[3px] first:ml-0"
                                            />
                                        ))}

                                        {/* LAST CIRCLE WITH ARROW */}
                                        <span className="w-6 h-6 md:w-8 md:h-8 bg-[#E5F1F8] border-2 md:border-[3px] border-[#1F325C] rounded-full -ml-[3px] flex items-center justify-center">
                                            <svg
                                                width="11"
                                                height="11"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#1F325C"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-2.5 h-2.5 md:w-3 md:h-3"
                                            >
                                                <path d="M7 17L17 7M17 7H9M17 7V15" />
                                            </svg>
                                        </span>
                                    </span>

                                    Looking Skin
                                </span>

                                <br />
                                With Expert Care
                            </h1>

                            <p className="text-[#6A6A6A] mt-4 md:mt-6 max-w-lg mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
                                Experience premium skin, hair, and cosmetic treatments at Amista Cosmetology Clinic. Your trusted partner for advanced dermatology and aesthetic solutions in Hyderabad and Vijayawada.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-6 md:mt-10 justify-center lg:justify-start">
                                <button className="px-8 md:px-10 py-2.5 md:py-3 bg-[#1F325C] text-white rounded-full text-sm md:text-base hover:opacity-90 transition">
                                    Explore Services
                                </button>
                                <button className="px-8 md:px-10 py-2.5 md:py-3 border border-[#1F325C] text-[#1F325C] rounded-full text-sm md:text-base hover:bg-[#f0f4fb] transition">
                                    Book Free Consultation
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-8 md:gap-12 lg:gap-16 mt-10 md:mt-14 justify-center lg:justify-start">
                                <div>
                                    <p className="text-2xl md:text-3xl font-medium text-[#1A1A1A]">100+</p>
                                    <p className="text-[#6A6A6A] text-xs md:text-sm">Treatment Options</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-3xl font-medium text-[#1A1A1A]">1000+</p>
                                    <p className="text-[#6A6A6A] text-xs md:text-sm">Happy Clients</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT IMAGE SECTION */}
                        <div className="relative max-w-md mx-auto lg:max-w-none">
                            {/* Main Image */}
                            <div className="rounded-3xl overflow-hidden shadow-xl bg-white w-full max-w-[420px] mx-auto aspect-[420/550]">
                                <Image
                                    src="/hero.png"
                                    alt="Amista Cosmetology Clinic"
                                    width={420}
                                    height={550}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Floating Side Card - Hidden on mobile */}
                            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 lg:-right-4 xl:right-6 bg-white rounded-2xl shadow-lg px-4 lg:px-5 py-3 items-center gap-3 w-52 lg:w-60">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden flex-shrink-0">
                                    <Image
                                        src="/hero.png"
                                        width={48}
                                        height={48}
                                        alt="Dermatologist"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-[#1A1A1A] truncate">Expert Dermatologist</p>
                                    <p className="text-xs text-[#6A6A6A] truncate">Certified Specialist</p>
                                </div>

                                <div className="w-8 h-8 bg-[#1F325C] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg
                                        width="11"
                                        height="11"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M7 17L17 7M17 7H9M17 7V15" />
                                    </svg>
                                </div>
                            </div>

                            {/* Bottom Card */}
                            <div className="mt-6 md:mt-0 md:absolute md:bottom-0 lg:-bottom-8 xl:-bottom-10 left-1/2 md:-translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 md:p-5 lg:p-6 w-full max-w-[380px] flex justify-between items-center gap-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-base md:text-lg font-semibold text-[#1A1A1A]">
                                        Advanced Skin Treatments
                                    </p>
                                    <p className="text-xs md:text-sm text-[#6A6A6A] mt-1 line-clamp-2">
                                        Experience cutting-edge dermatology treatments
                                    </p>

                                    <div className="flex gap-4 md:gap-6 mt-2 text-xs md:text-sm text-[#6A6A6A]">
                                        <span>Laser Therapy</span>
                                        <span>Anti-Aging</span>
                                    </div>
                                </div>

                                <Image
                                    src="/Images.png"
                                    width={70}
                                    height={70}
                                    className="rounded-xl object-cover w-16 h-16 md:w-[70px] md:h-[70px] flex-shrink-0"
                                    alt="Treatment preview"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Add extra padding at bottom for absolutely positioned bottom card */}
            <div className="hidden md:block h-12 lg:h-16 xl:h-20" />
        </section>
    );
}
