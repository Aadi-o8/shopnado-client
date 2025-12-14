import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    // const [bestseller]

    useEffect(()=>{
        setLatestProducts(products.slice(0,20))
    },[products])

  return (
    <div className='m-10'>
        <div className='text-left sm:text-center py-8 text-3xl'>
            <Title txt1={'Latest'} txt2={'Collections'}/>
        </div>

        {/* RENDERING PRODUCTS */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item, index)=> (
                    <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price}/> 
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection