import { ArrowUpwardRounded } from '@mui/icons-material'
import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import TestimonialSection from '../Components/TestimonialSection'
import Footer from '../Components/Footer'

function BookTheTruckScreen() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (


    <>
  <div>
    <div><NavBar/></div>
    <div className="bg-gradient-to-r from-black to-zinc-900 flex flex-col items-center pt-12 pb-32">
        <img style={{width: 400}} src='https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/grandmas_food_truck.jpg?updatedAt=1688059873381'></img>
        <h2 className="text-white text-7xl font-bold mt-6">Want To Book The Food Truck?</h2>
        <h3 className="text-white text-center text-2xl font-light mx-64 mt-4 leading-loose">
        Are you interested in booking Two Grandmas Food Truck for your upcoming event? Look no further! Whether it's a Wedding, a Birthday Party, or a Corporate Event, our food truck is at your service. Simply complete the form below, and our team will reach out to you promptly. We're excited to cater your event and create a memorable culinary experience!
        </h3>
        <h3 className="text-6xl mt-4 animate-bounce">👇</h3>
      </div>
      <div className="bg-orange-100 py-12">
        <div className=" flex  justify-center">
          {" "}
          <h2 className="text-center text-6xl font-bold w-1/2">
            Fill Out The Form Below To Book Our Truck
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
    <div className="fixed bottom-10 right-5 bg-red-600 rounded-full p-1" ><ArrowUpwardRounded style={{fontSize: 50, color: "white"}}/></div>
</div></>
    
  )
}

export default BookTheTruckScreen