import React from 'react'

export const Title = ({username="Kinshuk"}) => {
  return (
    <h1 className='text-black text-3xl pb-6 md:text-4xl dark:text-neutral-300 text-center text-wrap'>
    Welcome {" "} 
    <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold'>
      {username}
    </span>,
  </h1>
  )
}
