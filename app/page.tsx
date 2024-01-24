"use client";
import { BackgroundText } from "@/components/background-text";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [numRepeats, setNumRepeats] = useState(0);
  const [isHoveredUICopilot, setIsHoveredUICopilot] = useState(false);
  const [isHoveredMobileView, setIsHoveredMobileView] = useState(false);
  const [isHoveredSeek, setIsHoveredSeek] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const cardHeight = cardRef.current.offsetHeight;
      const textHeight = 96; // Approximate height of one line of text; adjust as needed
      const repeats = Math.ceil(cardHeight + 96 / textHeight);
      setNumRepeats(repeats);
    }
  }, [cardRef]);

  return (
    <main className=" flex min-h-screen flex-col gap-0">
      <div className="relative flex flex-col w-full items-center justify-center p-16 overflow-clip whitespace-nowrap">
        <BackgroundText
          repeats={numRepeats}
          text="MOBILE DESKTOP TABLET VIEW RESPONSIVE DESIGN EXTENSION CHROME EDGE FIREFOX SAFARI"
          opacity="opacity-20"
          color="text-[#FF10F0]"
        />
        <div
          className="z-10 border-4 border-black bg-white shadow-[15px_15px_0_0_#000000]"
          ref={cardRef}
        >
          <div
            onMouseEnter={() => setIsHoveredMobileView(true)}
            onMouseLeave={() => setIsHoveredMobileView(false)}
            className="relative cursor-help"
          >
            <h2 className="text-5xl font-bold font-serif leading-10">
              MOBILE VIEW
            </h2>
            <Image
              src="mobile_view.png"
              width={375}
              height={236}
              alt="Mobile View Extension"
              className="border-2 border-black"
            />
            {isHoveredMobileView && (
              <div className="absolute inset-0 bg-black bg-opacity-95 flex justify-center items-center text-white p-4">
                <p className="text-wrap text-sans">
                  See your website on multiple devices at once with live
                  updates, even for locally hosted sites. Hot module reloading
                  ensures instant code changes across all devices, while
                  synchronised scrolling and navigation lets you test seamlessly
                  across any website.
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center gap-4 p-2">
            <a
              href="https://chromewebstore.google.com/detail/mobile-view-test-responsi/clepmakjkiihmfoepipckkafafdepjne"
              target="_blank"
              className="border-2 text-[#4C8CF4] border-[#4C8CF4] shadow-[5px_5px_0_0_#4C8CF4] hover:scale-95 cursor-pointer"
            >
              Chrome
            </a>
            <a
              href="https://chromewebstore.google.com/detail/mobile-view-test-responsi/clepmakjkiihmfoepipckkafafdepjne"
              target="_blank"
              className="border-2 text-[#2bc3d2] border-[#2bc3d2] shadow-[5px_5px_0_0_#2bc3d2] hover:scale-95 cursor-pointer"
            >
              Edge
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full items-center justify-center p-16 overflow-clip whitespace-nowrap">
        <BackgroundText
          repeats={numRepeats}
          text="SEEK SALARY MONEY JOBS WORKING EXTENSION CHROME EDGE FIREFOX SAFARI"
          color="text-[#FF5F1F]"
          opacity="opacity-20"
        />
        <div
          className="z-10 border-4 border-black bg-white shadow-[15px_15px_0_0_#000000]"
          ref={cardRef}
        >
          <div
            onMouseEnter={() => setIsHoveredSeek(true)}
            onMouseLeave={() => setIsHoveredSeek(false)}
            className="relative cursor-help"
          >
            <h2 className="text-5xl font-bold font-serif leading-10">
              SEEK SALARY
            </h2>
            <Image
              src="seek_salary_peek.png"
              width={375}
              height={236}
              alt="Seek Salary Extension"
              className="border-2 border-black"
            />
            {isHoveredSeek && (
              <div className="absolute inset-0 bg-black bg-opacity-95 flex justify-center items-center text-white p-4">
                <p className="text-wrap text-sans">
                  Get real salary ranges for every job on Seek, giving you a
                  competitive edge in negotiations. Make informed career
                  decisions, use salary data as a baseline for salary
                  negotiations, ensuring you get the compensation you deserve.
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center gap-4 p-2">
            <a
              target="_blank"
              href="https://chromewebstore.google.com/detail/seek-salary-peek/edmpglkdfjgoidigadgedmgcabnmghfl"
              className="border-2 text-[#4C8CF4] border-[#4C8CF4] shadow-[5px_5px_0_0_#4C8CF4] hover:scale-95 cursor-pointer"
            >
              Chrome
            </a>
            <a
              target="_blank"
              href="https://chromewebstore.google.com/detail/seek-salary-peek/edmpglkdfjgoidigadgedmgcabnmghfl"
              className="border-2 text-[#2bc3d2] border-[#2bc3d2] shadow-[5px_5px_0_0_#2bc3d2] hover:scale-95 cursor-pointer"
            >
              Edge
            </a>
            <a
              target="_blank"
              href="https://addons.mozilla.org/en-US/firefox/addon/seek-salary/"
              className="border-2 text-[#d65126] border-[#d65126] shadow-[5px_5px_0_0_#d65126] hover:scale-95 cursor-pointer"
            >
              Firefox
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full items-center justify-center p-16 overflow-clip whitespace-nowrap">
        <BackgroundText
          repeats={numRepeats}
          text="UI/UX COMING SOON DESIGN INSPIRATION AI AUTOMATION EXTENSION CHROME EDGE FIREFOX SAFARI"
          color="text-[#4C8CF4]"
          opacity="opacity-20"
        />
        <div
          className="z-10 border-4 border-black bg-white shadow-[15px_15px_0_0_#000000]"
          ref={cardRef}
        >
          <div
            onMouseEnter={() => setIsHoveredUICopilot(true)}
            onMouseLeave={() => setIsHoveredUICopilot(false)}
            className="relative cursor-help"
          >
            <h2 className="text-5xl font-bold font-serif leading-10">
              UI COPILOT
            </h2>
            <Image
              src="shhh.png"
              width={375}
              height={236}
              alt="Mobile View Extension"
              className="border-2 border-black max-h-[236px]"
            />
            {isHoveredUICopilot && (
              <div className="absolute inset-0 bg-black bg-opacity-95 flex justify-center items-center text-white p-4">
                <p className="text-wrap text-sans">
                  This extension will automatically give you component level and
                  project level design feedback while you code! You set the
                  style, and work as normal
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center gap-4 p-2">
            <button className="border-2 text-[#4C8CF4] border-[#4C8CF4] shadow-[5px_5px_0_0_#4C8CF4] hover:scale-95 cursor-not-allowed">
              Chrome
            </button>
            <button className="border-2 text-[#2bc3d2] border-[#2bc3d2] shadow-[5px_5px_0_0_#2bc3d2] hover:scale-95 cursor-not-allowed">
              Edge
            </button>
            <button className="border-2 text-[#d65126] border-[#d65126] shadow-[5px_5px_0_0_#d65126] hover:scale-95 cursor-not-allowed">
              Firefox
            </button>
            <button className="border-2 text-[#00d3f9] border-[#00d3f9] shadow-[5px_5px_0_0_#00d3f9] hover:scale-95 cursor-not-allowed">
              Safari
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
