import React from 'react'

export const ButtonGreen = ({title,onClick}) => {
  return (
    <button className='rounded-full  text-base py-2 px-6 bg-[#9ee86f] hover:bg-[#88e63b] cursor-pointer transition ease-in-out text-shadow-2xs hover:shadow-xl text-[#1c3108] font-bold' onClick={onClick}>{title}</button>
  )
}
