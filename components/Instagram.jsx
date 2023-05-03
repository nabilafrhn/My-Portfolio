import React from 'react'
import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>My Portofolio</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={"/Porto6.jpg"} />
            <InstagramImg socialImg={"/Porto2.png"} />
            <InstagramImg socialImg={"/Porto1.png"} />
            <InstagramImg socialImg={"/Porto3.jpg"} />
            <InstagramImg socialImg={"/Porto4.png"} />
            <InstagramImg socialImg={"/Porto5.jpg"} />
        </div>
    </div>
  )
}

export default Instagram