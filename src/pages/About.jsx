import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {

  // const

  return (
    <div className='mx-10'>

      <div className='text-2xl text-center pt-8 border-t '>
          <Title txt1={'About'} txt2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full sm:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magni recusandae dignissimos perspiciatis error cupiditate culpa, iusto quaerat. Quo quas, ipsam deleniti libero quis fugit veniam? Sunt debitis vitae voluptatem?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus delectus rem quod iusto commodi quisquam voluptates enim. Suscipit culpa assumenda expedita natus incidunt laboriosam impedit, optio id dicta quam?</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea fugit necessitatibus similique delectus aliquam corrupti nihil suscipit ullam consequuntur neque ratione minus, voluptates molestiae aut cumque nulla iste voluptatem animi.</p>
          </div>
      </div>

      <div className='text-2xl py-4'>
          <Title txt1={'Why'} txt2={'Choose us'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border bg-gray-100 rounded-l-xl px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality assurance</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi in possimus quia id ab deserunt atque quaerat veniam aliquid at illo, recusandae ut incidunt molestias numquam cum nesciunt esse.</p>
          </div>
          <div className='border bg-gray-100 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi in possimus quia id ab deserunt atque quaerat veniam aliquid at illo, recusandae ut incidunt molestias numquam cum nesciunt esse.</p>
          </div>
          <div className='border bg-gray-100 rounded-r-xl px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional customer service</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi in possimus quia id ab deserunt atque quaerat veniam aliquid at illo, recusandae ut incidunt molestias numquam cum nesciunt esse.</p>
          </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About