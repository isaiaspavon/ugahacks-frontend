export default function NavBarActivty() {
    return (
      <div className="w-full h-20 bg-[#1E1E2E] border border-white flex items-center justify-between px-8">
        {/* Logo */}
        <div className="text-[#E8F5E9] text-2xl font-bold">WibeCheck</div>
  
        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white rounded-full" />
          <span className="text-white text-lg font-bold">Hello, User</span>
        </div>
  
        {/* Menu Icon (Hamburger) */}
        <div className="w-10 h-10 flex flex-col justify-center gap-1 cursor-pointer">
          <div className="w-8 h-1 bg-black"></div>
          <div className="w-8 h-1 bg-black"></div>
          <div className="w-8 h-1 bg-black"></div>
        </div>
      </div>
    );
  }
  