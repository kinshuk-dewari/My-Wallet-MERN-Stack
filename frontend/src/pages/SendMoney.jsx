import React from 'react'
import ATMCard from '../components/ATMCard';
import {Title} from '../components/Title'
import { useState } from "react";
import NavBar from "../components/NavBar";
import QRCode from '../components/QRCode';
import Heading from '../components/Heading';

const SendMoney = () => {
    
  
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-black p-4">
          <div className="flex flex-col w-[395px] h-[730px] bg-[#0a0a0a] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  shadow-neutral-800 dark:shadow-neutral-900 rounded-[2rem] border-4 border-neutral-800 text-white overflow-hidden ">
            {/* Simulated mobile screen */}
            <div className="flex flex-col items-center justify-center px-4 py-6 overflow-y-auto">
              <Heading text="Send money"/>  
            </div>
          </div>
        </div>
  )
}

export default SendMoney