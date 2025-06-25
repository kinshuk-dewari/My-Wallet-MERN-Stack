import React from 'react'

export const ButtonGreen = ({title,onClick}) => {
  return (
    <button className='rounded-full text-lg py-2 px-6 bg-[#aee780] text-[#1c3108] dark:text-[#0a0a0a] font-bold' onClick={onClick}>{title}</button>
  )
}
