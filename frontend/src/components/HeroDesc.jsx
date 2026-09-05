import React from "react"
import { ButtonGreen } from './ButtonGreen'
import {ButtonGreenInverse} from "./ButtonGreenInverse";

const HeroDesc=()=>{
  return (
    <div className='flex items-start max-w-6xl mb-24 py-16 gap-[18rem]'>
        {/* Left Text Section */}
        <div className='space-y-8 pt-6 '>
          <div className='text-5xl font-medium space-y-2 text-[#0a0a0a] dark:text-[#ffffff] tracking-tight'>
            <h1> Manage all your </h1>
            <h1> currencies all over</h1>
            <h1> the world</h1>
          </div>
          <div  className='text-xl space-y-1 text-neutral-600'>
            <p>Save up to 2x when you send, convert and </p>
            <p>withdraw 50 currencies, all in one account. </p>

          </div>
          <div className='flex gap-4'>
            <ButtonGreen title='Open an account'/>
            <ButtonGreenInverse title='Compare savings'/> 
          </div>
        </div>

        {/* Right Image Section */}
        <div className='relative'>
          {/* Background image */}
          <img src="screen.png" alt="Background" className="w-[28rem] rounded-3xl " />

          {/* Phone image overlay */}
          <img
            src="mobile.png"
            alt="Phone"
            className="absolute top-[30%] -translate-x-1/2 w-[16rem] z-2 rounded-3xl border-4 border-neutral-700 shadow-xl"
          />
        </div>
      </div>
  )
}
export default HeroDesc