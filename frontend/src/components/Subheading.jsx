import React from 'react'

const Subheading = ({text}) => {
  return (
    <p className='text-black pb-4 dark:text-neutral-300 text-center text-base px-6 md:text-xl text-wrap'>
      Welcome to{" "} 
      <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold'>
        My Wallet
      </span>, {text}
    </p>
  )
}

export default Subheading