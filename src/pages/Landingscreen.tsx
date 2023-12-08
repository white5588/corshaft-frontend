import React, { useState } from 'react'
import pics from "../assets/lek 6.jpg"
import Typewriter from "typewriter-effect"
import Detailed from './Detailed'
import {FC} from "react"


// interface iCards {
//   image?: any;
//   name?: string;
//   location?: string;
//   amount?: string;
//   }



const Landingscreen = () => {
 
  const [show,setShow] = useState<boolean>(false)

  const toggle =()=>{
    setShow(!show)
  };

  return (
    <>
    <div className=' w-full h-screen   min-h-[250px] min-w:[300px] flex justify-center items-center flex-col  sm-w-[100%] sm-h-[100%] '>

      <div className=' px-2 py-5 absolute  flex justify-center items-center text-[55px] top-[30%] sm-w-[100%] max-sm:hidden sm-h-[100%]'>
      <Typewriter
      options={{ loop: true, delay: 55, deleteSpeed: 50 }}
  onInit={(typewriter) => {
    typewriter.typeString('get all best house right here on Corshaft')
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

    <div className='px-2 py-8  bg-[#000000a6] absolute flex justify-center items-center  flex-col mt-[18%] sm-w-[20%] '>


   <div className='flex gap-2 justify-center items-center sm-w-[50%]'>
<div className='px-10 py-2 bg-white  text-black '>Bed</div>
<div  className='px-10 py-2 bg-white  text-black'>Shortlet</div>
<div  className='px-10 py-2 bg-white  text-black'>Shortlet</div>
 </div>

 <div className=' px-2 py-4  flex flex-row gap-2'>

  <div className='flex mt-2 sm-w-[100%] max-sm:hidden'>
    <input type="text"  className=' px-4 py-1 border-none outline-none bg-white  text-black text-[10px] rounded-sm'/>
  </div>
  <div className='flex mt-3 gap-3 sm-w-[100%] min-w-full max-sm:hidden'>
    <div className='px-10 py-2 bg-white flex justify-center items-center text-black'>type</div>
    <div className='px-10 py-2 bg-white flex justify-center items-center text-black'> Room</div>
    <div className='px-10 py-2 bg-white flex justify-center items-center text-black'> Brand</div>
  </div>
 </div>

</div>
<div className='w-full h-screen flex justify-center items-center sm-w-[100%]'>
  <img src={pics}  className='w-full h-screen object-cover '/>


  

</div>

</div>

    </>
  )
}

export default Landingscreen