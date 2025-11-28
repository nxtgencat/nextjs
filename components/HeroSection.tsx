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
                        {/* Left Side - Content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-black tracking-tight font-['Georgia'] leading-tight">
                                {heroContent.heading}
                                <br />
                                {heroContent.subheading}
                            </h1>

                            <div className="flex justify-center lg:justify-start mt-4 md:mt-6">
                                <a href="../components/ServiceGrid" aria-label="Explore our services">
                                <CircleGroup images={["/hero.png", "/small.png", "/red.png"]} />
                                </a>
                            </div>

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

                        {/* Right Side - Image with Floating Cards */}
                        <div className="relative max-w-2xl mx-auto lg:max-w-none h-full">
                            {/* Main Image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white w-full max-w-[600px] h-full mx-auto">
                                <Image
                                    src="/hero.png"
                                    alt="Amista Cosmetology Clinic"
                                    width={600}
                                    height={750}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Expert Card - Left Side Middle */}
                            <div className="hidden lg:flex absolute top-1/3 -left-6 xl:-left-12 bg-white rounded-2xl shadow-2xl px-4 py-3.5 items-center gap-3 w-56 border border-gray-100">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#EAF7F8]">
                                    <Image
                                        src="/hero.png"
                                        width={48}
                                        height={48}
                                        alt="Expert Cosmetologist"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-[#1A1A1A] truncate leading-tight">{heroContent.floatingCards.expertCard.title}</p>
                                    <p className="text-xs text-[#6A6A6A] truncate mt-1">{heroContent.floatingCards.expertCard.subtitle}</p>
                                </div>

                                <div className="w-8 h-8 bg-[#1F325C] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#152340] transition-colors cursor-pointer">
                                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                                </div>
                            </div>

                            {/* Treatment Card - Bottom Center (Compact) */}
                            <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-8 xl:-bottom-10 left-1/2 lg:-translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 w-full max-w-[380px] border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/Images.png"
                                        width={64}
                                        height={64}
                                        className="rounded-lg object-cover w-16 h-16 flex-shrink-0 ring-2 ring-gray-100"
                                        alt="Treatment preview"
                                    />

                                    <div className="flex-1 min-w-0">
                                        <p className="text-base font-bold text-[#1A1A1A] leading-tight">
                                            {heroContent.floatingCards.treatmentCard.title}
                                        </p>
                                        <p className="text-xs text-[#6A6A6A] mt-1.5 line-clamp-2 leading-relaxed">
                                            {heroContent.floatingCards.treatmentCard.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                            {heroContent.floatingCards.treatmentCard.tags.map((tag, index) => (
                                                <span key={index} className="text-[10px] px-2.5 py-1 bg-[#EAF7F8] text-[#1F325C] rounded-full font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:block h-12 lg:h-16 xl:h-20" />
        </section>
    );
}
