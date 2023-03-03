import React from 'react'
import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Our Product</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={"/product33.jpg"} />
            <InstagramImg socialImg={"/product4.jpg"} />
            <InstagramImg socialImg={"/product5.jpg"} />
            <InstagramImg socialImg={"/product6.jpg"} />
            <InstagramImg socialImg={"/product7.jpg"} />
            <InstagramImg socialImg={"/prodyct8.jpg"} />
        </div>
    </div>
  )
}

export default Instagram