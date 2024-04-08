import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import { CiHeart, CiCirclePlus } from "react-icons/ci";

export default function Home() {
  return (
    <div className="">
      <div className="static h-[60px]">
        <Navbar></Navbar>
      </div>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="px-6 py-6 flex w-8/12 flex-wrap">
        <div className="w-[200px] h-[200px] text-white mx-6 my-6">
            <div className="bg-[#86469C] w-full h-[72px] rounded-t-xl"></div>
            <div className="bg-[#BC7FCD] w-full h-[56px]"></div>
            <div className="bg-[#FB9AD1] w-full h-[40px]"></div>
            <div className="bg-[#FFCDEA] w-full h-[32px] rounded-b-xl"></div>
            <div className="flex justify-between items-center px-2 py-2">
            <span>Fuzzy Stud!</span>
            <button className="border-[1px] border-white flex flex-row justify-between w-14 items-center px-2 py-1 rounded-md border-opacity-20"><CiHeart /><span className="text-sm">109</span></button>
            </div>
        </div>
        <div className="mx-6 my-6 text-white flex flex-col items-center">
            <div className="bg-white bg-opacity-10 flex justify-center items-center w-[200px] h-[200px] rounded-xl">
            <button className="flex flex-row text-3xl transition-all hover:text-4xl"><CiCirclePlus></CiCirclePlus></button>
            </div>
            <span className="py-2">Create New!</span>
        </div>
        </div>
      </div>
    </div>
  );
}
