import pix from "../assets/building 10.jpg"
import image from "../assets/house build 1.jfif"
import pix2 from "../assets/building 14.jpg"
import pix3 from "../assets/Untitled-building 5.png"
import {FC} from "react"
import pics from "../assets/3X6Fnx1XBZDM92A5IZOI.jpeg"
import {IoIosNotifications} from "react-icons/io"


interface iCards {
image?: any;
name?: string;
location?: string;
amount?: string;
}


const Card: React.FC<iCards> = ({image, name, location, amount}) => {
  return (
    <div>
       <div className="px-2 py-5 flex justify-between items-center bg-white sm-w-[100%] hover:scale-105 transition-all cursor-pointer">
    <div className="w-[280px] h-full flex flex-col justify-center items-start mt-5 ">
        <img src={image}  className="w-[270px] h-[220px] flex justify-center items-center"/>
        <div className="text-black flex justify-center items-center">{name}</div>
        <div className="text-black text-[10px] flex  justify-center items-center"><IoIosNotifications/> {location}</div>
        <div className="text-black text-[10px] flex  justify-center items-center">{amount}</div>
        <div className="px-2 py-1 bg-orange-500 text-serif  ml-[50%] rounded hover:cursor-pointer hover:scale-125 duration-500 transition-all">Purchase</div>
    </div>  
    </div>
    </div>
  )
}




const Products = () => {
    return (
        <div className="  w-full h-auto  justify-center items-center flex flex-wrap sm-w-[100%]  max-w-sm-[100%] max-sm:grid-cols-2 lg:grid-cols-3">
        <div className="  w-[90%] h-auto flex justify-center items-center flex-col flex-wrap max-sm:flex-col">
        <div className="text-[50px] flex text-white  justify-center items-center ml-10">Featured products</div>   
    <div className="grid grid-cols-4 max-xl-grid-cols-3  max-sm:grid-cols-1 gap-5">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    
     
    </div>
   
     </div>
        </div>
        
  )
}

export default Products










        // import { useState } from "react";
        // import pix from "../assets/building 13.jpg"
        // import {FaGreaterThan} from "react-icons/fa"
        // import {IoIosNotifications} from "react-icons/io"
        
        // const Products = () => {
        //     const [state, setState] = useState<number>(1);
          
        //     // const randColor = () => {
        //     //   return "#" + Math.floor(Math.random() * 16777215).toString(16);
        //     // };
          
        //     return (
        //       <div>
        //         <div
        //           className={`
        //          min-h-[400px] rounded-sm
        //         `}
        //           style={{
        //             // backgroundColor: `${randColor()}`,
        //             borderRadius: "5px",
        //             color: "black",
        //           }}
        //         >
        //           <div className="flex flex-col">
        //             <div className="w-full h-[300px] relative  ">
        //               <div
        //                 className="w-full h-[300px] absolute opacity-0 hover:opacity-100 transition-all duration-200
        //                 hover:cursor-pointer 
                      
        //               "
        //               >
        //                 <div className="absolute top-[50%] right-1 bg-[rgba(255,255,255,0.8)] p-3 rounded-[50%]  hover:bg-white hover:scale-[1.05] hover:cursor-pointer transition-all duration-300">
        //                   <FaGreaterThan />
        //                 </div>
          
        //                 <div className="absolute top-[50%] left-1 bg-[rgba(255,255,255,0.8)] p-3 rounded-[50%] rotate-180 hover:bg-white hover:scale-[1.05] hover:cursor-pointer transition-all duration-300 ">
        //                   <FaGreaterThan />
        //                 </div>
        //               </div>
          
        //               <img
        //                 src={pix}
        //                 className="w-full h-[300px] object-cover rounded-[15px] "
        //               />
        //             </div>
          
        //             <div className="flex justify-between mt-2 ">
        //               <h2 className="font-bold capitalize text-[17px] ">name</h2>
        //               <button className="mt-2 py-2 px-2 text-[15px] text-white bg-[dodgerblue] rounded ">
        //                 Purchase
        //               </button>
        //             </div>
          
        //             <span>Profile</span>
                  
                  
        //           </div>
        //         </div>
        //       </div>
        //     );
        //   };
        //   export default Products