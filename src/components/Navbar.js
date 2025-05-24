"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ handleOnChange }) => {
    
  return (
    <div className="border shadow py-4 mt-2 mx-4 rounded-md flex flex-col sm:flex-row gap-2 justify-between px-3 items-center ">
      <p className="text-lg font-semibold">Product Catalog</p>
      <div className="flex items-center w-full sm:w-auto justify-center gap-1 border border-gray-400 focus-within:ring-2 focus-within:ring-gray-300 rounded-md px-2">
        <FaSearch />
        <input
          type="text"
          placeholder="search product"
          className=" py-2 outline-none w-full sm:w-auto"
         onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default Navbar;
