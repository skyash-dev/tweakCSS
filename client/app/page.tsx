"use client"

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [palettes, setPalettes] = useState([])
  useEffect(() => {
    fetchPalettes()
  }, [])

  const fetchPalettes = async (): Promise<void> => {
    await fetch('http://localhost:3001/api/colorpalette/getallpalettes').then((res) => res.json()).then((data) => {
      setPalettes(data['palettes'])
    })
  }

  return (
    <main className="">
      <div className="h-screen absolute w-full -z-10"></div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="palletes w-full text-white flex justify-center py-20">
        <div className="w-[60%]">
          <span className="text-3xl font-semibold">Popular Themes</span>
          <div className="flex flex-col items-center my-6">
            <Link className="palette w-11/12 h-24 flex flex-col text-opacity-50 hover:text-opacity-100 cursor-pointer my-4 mb-8 text-white justify-center items-center glass" href="/create">
              <span className="text-2xl glass w-10 h-10 flex justify-center 
         items-center rounded-full hover:scale-110 transition-all">+</span>
              Create
            </Link>
            
            {
              palettes.map((palette, index) => {
                return (
                  <><div className="palette w-11/12 h-24 flex my-4" key={index+1}>
                    {Object.keys(palette['color']).map((keyName, index) => {
                      return (
                        <div className={`w-1/5 hover:w-2/5 transition-all h-full flex justify-center items-center text-[0] hover:text-base text-black cursor-pointer`} style={{ backgroundColor: `${palette['color'][keyName]}` }} key={index}>
                          {palette['color'][keyName]}
                        </div>
                      )
                    })}
                  </div>
                    <span className="mb-8 text-lg cursor-pointer hover:scale-110 transition-all" key={index}>{palette['name']}</span></>
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  );
}

function Hero() {
  return (<>
    <div className="blob w-[550px] h-[300px] rounded-[300px] absolute top-[15%] right-[35%] -z-10 blur-3xl bg-opacity-60 opacity-50 bg-gradient-to-r from-purple-400 via-red-400 to-yellow-400"></div>
    <div className="my-36 flex flex-col items-center">
      {/* <Image src="/tweakCSS.png" alt="tweakCSS" width={54} height={54}/> */}
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        tweakCSS
      </p>
      <p className="text-base md:text-lg my-4 text-white font-normal inter-var text-center px-4 w-1/2">
        Empowering designers and developers to craft stunning products with greater flexibility and joy.
      </p>
      <div className="flex justify-center">
        <div className={`flex justify-between w-96 ${localStorage.getItem('TOKEN')? 'hidden' : 'visible'}`}>
          <Link className="text-white bg-blue-500 py-2 px-3 rounded-md border-[1px] my-4 border-black bg-opacity-50 hover:bg-opacity-100 transition-all border-opacity-20 w-1/2 text-center mx-6" href="/login">Login</Link>
          <Link className="text-white bg-blue-500 py-2 px-3 rounded-md border-[1px] my-4 border-black bg-opacity-50 hover:bg-opacity-100 transition-all border-opacity-20 w-1/2 text-center mx-6" href="/signup">Signup</Link>
        </div>
      </div>
    </div>
  </>
  )
}