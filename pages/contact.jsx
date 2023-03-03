import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact' message='Submit the form below for more information' />
        <Contact />
    </div>
  )
}

export default contact