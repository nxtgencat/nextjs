import { useState } from "react";


export default function HairDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setSubmenuOpen(false);
      }}
    >
      <button className="px-2 py-2 text-[#1A1A1A] font-medium rounded-lg bg-transparent border-none focus:outline-none">
        Hair
      </button>
      {isOpen && (
        <div className="absolute left-0 w-48 bg-white rounded-lg shadow-lg z-10">
          <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">Hair Transplantation</p>
          <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">Anti Dandruff Treatment</p>

          <div 
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
            className="relative"
          >
            <button className="w-full text-left px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer border-none bg-transparent">
              Hair ReGrowth Treatment &#10551;
            </button>

            {submenuOpen && (
              <div className="absolute left-full top-0 w-48 bg-white rounded-lg shadow-lg z-20">
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">PRP Therapy</p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">Mesotherapy</p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">Low-Level Laser Therapy</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
