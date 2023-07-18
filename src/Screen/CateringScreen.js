import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import TestimonialSection from "../Components/TestimonialSection";
import { ArrowUpwardRounded } from "@mui/icons-material";

function CateringScreen() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="bg-gradient-to-r from-black to-zinc-900 flex flex-col items-center py-32">
        <h2 className="text-white text-7xl font-bold">Need Catering?</h2>
        <h3 className="text-white text-center text-2xl font-light mx-64 mt-4 leading-loose">
          Are you looking for Two Grandmas to cater your next event? We would
          love to. No matter if it's a Wedding, a Birthday Party, a Corporate
          Event, we've got you covered. Just fill out the form below and someone
          will be in contact with you shortly! We can't wait!
        </h3>
        <h3 className="text-6xl mt-4 animate-bounce">👇</h3>
      </div>
      <div className="bg-orange-100 py-12">
        <div className=" flex  justify-center">
          {" "}
          <h2 className="text-center text-6xl font-bold w-1/2">
            Fill Out The Form Below For Catering
          </h2>
        </div>
        <div className="flex flex-col items-center pt-4">
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-xl font-semibold text-zinc-700">First Name</h3>
            <input className="border-2 border-zinc-300 w-100 h-12 mt-2 p-2  rounded-xl" />
          </div>
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-xl font-semibold text-zinc-700">Last Name</h3>
            <input className="border-2 border-zinc-300 w-100 h-12 mt-2 p-2  rounded-xl" />
          </div>
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-xl font-semibold text-zinc-700">
              Email Address
            </h3>
            <input className="border-2 border-zinc-300 w-100 h-12 mt-2  p-2  rounded-xl" />
          </div>
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-xl font-semibold text-zinc-700">
              Phone Number
            </h3>
            <input className="border-2 border-zinc-300 w-100 h-12 mt-2  p-2 rounded-xl" />
          </div>
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-xl font-semibold text-zinc-700">
              City of Event
            </h3>
            <input className="border-2 border-zinc-300 w-100 h-12 mt-2 p-2 rounded-xl" />
          </div>
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-xl font-semibold text-zinc-700">
              Number of Guests
            </h3>
            <input className="border-2 border-zinc-300 w-100 h-12 mt-2 p-2 rounded-xl" />
          </div>
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-xl font-semibold text-zinc-700">
              Additional Comments
            </h3>
            <textarea className="border-2 border-zinc-300 w-100  h-32 mt-2  p-2 rounded-xl" />
          </div>
        </div>
      </div>
      <div>
        <TestimonialSection />
      </div>
      <div className="fixed bottom-10 right-5 bg-red-600 rounded-full p-1" ><ArrowUpwardRounded style={{fontSize: 50, color: "white"}}/></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default CateringScreen;
