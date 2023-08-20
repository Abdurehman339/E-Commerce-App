import React from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home
