import { SearchIcon, ChevronDown } from "lucide-react";
import olxLogo from '../assets/olx-logo.png'
import Login from "../components/Login";
import { useState } from "react";

type setSearch = {
  setSearch: any
}

const Navbar = (props:setSearch) => {

    const [loginPop,setLoginPop] = useState(false)


  return (
    <>
    <nav className="flex items-center justify-between px-6 py-3 border-b border-gray-200 shadow-md">
      <div className="flex items-center space-x-6">
    
        <div className="w-20 h-10">
          <img 
            src= {olxLogo}
            alt="OLX Logo" 
            className="object-contain h-full w-full" 
          />
        </div>

        {/* Location */}
        <div className="flex items-center border-2 border-black rounded-md px-3 py-2 space-x-2 w-64">
          <SearchIcon className="w-5 h-5 text-gray-500" />
          <input 
            type="text" 
            placeholder="India" 
            className="flex-grow outline-none text-sm" 
          />
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </div>

        {/* Search */}
        <div className="flex items-center border-2 border-black rounded-md overflow-hidden">
          <input
            onChange={(e) => props?.setSearch(e.target.value)}
            type="text"
            placeholder="Find Cars, Mobile, Bikes and more"
            className="px-3 py-2 w-96 outline-none text-sm"
          />
          <button className="bg-black text-white px-4 py-2">
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>
      </div>


      <div className="flex items-center space-x-6">
        {/* Language Selector */}
        <div className="flex items-center cursor-pointer">
          <span className="font-semibold mr-2">English</span>
          <ChevronDown className="w-5 h-5" />
        </div>

        {/* Login and Sell */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setLoginPop(!loginPop)} className="text-black font-bold underline hover:no-underline">
            Login
          </button>
          <button className="border border-blue-600 text-black-600 px-4 py-2 rounded-full font-bold hover:bg-blue-50">
            Sell
          </button>
        </div>
      </div>
    </nav>
    { loginPop && <Login setLoginPop={setLoginPop}/>}
    </>
  );
};

export default Navbar;