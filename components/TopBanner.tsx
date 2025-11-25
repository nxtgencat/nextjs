import { Phone, MapPin } from "lucide-react";
import { contactInfo } from "../data/content";

export default function TopBanner() {
    return (
        <div className="hidden lg:block bg-[#1F325C] text-white py-2">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-6">
                        <a href={`tel:${contactInfo.phones[1]}`} className="flex items-center gap-2 hover:text-[#EAF7F8] transition-colors">
                            <Phone className="w-4 h-4" />
                            <span>{contactInfo.phones[1]}</span>
                        </a>
                        <a href={`tel:${contactInfo.phones[2]}`} className="flex items-center gap-2 hover:text-[#EAF7F8] transition-colors">
                            <Phone className="w-4 h-4" />
                            <span>{contactInfo.phones[2]}</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Banjara Hills, Hyderabad | Vijayawada | Manikonda</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
