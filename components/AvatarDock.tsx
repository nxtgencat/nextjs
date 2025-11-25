import { ArrowUpRight } from "lucide-react";

interface AvatarDockProps {
    images: string[];
}

export default function AvatarDock({ images }: AvatarDockProps) {
    return (
        <div className="inline-flex bg-[#172B45] rounded-[30px] px-[10px] py-[6px]">
            <div className="flex items-center gap-[4px]">
                {images.slice(0, 3).map((src, i) => (
                    <div key={i} className="w-[40px] h-[40px] rounded-full bg-[#EAF6FB] flex items-center justify-center ring-1 ring-[#BFDCE6] overflow-hidden">
                        <img src={src} alt="" className="w-full h-full object-cover rounded-full" />
                    </div>
                ))}
                <button
                    aria-label="more"
                    className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition"
                >
                    <ArrowUpRight size={16} />
                </button>
            </div>
        </div>
    );
}
