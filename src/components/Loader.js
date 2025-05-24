"use client";
import React from "react";

const Loader = () => {
  return (
    //  <div className="fixed flex justify-center items-center bg-[rgba(0,0,0,0.7)] inset-0">
    //         <div className="loader"></div>
    //   </div>
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loader;
