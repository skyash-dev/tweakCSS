import Image from "next/image"
import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="px-8 py-2 flex items-center justify-between glass -z-10 app-navbar">
        <div className="flex items-center">
        <Image src="/tweakCSS.png" alt="tweakCSS" width={54} height={54}/>
        <Link className="text-xl text-white font-bold" href="#">tweakCSS</Link>
        <div className="mx-10 h-8 text-sm px-4 border-white border-solid border-l-[1px] border-opacity-20 flex items-center justify-between "><span className="text-lg">🔍</span>
        <input type="text" className="outline-none mx-2 bg-transparent text-white" placeholder="Type keywords..." />
        </div>
        </div>
        <div className="w-96 md:flex justify-between text-white hidden md:visible">
          <Link href="#">Documentation</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Resources</Link>
        </div>
      </nav>
    )
}