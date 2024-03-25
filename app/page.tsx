import Image from "next/image";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";
import Navbar from "@/components/navbar/navbar";

export default function Home() {

  return (
    <main className="">
      <Navbar></Navbar>
      <WavyBackground className="max-w-4xl mx-auto pb-36">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Palette-Hub
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Empowering designers and developers to craft stunning products with greater flexibility and joy.
      </p>
      <div className="flex justify-center">
      <div className="flex justify-between w-[45%]">
      <button className="text-white bg-blue-500 py-2 px-3 rounded-md border-[1px] my-4 border-black bg-opacity-50 hover:bg-opacity-100 transition-all">Getting Started</button>
      <button className="text-white bg-black bg-opacity-50 py-2 px-3 rounded-md border-[1px] my-4 border-black hover:bg-opacity-100 transition-all">Naming Conventions</button>
      </div>
      </div>
    </WavyBackground>
    </main>
  );
}
