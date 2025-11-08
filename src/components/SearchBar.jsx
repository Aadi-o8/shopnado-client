import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const location = useLocation();

    useEffect(()=>{
        if (location.pathname) {
            setShowSearch(false);
        }
    },[location])

  return showSearch && (location.pathname ==='/collection' || location.pathname==='/') ? (
    <div className=' bg-gray-200 text-center items-center rounded-t-2xl mx-10'>
        
        <div className='inline-flex items-center justify-center border border-gray-600 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 '>
            <input type="text" placeholder='search any item' className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <img className='w-4' src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=> [setShowSearch(false), setSearch('')]} className='inline-flex cursor-pointer w-3 pb-1' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default SearchBar