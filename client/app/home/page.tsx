"use client";

import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import Fetch from "@/lib/http";
import { getallpalettesurl, getmypalettesurl } from "@/lib/kv";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiHeart, CiCirclePlus } from "react-icons/ci";

export default function Home() {
  const [active, setActive] = useState("New");
  const [palettes, setPalettes] = useState<any>([]);

  async function fetchPalettes() {
    const payload = {};
    let api;
    if(active=="New"){
      api = new Fetch(payload, getallpalettesurl);
    }
    else if(active=="MyPalettes"){
      api = new Fetch(payload, getmypalettesurl);
    }
    const res = await api?.get();
    setPalettes(res.palettes);


  }

  useEffect(() => {
    fetchPalettes()
  }, [active]);

  return (
    <div className="">
      <div className="static h-[60px]">
        <Navbar isLogo={true}></Navbar>
      </div>
      <div className="flex">
        <Sidebar active={active} setActive={setActive}></Sidebar>
        <div className="px-6 py-6 flex max-w-[80%] flex-wrap">
          {palettes.map((palette: any, i: any) => {
            return (
              <div key={i} className="w-[200px] h-[200px] text-white mx-6 my-6">
                <div className="palette w-11/12 h-44 flex my-4 flex-col">
                  {Object.keys(palette.color).map((keyName, index) => {
                    return (
                      <div
                        className={`h-1/5 hover:h-2/5 transition-all w-full flex justify-center items-center text-[0] hover:text-base text-black cursor-pointer`}
                        style={{ backgroundColor: `${palette.color[keyName]}` }}
                        key={index}
                      >
                        {palette.color[keyName]}
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center px-2 py-2">
                  <span>{palette.name}</span>
                  <Link
                    href={"/create"}
                    className="border-[1px] border-white flex flex-row justify-between w-14 items-center px-2 py-1 rounded-md border-opacity-20 hover:scale-105 transition-transform"
                  >
                    <CiHeart className="" />
                    <span className="text-sm">109</span>
                  </Link>
                </div>
              </div>
            );
          })}
          <div className="mx-6 my-6 text-white flex flex-col items-center">
            <div className="bg-white bg-opacity-10 flex justify-center items-center w-[180px] h-[180px] rounded-xl hover:scale-105 transition-transform">
              <button className="flex flex-row text-3xl transition-all hover:text-4xl">
                <CiCirclePlus></CiCirclePlus>
              </button>
            </div>
            <span className="py-2">Create New!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
