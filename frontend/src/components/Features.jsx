import React from 'react'
import {IconLock, IconKey} from '@tabler/icons-react';

const Features = () => {
  return (
      <div className='max-w-6xl font-medium border-t-1 grid grid-cols-3 border-neutral-600 pb-18'>
        <div className='flex items-center justify-center gap-6 py-8 '>
          <IconLock  className='w-12 h-auto p-2 bg-neutral-200 dark:bg-[#fffffa] text-[#0a0a0a] rounded-full'/>
          <p className='text-[#0a0a0a]/80 dark:text-[#fffffa]'>We are registered with  Finanacial <br />Crimes Enforcement Network<br /> (FinCEN) in the US</p>
        </div>
        <div className='flex items-center justify-center gap-6 py-8 '>
          <IconKey  className='w-12 h-auto p-2 bg-neutral-200 rotate-[225deg]  dark:bg-[#fffffa] text-[#0a0a0a] rounded-full'/>
          <p className='text-[#0a0a0a]/80 dark:text-[#fffffa]'>We protect your details through <span className='underline font-bold'>strict standards.</span></p>
        </div>
      </div>
  )
}

export default Features