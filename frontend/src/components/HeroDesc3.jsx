import React from "react"
const HeroDesc3 = () => {
  return (
    <div className='bg-[#aee780] flex items-center justify-center rounded-2xl pt-24 w-[96%] '>
      {/* Heading  */}
      <div className='flex flex-col overflow-hidden items-center justify-center max-w-6xl mx-auto  '> 

        <div className='text-8xl pr-42 text-[#1c3108] dark:text-[#0a0a0a] font-extrabold uppercase tracking-tighter'>
          <h1>trusted by </h1>
          <h1>merchants small</h1>
          <h1>and large</h1>
        </div>

        <div className='flex items-start gap-2  justify-center pt-8'>
            {/* Card images */}
          <div className='relative mt-64  w-[30rem] h-[14rem]'>
            <img
              src="herocardrem.png"
              alt="Card Back"
              className="absolute top-0 left-14 w-full h-auto -rotate-90 z-2 rounded-2xl"
            />
            <img
              src="herocardrem.png"
              alt="Card Front"
              className="absolute top-[34%] -left-[32%] w-full h-auto rotate-90 rounded-2xl"
            />
          </div>
          {/* text  */}
          <div className='pt-12 space-y-8 w-[25rem]'>
            <div className=''>
              <p className='text-xl text-[#1c3108] dark:text-neutral-700 text-wrap '>
                Go global with the international bussiness account. Pay employees, get paid and manage your cash flow in multiple currencies. Join over 300,000 bussinesses thriving with My Wallet.
              </p>
              <div className='flex items-start justify-between pt-8 gap-4'>
                <button className='rounded-full py-2 px-6 bg-[#1c3108] text-[#aee780] dark:bg-[#1c3108] font-bold' >Open a business account</button>
                <button className='rounded-full py-2 px-6 text-[#1c3108] font-bold border-2 dark:border-[#0a0a0a] dark:text-[#0a0a0a] border-[#1c3108]' >Learn more</button>
                
              </div>

            </div>
          </div> 
        </div>
      
      </div>
    </div>
  )
}
export default HeroDesc3