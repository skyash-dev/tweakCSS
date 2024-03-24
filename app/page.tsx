import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="bg-gray-100 bg-opacity-50">
      <nav className="px-8 py-4 flex items-center justify-between glass">
        <div className="flex items-center">
        <Image src="/palette-hub.png" alt="Palette-Hub" width={54} height={54}/>
        <Link className="text-xl" href="#">Palette-Hub</Link>
        <div className="mx-10 h-8 text-sm px-4 border-black border-solid border-l-[1px] border-opacity-20 flex items-center justify-between ">🔍
        <input type="text" className="outline-none mx-2" placeholder="Type keywords..." />
        </div>
        </div>
        <div className="w-96 flex justify-between">
          <Link href="#">Documentation</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Resources</Link>
        </div>
      </nav>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className="absolute left-[550px] top-[250px] w-full h-[546px]">
        <span className="text-4xl font-bold">Palette-Hub</span>
      </div>
    </main>
  );
}
