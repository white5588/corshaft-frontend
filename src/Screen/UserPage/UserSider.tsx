import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AiTwotoneHome } from "react-icons/ai";
import { changedToggle, toggled } from "../../global/globalState";
import { FaHistory } from "react-icons/fa";
 import {IoIosNotifications} from "react-icons/io"
import {FaScaleBalanced} from "react-icons/fa6"
import {BsSpeedometer2} from "react-icons/bs"
import {LiaTimesSolid} from "react-icons/lia"
import {Link} from "react-router-dom"

const UserSider = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();
  const [state, setState] = useState<boolean>(false);
  const onToggle = () => {
    setState(!state);
  };

  const [Home,setHome] = useState(true)
const [profile,setProfile] =useState(false)
const [notifications,setNotifications] =useState(false)
const [settings,setSettings] =useState(false)
const [show,setShow] =useState<boolean>(false)

const open = () =>{
  setHome(!Home)
}

const User = () =>{
  setHome(true);
  setProfile(false)
  setNotifications(false)
  setSettings(false)
  
}
const Profile = () =>{
  setHome(false);
  setProfile(true)
  setNotifications(false)
  setSettings(false)
  
}
const Notifications = () =>{
  setHome(false);
  setProfile(false)
  setNotifications(true)
  setSettings(false)
}

const Settings = () =>{
  setHome(false);
  setProfile(false)
  setNotifications(false)
  setSettings(true)
  
}
  
  return (
    <>
      <div
        className={`${
          !toggle ? "w-[250px]" : "w-[50px] "
        } flex flex-col justify-center items-center max-w-sm-[100%] sm:flex-row-reverse-3 lg:flex-row-reverse-3m `}
      >
        <div
          className={`mt-4 flex justify-end ${toggle ? "ml-0" : "ml-[85%]"}`}
          onClick={() => {
            onToggle();
          }}
        >
          {!state ? (
            <LiaTimesSolid
              className="text-2xl hover:cursor-pointer hover:scale-125 duration-500 transition-all font-bold text-[30px]"
              onClick={() => {
                dispatch(toggled());
              }}
            />
          ) : (
            <GiHamburgerMenu
              className="text-2xl hover:cursor-pointer hover:scale-125 duration-500 transition-all text-white"
              onClick={() => {
                dispatch(changedToggle());
              }}
            />
          )}
        </div>
        <div className="mt-10 flex items-center bg-[#988c8c] rounded px-8 py-1   flex-row hover:text-white hover:scale-125 transition-all cursor-pointer">
          <Link to ="/userDashboard">
          <div className="mr-2">
            <AiTwotoneHome className="text-2xl " />
          </div>
          {!toggle && <div className="font-bold ">
            <Link to="/userscreen">
            UserDashboard
            </Link>

            
       
            </div>}
            
            </Link>
        </div>

        <div className="mt-10 flex items-center rounded px-10 py-2 hover:text-white hover:scale-125 hover:bg-black transition-all cursor-pointer ">
          <div className="mr-2">
            <FaScaleBalanced className="text-2xl" />
          </div>
          {!toggle && <div className="font-bold "> Profile</div>}
        </div>

        <div className="mt-10 flex items-center rounded px-6 py-2 hover:text-white hover:scale-125  hover:bg-black transition-all cursor-pointer">
          <div className="mr-2">
            <IoIosNotifications className="text-2xl" />
          </div>
          {!toggle && <div className="font-bold  text-serif ">Notifications</div>}
        </div>

        <div className="mt-10  px-6 py-2 flex items-center rounded hover:text-white   hover:scale-125  hover:bg-black transition-all cursor-pointer  ">
          <div className="mr-2">
            <BsSpeedometer2 className="text-2xl" />
          </div>
          {!toggle && <div className="font-bold  ">Post a Property</div>}
        </div>



      </div>
        <div className="mt-[15%] absolute ml-10 px-2 py-4  flex justify-center items-center  text-center rounded hover:text-white   hover:scale-125    transition-all cursor-pointer  ">
          <div className="mr-2">
            <BsSpeedometer2 className="text-2xl mt-10" />
          </div>
          {!toggle && <div className="font-bold  mt-10">Settings</div>}
        </div>

        <div className="mt-[19%] absolute ml-10 px-5 py-3 flex justify-center items-center rounded hover:text-white   hover:scale-125 transition-all cursor-pointer  ">
          <div className="mr-2">
            <BsSpeedometer2 className="text-2xl mt-10" />
          </div>
          {!toggle && <div className="font-bold  mt-10">LogOut</div>}
        </div>
    </>
  );
};

export default UserSider;
