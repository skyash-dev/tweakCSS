import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  const themes = [
    {
      name: "Fuzzy Stud!",
      colors: [
        "cdb4db",
        "ffc8dd",
        "ffafcc",
        "bde0fe",
        "a2d2ff"
      ]
    },
    {
      name: "Cool Buzz!",
      colors: [
        "0fa3b1",
        "b5e2fa",
        "f9f7f3",
        "eddea4",
        "f7a072"
      ]
    },
    {
      name: "Phantom Zig!",
      colors: ["03045e",
        "023e8a",
        "0077b6",
        "0096c7",
        "48cae4",
        "90e0ef",
        "ade8f4",
        "caf0f8"]
    },
  ]

  return (
    <main className="">
      <div className="bg-black h-screen absolute w-full -z-10"></div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="palletes w-full mt-[13.3rem] text-white flex justify-center py-20 bg-black">
        <div className="w-[60%]">
          <span className="text-3xl font-semibold">Popular Palettes</span>
          <div className="flex flex-col items-center my-6">
            {
              themes.map((theme)=>{
                return(
                  <><div className="palette w-11/12 h-24 flex my-4">
                  {theme.colors.map((color) => {
                    return (
                      <div className={`w-1/5 hover:w-2/5 transition-all h-full flex justify-center items-center text-[0] hover:text-base text-black cursor-pointer`} style={{ backgroundColor: `#${color}` }}>
                        {color}
                      </div>

                    )
                  })}
                </div>
                  <span className="mb-8 text-lg cursor-pointer hover:scale-110 transition-all">{theme.name}</span></>
                )
              })
            }
            {/* {palettes.map((palette) => {
              return (
                
              )
            })} */}
          </div>
        </div>
      </div>
    </main>
  );
}

function Hero() {
  return (<>
    <div className="blob w-[550px] h-[300px] rounded-[300px] absolute bottom-[100px] right-[400px] -z-10 blur-3xl bg-opacity-60 opacity-50 bg-gradient-to-r from-purple-400 via-red-400 to-yellow-400"></div>
    <div className="my-36">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        tweakCSS
      </p>
      <p className="text-base md:text-lg my-4 text-white font-normal inter-var text-center">
        Empowering designers and developers to craft stunning products with greater flexibility and joy.
      </p>
      <div className="flex justify-center">
        <div className="flex justify-between w-[30%]">
          <button className="text-white bg-blue-500 py-2 px-3 rounded-md border-[1px] my-4 border-black bg-opacity-50 hover:bg-opacity-100 transition-all border-opacity-20">Getting Started</button>
          <button className="text-white bg-black bg-opacity-50 py-2 px-3 rounded-md border-[1px] my-4 border-black hover:bg-opacity-100 transition-all border-opacity-20">Naming Conventions</button>
        </div>
      </div>
    </div>
  </>
  )
}