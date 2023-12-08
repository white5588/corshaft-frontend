import React from 'react'
import pic from "../assets/abuja.png"
import Typewriter from "typewriter-effect"
import pic1 from "../assets/agent b.jpg"
import pic2 from "../assets/jOljUnUsq5LxjDoA1W1f.png"
import pic3 from "../assets/fashion-woman.jpg"
import pic4 from "../assets/arr7WlkiFT505oWwHiCp.png"

import { IoIosNotifications } from 'react-icons/io'
const Agents = () => {
  return (
  <>
  <div className='w-full h-screen flex  justify-center items-center'>
   <div className='w-full h-full flex justify-center '>
 <div className='w-full h-[430px] flex justify-center items-center'>
   <img src={pic} className='w-full h-full flex justify-center items-center object-fit-cover' />
   <div className='px-2 py-4 font-sans absolute flex justify-center  items-center text-[45px] font-semibold '>
   <Typewriter
      options={{ loop: true, delay: 55, deleteSpeed: 50 }}
  onInit={(typewriter) => {
    typewriter.typeString('Agents You Need All At Your Convienience')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>

   </div>

<div className='px-2 py-4 flex justify-center items-center flex-row mt-[10%] absolute gap-3'>
  <div className='px-2 py-4'>
    <input type="text"  placeholder='enter your Fav Agt' className=' h-[55px] w-[280px] rounded outline-none border-none bg-white text-black'/>
  </div>
  <div className='px-10 py-3 flex  text-[20px]  font-sans text-black rounded bg-[lightblue]'>Type</div>
  <div className='px-10 py-2 flex bg-[purple] text-[25px] font-semibold font-sans text-white rounded hover:scale-108 hover:bg-[dodgerblue]  hover:text-black transition-all cursor-pointer'>Search</div>
</div>
 </div>

   <div className='w-full h-[60%] flex justify-center items-center flex-col absolute  mt-[35%]  '>
   <div className='w-[50%] h-[40%] flex  justify-between items-center bg-white rounded mt-10'>
    <img src={pic1} className='w-[30%] h-full object-cover flex  rounded' />
    <div className='w-[50%] h-full flex flex-col justify-center items-center'>
   <div className="text-black flex justify-center items-center text-[20px] font-semibold font-sans">Bona Ventures</div>
        <div className="text-black text-[10px] flex  justify-center items-center"><IoIosNotifications/> Sangotedo, Lagos</div>
      <div className='px-10 py-2 flex bg-[lightblue] rounded mt-2'>View</div>
      <div className='px-4 py-2 flex bg-[blue] rounded mt-3'>Get Contact</div>
   </div>
 </div>
   <div className='w-[50%] h-[40%] flex  justify-between items-center bg-white rounded mt-5'>
    <img src={pic2} className='w-[30%] h-full object-cover flex  rounded' />
    <div className='w-[50%] h-full flex flex-col justify-center items-center'>
   <div className="text-black flex justify-center items-center text-[20px] font-semibold font-sans"> Superite Afica</div>
        <div className="text-black text-[10px] flex  justify-center items-center"><IoIosNotifications/> Sangotedo, Lagos</div>
      <div className='px-10 py-2 flex bg-[lightblue] rounded mt-2'>View</div>
      <div className='px-4 py-2 flex bg-[blue] rounded mt-3'>Get Contact</div>
   </div>
 </div>
   <div className='w-[50%] h-[40%] flex  justify-between items-center bg-white rounded mt-5'>
    <img src={pic3} className='w-[30%] h-full object-cover flex  rounded' />
    <div className='w-[50%] h-full flex flex-col justify-center items-center'>
   <div className="text-black flex justify-center items-center text-[20px] font-semibold font-sans">First touch L.T.D</div>
        <div className="text-black text-[10px] flex  justify-center items-center"><IoIosNotifications/> Sangotedo, Lagos</div>
      <div className='px-10 py-2 flex bg-[lightblue] rounded mt-2'>View</div>
      <div className='px-4 py-2 flex bg-[blue] rounded mt-3'>Get Contact</div>
   </div>
 </div>
   <div className='w-[50%] h-[40%] flex  justify-between items-center bg-white rounded mt-5'>
    <img src={pic4} className='w-[30%] h-full object-cover flex  rounded' />
    <div className='w-[50%] h-full flex flex-col justify-center items-center'>
   <div className="text-black flex justify-center items-center text-[20px] font-semibold font-sans">Inner Workings L.T.D</div>
        <div className="text-black text-[10px] flex  justify-center items-center"><IoIosNotifications/> Sangotedo, Lagos</div>
      <div className='px-10 py-2 flex bg-[lightblue] rounded mt-2'>View</div>
      <div className='px-4 py-2 flex bg-[blue] rounded mt-3'>Get Contact</div>
   </div>
 </div>
  
  </div>

   </div>
  </div>
  
  </>
  )
}

export default Agents
