import React from 'react'
import { Link } from 'react-router'
function Footer() {
    return (
        <div className='absolute w-full z-10 bottom-6 parentMost flex justify-center items-center'>
            <div className='w-9/10 h-full flex justify-between items-center'>
                <Link className='text-white pl-10' to="/">MERN STACK DEVELOPER</Link>
                <Link className='text-white pr-10' to="/contact">SCROLL FOR MORE</Link>
            </div>
        </div>
    )
}

export default Footer
