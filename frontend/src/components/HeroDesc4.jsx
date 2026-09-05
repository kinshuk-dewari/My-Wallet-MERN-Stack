import React from 'react'
import {ButtonGreen} from '../components/ButtonGreen';

const HeroDesc4 = () => {
  return (
        <div className='space-y-8 py-24 bg-[#1c3108] w-full'>
            <div className='max-w-6xl space-y-8 uppercase font-extrabold mx-auto'>
                <h1 className='text-8xl text-[#aee780] text-pretty'>meet money without borders</h1>
                <div className='grid grid-cols-2'>
                <p className='col-start-2 text-[#fffffa] text-3xl font-medium text-pretty normal-case'>Our dream is for people to live and work anywhere seamlesslly. That means money without borders: moving it instantantly, transparentlt, convinently, and - eventually - for free.</p>
                </div>
                <img src="pocket.png" className='w-full pt-4' alt="Pocket" />
                <div className='flex  items-start pt-8 justify-between'>
                <p className='text-[#fffffa] text-2xl w-1/2 font-light text-pretty normal-case'>The Wise account is the universal way for you to manage money internationally. It's made for the world. And it's built to save your money and time, so you can do more of the things you love. </p>
                <ButtonGreen title='Learn about our mission'/>
                </div>
            </div>
        </div>
  )
}

export default HeroDesc4