import React from "react";
import FilterBtns from "./FilterBtns";
import { Table_Heading } from "../utils/constants";
import { FaFilter } from "react-icons/fa6";

const BodyHeader = () => {
  return (
    <div className="sm:mx-20 mt-16 flex flex-wrap justify-between">
      <div className="w-full sm:w-auto">
        <h2 className="ml-2 sm:ml-0 text-3xl font-bold">{Table_Heading}</h2>
      </div>
      <div className="w-full sm:w-auto flex items-center mt-4 sm:mt-0  text-red-700">
        <FaFilter className=" ml-3 mr-1 sm:mr-5" />
        <FilterBtns/>
      </div>
    </div>
  );
};

export default BodyHeader;
