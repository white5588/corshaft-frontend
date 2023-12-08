import React, { useState } from 'react'
import pics from "../../assets/fashion-woman.jpg"
import Typewriter from "typewriter-effect"
import Register from './Register'
import SignIn from './SignIn'


const Authscreen = () => {



  return (
    <div className='w-full h-screen  flex justify-center items-center'>
         <div className=' w-[95%] h-full flex justify-center items-center gap-2'>
     <div className=' flex w-[80%] h-[500px] justify-center items-center bg-white max-sm:hidden'>
     <div className='flex h-[500px] w-[45%]  justify-center items-center absolute bg-[#0000008f]'>

</div>
 <div className='flex w-[100%] h-full '>
    <img src={pics}  className='w-[100%] h-full justify-center items-center object-cover  '/>
    </div>-
    <div className=' px-1 py-2   absolute  flex justify-center items-center text-[45px] top-[25%] ml-7 leading-[55px]'>
      <Typewriter
      options={{ loop: true, delay: 55, deleteSpeed: 50 }}
  onInit={(typewriter) => {
    typewriter.typeString('Make Your Dream House Right Here And Ease Your Stress')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(100000)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
      </div>

      <div className='text-tl text-[45px] flex absolute justify-center items-center  text-[white] font-semibold mt-10 max-sm:hidden '> Make All count...</div>
     </div>
<div className='w-full h-full  flex '>


<Register />
</div>

 








         </div>
    </div>
  )
}

export default Authscreen