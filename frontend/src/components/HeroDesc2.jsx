import React from "react"
const HeroDesc2 = () => {
  return (
    <div className='bg-[#aee780] rounded-2xl w-[96%] '>
      {/* Heading  */}
      <div className='max-w-6xl mx-auto flex items-center py-12 justify-center gap-[17rem] '>
        <div className='py-18 space-y-8'>
          <div className=' flex flex-col text-5xl space-y-2 font-medium tracking-tight dark:text-[#0a0a0a]'> 
            <h1 > Save upto 9x when you</h1>
            <h1 > send currencies</h1>
          </div>
          <p className='text-xl text-neutral-700 text-wrap w-[22rem]'>
            Sending money shouldn't cost the earth, so we built My Wallet to save you money when you transfer and exchange internationally. We charge as little as possible: right now a tiny fee, eventually free.
          </p>
        </div> 
        {/* Image  */}
        <div className='py-18'>
          <img
              src="mobile.png"
              alt="Phone"
              className="w-[24rem] rounded-3xl border-4 border-neutral-700 shadow-xl"
            />
        </div>

      </div>
    </div>
  )
}
export default HeroDesc2