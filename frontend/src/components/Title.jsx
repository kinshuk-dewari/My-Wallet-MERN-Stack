import React from 'react'
export const Title = ({username="Kinshuk"}) => {
  return (
    <h1 className='text-black text-xl pb-6 md:text-2xl dark:text-neutral-300 text-wrap'>
    Welcome {" "} 
    <span    
     className='bg-gradient-to-r overflow-hidden from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold'>
      {username}
    </span>,
  </h1>
  )
}
