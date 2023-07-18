
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="overflow-hidden">
      <div className="bg-yellow-500	h-16 pt-10 pb-10	flex items-center justify-center ">

<Link to="/"><div className="absolute left-5 top-5"><img style={{width: 50}} src="https://ik.imagekit.io/jsklle928/IMG_2837_2.jpg?updatedAt=1688421892529" alt="logo"></img></div></Link>
        
        
        
        <h2 className="font-extrabold text-2xl md:text-4xl uppercase">
          something special about{" "}
          <span className="text-red-600">your company!</span>
        </h2>
        <a href="https://twograndmas.square.site/" target="blank" ><button className="fixed right-10 top-5 bg-red-600 text-white font-bold py-2 px-4 rounded text-xl hover:text-2xl  hover:delay-150 invisible md:visible">
          ORDER NOW
        </button></a>
        
      </div>

    </div>
  );
}

export default NavBar;
