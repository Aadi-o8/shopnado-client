import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import axios from 'axios'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

const Place_order = () => {
  
  const { token, navigate, cartItems, setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext);
  const [method, setMethod] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const initPay = (order)=> {
    const options = {
      key: import.meta.env.RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Order Payment',
      description: 'Order Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response)=> {
        console.log(response);
      }
    }
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  const onChangeHandler = (event)=> {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({...data, [name]:value}));
  }

  const handleSubmit = async (event)=> {
    event.preventDefault();
    try {
      
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      }
      
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/order/' + method, orderData, {headers:{token}});
      console.log(response.data);
      if (response.data.success && method === 'cod') {
        setCartItems({});
        toast.success('Order Placed');
        navigate('/')
      }
      else if (response.data.success && method === 'stripe') {
        
        const { session_url } = response.data;
        window.location.replace(session_url);
        
      }
      else if (response.data.success && method === 'razorpay') {
        console.log(response.data.order);
        initPay(response.data.order);

      }
      else{
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }


  return (
    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-between gap-4 pt-14 min-h-[80vh] border-t-2 mx-10'>

      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px] '>
          <div className='text-xl sm:text-2xl my-3'>
              <Title txt1={'Delivery'} txt2={'Information'}/>
          </div>
          <div className='font-medium'>Credentials</div>
          <div className='flex gap-3'>
              <input required onChange={ onChangeHandler } name='firstName' value={formData.firstName} className='border border-gray-400 bg-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
              <input required onChange={ onChangeHandler } name='lastName' value={formData.lastNmae} className='border border-gray-400 bg-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
          </div>
          <input required onChange={ onChangeHandler } name='email' value={formData.email} className='border border-gray-400 bg-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Email address' />
          <div className='font-medium'>Address</div>
          <input required onChange={ onChangeHandler } name='line1' value={formData.line1} className='border border-gray-400 bg-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First line' />
          <input required onChange={ onChangeHandler } name='line2' value={formData.line2} className='border border-gray-400 bg-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Second line' />
          <div className='flex gap-3'>
              <input required onChange={ onChangeHandler } name='city' value={formData.city} className='border border-gray-400 bg-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
              <input required onChange={ onChangeHandler } name='state' value={formData.state} className='border border-gray-400 bg-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
          </div>
          <div className='flex gap-3'>
              <input required onChange={ onChangeHandler } name='zipCode' value={formData.zipCode} className='border border-gray-400 bg-gray-200 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Pincode' />
              <input required onChange={ onChangeHandler } name='country' value={formData.country} className='border border-gray-400 bg-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country'/>
          </div>
          <input required onChange={ onChangeHandler } name='phone' className='border border-gray-400 bg-gray-200 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
      </div>

      {/* Right side */}
      <div className='mt-8'>

          <div className='mt-8 min-w-80'>
              <CartTotal />
          </div>
          <div className='min-w-60 mt-5 text-2xl'>
            <Title txt1={'Payment'} txt2={'Methods'}/>
            <div className='flex gap-3 flex-col lg:flex-row'>
                {/* <div onClick={()=> setMethod('stripe')} className='flex items-center gap-3 border rounded p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
                  <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                </div>
                <div onClick={()=> setMethod('razorpay')} className='flex items-center gap-3 border rounded p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''}`}></p>
                  <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                </div> */}
                <div onClick={()=> setMethod('cod')} className='flex items-center gap-3 border rounded p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
                  <p className='text-medium'>Cash on delivery</p>
                </div>
            </div>

            <div className='w-full text-end mt-8'>
              <button type='submit' className='bg-gray-800 text-white px-10 py-2 text-xl rounded cursor-pointer'>Place Order</button>
            </div>
          </div>
      </div>
    </form>
  )
}

export default Place_order