import React from 'react';
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      console.log(error.mesage);
      navigate("/error");
    });
  }

  return (
    <div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-30'>
      <img className='w-52'
       src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" srcset="" />

      {user &&
       <div className="flex p-2">
        <img className='w-12 h-12'
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="user-logo" srcset="" />
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
       </div>
      }
    </div>

  )
}

export default Header