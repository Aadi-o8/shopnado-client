import React from 'react'
import latest from '../assets/latest.png'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row mx-10 '>
        {/* LEFT SECTION */}
        <div className='border-l-2 border-b-2 border-t-2 border-gray-600 rounded-2xl sm:rounded-r-none rounded-b-none w-full border-r-2 sm:border-r-0 sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-white'>
            <div className=' text-[#414141]'>
                <div className=' flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>Our Bestsellers</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl'>Latest Arrivals</h1>
                <div className=' flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>Shop Now</p>
                    <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
                </div>
            </div>
        </div>
        
        {/* RIGHT SECTION */}
        <div className='overflow-hidden w-full sm:w-1/2 flex items-center justify-center border-b-2 sm:border-y-2 border-x-2 sm:border-l-2 rounded-t-none sm:rounded-t-2 sm:rounded-l-none rounded-2xl border-gray-600 sm:py-0'>
            <img src={latest} className='w-full' alt="" />
        </div>
    </div>
  )
}

export default Hero