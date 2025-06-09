import React from 'react'
import ATMCard from '../../components/ATMCard';
import {Title} from '../../components/Title'
import { useState } from "react";
import NavBar from "../../components/NavBar";

const UserHome = () => {
  // Use state if you plan to change login/role dynamically
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [role, setRole] = useState("user"); // "user" or "merchant"

  const toggleRole = () => {
    setRole((prev) => (prev === "user" ? "merchant" : "user"));
  };

  return (
     <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="flex flex-col w-[395px] h-[730px] bg-[#0a0a0a] rounded-[2rem] border border-neutral-800 text-white overflow-hidden shadow-lg">
        {/* Simulated mobile screen */}
        <div className="flex flex-col items-center justify-start px-4 py-6 overflow-y-auto">
          <Title />
          <ATMCard />
          <button className="bg-gray-600 rounded-md left-4 absolute bottom-6 text-white p-2" onClick={toggleRole}>Click to change : {role}</button>
          {isLoggedIn && (
            <NavBar
              role={role}
              desktopClassName="fixed bottom-12 left-1/2 -translate-x-1/2 z-50"
              mobileClassName="fixed bottom-8 right-8 z-50"
            />
          )}
        </div>
      </div>
    </div>
    // <div className="flex flex-col min-h-screen bg-black">
    //   <div className="flex flex-col bg-[#0a0a0a] border-4 rounded-4xl border-neutral-800 max-w-xl flex-grow items-center w-full mx-auto max-h-[80%] text-white text-2xl font-semibold p-8">
    //     <Title />        
    //     <ATMCard />        
    //   </div>
    // </div>
  );
};

export default UserHome;
