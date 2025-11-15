import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestseller, setBestSeller] = useState([]);
    
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller == true));
        setBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className='m-10'>
        <div className='text-center py-8 text-3xl'>
            <Title txt1={'Best'}txt2={'seller'}/>
        </div>

        {/* Rendering Bestsellers */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
            {
                bestseller.map((item, index)=>(
                    <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller