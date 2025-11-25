import { ArrowRight, Heart } from 'lucide-react';
import { dualAboutSection } from '../data/content';
import DecorativeFrame from './DecorativeFrame';
import Image from 'next/image';

export default function FeaturesSection() {
    return (
        <section className="min-h-screen bg-rose-50 flex items-center justify-center">
            <div className="max-w-6xl w-full px-8 py-20 grid grid-cols-12 gap-8">
                <div className="col-span-5 flex items-center justify-center">
                    <DecorativeFrame src="/Images.png" alt="Amista clinic" size={360} rotateRight={true} />
                </div>

                <div className="col-span-7 flex flex-col justify-center">
                    <p className="text-xs text-[#6b4250] tracking-wider uppercase">{dualAboutSection.firstSection.label}</p>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-normal text-black tracking-tight font-['Georgia']">{dualAboutSection.firstSection.heading}</h2>
                    {dualAboutSection.firstSection.paragraphs.map((para, i) => (
                        <p key={i} className="mt-4 text-sm text-[#3c3838] max-w-xl leading-relaxed">{para}</p>
                    ))}
                    <button className="mt-6 w-[120px] h-10 border border-[#4a1220] rounded-md text-[#4a1220] flex items-center justify-center gap-2 hover:bg-[#4a1220] hover:text-white transition">
                        {dualAboutSection.firstSection.buttonText} <ArrowRight size={14} />
                    </button>
                </div>

                <div className="col-span-12 flex items-center justify-center my-12">
                    <Image src="/swirl.svg" alt="" width={200} height={200} />
                </div>

                <div className="col-span-7 order-2 flex flex-col justify-center">
                    <p className="text-xs text-[#6b4250] tracking-wider uppercase">{dualAboutSection.secondSection.label}</p>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-normal text-black tracking-tight font-['Georgia']">{dualAboutSection.secondSection.heading}</h2>
                    {dualAboutSection.secondSection.paragraphs.map((para, i) => (
                        <p key={i} className="mt-4 text-sm text-[#3c3838] max-w-lg leading-relaxed">{para}</p>
                    ))}
                    <button className="mt-6 w-[120px] h-10 border border-[#4a1220] rounded-md text-[#4a1220] flex items-center justify-center gap-2 hover:bg-[#4a1220] hover:text-white transition">
                        {dualAboutSection.secondSection.buttonText} <Heart size={14} />
                    </button>
                </div>

                <div className="col-span-5 order-3 flex items-center justify-center">
                    <DecorativeFrame src="/hero.png" alt="Amista treatments" size={380} rotateRight={false} />
                </div>
            </div>
        </section>
    );
}
