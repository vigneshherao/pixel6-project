import React, { useState } from "react";
import DropDown from "./DropDown";
import useUserInfo from "../hooks/useUserInfo";

const FilterBtns = () => {
  //State varibale for status of filter button
  const [isCountry, setIsCountry] = useState(false);
  const [isGender, setIsGender] = useState(false);

  //Array destructing from useUserInfo hook(it will return filter btn options)
  const [countries,genders] = useUserInfo();
  
  //Function will toggle the state varibale
  const toggleCountryBtn = () => {
    setIsCountry(!isCountry);
    
  };

  //Function will toggle the state varibale

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
