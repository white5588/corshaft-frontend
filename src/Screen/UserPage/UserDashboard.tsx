import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import UserSider from '../UserPage/UserSider'
import { useSelector } from 'react-redux'
import pics from "../../assets/agent b.jpg"
import pics1 from "../../assets/stats.png"
// import Layout from '../../components/common/Layout'

const UserDashboard = () => {
  const toggle = useSelector((state: any) => state.toggle);
  return (
<>


<div className='w-full h-screen bg-[azure] flex justify-center items-center sm-w-[100%] '>

<div
          className={`${
            !toggle ? "w-[250px] sm-w-[100%] transition-all" : "w-[50px] sm-w-[100%] transition-all max-w-sm-[100%] sm:flex-col-reverse-3 lg:flex-col-reverse-3`"
          } bg-[dodgerblue] h-screen sm-w-[100%]`}
        >
          <UserSider />
        </div>
  <div className='w-[95%] h-full  flex justify-center items-center flex-col sm-w-[100%]'>
  

  <div className='w-full h-[190px] bg-[lightblue] flex justify-between items-center max-sm:hidden'>
    <div className='text-[40px]  font-sans justify-center items-center text-white ml-5 text-[gray]'>WelCome  Blessing </div>
  </div>
  {/* <Layout/> */}

  </div>

</div>
</>
  )
}

export default UserDashboard