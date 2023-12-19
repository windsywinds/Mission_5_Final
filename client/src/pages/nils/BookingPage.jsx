import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import { getData } from "../services/getData";

export const BookingPage = () => {
  const { propertyID } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const data = await getData();
        const currentListing = data.find(
          (item) => item.propertyID === propertyID
        );
        setProperty(currentListing);
      } catch (error) {
        console.log("there was an error fetching property data", error);
      }
      if (propertyID) {
        fetchPropertyData();
      }
    };
    [propertyID];
  });

  return (
    <div className=" flex-col w-[90%] md:w-[80%] relative justify-center">
      <button className="flex items-center my-8">
        <img className="mr-1" src={arrow}></img>
        Back to property listing
      </button>
      <div className=" flex flex-col  md:flex-row justify-between pb-[16rem] ">
        <div className="h-10 bg-[#d70707] text-white rounded-lg py-1.5 w-full  mb-[16rem] md:w-[49%] md:mb-4 px-4 ">
          <h1 className="pr-6">You are booking a viewing for:</h1>
          <div className=" bg-[#d70707] text-white rounded-lg py-1.5 w-full h-[15rem] md:w-[49%] px-4 ">
            <h1 className="pr-6">place holder</h1>
            {property && (
              <div>
                {property.address} {property.description}
              </div>
            )}
          </div>
        </div>
        <div className="h-10 bg-[#d70707] text-white rounded-lg py-1.5 w-full  md:w-[49%] px-4">
          <h1>Instructions to view a property:</h1>

          <div className="text-black flex flex-row font-medium pt-[4.25rem] text-[.8rem] items-center w-full">
            <p1 className="bg-[#d70707] rounded-full w-[25px] h-[25px] px-2 text-white text-[18px] flex justify-center">
              1
            </p1>
            <p1 className="pl-4">
              Please enter your details in the required fields
            </p1>
          </div>
          <div className="text-black flex flex-row font-medium pt-2 text-[.8rem] items-center w-full">
            <p1 className="bg-[#d70707] rounded-full w-[25px] h-[25px] px-2 text-white text-[18px] flex justify-center">
              2
            </p1>
            <p1 className="pl-4">
              Please select a date and time that we have available for you to
              view
            </p1>
          </div>
          <div className="text-black flex flex-row font-medium pt-2 text-[.8rem] items-center w-full">
            <p1 className="bg-[#d70707] rounded-full w-[25px] h-[25px] px-2 text-white text-[18px] flex justify-center">
              3
            </p1>
            <p1 className="pl-4">Click submit</p1>
          </div>
          <div className="text-black flex flex-row font-medium pt-2 text-[.8rem] items-center w-full">
            <p1 className="bg-[#d70707] rounded-full w-[25px] h-[25px] px-2 text-white text-[18px] flex justify-center">
              4
            </p1>
            <p1 className="pl-4">
              You will then be sent a confirmation email in regards to the
              viewing
            </p1>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full md:bg-[#ECECEC] pb-4  md:flex-row justify-between md:mb-60 ">
        <div className=" flex flex-col  px-5  md:w-[49%]">
          <div className="font-medium h-10 text-base pt-4 mb-3">
            Enter your details:
          </div>
          <div className="text-[11px] font-medium md:mb-6 md:flex justify-start">
            <div>
              <p1 className="flex flex-col pb-1 ">First name</p1>
              <input
                type="text"
                id="textInput"
                className="h-6 w-full md:w-[95%] bg-white rounded-[3px] border border-neutral-400 md:mr-6"
              />
            </div>
            <div>
              <p1 className="flex flex-col pb-1">Last name</p1>
              <input
                type="text"
                id="textInput"
                className="h-6 w-full  bg-white rounded-[3px] border border-neutral-400"
              />
            </div>
          </div>
          <div className="text-[11px] font-medium md:mb-2 md:flex justify-start">
            <div>
              <p1 className="flex flex-col pb-1">Phone</p1>
              <input
                type="text"
                id="textInput"
                className="h-6 w-full md:w-[95%] bg-white rounded-[3px] border border-neutral-400 md:mr-6"
              />
            </div>
            <div>
              <p1 className="flex flex-col pb-1">Email</p1>
              <input
                type="text"
                id="textInput"
                className="h-6 w-full  bg-white rounded-[3px] border border-neutral-400"
              />
            </div>
          </div>
          <div>
            <p1 className="flex flex-col text-[11px] font-medium pb-1">
              Comments
            </p1>
            <input
              type="text"
              id="textInput"
              className="w-full h-[99px] md:mb-4 bg-white rounded-[3px] border border-neutral-400"
            />
          </div>
          <div className="h-8 bg-[#d70707] text-white rounded-lg py-1.5 text-[11px]  hidden md:block md:w-[25%] px-4">
            <h1 className="flex justify-center  ">Submit</h1>
          </div>
        </div>

        <div className=" flex flex-col px-5 w-full md:w-[49%]">
          <div className="font-medium h-10 text-base pt-4 mb-4">
            Viewing Time:
          </div>
          <div></div>
          <div className="flex flex-col ">
            <p1 className="text-[11px] pb-1 font-medium flex justify-between md:w-[80%]">
              Available booking time
            </p1>
            <input
              type="text"
              id="textInput"
              className="h-8 rounded-  bg-white border border-neutral-400"
            />
            <input
              type="text"
              id="textInput"
              className="h-8 bg-white border border-neutral-400"
            />
            <input
              type="text"
              id="textInput"
              className="h-8 mb-4 bg-white border border-neutral-400"
            />
            <div className="text-[11px] font-medium flex flex-col">
              <p1 className="pb-1 mb-2">Viewing time not suitable?</p1>
              <p1>
                If none of the available viewing times are suitable, feel free
                to give us a call at 09 391 4643 and we will arrange something
                for you.
              </p1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 bg-[#d70707] ml-5 text-white rounded-lg mb-10 py-1.5 w-[90%] md:hidden px-4">
        <h1 className="flex justify-center ">Submit</h1>
      </div>
    </div>
  );
};
