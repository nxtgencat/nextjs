import Image from "next/image";
import { aboutContent } from "../data/content";

export default function WelcomeSection() {
    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-20 pb-12 md:pb-16 lg:pb-20 bg-[#F9F7F4]">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-12">
                    <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
                        <Image
                            src="/Images.png"
                            alt="Amista Cosmetology Clinic facility"
                            width={450}
                            height={350}
                            className="rounded-2xl object-cover w-full max-w-md lg:max-w-lg h-auto"
                        />
                    </div>

                    <div className="order-1 lg:order-2 flex flex-col gap-6">
                        <div className="flex items-end gap-4 md:gap-6 justify-center lg:justify-start">
                            <div className="w-32 sm:w-36 md:w-40 h-24 sm:h-28 md:h-32 rounded-2xl overflow-hidden flex-shrink-0">
                                <Image
                                    src="/small.png"
                                    alt="Advanced equipment"
                                    width={300}
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-48 sm:w-52 md:w-60 h-36 sm:h-40 md:h-44 rounded-2xl overflow-hidden flex-shrink-0">
                                <Image
                                    src="/red.png"
                                    alt="Treatment room"
                                    width={500}
                                    height={350}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="mt-4 md:mt-6 lg:mt-8 text-center lg:text-left">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-black whitespace-pre-line">
                                {aboutContent.heading}
                            </h2>

                            <p className="text-gray-700 text-sm md:text-base mt-4 max-w-md mx-auto lg:mx-0">
                                {aboutContent.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
