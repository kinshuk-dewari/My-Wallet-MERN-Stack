import React from 'react'

export const ButtonGreenInverse = ({title,onClick}) => {
  return (
    <button className='cursor-pointer transition ease-in-out text-shadow-2xs hover:shadow-xl rounded-full py-2 px-6 text-[#1c3108] font-bold border-2 border-[#1c3108] text-base hover:bg-lime-100/80' onClick={onClick}>{title}</button>
  )
}
