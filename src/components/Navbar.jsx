import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import shopnado from '../assets/shopnado.png'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const { setSearch, showSearch, setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium mx-10'>
        <NavLink to='/'><img src={shopnado} className='w-36' alt="" /></NavLink>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className={'flex flex-col items-center gap-1'}>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/collection' className={'flex flex-col items-center gap-1'}>
                <p>Collections</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/about' className={'flex flex-col items-center gap-1'}>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className={'flex flex-col items-center gap-1'}>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img onClick={()=> [setShowSearch(!showSearch ? true : false), setSearch('')]} src={assets.search_icon} className='w-6 cursor-pointer' alt="" />
            <div className='group relative'>
                <Link to='/login'><img src={assets.profile_icon} className='w-6 cursor-pointer' alt="" /></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-slate-500'>
                        <p>My Profile</p>
                        <p>Orders</p>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
            <NavLink to = '/cart' className = 'relative' >
                <img src={assets.cart_icon} className='w-6 min-w-6' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-blue-50 aspect-square text-[8px] rounded-full'>{getCartCount()}</p>
            </NavLink>
            <img onClick={()=> setVisible(true)} src={assets.menu_icon} className='w-6 cursor-pointer sm:hidden' alt="" />
        </div>
        {/* creating side bar for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${ visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>

                <div className='flex items-center gap-4 p-3'>
                    <img onClick={()=> setVisible(false)} className='h-4 rotate-180 cursor-pointer' src={assets.dropdown_icon} alt="" />
                    <p onClick={()=> setVisible(false)} className='cursor-pointer text-gray-400'>
                        Back
                    </p>
                </div>

                <NavLink onClick={()=> setVisible(false)} className={'py-2 pl-6'} to='/'>Home</NavLink>
                <NavLink onClick={()=> setVisible(false)} className={'py-2 pl-6'} to='/collection'>Collection</NavLink>
                <NavLink onClick={()=> setVisible(false)} className={'py-2 pl-6'} to='/about'>About</NavLink>
                <NavLink onClick={()=> setVisible(false)} className={'py-2 pl-6'} to='/contact'>Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar