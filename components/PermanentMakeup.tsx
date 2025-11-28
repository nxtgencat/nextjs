import { useState } from "react";

export default function PermanentMakeup() {
  const [isOpen, setIsOpen] = useState(false);
  const [eyebrowOpen, setEyebrowOpen] = useState(false);
  const [microbladingOpen, setMicrobladingOpen] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setEyebrowOpen(false);
        setMicrobladingOpen(false);
      }}
    >
      <button className="px-2 py-2 text-[#1A1A1A] font-medium rounded-lg bg-transparent border-none focus:outline-none">
        Permanent Makeup
      </button>

      {isOpen && (
        <div className="absolute left-0 w-72 bg-white rounded-lg shadow-lg z-10 py-1">

          {/* Eyebrow Microshading submenu */}
          <div 
            className="relative"
            onMouseEnter={() => setEyebrowOpen(true)}
            onMouseLeave={() => setEyebrowOpen(false)}
          >
            <button className="w-full text-left px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer bg-transparent border-none">
              Eyebrow Microshading &#10551;
            </button>
            {eyebrowOpen && (
              <div className="absolute left-full top-0 w-72 bg-white rounded-lg shadow-lg z-20">
                <a
                  href="https://www.amista.in/fusion-brows/"
                  className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fusion Brows
                </a>
                <a
                  href="https://www.amista.in/hybrid-brows/"
                  className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hybrid Brows
                </a>
                <a
                  href="https://www.amista.in/ombre-powdered-brows/"
                  className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ombre/Powdered Brows
                </a>
              </div>
            )}
          </div>

          {/* Eye Brow Micro Blading submenu */}
          <div 
            className="relative"
            onMouseEnter={() => setMicrobladingOpen(true)}
            onMouseLeave={() => setMicrobladingOpen(false)}
          >
            <button className="w-full text-left px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer bg-transparent border-none">
              Eye Brow Micro Blading &#10551;
            </button>
            {microbladingOpen && (
              <div className="absolute left-full top-0 w-72 bg-white rounded-lg shadow-lg z-20">
                <a
                  href="https://www.amista.in/manual-microblading/"
                  className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manual Microblading
                </a>
                <a
                  href="https://www.amista.in/nano-hair-strokes/"
                  className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nano Hair Strokes
                </a>
              </div>
            )}
          </div>

          {/* New normal link options */}
          <a
            href="#"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
          >
            Eyelash Extensions
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
          >
            Eyelash Lift
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
          >
            Beauty Spot Creation
          </a>
          <a
            href="https://www.amista.in/best-laser-scalp-micropigmentation-in-hyderabad/"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scalp Micro Pigmentation
          </a>
          <a
            href="https://www.amista.in/best-bb-glow-facial-treatment-in-hyderabad/"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            BB Glow Treatment
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
          >
            Scar Camouflage
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
          >
            Moon Light Glow Up Sessions
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
          >
            Nail Extensions & Nail Prints
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
          >
            Hair Extensions
          </a>
        </div>
      )}
    </div>
  );
}
