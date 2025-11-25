// components/ServicesGrid.tsx
import Image from "next/image";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function ServicesGrid() {
    const services = [
        {
            title: "Acne\nTreatment",
            description: "Targeted solutions to reduce acne and promote clear, healthy skin.",
            bgColor: "#F4EFCA",
            textColor: "#3D3400",
            buttonColor: "#585019",
            image: "/card1.png"
        },
        {
            title: "BB Glow\nTreatment",
            description: "Semi-permanent treatment for glowing, poreless skin.",
            bgColor: "#A2C8E8",
            textColor: "#1D3053",
            buttonColor: "#1A386B",
            image: "/card2.png"
        },
        {
            title: "HydraFacial",
            description: "Deep cleansing and hydration for refreshed skin.",
            bgColor: "#D6D4C5",
            textColor: "#37350C",
            buttonColor: "#3E4928",
            image: "/card3.png"
        },
        {
            title: "Pigmentation\nTreatment",
            description: "Lighten dark spots and even out skin tone.",
            bgColor: "#FFD4EE",
            textColor: "#3D3400",
            buttonColor: "#5C0038",
            image: "/card4.png"
        }
    ];

    return (
        <div className={`${urbanist.className} px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-[#F9F7F4]`}>
            <div className="container mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-black tracking-tight">
                        Our Services
                    </h2>

                    <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-700 leading-relaxed mt-3 md:mt-4 max-w-3xl mx-auto">
                        Our dentists provide a range of services to all ages and needs to keep<br className="hidden sm:block" />
                        their teeth and gums healthy for life.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 justify-items-center">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[320px] min-h-[300px] rounded-2xl p-5 shadow-sm flex flex-col justify-between"
                            style={{ backgroundColor: service.bgColor }}
                        >
                            <div>
                                <h3
                                    className="text-xl font-bold italic leading-tight whitespace-pre-line"
                                    style={{ color: service.textColor }}
                                >
                                    {service.title}
                                </h3>

                                <p
                                    className="text-sm mt-2 font-bold italic"
                                    style={{ color: `${service.textColor}B3` }}
                                >
                                    {service.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title.replace('\n', ' ')}
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <button
                                    className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-90 transition"
                                    style={{ backgroundColor: service.buttonColor }}
                                    aria-label={`Learn more about ${service.title.replace('\n', ' ')}`}
                                >
                                    <span className="block transform -rotate-30">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
