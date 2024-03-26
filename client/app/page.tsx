import Image from "next/image";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  const palettes = [
    [
    "cdb4db",
    "ffc8dd",
    "ffafcc",
    "bde0fe",
    "a2d2ff"
    ],
    [
      "0fa3b1",
      "b5e2fa",
      "f9f7f3",
      "eddea4",
      "f7a072"
    ],
    ["03045e",
    "023e8a",
    "0077b6",
    "0096c7",
    "48cae4",
    "90e0ef",
    "ade8f4",
    "caf0f8"]
  ]

  return (
    <main className="">
      <Navbar></Navbar>
      <WavyBackground className="max-w-4xl mx-auto">
        <Hero></Hero>
      </WavyBackground>
      <div className="palletes w-full bg-black text-white flex justify-center py-20">
          <div className="w-[60%]">
          <span className="text-3xl font-semibold">Popular Palettes</span>
        <div className="flex flex-col items-center my-6">
          {palettes.map((palette)=>{
            return(
        <div className="palette w-11/12 h-56 flex my-6">
          {palette.map((color, index)=>{
            return(
              <div className={`w-1/5 hover:w-2/5 transition-all h-full flex justify-center items-center text-[0] hover:text-base text-black cursor-pointer`} style={{backgroundColor: `#${color}`}}>
                {color}
              </div>

            )
          })}
        </div>
            )
          })}
        </div>
          </div>
      </div>
    </main>
  );
}

function Hero(){
  return(
    <div className="my-36">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Palette-Hub
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Empowering designers and developers to craft stunning products with greater flexibility and joy.
      </p>
      <div className="flex justify-center">
      <div className="flex justify-between w-[45%]">
      <button className="text-white bg-blue-500 py-2 px-3 rounded-md border-[1px] my-4 border-black bg-opacity-50 hover:bg-opacity-100 transition-all border-opacity-20">Getting Started</button>
      <button className="text-white bg-black bg-opacity-50 py-2 px-3 rounded-md border-[1px] my-4 border-black hover:bg-opacity-100 transition-all border-opacity-20">Naming Conventions</button>
      </div>
      </div>
    </div>  
  )
}