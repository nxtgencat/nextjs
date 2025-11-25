"use client";

import Image from "next/image";
import Link from "next/link";
import { Urbanist } from "next/font/google";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function Footer() {
    return (
        <footer className={`${urbanist.className} bg-[#1F325C] text-white`}>
            <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl py-12 md:py-16">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Image
                            src="/logo.svg"
                            alt="Amista Cosmetology Clinic"
                            width={140}
                            height={45}
                            className="object-contain w-32 h-auto brightness-0 invert"
                        />
                        <p className="text-white/80 text-sm leading-relaxed">
                            Premier cosmetology clinic offering advanced skin, hair & cosmetic treatments with expert care and US-FDA approved equipment.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#home" className="text-white/80 hover:text-white transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-white/80 hover:text-white transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-white/80 hover:text-white transition-colors text-sm">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#treatments" className="text-white/80 hover:text-white transition-colors text-sm">
                                    Treatments
                                </Link>
                            </li>
                            <li>
                                <Link href="#testimonials" className="text-white/80 hover:text-white transition-colors text-sm">
                                    Testimonials
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                                    Hair Treatments
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                                    Skin Treatments
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                                    Permanent Makeup
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                                    Laser Treatments
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                                    Body Slimming
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="tel:+917660003377" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                                    <Phone className="w-4 h-4 flex-shrink-0" />
                                    <span>+91-7660003377</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+917660003381" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                                    <Phone className="w-4 h-4 flex-shrink-0" />
                                    <span>+91-7660003381</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+917660003383" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                                    <Phone className="w-4 h-4 flex-shrink-0" />
                                    <span>+91-7660003383</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:clients.amistagroup@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                                    <Mail className="w-4 h-4 flex-shrink-0" />
                                    <span className="break-all">clients.amistagroup@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Clinic Locations */}
                <div className="mt-10 pt-8 border-t border-white/10">
                    <h3 className="text-lg font-semibold mb-6">Our Locations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Banjara Hills */}
                        <div className="space-y-2">
                            <h4 className="font-medium text-white">Amista - Banjara Hills</h4>
                            <div className="flex items-start gap-2 text-white/80 text-sm">
                                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <p>
                                    8-2-626/A, 2nd Floor, MS Tower, Rd Number 1, above SBI bank, Avenue 4, Banjara Hills, Hyderabad, Telangana - 500034
                                </p>
                            </div>
                        </div>

                        {/* Vijayawada */}
                        <div className="space-y-2">
                            <h4 className="font-medium text-white">Amista - Vijayawada</h4>
                            <div className="flex items-start gap-2 text-white/80 text-sm">
                                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <p>
                                    29-28/1-32B, 2nd Floor, ICICI Bank building, Venkateswara Complex, Komelavadi Veedhi, Eluru Rd, opposite Indian Oil Petrol Bunk, Seetharampuram, Signals, Vijayawada, Andhra Pradesh 520002
                                </p>
                            </div>
                        </div>

                        {/* Manikonda */}
                        <div className="space-y-2">
                            <h4 className="font-medium text-white">Amista - Manikonda</h4>
                            <div className="flex items-start gap-2 text-white/80 text-sm">
                                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <p>
                                    2nd Floor, Abhinandana Jewel, 201, Lanco Hills Rd, adjacent to SBI Bank, Muppas Panchavati Colony, Manikonda, Hyderabad, Telangana 500008
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Social Media Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.facebook.com/amistabeautyclinic/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a
                            href="https://www.instagram.com/amistaclinics"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a
                            href="https://twitter.com/amistaclinic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/amista-beauty-clinic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCNeTs5F7QzJkPg23kEsAp5w"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-white/60 text-sm">
                        © {new Date().getFullYear()} Amista Clinics. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
