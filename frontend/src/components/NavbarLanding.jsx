import React from 'react'
import { ButtonGreen } from './ButtonGreen'
import { ButtonGreenInverse } from './ButtonGreenInverse'
const NavbarLanding = () => {
  return (
    <div className='fixed dark:bg-[#0a0a0a]/50 bg-[#ffffff]/50 w-full top-0 left-0 right-0 flex  px-8 py-4 backdrop-blur-md z-10'>
      <div className='flex items-center justify-between w-full max-w-6xl mx-auto'>
        <div className='text-2xl font-medium uppercase text-[#0a0a0a] dark:text-[#ffffff]'>My Wallet</div>
        <div className='flex items-center justify-center gap-4'>
            <ButtonGreen title='Login'/>
            <ButtonGreenInverse title='Register'/>
        </div>
      </div>
    </div>
  )
}

export default NavbarLanding