import React from 'react'
import { FaAngleDown } from 'react-icons/fa6'

const DropDown = ({toggleDropdown,isOpen,items}) => {
  return (
    <div className="relative flex justify-center items-center border w-28 p-1 text-red-500 mr-2 rounded-md">
        <button className="mr-1" onClick={toggleDropdown}>
          Country
        </button>
        <FaAngleDown />
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-28 bg-white border rounded-md shadow-lg z-10">
            <ul className="list-none p-2 m-0">
            
              {
                items.map((item,index)=>{
                  return   <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">{item}</li>
                })
              }
            </ul>
          </div>
        )}
      </div>
  )
}

export default DropDown