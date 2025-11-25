"use client";

import { ArrowRight } from "lucide-react";
import { reviewsData } from "../data/content";
import CircleGroup from "./AvatarDock";

export default function WhyChooseSection() {
    return (
        <section className="w-full bg-[#EAF7F8] px-4 md:px-10 lg:px-20 pb-12 md:pb-16 lg:pb-20">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <h3 className="text-[#1F325C] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-medium leading-tight text-center md:text-left whitespace-pre-line">
                        {reviewsData.heading}
                    </h3>

                    <CircleGroup images={["/hero.png", "/Images.png", "/small.png"]} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
                    {reviewsData.testimonials.map((testimonial: { name: string; location: string; review: string }, i: number) => (
                        <div key={i} className="bg-transparent">
                            <div className="flex gap-1 mb-3">
                                {Array(5).fill(0).map((_, i: number) => (
                                    <span key={i} className="text-[#1F325C] text-lg md:text-xl">★</span>
                                ))}
                            </div>

                            <p className="text-[#1F325C] text-sm md:text-base leading-relaxed opacity-70">
                                {testimonial.review}
                            </p>

                            <p className="mt-4 text-lg md:text-xl text-[#1F325C] font-medium">{testimonial.name}</p>
                            <p className="text-xs md:text-sm text-[#1F325C] opacity-70">{testimonial.location}</p>

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
