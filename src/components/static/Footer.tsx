import React from 'react'
import pics from "../../assets/logo_corshaft-removebg-preview.png"

const Footer = () => {
  return (
    <div className='w-full h-[200px] flex justify-evenly items-center bg-[black]  mt-[10%] sm-w-[100%] sm-h-[100%]'>
      <div className=' px-2 py-4 text-tl flex justify-center items-center text-[40px]   text-[azure] flex-row mr-10 text-sm sm:text-[white]'>Corshaft
<img src={pics}  className='w-[60px] h-[60px] flex object-cover '/>
      </div>
       <div className='w-[80%] h-full flex justify-center items-center gap-10'>
       
         <div className='px-2 py-4 flex justify-center items-center flex-col leading-[30px] sm-h-[100%]'>
          <div className='flex justify-center items-center text-[25px]'>Featured Properties for rent</div>
          <div className='flex justify-center items-center text-[15px]'>Serviced Properties for rent</div>
          <div className='flex justify-center items-center text-[15px]'>Furnished Properties for rent</div>
          <div className='flex justify-center items-center text-[15px]'>Newly Built Properties for rent</div>
          <div className='flex justify-center items-center text-[15px]'>Cheap Properties for rent</div>
          <div className='flex justify-center items-center text-[15px]'>Luxury Properties for rent</div>

         </div>




         <div className='px-2 py-4 flex justify-center items-center flex-col leading-[30px] cursor-pointer sm-h-[100%]'>
          <div className='flex justify-center items-center text-[25px] font-bold'>Popular States</div>
          <div className='flex justify-center items-center text-[15px]'>Lagos</div>
          <div className='flex justify-center items-center text-[15px]'>Abuja</div>
          <div className='flex justify-center items-center text-[15px]'>Rivers</div>
          <div className='flex justify-center items-center text-[15px]'>Kano</div>
         </div>


         <div className='px-2 py-4 flex justify-center items-center flex-col leading-[30px] max-sm:hidden'>
          <div className='flex justify-center items-center text-[25px] font-semibold'>  Popular Cities</div>
          <div className='flex justify-center items-center text-[15px]'>Ikeja</div>
          <div className='flex justify-center items-center text-[15px]'>Lekki</div>
          <div className='flex justify-center items-center text-[15px]'>Ikoyi</div>
          <div className='flex justify-center items-center text-[15px]'>Ibeju Lekki</div>
         </div>

         <div className='px-2 py-4 flex justify-center items-center flex-col leading-[30px]  max-sm:hidden'>
          <div className='flex justify-center itesm-center text-[25px] font-semibold'>   Popular land for sale</div>
          <div className='flex justify-center items-center text-[15px]'>Lagos</div>
          <div className='flex justify-center items-center text-[15px]'>Abuja</div>
          <div className='flex justify-center items-center text-[15px]'>Oyo</div>
          <div className='flex justify-center items-center text-[15px]'>Ogun</div>
         </div>

         <div className='px-2 py-4 flex justify-center items-center flex-col leading-[30px] cursor-pointer  max-sm:hidden'>
          <div className='flex justify-center itesm-center text-[25px] font-semibold'> Corshaft Products</div>
          <div className='flex justify-center items-center text-[15px]'>JumiaHouse</div>
          <div className='flex justify-center items-center text-[15px]'>Prestige Magazine</div>
          <div className='flex justify-center items-center text-[15px]'>MoveMe</div>
          <div className='flex justify-center items-center text-[15px]'>AFRECA</div>
         </div>






       </div>
    </div>
  )
}

export default Footer