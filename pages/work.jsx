import React from 'react'
import Footer from '../components/footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='About me' message='This is some information about me' />
        <Portfolio />
      <Footer />
    </div>
  )
}

export default work