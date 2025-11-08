import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = ()=> {

    products.map((item)=> { 
      if(item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=> {
    fetchProductData();
  },[productId])


  return productData ? (

    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/* -----------------Product Data--------------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* -------------------Product Images------------------------ */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item, index)=>(
                  <img src={item} key={index} onClick={()=> setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex shrink-0 cursor-pointer' alt="" />
                ))
              }
          </div>
          <div className='w-full sm:w-[80%] '>
              <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>

        {/* --------------------Product Information-------------------- */}
        <div className=' flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex w-4 items-center gap-1 mt-2'>
                  <img src={assets.star_icon} alt="" />
                  <img src={assets.star_icon} alt="" />
                  <img src={assets.star_icon} alt="" />
                  <img src={assets.star_icon} alt="" />
                  <img src={assets.star_dull_icon} alt="" />
                  <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-1 text-gray-600 md:w-4/5'>{productData.description}</p>
              <p className='mt-3 text-3xl font-medium'>{currency}{productData.price}</p>
              <div className='flex flex-col gap-2 my-8'>
                  <p>Select Size</p>
                  <div className='flex gap-3'>
                      {
                        productData.sizes.map((item, index)=> (
                          <button onClick={()=> setSize(item)} className={`border-2 border-gray-500 py-2 px-4 bg-gray-200 rounded-2xl ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                        ))
                      }
                  </div>
              </div>
              <div className='flex gap-3 items-center'>
                <button className='border-2 border-gray-700 bg-gray-300 px-3 py-1'>Add to cart</button>
                <img className='h-7' src={assets.cart_icon} alt="" />
              </div>
              <hr className='mt-8 sm:w-4-5' />
              <div className='text-sm text-gray-600 mt-5 flex flex-col gap-1'>
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange within 7 days.</p>
              </div>
        </div>
      </div>

      {/* Description and Review section */}
      <div className='mt-10'>
          <div className='flex'>
              <b className='border-2 border-gray-500 px-5 py-3 text-sm rounded-2xl rounded-r-none rounded-b-none'>Description</b>
              <p className='border-2 border-gray-500 px-5 py-3 text-sm rounded-2xl rounded-l-none rounded-b-none'>Reviews (122)</p>
          </div>
          <div className='flex flex-col gap-4 border-2 border-gray-500 rounded-b-2xl rounded-r-2xl p-6 text-sm text-gray-600'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quibusdam commodi, blanditiis recusandae autem dolore excepturi quisquam nostrum necessitatibus ipsa id, saepe perspiciatis officia optio cupiditate repudiandae explicabo architecto cum?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita voluptatem corrupti accusamus itaque deserunt neque est ad, consequuntur tempore perspiciatis obcaecati amet dolore dolorum magni, eum incidunt officiis nemo voluptates?</p>

          </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>

  ) : <div className='opacity-0'></div>
}

export default Product