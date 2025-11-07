import React, { useState } from 'react'

const NewsLetterBox = () => {

    const [email, setEmail] = useState("");

    const onSubmitHandler = (event)=> {
        event.preventDefault();
        setEmail("");
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now get upto 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis aliquam temporibus sapiente esse distinctio, eius similique necessitatibus dolorum unde ad quo est nam eaque placeat saepe, eos reiciendis dolorem omnis?
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-0 ' type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>Submit</button>
        </form>
    </div>
  )
}

export default NewsLetterBox