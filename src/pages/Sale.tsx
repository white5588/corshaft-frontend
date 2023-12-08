import React from 'react'
import pic1 from "../assets/exotic-4-bed-semi-detached-duplexbq-eMiilm4Ww8Z4d44uWQGc.jpeg"
import { IoIosNotifications } from 'react-icons/io'

const Sale = () => {
  return (
    <div className='w-full h-screen flex justify-Start items-start '>
    <div className='w-full h-[60px] bg-slate-300 flex justify-center items-center '>
         <div className='w-[95%] h-full flex justify-between items-center'>
 <div className='flex gap-2 '>
    <input type="text"  className='px-2 py-2 flex rounded bg-white text-black border-none outline-none text-[15px]'/>
    <div className='px-4 py-2   flex bg-purple-500 hover:scale-105 cursor-pointer hover:text-[silver] transition-all rounded-sm'> Search</div>
 </div>

<div className='flex flex-row gap-5'>
    <div className='px-4 py-2 flex bg-purple-500 text-tl cursor-pointer rounded-sm'>Type</div>
    <div className='px-4 py-2  flex bg-purple-500 text-tl cursor-pointer rounded-sm'>Room</div>
    <div className='px-4 py-2 flex bg-purple-500 text-tl cursor-pointer rounded-sm'>Price</div>
    <div className='px-4 py-2 flex bg-purple-500 text-tl cursor-pointer rounded-sm'>Price</div>
</div>

         </div>
    </div>


<div className='w-full h-[200px] flex absolute flex-row justify-betwen items-center mt-[8%] gap-3 '>


    <div className='w-[40%] h-full flex    bg-white justify-between items-center mt-[10%] flex-row'>
 <div className='w-[40%]  h-full flex  justify-center items-center'>
    <img src={pic1} className='w-full h-full object-cover flex justify-center items-center ' />
    <div className='w-full h-full flex flex-col justify-center items-center'>
   <div className="text-black flex justify-center items-center text-[20px] font-semibold font-sans">The Venice</div>
        <div className="text-black text-[10px] flex  justify-center items-center"><IoIosNotifications/> Sangotedo, Lagos</div>
        <div className="text-black text-[10px] flex  justify-center items-center"> N10,000,000</div>
   </div>
 </div>
 <div className=' px-2 py-4 flex justify-center items-center flex-col'>
    <div className=' px-4 py-2 text-black text-tl text-[15px] font-semibold text-[silver] bg-[orangered] rounded hover:scale-105 transition-all cursor-pointer'>View</div>
    <div className=' px-4 py-2 text-black text-tl text-[15px] bg-[purple] rounded mt-3 text-white cursor-pointer hover:scale-105 hover:text-silver transition-all'>Enquire</div>

 </div>


    </div>

    <div className='w-[20%] h-full  flex bg-white justify-center items-center mt-[152px]  '>
        
    </div>



    </div>

<div className='w-full h-[200px] flex absolute flex-row justify-betwen items-center mt-[25%] gap-3 '>


    <div className='w-[40%] h-full flex    bg-white justify-between items-center mt-[10%] flex-row'>
 <div className='w-[60%] h-full flex  justify-center items-center flex-row'>
    <img src={pic1} className='w-full h-full object-cover flex ' />
   <div className='w-full h-full flex flex-col justify-center items-center'>
   <div className="text-black flex justify-center items-center text-[20px] font-semibold font-sans">The Venice</div>
        <div className="text-black text-[10px] flex  justify-center items-center"><IoIosNotifications/> Sangotedo, Lagos</div>
        <div className="text-black text-[10px] flex  justify-center items-center"> N10,000,000</div>
   </div>
 </div>
 <div className=' px-4   py-2 flex justify-center items-center flex-col'>
    <div className=' px-4 py-2 rounded bg-[orangered] text-white font-bold text-tl text-[15px]  hover:scale-105 transition-all cursor-pointer '>View</div>
    <div className='px-4 py-2 text-black text-tl text-[15px] bg-[purple] rounded mt-3 text-white cursor-pointer hover:scale-105 hover:text-silver transition-all'>Enquire</div>

 </div>


    </div>

    <div className='w-[20%] h-full  flex bg-white justify-center items-center mt-[152px]  '>
        
    </div>



    </div>

<div className='w-full h-[200px] flex absolute flex-row justify-betwen items-center mt-[43%] gap-3 '>


    <div className='w-[40%] h-full flex    bg-white justify-between items-center mt-[10%] flex-row'>
 <div className='w-[70%] h-full flex  justify-center items-center'>
    <img src={pic1} className='w-full h-full object-cover flex ' />
    <div className='w-full h-full flex flex-col justify-center items-center'>
   <div className="text-black flex justify-center items-center text-[20px] font-semibold font-sans">The Venice</div>
        <div className="text-black text-[10px] flex  justify-center items-center"><IoIosNotifications/> Sangotedo, Lagos</div>
        <div className="text-black text-[10px] flex  justify-center items-center"> N10,000,000</div>
   </div>
 </div>
 <div className=' px-2 py-4 flex justify-center items-center flex-col'>
 <div className=' px-4 py-2 rounded bg-[orangered] text-white font-bold text-tl text-[15px]  hover:scale-105 transition-all cursor-pointer '>View</div>
    <div className='px-4 py-2  text-tl text-[15px] bg-[purple] rounded mt-3 text-white cursor-pointer hover:scale-105 hover:text-silver transition-all'>Enquire</div>
 </div>


    </div>

    <div className='w-[20%] h-full  flex bg-white justify-center items-center mt-[165px]  '>
        
    </div>



    </div>

    </div>
    
  )
}

export default Sale