import React from 'react'
import { IconLockCheck,IconDeviceMobileMessage,IconBuildingSkyscraper } from '@tabler/icons-react'
import { ButtonGreen } from './ButtonGreen'
const HeroDesc5 = () => {
  return (
    <div className='space-y-8 py-24 bg-[#fffffa] dark:bg-[#0a0a0a] w-full'>
          <div className='max-w-6xl space-y-8 mx-auto'>
            <div className='flex items-center justify-between'>
              <div className='space-y-8'>
                <h1 className='text-6xl font-bold text-[#0a0a0a] dark:text-[#fffffa]'>Disapponit thieves</h1>
                <p className='text-neutral-600 text-xl text-pretty max-w-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur inventore eum et culpa at illo aperiam a error quibusdam molestiae .</p>
                <ButtonGreen title='How we keep you money safe'/>
              </div>
              <img src="lock.png" className='max-w-[40%]' alt="" />
            </div>
            <div className='grid grid-cols-4'>
              <div className="space-y-6">
                <div className="flex items-center justify-center bg-neutral-200 dark:bg-neutral-500 rounded-full h-16 w-16">
                  <IconLockCheck className="w-10 h-10 text-[#0a0a0a]" />
                </div>
                <p className="text-xl text-neutral-700 text-pretty">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Something here.
                </p>
              </div>
    
              <div className="space-y-6">
                <div className="flex items-center justify-center bg-neutral-200 dark:bg-neutral-500 rounded-full h-16 w-16">
                  <IconDeviceMobileMessage className="w-10 h-10 text-[#0a0a0a]" />
                </div>
                <p className="text-xl text-neutral-700 text-pretty">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Something here.
                </p>
              </div>
    
              <div className="space-y-6">
                <div className="flex items-center justify-center bg-neutral-200 dark:bg-neutral-500 rounded-full h-16 w-16">
                  <IconBuildingSkyscraper className="w-10 h-10 text-[#0a0a0a]" />
                </div>
                <p className="text-xl text-neutral-700 text-pretty">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Something here.
                </p>
              </div>
            </div>
    
          </div>
        </div>
  )
}

export default HeroDesc5