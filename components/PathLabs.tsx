import { useState } from "react";

export default function PathLabs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
        <button className="px-2 py-2 text-[#1A1A1A] font-medium rounded-lg bg-transparent border-none focus:outline-none">     Amista Path Labs  </button>
    </div>
  );
}
