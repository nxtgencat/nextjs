// components/ServicesBottom.tsx
import Image from "next/image";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function ServicesBottom() {
  return (
    <div className="px-4 sm:px-10 lg:px-20 pb-20 bg-[#F9F7F4]">

      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10">

        {/* Left Large Image */}
        <div className="flex justify-end mt-20 ml-10">
          <Image
            src="/Images.png"
            alt=""
            width={450}
            height={350}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6 mt-30">

          {/* Small + Big Image Row (bottom aligned) */}
          <div className="flex items-end gap-6 ml-25">

            <div className="w-[160px] h-[120px] rounded-2xl overflow-hidden">
              <Image
                src="/small.png"
                alt=""
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[260px] h-[180px] rounded-2xl overflow-hidden">
              <Image
                src="/red.png"
                alt=""
                width={500}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="mt-8">
            <h2
              className={`${urbanist.className} text-3xl sm:text-4xl font-semibold leading-tight text-black`}
            >
              More Than a Clinic<br />— We’re Your Health<br />Partner
            </h2>
          </div>

          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>

        </div>
      </div>
    </div>
  );
}
