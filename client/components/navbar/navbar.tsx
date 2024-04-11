import Link from "next/link";
import Image from "next/image";

interface props {
  isLogo:boolean;
}

export default function Navbar({isLogo}:props) {
  return (
    <nav className="px-8 py-2 flex items-center justify-between z-10 app-navbar h-[60px] glass fixed top-0 w-full">
        <Link className="text-[20px] text-white font-semibold flex items-center" href="#">
      {isLogo?<Image src="/tweakCSS.png" alt="tweakCSS" width={40} height={40}/>:null}
          tweakCSS
        </Link>
      <div className="flex items-center justify-center">
        <div className="flex justify-center items-center">
          <div className="h-[30px] text-sm px-4 border-solid border-opacity-20 flex items-center border-white border-[1px] rounded-full">
            <span className="text-[14px]">🔍</span>
            <input
              type="text"
              className="outline-none mx-2 bg-transparent text-white text-xs"
              placeholder="Type keywords..."
            />
          </div>
        </div>
      </div>
      <div className="w-[300px] md:flex justify-between text-white hidden md:visible font-medium text-sm">
        <Link href="#" className="opacity-70 hover:opacity-100">
          Docs
        </Link>
        <Link href="#" className="opacity-70 hover:opacity-100">
          Palettes
        </Link>
        <Link href="#" className="opacity-70 hover:opacity-100">
          Blog
        </Link>
        <Link href="#" className="opacity-70 hover:opacity-100">
          Github
        </Link>
      </div>
    </nav>
  );
}
