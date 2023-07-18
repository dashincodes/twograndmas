
import React from "react";

import { HashLink as Link } from "react-router-hash-link";

function HeroHeader() {
  return (
    <div className="bg-gradient-to-r from-black to-zinc-900 w-full flex-col justify-center items-center pb-32 overflow-hidden ">
      <div className="text-white uppercase font-semi-bold flex justify-center py-4 text-sm   ">
        
        <Link to="#locationSection"> <h2 className=" px-2 md:px-6 hover:text-base  hover:text-yellow-500">
          find us
        </h2></Link>
       
        <Link to="#menuSection"><h2 className="px-2 md:px-6 hover:text-base  hover:text-yellow-500">
          menu
        </h2></Link>
        
        <a href="https://twograndmas.square.site/" target="blank" ><h2 className="px-2 md:px-6 hover:text-base  hover:text-yellow-500">
          order
        </h2></a>
        <Link to={"/catering"}> <h2 className="px-2 md:px-6 hover:text-base  hover:text-yellow-500">
          catering
        </h2></Link>
       
       <Link to={"/book"}><h2 className="px-2 md:px-6 hover:text-base  hover:text-yellow-500">
          book the truck
        </h2></Link>
        
      </div>
      <div className="flex flex-col items-center justify-center h-92 ">
        <h1 className="text-white text-7xl md:text-9xl text-center mx-72 mt-12 font-extrabold uppercase ">
          Two Grandmas Soul Food
        </h1>
        <h2 className="text-yellow-500 text-4xl md:text-5xl  font-bold tracking-wider mt-6 capitalize">
          Let us bless your soul
        </h2>
   <a href="https://twograndmas.square.site/" target="blank" ><button className="bg-red-600 px-8 py-4 text-xl hover:text-2xl font-bold text-white rounded-lg  mt-8 uppercase">
          Place An Order
        </button></a>
        
      </div>
    </div>
  );
}

export default HeroHeader;
