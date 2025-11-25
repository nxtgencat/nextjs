"use client";

import { ArrowRight } from "lucide-react";
import { reviewsData } from "../data/content";
import CircleGroup from "./AvatarDock";

export default function TestimonialsSection() {
    return (
        <section className="w-full bg-[#EAF7F8] px-5 py-10 md:px-10 lg:px-35 md:py-16 lg:py-20">
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
        </section>
    );
}
