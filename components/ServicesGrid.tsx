import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { servicesData, servicesSection } from "../data/content";

export default function ServicesGrid() {
    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-[#F9F7F4]">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-black tracking-tight font-['Georgia']">
                        {servicesSection.heading}
                    </h2>

                    <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-700 leading-relaxed mt-3 md:mt-4 max-w-3xl mx-auto">
                        {servicesSection.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 justify-items-center">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[320px] min-h-[340px] rounded-2xl p-5 shadow-sm relative pb-28"
                            style={{ backgroundColor: service.bgColor }}
                        >
                            <h3
                                className="text-xl font-bold leading-tight whitespace-pre-line mb-3"
                                style={{ color: service.textColor }}
                            >
                                {service.title}
                            </h3>

                            <p
                                className="text-sm font-bold"
                                style={{ color: `${service.textColor}B3` }}
                            >
                                {service.description}
                            </p>

                            <div className="absolute bottom-5 left-5 w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                    src={service.image}
                                    alt={service.title.replace('\n', ' ')}
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <button
                                className="absolute bottom-5 right-5 w-11 h-11 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md"
                                style={{ backgroundColor: service.buttonColor }}
                                aria-label={`Learn more about ${service.title.replace('\n', ' ')}`}
                            >
                                <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
