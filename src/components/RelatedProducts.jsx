import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const RelatedProducts = ({category, subCategory}) => {

    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(()=> {

        if (products.length > 0) {

            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productsCopy);

        }

    },[products])

  return (
    <div className='my-14'>
        <div className='text-center text-3xl py-2 '>
            <Title txt1={'Related'} txt2={'Products'} />
        </div>

        <div className="border-2 border-gray-300 rounded-2xl p-2">
            <div className='flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth'>
                {related.map((item, index) => (
                    <div key={index} className="py-2 snap-start flex-shrink-0 w-48">
                    <ProductItems
                        name={item.name}
                        id={item._id}
                        price={item.price}
                        image={item.image}
                    />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default RelatedProducts