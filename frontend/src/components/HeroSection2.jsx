import React from "react"
import { ButtonGreen } from './ButtonGreen'
import { ButtonGreenInverse } from './ButtonGreenInverse'

const HeroSection2 = () => {
  return (
    <div className='max-w-6xl pt-32 space-y-10'>

      <img src="pocket.png" className='w-full rounded-3xl' alt="Pocket" />

      <div className='space-y-8 w-[22rem] ml-42 flex flex-col items-start'>
        <h1 className='text-5xl text-[#0a0a0a] dark:text-[#ffffff] font-medium tracking-tight'>The card that's always got the right currency</h1>
        <p className='text-xl text-neutral-600 text-wrap '>Save as you spend and withdraw over 50 currencies at the live rate automatically.</p>
        <div className='flex items-center justify-center gap-4'>
          <ButtonGreen title='Order your card'/>
          <ButtonGreenInverse title='Learn more'/> 
        </div>
      </div>

    </div>
  );
}
export default HeroSection2