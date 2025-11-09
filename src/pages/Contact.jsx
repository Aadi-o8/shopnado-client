import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {

  // const

  return (
    <div className='mx-10'>

        <div className='text-center text-2xl pt-10 border-t'>
            <Title txt1={'Contact'} txt2={'Us'}/>
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
            <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
            <div className='flex flex-col justify-center items-start gap-6'>
                <p className='font-semibold text-xl teext-gray-600'>Our Main Branch</p>
                <p className='text-gray-500'>Sec-4A/ ,Avas Vikas <br />Buddhi Vihar, Moradabad</p>
                <p className='text-gray-500'>Tel: 9997774422 <br />Email: shopnado@gmail.com</p>
                <p className='font-semibold text-xl text-gray-600'>Careers</p>
                <p className='text-gray-500'>Learn more about our teams and job openings</p>
                <button className='border rounded-2xl cursor-pointer border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
            </div>
        </div>

        <NewsLetterBox />
    </div>
  )
}

export default Contact