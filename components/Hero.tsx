import Image from "next/image";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <section className={`${urbanist.className} bg-[#EAF7F8] overflow-hidden`}>

      {/* ================= NAVBAR ================= */}
      <header className="w-full py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">

          {/* LOGO */}
          <div>
            <Image
              src="/logo.png"
              alt="Logo"
              width={130}
              height={40}
              className="object-contain"
            />
          </div>

          {/* MENU + BUTTON */}
          <nav className="hidden md:flex items-center gap-6 text-[15px] text-[#1A1A1A] font-medium">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Why Choose</a>
            <a href="#">Testimonial</a>
            <a href="#">FAQs</a>

            {/* CONTACT US BUTTON - CLOSE TO FAQs */}
            <button className="px-7 py-2 bg-[#1F325C] text-white rounded-full hover:opacity-90 transition">
              Contact Us
            </button>
          </nav>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <div className="pt-8 pb-20">

        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-[60px] leading-[70px] font-medium text-[#1A1A1A]">
                Trusted Care{" "}

                <span className="inline-flex items-center gap-[8px] leading-[70px] align-middle">

                  {/* Circles Container */}
                  <span className="flex items-center bg-[#1F325C] rounded-full px-3 py-2">

                    {[1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className="w-8 h-8 bg-[#EAF7F8] border-[3px] border-[#1F325C] rounded-full -ml-[3px] first:ml-0"
                      />
                    ))}

                    {/* LAST CIRCLE WITH ARROW */}
                    <span className="w-8 h-8 bg-[#E5F1F8] border-[3px] border-[#1F325C] rounded-full -ml-[3px] flex items-center justify-center">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1F325C"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M17 7H9M17 7V15" />
                      </svg>
                    </span>
                  </span>

                  for Every
                </span>

                <br />
                Stage of Life
              </h1>

              {/* Paragraph */}
              <p className="text-[#6A6A6A] mt-6 max-w-lg text-[15px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Buttons */}
              <div className="flex gap-5 mt-10">
                <button className="px-10 py-3 bg-[#1F325C] text-white rounded-full text-[15px] hover:opacity-90 transition">
                  Explore Now
                </button>
                <button className="px-10 py-3 border border-[#1F325C] text-[#1F325C] rounded-full text-[15px] hover:bg-[#f0f4fb] transition">
                  Book Consultation
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-16 mt-14">
                <div>
                  <p className="text-[32px] font-medium text-[#1A1A1A]">200+</p>
                  <p className="text-[#6A6A6A] text-[14px]">Lorem Ipsum Dolor</p>
                </div>

                <div>
                  <p className="text-[32px] font-medium text-[#1A1A1A]">70K+</p>
                  <p className="text-[#6A6A6A] text-[14px]">Lorem Ipsum Dolor</p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="relative">

              {/* Main Image */}
              <div className="rounded-[30px] overflow-hidden shadow-xl bg-white w-[420px] mx-auto">
                <Image
                  src="/hero.png"
                  alt="Hero Image"
                  width={420}
                  height={550}
                  className="object-cover w-full h-[550px]"
                />
              </div>

              {/* Floating Side Card */}
              <div className="absolute top-1/2 -translate-y-1/2 right-6 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3 w-[230px]">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/hero.png"
                    width={48}
                    height={48}
                    alt="User"
                  />
                </div>

                <div>
                  <p className="text-[14px] font-medium text-[#1A1A1A]">Your Name</p>
                  <p className="text-[11px] text-[#6A6A6A]">Specialist Doctor</p>
                </div>

                <div className="w-8 h-8 bg-[#1F325C] rounded-full flex items-center justify-center">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H9M17 7V15" />
                  </svg>
                </div>
              </div>

              {/* Bottom Card */}
              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 w-[380px] flex justify-between items-center">
                <div>
                  <p className="text-[17px] font-semibold text-[#1A1A1A]">
                    Top Results of SKin
                  </p>

                  <p className="text-[12px] text-[#6A6A6A] mt-1">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>

                  <div className="flex gap-6 mt-2 text-[12px] text-[#6A6A6A]">
                    <span>Heart Attacks</span>
                    <span>Brain Damage</span>
                  </div>
                </div>

                <Image
                  src="/Images.png"
                  width={70}
                  height={70}
                  className="rounded-xl object-cover"
                  alt=""
                />
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
