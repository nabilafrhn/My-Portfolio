import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const contact = () => {
  return (
    <div>
        <Navbar/>
        <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
        <Contact />
        <Footer />
    </div>
  )
}

export default contact