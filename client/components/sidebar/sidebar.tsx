export default function Sidebar(){
    return(
        <div className="h-[515px] w-[300px] rounded-r-full bg-[#05051E] border-white border-opacity-10 border-[1px] flex justify-center items-center">
          <div className="blob w-[550px] h-[200px] rounded-[300px] absolute top-[250px] left-[-200px] origin-left -z-10 blur-3xl bg-opacity-40 opacity-50 bg-gradient-to-r from-[#05051E] to-[#581C87]"></div>
          <div className="text-white flex flex-col items-start text-[18px] font-normal justify-between h-1/2">
            <button className="hover:bg-white hover:bg-opacity-10 pl-3 pr-6 py-2 rounded-2xl">
              ✨ New
            </button>
            <button className="hover:bg-white hover:bg-opacity-10 pl-3 pr-6 py-2 rounded-2xl">
              🔥 Popular
            </button>
            <button className="hover:bg-white hover:bg-opacity-10 pl-3 pr-6 py-2 rounded-2xl">
              ❤️ Collection
            </button>
            <button className="hover:bg-white hover:bg-opacity-10 pl-3 pr-6 py-2 rounded-2xl">
              🎨 My Palettes
            </button>
            <button className="hover:bg-white hover:bg-opacity-10 pl-3 pr-6 py-2 rounded-2xl">
              👤 Profile
            </button>
          </div>
        </div>
    )
}