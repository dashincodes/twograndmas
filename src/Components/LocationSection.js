import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


function LocationSection() {
const [currentLocation, setCurrentLocation] = useState('')
const locationId = "64b34f31dfce5ca2013388bf"

async function getCurrentLocation() {

  try {
    const res = await axios.get(`http://localhost:4000/api/location/${locationId}`, {
      header: {
        "content-type": "application/json"
      }
    
    })
    console.log(res.data);
    setCurrentLocation(res.data);
  } catch (err) {
    console.log(err);
  }



}


useEffect(() => {
getCurrentLocation();

}, [])

  return (
    <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 pt-32 pb-48 " id="locationSection">
      <div className="flex justify-center items-center px-2 md:px-12 ">
        <div className=" flex flex-col text-white pl-6">
          <h2 className="text-7xl md:text-8xl uppercase font-extrabold text-center text-yellow-500">
            find us!
          </h2>
          <h3 className=" text-4xl md:text-5xl text-center   pt-6 ">
            <span className="font-black uppercase underline text-yellow-500 tracking-wider">
              date:
            </span>{" "}
            {currentLocation.date}
          </h3>
          <h3 className="text-4xl md:text-5xl text-center  capitalize pt-8 text-white">
            <span className="font-black uppercase underline text-yellow-500 tracking-wider">
              location:{" "}
            </span>{" "}
            {currentLocation.address}
          </h3>
          <h3 className="text-4xl md:text-5xl text-center  capitalize pt-8">
            <span className="font-black uppercase underline text-yellow-500 tracking-wider">
              Time:{" "}
            </span>{" "}
            {currentLocation.time}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default LocationSection;
