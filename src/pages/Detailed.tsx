
import {SiEasyjet} from "react-icons/si"
import pics from "../assets/lek 6.jpg"
import Typewriter from "typewriter-effect"


interface iCards {
  name?:string

}

const Card: React.FC<iCards> = ({ name }) =>{
  return(
   <div className='px-4 py-10 flex  justify-center items-center flex-row gap-5'>
             <div className='px-1 py-10 flex justify-center items-center bg-[azure] text-black flex-col leading-[30px] rounded-tl'><SiEasyjet className="text-black text-[60px]"/>{name} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quaerat quod, <br /> eligendi consectetur esse at odio itaque tempore aperiam illum <br /> cumque? Quisquam delectus tempore tenetur adipisci vel suscipit consequuntur reprehenderit!</div>
  <div  className='px-1 py-10 flex justify-center items-center bg-[azure]  text-black flex-col leading-[30px] rounded-tl'>  <SiEasyjet className="text-black text-[60px]"/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quaerat quod, <br /> eligendi consectetur esse at odio itaque tempore aperiam illum <br /> cumque? Quisquam delectus tempore tenetur adipisci vel suscipit consequuntur reprehenderit!</div>
   <div className=' px-1 py-10 flex justify-center items-center bg-[azure] flex-col text-black leading-[30px] rounded-tl'>  <SiEasyjet className='text-black text-[60px]'/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quaerat quod, <br /> eligendi consectetur esse at odio itaque tempore aperiam illum <br /> cumque? Quisquam delectus tempore tenetur adipisci vel suscipit consequuntur reprehenderit!</div>
  </div> 
  )
}




const Detailed = () => {
  return (
    <>
    <div className='w-full h-[100%] flex bg-blue-300 justify-center items-center flex-col  '>
        <div className='w-[95%] h-full  justfy-between items-center '>
        <div className="grid grid-cols-1 max-xl-grid-cols-1   max-sm:grid-cols-3 gap-1">
        <Card/>
    </div>
        </div>

 <div className="w-full h-[250px] flex  justify-center -items-center ">
 <div className=" w-full h-[250px] flex justify-center items-center">
  <img src={pics} className="  w-full h-[250px] object-cover flex justify-center items-center"/>
  <div className=' px-2 py-5   absolute flex justify-center items-center text-[65px] max-sm:hidden
   '>
      <Typewriter
      options={{ loop: true, delay: 55, deleteSpeed: 50 }}
  onInit={(typewriter) => {
    typewriter.typeString('Exclusive houses to suit ur Needs')
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
 </div>
 
 


 </div>
    </div>
    
    </>
  )
}

export default Detailed