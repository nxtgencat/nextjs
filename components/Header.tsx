"use client";

import Image from "next/image";
import { useState } from "react";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={`${urbanist.className} w-full py-4 md:py-6 relative z-50`}>
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl flex items-center justify-between">

                {/* LOGO */}
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={130}
                    height={40}
                    className="object-contain w-24 sm:w-28 md:w-32 h-auto"
                />

                {/* DESKTOP MENU */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm lg:text-base text-[#1A1A1A] font-medium">
                    <a href="#" className="hover:text-[#1F325C] transition-colors">Home</a>
                    <a href="#" className="hover:text-[#1F325C] transition-colors">About</a>
                    <a href="#" className="hover:text-[#1F325C] transition-colors">Why Choose</a>
                    <a href="#" className="hover:text-[#1F325C] transition-colors">Testimonial</a>
                    <a href="#" className="hover:text-[#1F325C] transition-colors">FAQs</a>

                    <button className="px-5 lg:px-7 py-2 bg-[#1F325C] text-white rounded-full hover:opacity-90 transition text-sm lg:text-base">
                        Contact Us
                    </button>
                </nav>

                {/* HAMBURGER (MOBILE) */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1A1A1A"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-xl rounded-xl mx-4 sm:mx-6 mt-4 p-6 flex flex-col gap-5 text-base font-medium text-[#1A1A1A]">
                    <a href="#" className="py-1 hover:text-[#1F325C] transition-colors">Home</a>
                    <a href="#" className="py-1 hover:text-[#1F325C] transition-colors">About</a>
                    <a href="#" className="py-1 hover:text-[#1F325C] transition-colors">Why Choose</a>
                    <a href="#" className="py-1 hover:text-[#1F325C] transition-colors">Testimonial</a>
                    <a href="#" className="py-1 hover:text-[#1F325C] transition-colors">FAQs</a>

                    <button className="px-7 py-2 bg-[#1F325C] text-white rounded-full w-max mt-2 hover:opacity-90 transition">
                        Contact Us
                    </button>
                </div>
            )}
        </header>
    );
}
