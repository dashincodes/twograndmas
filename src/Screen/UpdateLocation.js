import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function UpdateLocation() {
    const [date, setDate] = useState("")
    const [address, setAddress] = useState("")
    const [time, setTime] = useState("")

    function clearFields() {
        window.location.reload();
    }

async function updateLocation() {


try {
    const res = await axios.patch("http://localhost:4000/api/location", {
        date, address, time
    }, {header: {
        "Content-Type": "application/json"
    }})
    console.log(res);
    clearFields();
   
} catch (err) {
    console.log("couldn't update location")
}

}

  return (
    <div className='bg-zinc-800 h-screen flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center'> 
            <div className='mb-6'><h1 className='text-center text-3xl text-white font-bold tracking-wide uppercase'>Update Current Location</h1></div>
            <div className='pb-6'><div className=''><h3 className=' text-white text-2xl'>Date</h3>
            <h4 className='text-zinc-400 mb-2'>Example Format: January, 1st, 2023</h4>
                <input
                className='w-72 h-10'
                onChange={(e) => setDate(e.target.value)}
                 />
                </div></div>

                <div className='pb-6'><div className=''><h3 className=' text-white text-2xl'>Address</h3>
            <h4 className='text-zinc-400 mb-2'>Example Format: 123 Address, Drive</h4>
                <input
                className='w-72 h-10'
                onChange={(e) => setAddress(e.target.value)}
                 />
                </div></div>

                <div className='pb-6'><div className=''><h3 className=' text-white text-2xl'>Time</h3>
            <h4 className='text-zinc-400 mb-2'>Example Format: 1pm - 5pm</h4>
                <input
                className='w-72 h-10'
                onChange={(e) => setTime(e.target.value)}
                 />
                </div></div>
               <div className='flex justify-center mt-4'> <button onClick={() => {
                updateLocation();
               
               }} className='bg-yellow-500 px-16 py-4 rounded font-bold text-2xl '>Update Location</button></div>
        </div>
    </div>
  )
}

export default UpdateLocation