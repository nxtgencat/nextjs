"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { navigationLinks, contactInfo, footerServices, socialLinks, footerHeadings } from "../data/content";

export default function Footer() {
    return (
        <footer className="bg-[#1F325C] text-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    <div className="space-y-4">
                        <Image
                            src="/logo.svg"
                            alt="Amista Cosmetology Clinic"
                            width={140}
                            height={45}
                            className="object-contain w-32 h-auto brightness-0 invert"
                        />
                        <p className="text-white/80 text-sm leading-relaxed">
                            {footerHeadings.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">{footerHeadings.quickLinks}</h3>
                        <ul className="space-y-2">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">{footerHeadings.services}</h3>
                        <ul className="space-y-2">
                            {footerServices.map((service, index) => (
                                <li key={index}>
                                    <Link href={service.href} className="text-white/80 hover:text-white transition-colors text-sm">
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">{footerHeadings.contact}</h3>
                        <ul className="space-y-3">
                            {contactInfo.phones.map((phone) => (
                                <li key={phone}>
                                    <a href={`tel:${phone}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                                        <Phone className="w-4 h-4 flex-shrink-0" />
                                        <span>{phone}</span>
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                                    <Mail className="w-4 h-4 flex-shrink-0" />
                                    <span className="break-all">{contactInfo.email}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                    <h3 className="text-lg font-semibold mb-6">Our Locations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactInfo.locations.map((location, index) => (
                            <div key={index} className="space-y-2">
                                <h4 className="font-medium text-white">{location.name}</h4>
                                <div className="flex items-start gap-2 text-white/80 text-sm">
                                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <p>{location.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link
                            href={socialLinks[0].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-4 h-4" />
                        </Link>
                        <Link
                            href={socialLinks[1].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-4 h-4" />
                        </Link>
                        <Link
                            href={socialLinks[2].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-4 h-4" />
                        </Link>
                        <Link
                            href={socialLinks[3].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-4 h-4" />
                        </Link>
                        <Link
                            href={socialLinks[4].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube className="w-4 h-4" />
                        </Link>
                    </div>

                    <p className="text-white/60 text-sm">
                        © {new Date().getFullYear()} Amista Clinics. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
