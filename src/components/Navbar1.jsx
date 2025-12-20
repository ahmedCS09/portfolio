import React from 'react'
import myLogo from '../assets/myLogo1.png'

function Navbar1() {
    return (
        <nav className='absolute z-50 top-0 left-0 w-full flex justify-center items-center py-6 px-6'>
            <div className='w-full max-w-[1400px] flex justify-between items-center bg-transparent'>
                <button className='text-white hover:text-red-500 transition-colors font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase cursor-pointer'>
                    MENU
                </button>

                <img className='h-8 md:h-12 w-auto object-contain' src={myLogo} alt="Logo" />

                <button className='text-white hover:text-red-500 transition-colors font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase cursor-pointer'>
                    CONTACT US
                </button>
            </div>
        </nav>
    )
}

export default Navbar1