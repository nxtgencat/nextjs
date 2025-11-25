import { Sparkles } from "lucide-react";
import { galleryHeroSection } from '../data/content';
import Image from 'next/image';

export default function PhotoGallerySection() {
    return (
        <section className="min-h-screen bg-[#FDEFF1] flex flex-col items-center text-gray-900">
            <header className="w-full max-w-6xl mx-auto pt-10 text-center">
                <div className="text-xs tracking-widest text-[#5b2b35]">{galleryHeroSection.welcomeLabel}</div>
                <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-tight font-medium">{galleryHeroSection.heading}</h2>
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

            <div className="w-full max-w-6xl mx-auto mt-20 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-8">
                    {galleryHeroSection.stats.map((stat, i) => (
                        <div key={i}>
                            <div className="text-4xl md:text-5xl font-bold text-[#2f2b30]">{stat.value}</div>
                            <div className="mt-2 text-sm text-gray-700">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="w-full max-w-6xl mx-auto py-8 text-center text-sm text-gray-600 flex items-center justify-center gap-2">
                <Sparkles size={18} />
                <span>Amista Cosmetology Clinic</span>
            </footer>
        </section>
    );
}
