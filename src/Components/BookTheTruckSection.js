import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function BookTheTruckSection() {

 
   
  return (
    <div className="bg-black py-12 md:py-18 ">
      <div className="flex items-center justify-center  flex-wrap ">
        <div className="p-6 md:py-32  ">
          <img
            style={{
              minWidth: 400,
              maxWidth: 500,
              minHeight: 400,
              maxHeight: 500,
              borderColor: "white",
              borderWidth: 16,
              borderRadius: 8,
            }}
            className="w-full "
            src={
              "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/grandmas_food_truck.jpg?updatedAt=1688059873381 "
            }
            alt="picture of our food truck"
          />
        </div>
        <div className="flex flex-col items-center justify-center md:items-start md:w-1/2 px-0 md:px-12">
          <h1 className="text-white text-8xl md:text-9xl md:text-left font-extrabold uppercase underline underline-offset-10 ">
            Book The Truck!
          </h1>
          <Link to={"/book"} ><button
            className="bg-red-600 text-2xl hover:text-3xl text-white font-bold py-4 px-16 mt-12 md:mt-8 "
            style={{ borderRadius: 10 }}
          >
            Book Now
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default BookTheTruckSection;
