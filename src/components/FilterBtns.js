import React, { useState } from "react";
import useFetchUsers from "../utils/useFetchUsers";
import DropDown from "./DropDown";
import { useSelector } from "react-redux";

const FilterBtns = () => {
  const [isCountry, setIsCountry] = useState(false);
  const [isGender, setIsGender] = useState(false);


  const users = useSelector((store) => store?.users?.users);
  const countries = Array.from(new Set(users.map(user => user.address.country)));
  const genders = Array.from(new Set(users.map(user => user.gender)));

  

  const toggleCountryBtn = () => {
    setIsCountry(!isCountry);
    
  };

  const toggleGenderBtn = () => {
    setIsGender(!isGender);
  };


  return (
    <div className="flex justify-between">
      <DropDown text={"Country"} toggleDropdown={toggleCountryBtn} isOpen={isCountry} items={countries}/>
      <DropDown text={"Gender"}  toggleDropdown={toggleGenderBtn} isOpen={isGender} items={genders}/>
    </div>
  );
};

export default FilterBtns;
