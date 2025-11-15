import React, { useState } from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);
  const {token, setToken, navigate} = useContext(ShopContext);

  const onSubmitHandler = async (event)=> {
    event.preventDefault();

    if (currentState === 'Login') {

      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/user/login', {email, password});
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        console.log(response.data.token);
      } else{
        toast.error(response.data.message);
      }

    } else if (currentState === 'Sign up') {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/user/register', {name, email, password});
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
      } else{
        toast.error(response.data.message);
      }
    }
  }

  // const checkIfLoggedIn = ()=> {
  //   if (token === '') {
  //     setLoginStatus('false');
  //     console.log('token khali hai');
  //   } else{
  //     setLoginStatus(true);
  //     console.log('token toh haiga bhyi');
  //   }
  // }

  // useEffect(()=> {
  //   checkIfLoggedIn();
  // },[])

  useEffect(()=> {
    if (token) {
      navigate('/')
    }
  },[token])


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 mx-10 mt-14 gap-4 text-gray-700 '>

      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-700'/>
      </div>
      {currentState === 'Login' ? '' : <input onChange={(e)=> setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-400 rounded bg-gray-100' placeholder='Full name' required/>}
      <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-400 rounded bg-gray-100' placeholder='Enter your email' required/>
      <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-400 rounded bg-gray-100' placeholder='Enter your password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot your password?</p>
          {
            currentState === 'Login'
            ? <p onClick={()=> setCurrentState('Sign up')} className='cursor-pointer '>Create account</p>
            : <p onClick={()=> setCurrentState('Login')} className='cursor-pointer '>Already have an account? Login</p>
          }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4 rounded cursor-pointer'>{currentState === 'Login' ? 'Sign in' : 'Sign up'}</button>
    </form>
  )
}

export default Login