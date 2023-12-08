
import { useState } from "react"
import {GiHamburgerMenu} from "react-icons/gi"
import {LiaTimesSolid} from "react-icons/lia"
import pics from "../../assets/logo_corshaft-removebg-preview.png"
import { Link } from "react-router-dom"
import { MdOutlineMenu } from "react-icons/md"

const Header = () => {
  const [short, setShort] = useState<boolean>(false);
  const onShort = () => {
    setShort(!short);
  };

  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
   <>
   
   <div className='w-full h-[60px] bg-white  flex justify-center items-center max-w-[100%]'>
   {scroll ?(
 <div className='w-[95%] h-full flex justify-between items-center'>
 <div className="flex px-2 py-4 flex-row">
   <div className='text-[28px]  font-serif mt-5 text-[dodgerblue]'>Corshaft
   </div>
   <img src={pics} className="object-cover h-[60px] w-[60px%] flex mt-2 text-[35px]" />
   </div>
   <div className=' px-2 py-4 flex gap-10 max-sm:hidden cursor-pointer'>
       <div className="text-black text-tl font-semibold flex font-serif">
         <Link to="/Rent">
         Rent
         </Link>
         
         </div>
       <div className="text-black text-tl font-semibold flex font-serif ">
         <Link to="/Sale">
           Sale
         </Link>
         </div>
       <div className="text-black text-tl font-semibold flex font-serif">
         <Link to="/Shortlet">
         Shortlet
         </Link>
         </div>
       <div className="text-black text-tl font-semibold flex font-serif">

         <Link to="Agents">
         Agents
         </Link>
         </div>
   </div>

<div className='flex'>
<button className='px-2 py-2 rounded-xl bg-blue-500 flex max-sm:hidden hover:cursor-pointer hover:scale-125 duration-500 transition-all'>
<Link to="/authenticationScreen">
Get Started
         </Link>



 </button>
</div>
<div className="flex flex-col items-center">
                <div
                  className="hidden max-sm:block max-sm:flex-col  "
                  onClick={() => {
                    onShort();
                  }}
                >
                  <MdOutlineMenu className="text-black hover:scale-[1.2] duration-300 transition-all relative items-center justify-center flex max-sm:text-black" />
                </div>
              </div>


</div>
   ): <div className='w-[95%] h-full flex justify-between items-center '>
   <div className="flex px-2 py-4 flex-row">
     <div className='text-[28px]  font-serif mt-5 text-[dodgerblue]'>Corshaft
     </div>
     <img src={pics} className="object-cover h-[60px] w-[60px%] flex mt-2 text-[35px]" />
     </div>
     <div className=' px-2 py-4 flex gap-10 max-sm:hidden cursor-pointer'>
         <div className="text-black text-tl font-semibold flex font-serif">
           <Link to="/Rent">
           Rent
           </Link>
           
           </div>
         <div className="text-black text-tl font-semibold flex font-serif ">
           <Link to="/Sale">
             Sale
           </Link>
           </div>
         <div className="text-black text-tl font-semibold flex font-serif">
           <Link to="/Shortlet">
           Shortlet
           </Link>
           </div>
         <div className="text-black text-tl font-semibold flex font-serif">

           <Link to="Agents">
           Agents
           </Link>
           </div>
     </div>

<div className='flex'>
 <button className='px-2 py-2 rounded-xl bg-blue-500 flex max-sm:hidden hover:cursor-pointer hover:scale-125 duration-500 transition-all'>
 <Link to="/authenticationScreen">
 Get Started
           </Link>
  
  

   </button>
</div>

 {/* <div className=" flex px2 py-4 text-black  justify-end items-end text-[12px]  cursor-pointer absolute " onClick={toggle}>
 <GiHamburgerMenu/>
 </div>


{
 show ?(
   <div className=' px-4 flex mt-[10%] min-[60px]:  '>
<div className='px-2 py-4  bg-white  min-w-[60px]  bg-white w-[20%] h-[200px] ' >
 <div className='text-[black] text-[15px] '>Rent</div>
 <div className='text-[black] text-[15px]'>Sale</div>
 <div className='text-[black] text-[15px]'>Shortlet</div>
 <div className='text-[black] text-[15px]'>GetStarted</div>
 
</div>
</div>
 ):<LiaTimesSolid className="flex px2 py-4 text-black  justify-end items-end text-[12px]  cursor-pointer"/>
 }  */}


</div>}
   </div>
   
   
   
   </>
  )
}

export default Header