import Link from 'next/link'
import React from 'react'

const Button = ({text, link}) => {
    return (
    <Link href={link} className='btn bg-pink-400 px-8 py-3 rounded-lg'>{text}</Link>
    )
}

export default Button