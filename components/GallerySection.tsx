import { Sparkles } from "lucide-react";
import { galleryHeroSection } from '../data/content';
import Image from 'next/image';

export default function GallerySection() {
    return (
        <section className="min-h-screen bg-[#FDEFF1] flex flex-col items-center text-gray-900">
            <header className="w-full max-w-6xl mx-auto pt-10 text-center">
                <div className="text-xs tracking-widest text-[#5b2b35]">{galleryHeroSection.welcomeLabel}</div>
                <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-normal text-black tracking-tight font-['Georgia']">{galleryHeroSection.heading}</h2>
                <p className="mt-4 text-base max-w-2xl mx-auto text-gray-700">{galleryHeroSection.description}</p>
            </header>

            <div className="w-full max-w-6xl mx-auto mt-12 relative px-6">
                <div className="absolute inset-0 flex justify-center pointer-events-none">
                    <Image
                        src="/wave.svg"
                        alt=""
                        width={1200}
                        height={420}
                        className="w-[1200px] h-[420px]"
                    />
                </div>

                <div className="relative z-10 flex items-end justify-center gap-6 md:gap-10 lg:gap-14">
                    <article className="w-40 md:w-52 lg:w-56 bg-white rounded-xl overflow-hidden shadow-sm transform -translate-y-6">
                        <img src={galleryHeroSection.images[0]} alt="Amista treatment 1" className="w-full h-[360px] object-cover" />
                    </article>
                    <article className="w-44 md:w-56 lg:w-60 bg-white rounded-xl overflow-hidden shadow-sm -translate-y-12">
                        <img src={galleryHeroSection.images[1]} alt="Amista treatment 2" className="w-full h-[400px] object-cover" />
                    </article>
                    <article className="w-40 md:w-52 lg:w-56 bg-white rounded-xl overflow-hidden shadow-sm -translate-y-4">
                        <img src={galleryHeroSection.images[2]} alt="Amista treatment 3" className="w-full h-[360px] object-cover" />
                    </article>
                    <article className="w-44 md:w-56 lg:w-60 bg-white rounded-xl overflow-hidden shadow-sm -translate-y-8">
                        <img src={galleryHeroSection.images[3]} alt="Amista treatment 4" className="w-full h-[420px] object-cover" />
                    </article>
                </div>
            </div>

            <div className="w-full max-w-5xl mx-auto mt-16 mb-20 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    {galleryHeroSection.stats.map((stat, i) => (
                        <div
                            key={i}
                            className="relative px-8 py-10 text-center group"
                        >
                            {/* Divider line - hide on last item for mobile, hide on last item for desktop */}
                            {i < galleryHeroSection.stats.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                            )}

                            <div className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2f2b30] mb-3 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm uppercase tracking-widest text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
