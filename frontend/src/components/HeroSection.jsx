import React from 'react'
import { ButtonGreen } from './ButtonGreen'
import { ButtonGreenInverse } from './ButtonGreenInverse'
const HeroSection = () =>{ 
    return (
            <div className='space-y-8 pt-36'>
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
export default HeroSection