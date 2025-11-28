import { useState } from "react";

export default function BodySliming() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="px-2 py-2 text-[#1A1A1A] font-medium rounded-lg bg-transparent border-none focus:outline-none">
       Body Sliming
      </button>
      {isOpen && (
        <div className="absolute left-0 w-72 bg-white rounded-lg shadow-lg z-10 py-1">
          <a
            href="https://www.amista.in/body-contouring-treatment-in-hyderabad/"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Body Contouring
          </a>
          <a
            href="https://www.amista.in/cellulite-reduction-treatment-in-hyderabad/"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cellulite Treatments
          </a>
          <a
            href="https://www.amista.in/cool-sculpting-treatment-in-hyderabad/"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            CoolSculpting
          </a>
          <a
            href="https://www.amista.in/figure-correction-treatment-in-hyderabad/"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Figure Correction
          </a>
          <a
            href="https://www.amista.in/inch-loss-treatment-in-hyderabad/"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inch Loss
          </a>
          <a
            href="https://www.amista.in/non-surgical-liposuction-treatment-in-hyderabad/"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Non-Surgical Liposuction
          </a>
          <a
            href="https://www.amista.in/weight-gain-treatment-in-hyderabad/"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weight Gain
          </a>
          <a
            href="https://www.amista.in/weight-loss-treatment-in-hyderabad/"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weight Loss Treatments
          </a>
        </div>
      )}
    </div>
  );
}
