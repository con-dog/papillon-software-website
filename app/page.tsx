"use client";
import { BackgroundText } from "@/components/background-text";
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
    <main className="min-h-screen ">
      <div className="relative flex flex-col w-full items-center p-20 justify-center overflow-clip whitespace-nowrap">
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
            <img
              src="mobile_view.png"
              width={375}
              height={236}
              alt="Mobile View Extension"
              className="border-2 border-black"
            />
            {isHoveredMobileView && (
              <div className="absolute inset-0 bg-black bg-opacity-95 flex justify-center items-center text-white p-4">
                <p className="text-wrap whitespace-pre-wrap text-sans">
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
              className="comicbook border-2 text-[#4C8CF4] border-[#4C8CF4] shadow-[3px_3px_0_0_#4C8CF4] cursor-pointer leading-none font-bold text-lg"
            >
              CHROME
            </a>
            <a
              href="https://chromewebstore.google.com/detail/mobile-view-test-responsi/clepmakjkiihmfoepipckkafafdepjne"
              target="_blank"
              className="comicbook border-2 text-[#2bc3d2] border-[#2bc3d2] shadow-[3px_3px_0_0_#2bc3d2] hover:scale-95 cursor-pointer leading-none font-bold text-lg"
            >
              EDGE
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full items-center p-20 justify-center  overflow-clip whitespace-nowrap">
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
            <img
              src="seek_salary_peek.png"
              width={375}
              height={236}
              alt="Seek Salary Extension"
              className="border-2 border-black"
            />
            {isHoveredSeek && (
              <div className="absolute inset-0 bg-black bg-opacity-95 flex justify-center items-center text-white p-4">
                <p className="text-wrap whitespace-pre-wrap text-sans">
                  Get real salary ranges for every job on Seek, giving you a
                  competitive edge in negotiations. Make informed career
                  decisions, use salary data as a baseline for salary
                  negotiations, ensuring you get the compensation you deserve.
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center gap-4 p-2 text-lg">
            <a
              target="_blank"
              href="https://chromewebstore.google.com/detail/seek-salary-peek/edmpglkdfjgoidigadgedmgcabnmghfl"
              className="comicbook border-2 text-[#4C8CF4] border-[#4C8CF4] shadow-[3px_3px_0_0_#4C8CF4] hover:scale-95 cursor-pointer leading-none font-bold"
            >
              CHROME
            </a>
            <a
              target="_blank"
              href="https://chromewebstore.google.com/detail/seek-salary-peek/edmpglkdfjgoidigadgedmgcabnmghfl"
              className="comicbook border-2 text-[#2bc3d2] border-[#2bc3d2] shadow-[3px_3px_0_0_#2bc3d2] hover:scale-95 cursor-pointer leading-none font-bold"
            >
              EDGE
            </a>
            <a
              target="_blank"
              href="https://addons.mozilla.org/en-US/firefox/addon/seek-salary/"
              className="comicbook border-2 text-[#d65126] border-[#d65126] shadow-[3px_3px_0_0_#d65126] hover:scale-95 cursor-pointer leading-none font-bold"
            >
              FIREFOX
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full items-center p-20 justify-center overflow-clip whitespace-nowrap">
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
            <img
              src="shhh.png"
              width={375}
              height={236}
              alt="Mobile View Extension"
              className="border-2 border-black max-h-[236px]"
            />
            {isHoveredUICopilot && (
              <div className="absolute inset-0 bg-black bg-opacity-95 flex justify-center items-center text-white p-4">
                <p className="text-wrap whitespace-pre-wrap text-sans">
                  This extension will automatically give you component level and
                  project level design feedback while you code! You set the
                  style, and work as normal
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center gap-4 p-2 text-lg">
            <button className="comicbook border-2 text-[#4C8CF4] border-[#4C8CF4] shadow-[3px_3px_0_0_#4C8CF4] hover:scale-95 cursor-not-allowed leading-none font-bold">
              CHROME
            </button>
            <button className="comicbook border-2 text-[#2bc3d2] border-[#2bc3d2] shadow-[3px_3px_0_0_#2bc3d2] hover:scale-95 cursor-not-allowed leading-none font-bold">
              EDGE
            </button>
            <button className="comicbook border-2 text-[#d65126] border-[#d65126] shadow-[3px_3px_0_0_#d65126] hover:scale-95 cursor-not-allowed leading-none font-bold">
              FIREFOX
            </button>
            <button className="comicbook border-2 text-[#00d3f9] border-[#00d3f9] shadow-[3px_3px_0_0_#00d3f9] hover:scale-95 cursor-not-allowed leading-none font-bold">
              SAFARI
            </button>
          </div>
        </div>
      </div>
      {/* FRAME */}
      {/* TOP */}
      <div className="fixed top-0 left-0 right-0 bg-blue-500 text-amber-300 z-20">
        <div className="wrapper">
          <div className="marqueeleft">
            <p className="p-2 font-semibold font-brutal text-lg line-clamp-1">
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---{" "}
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
            </p>
            <p className="p-2 font-semibold font-brutal text-lg line-clamp-1">
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---{" "}
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
            </p>
            <p className="p-2 font-semibold font-brutal text-lg line-clamp-1">
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---{" "}
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
            </p>
            <p className="p-2 font-semibold font-brutal text-lg line-clamp-1">
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---{" "}
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
            </p>
            <p className="p-2 font-semibold font-brutal text-lg line-clamp-1">
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---{" "}
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
            </p>
            <p className="p-2 font-semibold font-brutal text-lg line-clamp-1">
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---{" "}
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center  bg-pink-500 text-lime-300 z-20">
        <div className="wrapper">
          <div className="marquee">
            <p className="p-2 font-semibold font-brutal text-lg line-clamp-1">
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---{" "}
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
            </p>
            <p className="p-2 font-semibold font-brutal text-lg line-clamp-1">
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---{" "}
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
              {` 🚀 CHROME EXTENSION CONSULTING 🚀 `} ---
              {` 📧 EMAIL: HELLO(at)PAPILLONSOFTWARE.DEV 📧 `} ---
              {` 🔥 FIREFOX EXTENSION CONSULTING 🔥 `} ---
              {` 🌍 SAFARI EXTENSION CONSULTING 🌍 `} ---
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
