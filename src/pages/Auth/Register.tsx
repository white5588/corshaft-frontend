import React from 'react'
import { Link } from 'react-router-dom'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerUser } from "../../Apis/AuthApis/api";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";



const Register = () => {
  const Schema = yup.object({
    Name: yup.string().required(),
    LastName: yup.string().required(),
    Phone: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  // const onHandleSubmit = handleSubmit(async (data) => {
  //   setLoading(true);
  //   const { Name, LastName, Phone } = data;
  //   registerUser({ Name, LastName, Phone }).then((res: any) => {
  //     navigator("/sign-in");
    
  //   });
  // });



  return (
    <div className='w-full h-[500px]  flex justify-center items-center mt-10  '>
         <div className='w-[60%] md:w-[70%] sm-w-[100%] h-[500px] mt-10 flex justify-center items-center bg-white border-[black] border-[0.6px] rounded border-sm flex-col'>
  <div className='flex w-[80%] flex-col '>
    <div className='text-black text-xs px-2 py-2 '>Name</div>
    <input type="text" placeholder='Name' className='px-4 py-3 w-[100%] outline-none bg-white border-[1.5px] flex border-[black] text-[black] justify-center items-center rounded text-[10px]' {...register("Name")}/>
  </div>

  <div className='flex w-[80%] flex-col '>
    <div className='text-black text-xs px-2 py-2 '>Last Name</div>
    <input type="text" placeholder='Last Name' className='px-4 py-2 w-[100%]  outline-none flex border-[black] border-[1.5px] bg-white text-[black] justify-center items-center rounded text-[10px]'/>
  </div>

  <div className='flex w-[80%] flex-col t'>
    <div className='text-black text-xs px-2 py-2 '>Phone</div>
    <input type="text" placeholder='Enter your phone Number' className='px-4 py-3 w-[100%] outline-none flex border-[black] border-[1.5px] bg-white text-[black] justify-center items-center rounded text-[10px]'/>
  </div>

  <div className='flex w-[80%] flex-col '>
    <div className='text-black text-xs px-2 py-2 '>Password </div>
    <input type="text" placeholder='Enter your Password'  className='px-4 py-3 w-[100%] border-[1.5px] border-[black]  bg-white text-black outline-none flex border justify-center items-center rounded text-[10px]'/>
  </div>
  <div className='flex  w-[80%] flex-col '>
    <div className='text-black text-xs px-2 py-2 '>Confirm Password </div>
    <input type="text" placeholder='Re-enter Password'  className='px-4 py-3   outline-none flex border-[1.5px] border-[black] bg-white text-black justify-center items-center rounded text-[10px]'/>
  </div>

   <div className='px-10 py-2 flex bg-[dodgerblue] rounded justify-center items-center mt-3 cursor-pointer hover:cursor-pointer hover:scale-125 duration-500 transition-all  '>
    
<Link to="/UserDashboard">
    Register
    </Link>

    </div>

<div className='px-2 py-4 flex flex-row'>

   <div className='flex text-tl text-black text-[12px] mt-3 font-semibold '>Already Have An Account? </div>
   <div className='ml-3 text-tl text-[12px] cursor-pointer text-black mt-3 hover:cursor-pointer hover:scale-125 duration-500 transition-all'>
   
   
<Link to="/Signin">
Sign IN
</Link>
    </div>

</div>
   

         </div>

    </div>
  )
}

export default Register

