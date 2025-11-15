import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';

const Collection = () => {

  const { products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e)=> {

    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item=> item !== e.target.value));
    } else {
      setCategory(prev=> [...prev, e.target.value]);
    }
  }

  const toggleType = (e)=> {
    if (type.includes(e.target.value)){
      setType(prev=> prev.filter(item=> item !== e.target.value));
    } else{
      setType(prev=> [...prev, e.target.value]);
    }
  }

  const applyFilter = ()=>{
    let productsCopy = products.slice();

    if (search && showSearch) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (type.length > 0) {
      productsCopy = productsCopy.filter(item => type.includes(item.subCategory));
    }

    setFilterProducts(productsCopy)
  }

  const sortProducts = ()=> {

    const fpCopy = filterProducts.slice();
    switch (sortType) {
        case 'low-high':
          setFilterProducts(fpCopy.sort((a,b)=> (a.price-b.price) ));
          break;
        case 'high-low':
          setFilterProducts(fpCopy.sort((b,a)=> (a.price-b.price)));
          break;
        default:
          applyFilter();
          break;
    }
  }

  useEffect(()=> {
    sortProducts();
  },[sortType])

  useEffect(()=>{
    applyFilter();
  },[category, type, search, showSearch, products])
  

  return (

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-200 mx-10'>

        {/* Filter Options */}        
        <div className='min-w-60 '>
          <p onClick={()=> setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 '>Filters
            <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }`} alt="" />
          </p>

          {/* Category Filter */}
          <div className={`border-t border-gray-200 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block'}`}>
            <p className='mb-3 text-sm font-medium '>Categories</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}/> Men
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory}/> Women
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory}/> Kids
              </p>
            </div>
          </div>
          {/* Sub-Category Filter */}
          <div className={`border-b border-gray-200 pl-5 py-3 ${showFilter ? '' : 'hidden sm:block'}`}>
            <p className='mb-3 text-sm font-medium '>Types</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleType}/> Top wear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleType}/> Bottom wear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleType}/> Winter wear
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='flex-1'>

          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title txt1={'All'} txt2={'Collections'} />
            {/* Product Sort */}
            <select onChange={(e)=> setSortType(e.target.value)} className='border-2 border-gray-800 rounded-2xl text-sm px-2'>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Price low to high</option>
              <option value="high-low">Sort by: Price high to low</option>
            </select>
          </div>

          {/* Map Products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item, index)=>(
                <ProductItems key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
              ))
            }
          </div>

        </div>

    </div>
  )
}

export default Collection