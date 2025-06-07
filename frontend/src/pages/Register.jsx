import React from 'react'

const Register = () => {
  return (
    <div className='bg-gray-50 dark:bg-black h-screen flex items-center justify-center'>
      <div className='dark:bg-neutral-900 rounded-2xl min-w-2xl py-4 px-2 space-y-2'>
        <h1 className='text-black dark:text-white text-center text-2xl md:text-4xl'>SignIn</h1>
        <p className='text-black dark:text-gray-600 text-center text-xl text-wrap'>Enter your information to create an account</p>

        <input className="text-white" type="text" lable="Kinshuk" />
      </div>
    </div>
  )
}

export default Register