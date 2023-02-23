import React from 'react'
import IgImg1 from '../public/Porto6.jpg';
import IgImg2 from '../public/Porto2.png';
import IgImg3 from '../public/Porto1.png';
import IgImg4 from '../public/Porto3.jpg';
import IgImg5 from '../public/Porto4.png';
import IgImg6 from '../public/Porto5.jpg';
import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>And this is my Portofolio</p>
        <p className='pb-4'>@nabilafrhn_</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg2} />
            <InstagramImg socialImg={IgImg3} />
            <InstagramImg socialImg={IgImg4} />
            <InstagramImg socialImg={IgImg5} />
            <InstagramImg socialImg={IgImg6} />
        </div>
    </div>
  )
}

export default Instagram