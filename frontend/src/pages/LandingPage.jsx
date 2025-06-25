import React from 'react'
import NavbarLanding from '../components/NavbarLanding'
import { ButtonGreen } from '../components/ButtonGreen'
import { ButtonGreenInverse } from '../components/ButtonGreenInverse'
import {
  IconArrowRight,
  IconLock,
  IconKey
} from '@tabler/icons-react';
import { GiKey } from "react-icons/gi";
import CardsCarousel from '../components/CardsCarousel';

import { HiArrowRight } from "react-icons/hi2";

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-[#fffffa] dark:bg-[#0a0a0a] items-center relative py-6 overflow-y-auto">
      
      <NavbarLanding />

      <HeroSection />  
      <HeroImage />

      <HeroDesc />
      <HeroDesc2 /> 

      <HeroSection2 />   
      <CurrencyScrollBanner/>
      <Features />

      <HeroDesc3 />
      <CardsCarousel />

    </div>
  )
}

export default LandingPage

const HeroSection=()=>{
  return (
    <div className='space-y-8 pt-42'>
        <div className='text-9xl font-extrabold text-[#0a0a0a] dark:text-[#ffffff] uppercase tracking-tighter text-center'>
          <h1>money for here,</h1>
          <h1>there and</h1>
          <h1>everywhere</h1>
        </div>
        <div className='text-xl text-neutral-500 text-center mt-4'>
          <p >170 countries. 50 currencies. Get the account built to save </p>
          <p >you money round the world.</p>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <ButtonGreen title='Open an account'/>
          <ButtonGreenInverse title='Send money now'/> 
        </div>
    </div>
  )
}

const HeroImage = () => {
  return (
    <div className='max-w-4xl'>
      <img src="globe.png" className='w-full' alt="Globe" />
    </div>
  );
}

const Features = () => {
  return (
      <div className='max-w-6xl font-medium border-t-1 grid grid-cols-3 border-neutral-600 pb-18'>
        <div className='flex items-center justify-center gap-6 py-8 '>
          <IconLock  className='w-12 h-auto p-2 bg-neutral-200 dark:bg-[#fffffa] text-[#0a0a0a] rounded-full'/>
          <p className='text-[#0a0a0a]/80 dark:text-[#fffffa]'>We are registered with  Finanacial <br />Crimes Enforcement Network<br /> (FinCEN) in the US</p>
        </div>
        <div className='flex items-center justify-center gap-6 py-8 '>
          {/* <GiKey className='w-12 h-auto p-2 rotate-[50deg]  bg-[#fffffa] text-[#0a0a0a] rounded-full'/>   */}
          <IconKey  className='w-12 h-auto p-2 bg-neutral-200 rotate-[225deg]  dark:bg-[#fffffa] text-[#0a0a0a] rounded-full'/>
          <p className='text-[#0a0a0a]/80 dark:text-[#fffffa]'>We protect your details through <span className='underline font-bold'>strict standards.</span></p>
        </div>
      </div>
  );
}
const HeroSection2 = () => {
  return (
    <div className='max-w-6xl pt-32 space-y-10'>

      <img src="pocket.png" className='w-full' alt="Pocket" />

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

const CurrencyScrollBanner = () => {
  return (
    <div className="flex items-center w-full gap-6 my-26">
      {/* Green background with circle arrow */}
      <div className="bg-[#aee780] rounded-r-full flex items-center p-2 pl-[40%] h-auto">
        <div className="w-42 h-42 bg-[#1c3108] rounded-full flex items-center justify-center">
          <HiArrowRight
            className="w-24 h-24 text-[#aee780]"/>       
        </div>
      </div>

      {/* Flag icons */}
      <div className="flex gap-4">
        <img src="eu-flag.webp" alt="EU" className="w-42 h-42 rounded-full object-cover" />
        <img src="india-flag.webp" alt="India" className="w-42 h-42 rounded-full object-cover" />
        <img src="usa-flag.webp" alt="USA" className="w-42 h-42 rounded-full object-cover" />
        <img src="eu-flag.webp" alt="EU" className="w-42 h-42 rounded-full object-cover" />
        <img src="india-flag.webp" alt="India" className="w-42 h-42 rounded-full object-cover" />
      </div>
      
    </div>
  );
};


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
          <img src="screen.png" alt="Background" className="w-[28rem]" />

          {/* Phone image overlay */}
          <img
            src="mobile.png"
            alt="Phone"
            className="absolute top-[30%] -translate-x-1/2 w-[16rem] z-2 rounded-2xl border-4 border-neutral-700 shadow-xl"
          />
        </div>
      </div>
  )
}

const HeroDesc2 = () => {
  return (
    <div className='bg-[#aee780] rounded-2xl w-[96%] '>
      {/* Heading  */}
      <div className='max-w-6xl mx-auto flex items-center py-12 justify-center gap-[17rem] '>
        <div className='py-18 space-y-8'>
          <div className=' flex flex-col text-5xl space-y-2 font-medium tracking-tight dark:text-[#0a0a0a]'> 
            <h1 > Save upto 9x when you</h1>
            <h1 > send currencies</h1>
          </div>
          <p className='text-xl text-neutral-700 text-wrap w-[22rem]'>
            Sending money shouldn't cost the earth, so we built My Wallet to save you money when you transfer and exchange internationally. We charge as little as possible: right now a tiny fee, eventually free.
          </p>
        </div> 
        {/* Image  */}
        <div className='py-18'>
          <img
              src="mobile.png"
              alt="Phone"
              className="w-[24rem] rounded-2xl border-4 border-neutral-700 shadow-xl"
            />
        </div>

      </div>
    </div>
  )
}

const HeroDesc3 = () => {
  return (
    <div className='bg-[#aee780] flex items-center justify-center rounded-2xl pt-24 w-[96%] '>
      {/* Heading  */}
      <div className='flex flex-col overflow-hidden items-center justify-center max-w-6xl mx-auto  '> 

        <div className='text-8xl pr-42 text-[#1c3108] dark:text-[#0a0a0a] font-extrabold uppercase tracking-tighter'>
          <h1>trusted by </h1>
          <h1>merchants small</h1>
          <h1>and large</h1>
        </div>

        <div className='flex items-start gap-2  justify-center pt-8'>
            {/* Card images */}
          <div className='relative mt-64  w-[30rem] h-[14rem]'>
            <img
              src="herocardrem.png"
              alt="Card Back"
              className="absolute top-0 left-14 w-full h-auto -rotate-90 z-2 rounded-2xl"
            />
            <img
              src="herocardrem.png"
              alt="Card Front"
              className="absolute top-[34%] -left-[32%] w-full h-auto rotate-90 rounded-2xl"
            />
          </div>
          {/* text  */}
          <div className='pt-12 space-y-8 w-[25rem]'>
            <div className=''>
              <p className='text-xl text-[#1c3108] dark:text-neutral-700 text-wrap '>
                Go global with the international bussiness account. Pay employees, get paid and manage your cash flow in multiple currencies. Join over 300,000 bussinesses thriving with My Wallet.
              </p>
              <div className='flex items-start justify-between pt-8 gap-4'>
                <button className='rounded-full py-2 px-6 bg-[#1c3108] text-[#aee780] dark:bg-[#1c3108] font-bold' >Open a business account</button>
                <button className='rounded-full py-2 px-6 text-[#1c3108] font-bold border-2 dark:border-[#0a0a0a] dark:text-[#0a0a0a] border-[#1c3108]' >Learn more</button>
                
              </div>

            </div>
          </div> 
        </div>
      
      </div>
    </div>
  )
}