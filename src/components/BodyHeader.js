import React from 'react'
import FilterBtns from "./FilterBtns" 
import { Table_Heading } from '../utils/constants'

const BodyHeader = () => {
  return (
    <div className='sm:mx-20 mt-24 flex justify-between'>
        <div>
            <h2 className='text-3xl font-bold'>{Table_Heading}</h2>
        </div>
        <div>
            <FilterBtns/>
        </div>
    </div>
  )
}

export default BodyHeader