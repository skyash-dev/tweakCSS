"use client"

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <main className="">
      <div className="h-screen absolute w-full -z-10"></div>
      <Navbar isLogo={false}></Navbar>
      <Hero></Hero>
    </main>
  );
}

function Hero() {

  return (
    <div className="my-32 flex flex-col items-center">
      <div className="blob w-[550px] h-[200px] rounded-[300px] absolute top-[250px] left-[-200px] origin-left -z-10 blur-3xl bg-opacity-40 opacity-50 bg-gradient-to-r from-[#05051E] to-[#581C87] animate-moveVertical"></div>
      <div className="absolute h-[91vh] md:w-[300px] top-[60px] left-0 rounded-r-full bg-[#05051E] border-white border-opacity-10 border-[1px] w-0 -z-10">
      </div>
      <div className="blob w-[550px] h-[200px] rounded-[300px] absolute top-[250px] right-[0px] origin-right -z-10 blur-3xl bg-opacity-40 opacity-50 bg-gradient-to-r from-[#05051E] to-[#581C87] animate-moveVertical"></div>
      <div className="absolute h-[91vh] md:w-[300px] top-[60px] right-0 rounded-l-full bg-[#05051E] border-white border-opacity-10 border-[1px] w-0 -z-10">
      </div>
      <Image src="/tweakCSS.png" alt="tweakCSS" width={80} height={80}/>
      <p className="text-[32px] md:text-[45px] text-white font-semibold inter-var text-center w-[350px] md:w-[450px]">
        tweakCSS is Redifining Styling.
      </p>
      <p className="text-[16px] my-4 text-white font-normal inter-var text-center px-4 w-[450px] opacity-50">
      Customize CSS in real-time with our intuitive dashboard. Get theme suggestions and optimize performance effortlessly.
      </p>
      <Link className="bg-purple-600 hover:bg-purple-700 px-4 py-2 text-sm text-white rounded-md" href={"/home"}>Get Started!</Link>
    </div>
  )
}