import React from 'react'
import ATMCard from '../../components/ATMCard';
import {Title} from '../../components/Title'
import { useState } from "react";
import NavBar from "../../components/NavBar";
import QRCode from '../../components/QRCode';

const UserHome = () => {
  // Use state if you plan to change login/role dynamically
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [role, setRole] = useState("user"); // "user" or "merchant"
  const usermobileview ="fixed bottom-28 right-25 z-50"
  const merchantmobileview ="fixed bottom-28 right-22 z-50"

  const toggleRole = () => {
    setRole((prev) => (prev === "user" ? "merchant" : "user"));
  };


  return (
     <div className="flex items-center justify-center min-h-screen dark:bg-black p-4">
      <div className="flex flex-col w-[395px] h-[730px] bg-[#0a0a0a] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  shadow-neutral-800 dark:shadow-neutral-900 rounded-[2rem] border-4 border-neutral-800 text-white overflow-hidden ">
        {/* Simulated mobile screen */}
        <div className="flex flex-col items-center justify-center px-4 py-6 overflow-y-auto">
          <div className='w-full flex justify-start pt-4 px-8'>
            <Title />
          </div>
          <ATMCard />
          <QRCode /> 
          <button className="bg-gray-600 rounded-md left-4 absolute bottom-6 text-white p-2" onClick={toggleRole}>Click to change : {role}</button>
          {isLoggedIn && (
            <NavBar
              role={role}
              desktopClassName="fixed bottom-12 left-1/2 -translate-x-1/2 z-50"
              mobileClassName={role=="user"?usermobileview:merchantmobileview}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
