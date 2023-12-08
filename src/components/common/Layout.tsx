// import {GiHamburgerMenu} from "react-icons/gi"
// import {BsSpeedometer2} from "react-icons/bs"
// import {SiEasyjet} from "react-icons/si"
// import {AiTwotoneHome} from "react-icons/ai"
// import {IoIosNotifications} from "react-icons/io"
// // import {FaScaleBalanced} from "react-icons/fas"
// import {BsWalletFill} from "react-icons/bs"
// import {LiaTimesSolid} from "react-icons/lia"
// import {BsCurrencyDollar} from "react-icons/bs"

import {Outlet} from "react-router-dom"
import Header from "../static/Header"
import Footer from "../static/Footer"
import Detailed from "../../pages/Detailed"
import Products from "../../pages/Products"
import Guide from "../../pages/Guide"




const Layout = () => {
  return (
    <div  >
       <Header/>
       <div className="w-full h-auto">
        <Outlet/>

       </div>
          <Detailed/>
          <div className=" sm-w-[100%] flex justify-center items-center   sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-6 ">
        <Products/>
        </div>
        <Guide/>

       
       
      
        <Footer/>
    </div>
  )
}

export default Layout