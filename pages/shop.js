import React from 'react'
import ProductCard from '../components/Shop'
import Hero from '../components/Hero'

const Shop = () => {
  return (
    <div>
        <Hero heading='Contact' message='Submit the form below for more information' />
        <ProductCard />
    </div>
  )
}

export default Shop;