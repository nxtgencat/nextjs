"use client";

import Image from "next/image";
import { useState } from "react";
import { Urbanist } from "next/font/google";
import { Phone, MapPin, Menu, X } from "lucide-react";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={`${urbanist.className} w-full bg-white shadow-sm`}>
            {/* Top Bar - Hidden on mobile */}
            <div className="hidden lg:block bg-[#1F325C] text-white py-2">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-6">
                            <a href="tel:+917660003381" className="flex items-center gap-2 hover:text-[#EAF7F8] transition-colors">
                                <Phone className="w-4 h-4" />
                                <span>+91-7660003381</span>
                            </a>
                            <a href="tel:+917660003383" className="flex items-center gap-2 hover:text-[#EAF7F8] transition-colors">
                                <Phone className="w-4 h-4" />
                                <span>+91-7660003383</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>Banjara Hills, Hyderabad | Vijayawada | Manikonda</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
                    <div className="flex items-center justify-between h-20">

                        {/* Logo */}
                        <a href="/" className="flex-shrink-0">
                            <Image
                                src="/logo.svg"
                                alt="Amista Cosmetology Clinic"
                                width={140}
                                height={45}
                                className="object-contain w-28 sm:w-32 md:w-36 h-auto"
                                priority
                            />
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            <a href="#home" className="px-4 py-2 text-[#1A1A1A] hover:text-[#1F325C] hover:bg-[#EAF7F8] rounded-lg transition-all font-medium">
                                Home
                            </a>
                            <a href="#services" className="px-4 py-2 text-[#1A1A1A] hover:text-[#1F325C] hover:bg-[#EAF7F8] rounded-lg transition-all font-medium">
                                Services
                            </a>
                            <a href="#about" className="px-4 py-2 text-[#1A1A1A] hover:text-[#1F325C] hover:bg-[#EAF7F8] rounded-lg transition-all font-medium">
                                About Us
                            </a>
                            <a href="#treatments" className="px-4 py-2 text-[#1A1A1A] hover:text-[#1F325C] hover:bg-[#EAF7F8] rounded-lg transition-all font-medium">
                                Treatments
                            </a>
                            <a href="#testimonials" className="px-4 py-2 text-[#1A1A1A] hover:text-[#1F325C] hover:bg-[#EAF7F8] rounded-lg transition-all font-medium">
                                Testimonials
                            </a>
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center gap-3">
                            <button className="px-6 py-2.5 bg-[#1F325C] text-white rounded-full hover:bg-[#152340] transition-all font-medium shadow-sm hover:shadow-md">
                                Book Free Consultation
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                <X className="w-6 h-6 text-[#1A1A1A]" />
                            ) : (
                                <Menu className="w-6 h-6 text-[#1A1A1A]" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-white border-b border-gray-100 shadow-lg">
                    <div className="container mx-auto px-4 sm:px-6 py-4 space-y-1">
                        <a
                            href="#home"
                            className="block px-4 py-3 text-[#1A1A1A] hover:bg-[#EAF7F8] hover:text-[#1F325C] rounded-lg transition-all font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="#services"
                            className="block px-4 py-3 text-[#1A1A1A] hover:bg-[#EAF7F8] hover:text-[#1F325C] rounded-lg transition-all font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            Services
                        </a>
                        <a
                            href="#about"
                            className="block px-4 py-3 text-[#1A1A1A] hover:bg-[#EAF7F8] hover:text-[#1F325C] rounded-lg transition-all font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            About Us
                        </a>
                        <a
                            href="#treatments"
                            className="block px-4 py-3 text-[#1A1A1A] hover:bg-[#EAF7F8] hover:text-[#1F325C] rounded-lg transition-all font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            Treatments
                        </a>
                        <a
                            href="#testimonials"
                            className="block px-4 py-3 text-[#1A1A1A] hover:bg-[#EAF7F8] hover:text-[#1F325C] rounded-lg transition-all font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            Testimonials
                        </a>

                        {/* Mobile Contact Info */}
                        <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
                            <a href="tel:+917660003381" className="flex items-center gap-2 px-4 py-2 text-[#1F325C] hover:bg-[#EAF7F8] rounded-lg transition-all">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm font-medium">+91-7660003381</span>
                            </a>
                            <a href="tel:+917660003383" className="flex items-center gap-2 px-4 py-2 text-[#1F325C] hover:bg-[#EAF7F8] rounded-lg transition-all">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm font-medium">+91-7660003383</span>
                            </a>
                        </div>

                        {/* Mobile CTA */}
                        <div className="pt-2">
                            <button
                                className="w-full px-6 py-3 bg-[#1F325C] text-white rounded-lg hover:bg-[#152340] transition-all font-medium"
                                onClick={() => setMenuOpen(false)}
                            >
                                Book Free Consultation
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
