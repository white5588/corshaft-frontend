import React from 'react'
import { Link } from 'react-router-dom'

const ChangePassword = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[dodgerblue]'>
    <div className='w-[60%] md:w-[25%] sm-w-[100%] h-[450px] flex justify-center items-center bg-white border  rounded border-sm flex-col'>
<div className='flex w-[80%] flex-col '>
<div className='text-black text-xs px-2 py-2 '>Last Password</div>
<input type="text"  className='px-4 py-4 w-[100%] outline-none bg-white border-[1.5px] flex border-[black] text-[black] justify-center items-center rounded text-[15px]'/>
</div>

<div className='flex w-[80%] flex-col '>
<div className='text-black text-xs px-2 py-4 '>NewPassword</div>
<input type="text"  className='px-4 py-4 w-[100%]  outline-none flex border-[black] border-[1.5px] bg-white text-[black] justify-center items-center rounded text-[15px]'/>
</div>





<div className='px-8 py-2 flex bg-[dodgerblue] rounded justify-center items-center mt-3 cursor-pointer hover:text-[silver] hover:scale-105 transition-all  '>

<Link to="/UserDashboard">
Signin
</Link>

</div>

<div className='px-2 py-4 flex flex-row'>

<div className='flex text-tl text-black text-[12px] mt-3 font-semibold '>Dont Have An Account? </div>
<div className='ml-3 text-tl text-[12px] cursor-pointer text-black mt-3'>


<Link to="/Authscreen">
Register
</Link>
</div>

</div>


    </div>

</div>
  )
}

export default ChangePassword
