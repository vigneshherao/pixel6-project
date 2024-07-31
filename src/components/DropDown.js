import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import useFilterData from "../hooks/useFilterData";

const DropDown = ({ text, toggleDropdown, isOpen, items }) => {
  //using custom hook to filtering the data in table
  const filterData = useFilterData();

  return (
    <div className="relative flex justify-center items-center border w-28 p-1 mr-2 rounded-md">
      <button className="mr-1 flex items-center text-black " onClick={toggleDropdown}>
        {text} < FaAngleDown className="ml-1" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-28 bg-white border rounded-md shadow-lg z-10">
          <ul className="list-none p-2 m-0">
            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => filterData(item)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
