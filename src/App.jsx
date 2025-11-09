import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Place_order from './pages/Place_order'
import Product from './pages/Product'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vm] lg:px-[9vm]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/collection' element = {<Collection/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contacts' element = {<Contacts/>} />
        <Route path='/product/:productId' element = {<Product/>} />
        <Route path='/place_order' element = {<Place_order/>} />
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/orders' element = {<Orders/>} />
        <Route path='/login' element = {<Login/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App