import Navbar from "@/components/navbar/navbar"
import Sidebar from "@/components/sidebar/sidebar"
import Image from "next/image"

export default function(){
    return(
        <div>
            <div className="static h-[60px]"><Navbar></Navbar></div>
            <div className="flex">
            <Sidebar></Sidebar>
            <div className="flex flex-col text-white items-center w-full">
                <Image src={"/tweakCSS.png"} alt={"profile"} width={200} height={200}></Image>
                <span className="my-4 text-3xl font-semibold">skyash</span>
            </div>
            </div>
        </div>
    )
}