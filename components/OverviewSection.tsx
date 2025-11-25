import Image from "next/image";
import { aboutContent } from "../data/content";

export default function OverviewSection() {
    return (
        <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24 bg-[#F9F7F4]">
            <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-12">

                {/* Main Image */}
                <Image
                    src="/Images.png"
                    alt="Amista Cosmetology Clinic facility"
                    width={450}
                    height={350}
                    className="order-2 lg:order-1 rounded-2xl object-cover w-full max-w-md lg:max-w-lg h-auto mx-auto lg:ml-auto"
                />

                {/* Content Side */}
                <div className="order-1 lg:order-2 space-y-6">
                    {/* Small Images */}
                    <div className="flex items-end gap-4 md:gap-6 justify-center lg:justify-start">
                        <Image
                            src="/small.png"
                            alt="Advanced equipment"
                            width={300}
                            height={200}
                            className="w-32 sm:w-36 md:w-40 h-24 sm:h-28 md:h-32 rounded-2xl object-cover"
                        />
                        <Image
                            src="/red.png"
                            alt="Treatment room"
                            width={500}
                            height={350}
                            className="w-48 sm:w-52 md:w-60 h-36 sm:h-40 md:h-44 rounded-2xl object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="mt-4 md:mt-6 lg:mt-8 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-black tracking-tight font-['Georgia'] whitespace-pre-line">
                            {aboutContent.heading}
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base mt-4 max-w-md mx-auto lg:mx-0">
                            {aboutContent.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
