"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { navigationLinks, contactInfo } from "../data/content";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-[#EAF7F8] shadow-sm">
            <div className="border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
                    <div className="flex items-center justify-between h-20">
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

                        <nav className="hidden lg:flex items-center gap-1">
                            {navigationLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2 text-[#1A1A1A] hover:text-[#1F325C] hover:bg-[#EAF7F8] rounded-lg transition-all font-medium"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        <div className="hidden lg:flex items-center gap-3">
                            <button className="px-6 py-2.5 bg-[#1F325C] text-white rounded-full hover:bg-[#152340] transition-all font-medium shadow-sm hover:shadow-md">
                                Book Free Consultation
                            </button>
                        </div>

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

            {
                menuOpen && (
                    <div className="lg:hidden bg-white border-b border-gray-100 shadow-lg">
                        <div className="container mx-auto px-4 sm:px-6 py-4 space-y-1">
                            {navigationLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="block px-4 py-3 text-[#1A1A1A] hover:bg-[#EAF7F8] hover:text-[#1F325C] rounded-lg transition-all font-medium"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}

                            <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
                                <a href={`tel:${contactInfo.phones[1]}`} className="flex items-center gap-2 px-4 py-2 text-[#1F325C] hover:bg-[#EAF7F8] rounded-lg transition-all">
                                    <Phone className="w-4 h-4" />
                                    <span className="text-sm font-medium">{contactInfo.phones[1]}</span>
                                </a>
                                <a href={`tel:${contactInfo.phones[2]}`} className="flex items-center gap-2 px-4 py-2 text-[#1F325C] hover:bg-[#EAF7F8] rounded-lg transition-all">
                                    <Phone className="w-4 h-4" />
                                    <span className="text-sm font-medium">{contactInfo.phones[2]}</span>
                                </a>
                            </div>

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
                )
            }
        </header >
    );
}
