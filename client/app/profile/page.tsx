import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function () {
  return (
    <div>
      <div className="static h-[60px]">
        <Navbar isLogo={true}></Navbar>
      </div>
      <div className="flex">
        <div className="flex flex-col text-white items-center w-full">
          <Image
            src={"/tweakCSS.png"}
            alt={"profile"}
            width={200}
            height={200}
          ></Image>
          <span className="my-4 text-3xl font-semibold">skyash</span>
        </div>
      </div>
    </div>
  );
}
