import React from "react";
import { Link } from "react-router-dom";

function CateringSection() {
  return (
    <div className="bg-black py-12 border-b-white border-b-4 ">
      <div>
        <Link to={"/catering"}><h1 className="text-white italic text-4xl hover:text-zinc-400">
          Need Catering? (Click Here)
        </h1></Link>
        
      </div>
    </div>
  );
}

export default CateringSection;
