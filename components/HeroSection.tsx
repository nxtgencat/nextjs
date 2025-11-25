"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { heroContent } from "../data/content";
import CircleGroup from "./AvatarDock";

export default function HeroSection() {
    return (
        <section className="bg-[#EAF7F8] overflow-hidden">
            <div className="pt-6 md:pt-8 pb-12 md:pb-16 lg:pb-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-medium text-[#1A1A1A]">
                                Get Radiant{" "}
                                <span className="inline-flex items-center gap-2 align-middle">
                                    <CircleGroup images={["/hero.png", "/small.png", "/red.png"]} />
                                    Looking Skin
                                </span>
                                <br />
                                {heroContent.subheading}
                            </h1>

                            <p className="text-[#6A6A6A] mt-4 md:mt-6 max-w-lg mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
                                {heroContent.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-6 md:mt-10 justify-center lg:justify-start">
                                <button className="px-8 md:px-10 py-2.5 md:py-3 bg-[#1F325C] text-white rounded-full text-sm md:text-base hover:opacity-90 transition">
                                    {heroContent.buttons.primary}
                                </button>
                                <button className="px-8 md:px-10 py-2.5 md:py-3 border border-[#1F325C] text-[#1F325C] rounded-full text-sm md:text-base hover:bg-[#f0f4fb] transition">
                                    {heroContent.buttons.secondary}
                                </button>
                            </div>

                            <div className="flex gap-8 md:gap-12 lg:gap-16 mt-10 md:mt-14 justify-center lg:justify-start">
                                {heroContent.stats.map((stat, index) => (
                                    <div key={index}>
                                        <p className="text-2xl md:text-3xl font-medium text-[#1A1A1A]">{stat.value}</p>
                                        <p className="text-[#6A6A6A] text-xs md:text-sm">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative max-w-md mx-auto lg:max-w-none">
                            <div className="rounded-3xl overflow-hidden shadow-xl bg-white w-full max-w-[420px] mx-auto aspect-[420/550]">
                                <Image
                                    src="/hero.png"
                                    alt="Amista Cosmetology Clinic"
                                    width={420}
                                    height={550}
                                    className="object-cover w-full h-full"
                                />
                            </div>

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
                                    <p className="text-sm font-medium text-[#1A1A1A] truncate">{heroContent.floatingCards.expertCard.title}</p>
                                    <p className="text-xs text-[#6A6A6A] truncate">{heroContent.floatingCards.expertCard.subtitle}</p>
                                </div>

                                <div className="w-8 h-8 bg-[#1F325C] rounded-full flex items-center justify-center flex-shrink-0">
                                    <ArrowUpRight className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            <div className="mt-6 md:mt-0 md:absolute md:bottom-0 lg:-bottom-8 xl:-bottom-10 left-1/2 md:-translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 md:p-5 lg:p-6 w-full max-w-[380px] flex justify-between items-center gap-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-base md:text-lg font-semibold text-[#1A1A1A]">
                                        {heroContent.floatingCards.treatmentCard.title}
                                    </p>
                                    <p className="text-xs md:text-sm text-[#6A6A6A] mt-1 line-clamp-2">
                                        {heroContent.floatingCards.treatmentCard.description}
                                    </p>

                                    <div className="flex gap-4 md:gap-6 mt-2 text-xs md:text-sm text-[#6A6A6A]">
                                        {heroContent.floatingCards.treatmentCard.tags.map((tag, index) => (
                                            <span key={index}>{tag}</span>
                                        ))}
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

            <div className="hidden md:block h-12 lg:h-16 xl:h-20" />
        </section>
    );
}
