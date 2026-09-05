import React from 'react'

const Subheading = ({text}) => {
  return (
    <p className='text-black pb-4 dark:text-neutral-300 text-center text-base px-6 md:text-xl text-wrap'>
      {text}
    </p>
  )
}

export default Subheading