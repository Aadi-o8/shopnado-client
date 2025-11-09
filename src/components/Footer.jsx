import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div  className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 m-10 mt-20 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full sm:w-2/3 text-gray-700'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est impedit nisi perspiciatis facilis ab, deleniti alias unde ullam ipsam, sapiente quae soluta eaque! Reprehenderit officia doloribus quas ducimus voluptas eos.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-700'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policies</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>
                    Get in touch
                </p>
                <ul className='flex flex-col gap-1 mb-5'>
                    <li>+91 9997774422</li>
                    <li>shopnado@gmail.com</li>
                </ul>
            </div>

        </div>

        <div className='m-10'>
            <hr />
            <p className='py-5 text-sm text-center '> Copyrights 2025@ shopnado.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer