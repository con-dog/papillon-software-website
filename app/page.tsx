import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border-2 border-black shadow-[15px_15px_0_0_#000000]">
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
    </main>
  );
}
