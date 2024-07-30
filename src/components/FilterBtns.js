import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const FilterBtns = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex justify-center items-center border w-28 p-1  text-red-500 mr-2 rounded-md'>
            <button className='mr-1'>Country</button>
            <FaAngleDown />
        </div>
        <div className='flex justify-center items-center border w-28 p-1  text-red-500 rounded-md'>
            <button className='mr-1'>Gender</button>
            <FaAngleDown />
        </div>
    </div>
  )
}

export default FilterBtns