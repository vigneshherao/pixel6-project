import React from 'react'
import { Company_NAME, Digit, LOGO, MENU } from '../utils/constants'

const NavBar = () => {
  return (
    <div className='bg-white w-[100%] h-20 shadow-md flex justify-between px-5 sm:px-20 items-center cursor-pointer'>
        <div className='w-10'>
            <img src={LOGO} alt="logo" />
            <p className='font-bold'>{Company_NAME}<span className='text-red-700 font-bold'>{Digit}</span></p>
        </div>
        <div className='w-14'>
            <img src={MENU} alt='menu'/>
        </div>
    </div>
  )
}

export default NavBar