import React from 'react'
import FilterBtns from "./FilterBtns" 

const TableHeader = () => {
  return (
    <div className='sm:mx-20 mt-24 flex justify-between'>
        <div>
            <h2 className='text-3xl font-bold'>Employees</h2>
        </div>
        <div>
            <FilterBtns/>
        </div>
    </div>
  )
}

export default TableHeader