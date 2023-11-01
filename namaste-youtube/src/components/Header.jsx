import React from "react";
import { Menu, UserCircle, Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {

  const dispatch = useDispatch();

  const toggleleMenuHandler = () => {
    console.log('btn clicked');
    dispatch(toggleMenu());
  }

  return (
    <>
      <div className="grid grid-flow-col items-center p-1  shadow-md">
        {/* logo & menu */}
        <div className="flex items-center col-span-1 ml-4">

          <Menu onClick={()=> toggleleMenuHandler()} className="cursor-pointer" />

          <img
            className="h-[4rem] "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMREE4IMAg92cKiVS4ZR8ncwqyysWuV4RiA&usqp=CAU"
            alt="youtube-logo"
            sizes=""
            srcset=""
          />
        </div>
        <div className="col-span-8 px-10 text-center">
          <input
            className="w-2/3 p-[0.3rem] border border-gray-400 rounded-l-full
            focus:outline-none"
            type="text"
            name=""
            id=""
            placeholder="type"
          />
          <button className="p-[0.3rem] mt-1 border border-gray-400 rounded-r-full">
            {/* <Search  className='text-center' /> */}
            🔍
          </button>
        </div>
        <div className="col-span-1">
          <UserCircle className="" />
        </div>
      </div>
    </>
  );
};

export default Header;
