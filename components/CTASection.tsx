"use client";

import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function CTASection() {
    return (
        <section className={`${urbanist.className} w-full bg-[#EAF7F8] pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-12 px-4 md:px-10 lg:px-20`}>
            <div className="container mx-auto max-w-7xl">

                {/* ===================== CTA BOX ===================== */}
                <div className="w-full bg-[#1F325C] rounded-xl py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">

                    {/* LEFT SIDE DECOR SHAPES (DIAGONAL) - Hidden on small screens */}
                    <div className="hidden md:block absolute left-0 bottom-10 w-24 lg:w-32 h-24 lg:h-32 border border-white/40 rounded-xl"></div>
                    <div className="hidden md:block absolute left-6 lg:left-10 bottom-0 w-20 lg:w-28 h-20 lg:h-28 border border-white/40 rounded-xl"></div>
                    <div className="hidden md:block absolute left-0 bottom-0 w-16 lg:w-24 h-16 lg:h-24 border border-white/40 rounded-xl"></div>

                    {/* RIGHT SIDE DECOR SHAPES (DIAGONAL MIRROR) - Hidden on small screens */}
                    <div className="hidden md:block absolute right-6 lg:right-10 top-6 lg:top-10 w-24 lg:w-32 h-24 lg:h-32 border border-white/40 rounded-xl"></div>
                    <div className="hidden md:block absolute right-6 lg:right-10 top-0 w-20 lg:w-28 h-20 lg:h-28 border border-white/40 rounded-xl"></div>
                    <div className="hidden md:block absolute right-0 top-0 w-16 lg:w-24 h-16 lg:h-24 border border-white/40 rounded-xl"></div>

                    {/* CTA TEXT */}
                    <div className="text-center relative z-10">
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium">
                            Book Your Free <br className="hidden sm:block" /> Consultation Today
                        </h2>

                        <p className="text-white/90 text-sm md:text-base mt-4 max-w-2xl mx-auto">
                            Experience world-class cosmetic care at Amista Clinic. Our expert team is ready to help you achieve your beauty goals.
                        </p>

                        <button className="mt-6 md:mt-8 bg-white text-[#1F325C] px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-gray-50 transition">
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
