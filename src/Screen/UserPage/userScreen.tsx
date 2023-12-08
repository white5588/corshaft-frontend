import React from 'react'
import pics from "../../assets/agent b.jpg"
import pics1 from "../../assets/stats.png"



const userScreen = () => {
  return (
    <div>
      
    <div className='w-[80%] h-[590px]   flex      flex-col gap-5 justify-center items-center sm-w-[100%] mt-[8%]'>

<div className='w-[80%] h-[300px] flex justify-center items-center flex-row gap-5 mt-3'> 
<div className='w-[30%] h-[60%]  bg-[purple] flex justify-center items-center rounded hover:scale-105 hover:bg-[#000000] transition-all'>
 <img src={pics} className='w-full h-[200px] flex object-cover rounded cursor-pointer '/>
</div>
<div className='w-[30%] h-[60%]  bg-[purple] flex justify-center items-center rounded hover:scale-105 hover: transition-all'>
 <img src={pics1} className='w-full h-[200px] flex object-cover rounded cursor-pointer '/>
</div>
<div className='w-[30%] h-[60%]  bg-[purple] flex justify-center items-center rounded hover:scale-105 hover:bg-[#000000] transition-all'>
 <img src={pics} className='w-full h-[200px] flex object-cover rounded cursor-pointer '/>
</div>
</div>

<div className='w-[80%] h-[300px]  flex justify-center items-center flex-row gap-5'> 
<div className='w-[30%] h-[60%]  bg-[purple] flex justify-center items-center rounded hover:scale-105 hover:bg-[#000000] transition-all'>
 <img src={pics} className='w-full h-[200px] flex object-cover rounded cursor-pointer '/>
</div>
<div className='w-[30%] h-[60%]  bg-[purple] flex justify-center items-center rounded hover:scale-105 hover:bg-[#000000] transition-all'>
 <img src={pics} className='w-full h-[200px] flex object-cover rounded cursor-pointer '/>
</div>
<div className='w-[30%] h-[60%]  bg-[purple] flex justify-center items-center rounded hover:scale-105 hover:bg-[#000000] transition-all'>
 <img src={pics} className='w-full h-[200px] flex object-cover rounded cursor-pointer '/>
</div>
</div>





   </div>
   
    </div>
  )
}

export default userScreen
