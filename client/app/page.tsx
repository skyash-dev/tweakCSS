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
      <div className="palletes w-full text-white flex justify-center py-20 bg-black">
        <div className="w-[60%]">
          <span className="text-3xl font-semibold">Popular Themes</span>
          <div className="flex flex-col items-center my-6">
          <div className="palette w-11/12 h-24 flex flex-col text-opacity-50 hover:text-opacity-100 cursor-pointer my-4 mb-8 text-white justify-center items-center glass">
         <span className="text-2xl glass w-10 h-10 flex justify-center 
         items-center rounded-full hover:scale-110 transition-all">+</span>
         Create
          </div>
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
    <div className="blob w-[550px] h-[300px] rounded-[300px] absolute top-[15%] right-[35%] -z-10 blur-3xl bg-opacity-60 opacity-50 bg-gradient-to-r from-purple-400 via-red-400 to-yellow-400"></div>
    <div className="my-36 flex flex-col items-center">
      {/* <Image src="/tweakCSS.png" alt="tweakCSS" width={54} height={54}/> */}
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        tweakCSS
      </p>
      <p className="text-base md:text-lg my-4 text-white font-normal inter-var text-center px-4">
        Empowering designers and developers to craft stunning products with greater flexibility and joy.
      </p>
      <div className="flex justify-center">
        <div className="flex justify-between w-96">
          <button className="text-white bg-blue-500 py-2 px-3 rounded-md border-[1px] my-4 border-black bg-opacity-50 hover:bg-opacity-100 transition-all border-opacity-20">Getting Started</button>
          <button className="text-white bg-black bg-opacity-50 py-2 px-3 rounded-md border-[1px] my-4 border-black hover:bg-opacity-100 transition-all border-opacity-20">Naming Conventions</button>
        </div>
      </div>
    </div>
  </>
  )
}