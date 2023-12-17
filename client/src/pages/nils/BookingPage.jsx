import React from "react";
import { useNavigate } from "react-router-dom";

export const BookingPage = () => {
  return (
    <div className="w-[80%] flex-col justify-center">
      <button>
        <img></img>
        back to property page
      </button>
      <div className=" flex flex-col w-[80]  md:flex-row justify-between  px-4 ">
        <div className="h-10 bg-[#d70707] text-white rounded-lg py-1.5 w- md:w-[45%] px-4 ">
          <h1>You are booking a viewing for:</h1>
        </div>
        <div className="h-10 bg-[#d70707] text-white rounded-lg py-1.5 w-[80%] md:w-[45%] px-4">
          <h1>Instructions to view a property:</h1>
        </div>
      </div>

      <div className="flex flex-col   md:flex-row">
        <div className=" ">
          <div className="pl-2">
            <div> Enter your details:</div>
          </div>
        </div>
        <div>
          <div>Viewing Time:</div>
        </div>
      </div>
    </div>
  );
};
