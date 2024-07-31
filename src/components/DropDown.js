import React from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux';
import { addFilterdData, addUsersData } from '../utils/dataSlice';

const DropDown = ({text,toggleDropdown,isOpen,items}) => {


  const usersData =  useSelector((store) => store?.users?.users);


  const dispatch = useDispatch();

  const filterData = (gender) => {
    let filteredData;
  
    if (gender === "United States") {
      filteredData = usersData.filter((user) => user?.address?.country === gender);
    } else {
      filteredData = usersData.filter((user) => user?.gender === gender);
    }
  
    console.log(filteredData);
    dispatch(addFilterdData(filteredData));
  };
  




  return (
    <div className="relative flex justify-center items-center border w-28 p-1 text-red-500 mr-2 rounded-md">
        <button className="mr-1" onClick={toggleDropdown}>
          {text}
        </button>
        <FaAngleDown />
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-28 bg-white border rounded-md shadow-lg z-10">
            <ul className="list-none p-2 m-0">
            
              {
                items.map((item,index)=>{
                  return   <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={()=>filterData(item)}>{item}</li>
                })
              }
            </ul>
          </div>
        )}
      </div>
  )
}

export default DropDown