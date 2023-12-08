import React from 'react'
import pix from "../assets/agent b.jpg"
import pix1 from "../assets/agent hus 1.png"
import pix2 from "../assets/agent hus2.jpg"
import pix3 from "../assets//agent hus 3.jpg"
import pix4 from "../assets/agent hus4.jpg"
import pix5 from "../assets/luxury.png"
import pix6 from "../assets/abuja.png"
import pix7 from "../assets/lekki_homes-20211110-0138 building 11.jpg"
import pix8 from "../assets/agent b.jpg"
import pix9 from "../assets/agent b.jpg"
import {IoIosNotifications} from "react-icons/io"


const Guide = () => {
  return (
    <div className='w-full h-[80%] flex justify-center items-center '>
         <div className='w-[90%] h-full flex justify-center items-center flex-col '>
            <div className='px-2 py-2 flex justify-center items-center rounded-full  text-[35px] font-semibold font-mono mt-10'> Find Agents Nereby You at your door Step</div>
        <div className="w-full h-[350px] flex  flex-row gap-5 justify-center items-center mt-5">


        <div className="px-2 py-4 flex justify-between items-center bg-white">
    <div className="w-[280px] h-full flex flex-col justify-center items-start mt-5 ">
        <img src={pix1}  className="w-[270px] h-[200px] flex justify-center items-center"/>
        <div className="text-black flex justify-center items-center">Luxury Apartments </div>
        <div className="px-2 py-1 bg-[dodgerblue] text-serif  ml-[50%] rounded hover:cursor-pointer hover:scale-125 duration-500 transition-all">View</div>
    </div>  
    </div>
   
    <div className="px-2 py-4 flex justify-between items-center bg-white">
    <div className="w-[280px] h-full flex flex-col justify-center items-start mt-5 ">
        <img src={pix2}  className="w-[270px] h-[200px] flex justify-center items-center"/>
        <div className="text-black flex justify-center items-center"> Shortlet Apartments</div>
        <div className="px-2 py-1 bg-[dodgerblue] text-serif  ml-[50%] rounded hover:cursor-pointer hover:scale-125 duration-500 transition-all">View</div>
    </div>  
    </div>
   
    <div className="px-2 py-4 flex justify-between items-center bg-white">
    <div className="w-[280px] h-full flex flex-col justify-center items-start mt-5 ">
        <img src={pix3}  className="w-[270px] h-[200px] flex justify-center items-center"/>
        <div className="text-black flex justify-center items-center">Prestige Magazine</div>
        <div className="px-2 py-1 bg-[dodgerblue] text-serif  ml-[50%] rounded hover:cursor-pointer hover:scale-125 duration-500 transition-all">View</div>
    </div>  
    </div>
   
    <div className="px-2 py-4 flex justify-between items-center bg-white">
    <div className="w-[280px] h-full flex flex-col justify-center items-start mt-5 ">
        <img src={pix4}  className="w-[270px] h-[200px] flex justify-center items-center"/>
        <div className="text-black flex justify-center items-center">Real Estate Report</div>
        <div className="px-2 py-1 bg-[dodgerblue] text-white text-serif  ml-[50%] rounded hover:cursor-pointer hover:scale-125 duration-500 transition-all">View</div>
    </div>  
    </div>
   
   

     </div>

     <div className='px-2 py-2 flex justify-center items-center rounded-full mt-5 text-[30px] hover:text-[#61d061] cursor-pointer hover:scale-125 duration-500 transitions-all '> Neighbourhood Guilde</div>
     <div className="w-[280px] h-[350px] flex  bg-whiteflex-row gap-5 justify-center items-center mt-5 ">
   


    <div className="h-[300px] flex justify-center items-center bg-white hover:scale-105 transition-all">
    <div className="w-[500px] h-full flex flex-col justify-center items-start mt-5 ">
        <img src={pix5}  className="w-full h-full flex justify-center items-center object-cover" />
        <div className='px-2 py-4 text-[40px] font-semibold  font-sans justify-center items-center flex  absolute m-24'>Lagos</div>
    </div>  
    </div>
   


    <div className="h-[300px] flex justify-center items-center bg-white hover:scale-105 transition-all ">
    <div className="w-[400px] h-full flex flex-col justify-center items-start mt-5">
        <img src={pix7}  className="w-full h-full flex justify-center items-center object-cover"/>
        <div className='py-10 text-[40px] font-semibold  font-sans justify-center items-center flex  absolute ml-24 '>Ikeja</div>
    </div>  
    </div>
   




    <div className=" relative h-[300px] flex justify-center items-center bg-white hover:scale-105 transition-all ">
    <div className="w-[400px] h-full flex flex-col justify-center items-start mt-5 ">
        <img src={pix6}  className="w-full h-full flex justify-center items-center object-cover"/>
      <div className='h-full w-full text-[40px] font-semibold  font-sans justify-center items-center flex  absolute  hover:bg-[#0000006d] '>Abuja</div>
    </div>  
    </div>
   
     </div>
     <div className='px-4 py-2 flex justify-center items-center bg-[dodgerblue] rounded-full  cursor-pointer mt-3 hover:cursor-pointer hover:text-[silver] hover:scale-125 duration-500 transition-all'> 
     Find Neighbouhood  Nereby You at your door step</div>
     </div>
    </div>
  )
}

export default Guide