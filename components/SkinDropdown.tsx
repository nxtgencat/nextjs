import { useState } from "react";

export default function SkinDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [breakoutsOpen, setBreakoutsOpen] = useState(false);
  const [rejuvenationOpen, setRejuvenationOpen] = useState(false);
  const [antiAgingOpen, setAntiAgingOpen] = useState(false);
  const [laserOpen, setLaserOpen] = useState(false);
  const [volumeOpen, setVolumeOpen] = useState(false);
  const [scarOpen, setScarOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setBreakoutsOpen(false);
        setRejuvenationOpen(false);
        setAntiAgingOpen(false);
        setLaserOpen(false);
        setVolumeOpen(false);
        setScarOpen(false);
      }}
    >
      <button className="px-2 py-2 text-[#1A1A1A] font-medium rounded-lg bg-transparent border-none focus:outline-none">
        Skin
      </button>

      {isOpen && (
        <div className="absolute left-0 w-64 bg-white rounded-lg shadow-lg z-10">
          {/* Skin Breakouts submenu */}
          <div
            className="relative"
            onMouseEnter={() => setBreakoutsOpen(true)}
            onMouseLeave={() => setBreakoutsOpen(false)}
          >
            <button className="w-full text-left px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer bg-transparent border-none">
              Skin Breakouts &#10551;
            </button>
            {breakoutsOpen && (
              <div className="absolute left-full top-0 w-64 bg-white rounded-lg shadow-lg z-20">
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Acne Reductions/Pimples Treatment
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Acne Scar Correction
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Comedon Treatment (Black and Whiteheads)
                </p>
              </div>
            )}
          </div>

          {/* Skin Rejuvenation submenu */}
          <div
            className="relative"
            onMouseEnter={() => setRejuvenationOpen(true)}
            onMouseLeave={() => setRejuvenationOpen(false)}
          >
            <button className="w-full text-left px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer bg-transparent border-none">
              Skin Rejuvenation &#10551;
            </button>
            {rejuvenationOpen && (
              <div className="absolute left-full top-0 w-64 bg-white rounded-lg shadow-lg z-20">
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Colour Enhancement Treatment
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Darkspot Reduction
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Detan Treatment
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Freckles Treatment
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Full Body Rejuvenation Treatment
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Lip Pigmentation Treatment
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Melasma Treatment
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Stretch Marks Treatment
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Under Eye Dark Circle Treatment
                </p>
              </div>
            )}
          </div>

          {/* Anti Aging & Rejuvenation submenu */}
          <div
            className="relative"
            onMouseEnter={() => setAntiAgingOpen(true)}
            onMouseLeave={() => setAntiAgingOpen(false)}
          >
            <button className="w-full text-left px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer bg-transparent border-none">
              Anti Aging & Rejuvenation &#10551;
            </button>
            {antiAgingOpen && (
              <div className="absolute left-full top-0 w-64 bg-white rounded-lg shadow-lg z-20">
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Age Spot Removal
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Non-Surgical Facelift
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Skin-sagging Treatment
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Wrinkle & Fine Lines Reduction
                </p>
              </div>
            )}
          </div>

          {/* Laser Unwanted Hair Removal submenu */}
          <div
            className="relative"
            onMouseEnter={() => setLaserOpen(true)}
            onMouseLeave={() => setLaserOpen(false)}
          >
            <button className="w-full text-left px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer bg-transparent border-none">
              Laser Unwanted Hair Removal &#10551;
            </button>
            {laserOpen && (
              <div className="absolute left-full top-0 w-72 bg-white rounded-lg shadow-lg z-20">
                <a
                  href="https://www.amista.in/beard-shaping/"
                  className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beard Shaping
                </a>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Bikini Hair Removal
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Chin Hair Removal
                </p>
                <a
                  href="https://www.amista.in/complete-facial-hair-removal/"
                  className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Complete Facial Hair Removal
                </a>
                <a
                  href="https://www.amista.in/eyebrow-shaping/"
                  className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eye Brow Shaping
                </a>
                <a
                  href="https://www.amista.in/full-body-hair-removal/"
                  className="block px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full Body Hair Removal
                </a>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Side Locks Hair Removal
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Under Arm Hair Removal
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Upper Lip Hair Removal
                </p>
              </div>
            )}
          </div>

          {/* Facial Volume Corrections submenu */}
          <div
            className="relative"
            onMouseEnter={() => setVolumeOpen(true)}
            onMouseLeave={() => setVolumeOpen(false)}
          >
            <button className="w-full text-left px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer bg-transparent border-none">
              Facial Volume Corrections &#10551;
            </button>
            {volumeOpen && (
              <div className="absolute left-full top-0 w-72 bg-white rounded-lg shadow-lg z-20">
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Cheek Augmentation
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Chin-Elongation
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Double Chin Correction
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Face Lifting
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Jaw Line Correction
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Lip Correction
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Under Eye Tear Trough Correction
                </p>
              </div>
            )}
          </div>

          {/* Scar Corrections submenu */}
          <div
            className="relative"
            onMouseEnter={() => setScarOpen(true)}
            onMouseLeave={() => setScarOpen(false)}
          >
            <button className="w-full text-left px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer bg-transparent border-none">
              Scar Corrections &#10551;
            </button>
            {scarOpen && (
              <div className="absolute left-full top-0 w-64 bg-white rounded-lg shadow-lg z-20">
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Accidental Scar Treatment
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Hypertrophic Scar Treatment
                </p>
                <p className="px-4 py-2 hover:text-[#1F325C] hover:bg-[#EAF7F8] cursor-pointer">
                  Keloid Treatment
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
