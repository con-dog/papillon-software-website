"use client";
import { BackgroundText } from "@/components/background-text";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const cardRef = useRef(null);
  const [numRepeats, setNumRepeats] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      const cardHeight = cardRef.current.offsetHeight;
      const textHeight = 96; // Approximate height of one line of text; adjust as needed
      const repeats = Math.ceil(cardHeight + 96 / textHeight);
      setNumRepeats(repeats);
      console.log(cardHeight, textHeight, repeats);
    }
  }, [cardRef]);

  return (
    <main className=" flex min-h-screen flex-col items-center justify-between">
      <div className="relative flex flex-col w-full items-center justify-center p-24 overflow-clip whitespace-nowrap">
        <BackgroundText
          repeats={numRepeats}
          text="MOBILE DESKTOP TABLET VIEW RESPONSIVE DESIGN EXTENSION CHROME EDGE FIREFOX"
          color="text-[#4C8CF4]"
          opacity="opacity-20"
        />
        <div
          className="z-10 border-2 border-black bg-white shadow-[15px_15px_0_0_#000000]"
          ref={cardRef}
        >
          <h1 className="text-5xl font-bold font-serif leading-10">
            Mobile View
          </h1>
          <Image
            src="mobile_view.png"
            width={375}
            height={812}
            alt="Mobile View Extension"
            className="border-2 border-black"
          />
          <div className="flex items-center justify-center gap-4 p-2">
            <button className="border-2 text-[#4C8CF4] border-[#4C8CF4] shadow-[5px_5px_0_0_#4C8CF4]">
              Chrome
            </button>
            <button className="border-2 text-[#2bc3d2] border-[#2bc3d2] shadow-[5px_5px_0_0_#2bc3d2]">
              Edge
            </button>
            <button className="border-2 text-[#d65126] border-[#d65126] shadow-[5px_5px_0_0_#d65126]">
              Firefox
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
