import React from 'react'

const Heading = ({text}) => {
  return (
    <h1 className='text-black dark:text-white text-center text-3xl pb-2 md:text-4xl'>{text}</h1>
  )
}

export default Heading