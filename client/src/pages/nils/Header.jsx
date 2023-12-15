import React from "react";
import metroLogo from "../../assets/metro-logo.svg";
import downArrow from "../../assets/down-arrow.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import hamburger from "../../assets/hamburger.svg";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false); // Close the dropdown on desktop view
    }
  };

  useEffect(() => {
    // Close the dropdown when the window is resized to desktop view
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" flex flex-col justify-between ">
      {/* Phone view */}
      <div className=" md:hidden w-screen flex flex-row justify-between ">
        <img className="flex w-[4.75rem] pl-5 pt-2 pb-1" src={metroLogo} />
        <button
          className="flex h-5 pr-5 pt-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={hamburger} alt="Dropdown Icon" />
        </button>
      </div>
      {isOpen && (
        <div className="flex w-screen ">
          <div className="flex flex-col pl-3">
            <a href="#" className="">
              Home
            </a>
            <a href="#" className="">
              Rental Property Search
            </a>
            <a href="#" className=" flex justify-between w-screen ">
              Property Management Service
              <button>
                <img className="pr-7 h-4" src={downArrow} />
              </button>
            </a>

            <a href="#" className=" flex justify-between w-screen ">
              About Us
              <button>
                <img className="pr-7 h-4" src={downArrow} />
              </button>
            </a>
            <a href="#" className="">
              Contact Us
            </a>
          </div>
        </div>
      )}
      {/* monitor view */}

      <div className=" hidden md:flex w-screen flex-row  ">
        <img className="h-11 pl-[18vw] pt-2 pr-[7.8rem]" src={metroLogo} />
        <div className=" text-[.687rem] font-normal font-['Inter'] flex flex-row items-center ">
          <div className="pr-5">Rental Property Search</div>
          <div className="pr-5">Property Management Services</div>
          <div className="pr-5">About Us</div>
          <div className="pr-5">Contact Us</div>
        </div>

        <div className="flex flex-auto items-center">
          <img className="w-4 pr-1" src={phoneIcon}></img>

          <div className="text-[.687rem] pr-1">09 391 4642</div>
        </div>
      </div>
    </div>
  );
};