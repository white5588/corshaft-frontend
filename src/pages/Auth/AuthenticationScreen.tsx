import React from 'react'
import pics1 from "../../assets/stats.png"
import pics2 from "../../assets/agent b.jpg"
import pics3 from "../../assets/agent hus4.jpg"
import pics4 from "../../assets/VendorCategory-ba8V9ADQlE3J03Z.jpeg"
import pic from "../../assets/auth pics.png"
import {useState} from "react"
import { Link } from 'react-router-dom'

const AuthenticationScreen = () => {
    const [user,setUser] = useState(true)
    const [agent,setAgent] =useState(false)
    const [landOwner,setLandOwner] =useState(false)
    const [admin,setAdmin] =useState(false)
    const [show,setShow] =useState<boolean>(false)
    
    const toggle = () =>{
      setShow(!show)
    }
    
    const User = () =>{
      setUser(true);
      setAgent(false)
      setLandOwner(false)
      setAdmin(false)
      
    }
    const Agent = () =>{
      setUser(false);
      setAgent(true)
      setLandOwner(false)
      setAdmin(false)
      
    }
    const LandOwner = () =>{
      setUser(false);
      setAgent(false)
      setLandOwner(true)
      setAdmin(false)
      
    }
    const Admin = () =>{
      setUser(false);
      setAgent(false)
      setLandOwner(false)
      setAdmin(true)
      
    }







  return (
   <>
 <div className='w-full h-screen bg-[white] flex justify-center items-center '>
    <div className='w-full h-full flex justify-start items-center flex-col'>
    <div className='w-full h-[400px] flex max-sm:hidden '>
    <img src={pic} className='w-full h-full flex object-cover z-[-10%]' />
</div>
        <div className='px-2 py-4 flex flex-row gap-8 max-sm:hidden justify-center items-center mt-[-3%] '>
<div className='w-[300px] h-[200px] border shadow-sm  bg-[white] rounded-md max-sm:hidden  border-[black]'>
<img src={pics1} className='w-full h-full object-cover z-10'/>
<div className='px-3 w-20 py-2 flex justify-center items-center text-white font-semibold border bg-[orangered] hover:cursor-pointer hover:scale-125 duration-500 transition-all mt-3' onClick={User}>
   <Link to="/authscreen">
   
    User
   </Link>
    </div>
</div>
<div className='w-[300px] h-[200px] border shadow-sm rounded bg-[white] max-sm:hidden border-[black] '>
    <img src={pics2} className='w-full h-full object-cover'/>
    <div  className='px-3 w-20 py-2 justify-center items-center bg-[dodgerblue] rounded-md text-white font-semibold hover:cursor-pointer hover:scale-125 duration-500 transition-all text-[12px] mt-3' onClick={LandOwner}>LandOwner</div>
   </div>
<div className='w-[300px] h-[200px] border shadow-sm rounded bg-[white] max-sm:hidden border-[black]'>
    <img src={pics3} className='w-full h-full object-cover'/>
    <div  className='px-3 w-20 py-2 justify-center items-center bg-[#3ece60]  text-white font-semibold hover:cursor-pointer hover:scale-125 duration-500 transition-all mt-3'onClick={Admin}>Admin</div>
    </div>
<div className='w-[300px] h-[200px] border shadow-sm rounded bg-[white] max-sm:hidden border-[black] '>
    <img src={pics4}  className='w-full h-full object-cover'/>
    <div  className='px-3 w-20 py-2 justify-center items-center bg-[#cd43cd]  text-white font-semibold hover:cursor-pointer hover:scale-125 duration-500 transition-all mt-3'onClick={Agent}>Agent</div>
   </div>


        </div>


        <div className='px-4 py-8   absolute flex justify-center items-center  flex-col bottom-20 left-5 md:left-40 '>
<div className='flex gap-2 justify-center items-center cursor-pointer '>




</div>



</div>

    </div>
 </div>


   
   </>
  )
}

export default AuthenticationScreen
