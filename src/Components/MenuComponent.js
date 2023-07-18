import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ImagePlaceholder from "../Images/placeholder.png";

function MenuComponent({ itemName, itemDescription, image }) {
  return (
    <div className="flex ">
      <div className="p-4 w-2/5">
        <img src={image} alt="food picture" style={{ borderRadius: 10 }} />
      </div>
      <div className="flex flex-col justify-center text-left p-2 md:p-4 w-3/5">
        <h3 className=" text-xl md:text-3xl uppercase font-extrabold">
          {itemName}
        </h3>
        <a href="https://twograndmas.square.site/" target="blank"><h2 className="uppercase font-extrabold flex  items-center">
          order now
          <span className="text-red-600">
            <ArrowForwardIcon />
          </span>
        </h2></a>
        
        <h4 className="text-sm md:text-xl	">{itemDescription}</h4>
      </div>
    </div>
  );
}

export default MenuComponent;
