import React from "react";
import metroLogo from "../../assets/metro-logo.svg";
import downArrow from "../../assets/down-arrow.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import hamburger from "../../assets/hamburger.svg";
import { useState, useRef, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when the user clicks outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-blue-500 flex justify-between items-center">
      {/* Phone view */}
      <div className=" md:hidden flex ;">
        <img className="flex" src={metroLogo} />
        <button className="flex" onClick={() => setIsOpen(!isOpen)}>
          <img src={hamburger} alt="Dropdown Icon" />
        </button>
      </div>
      {isOpen && (
        <div className="">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a href="#" className="">
              Item 1
            </a>
            <a href="#" className="">
              Item 2
            </a>
            <a href="#" className="">
              Item 3
            </a>
          </div>
        </div>
      )}
      {/* monitor view */}

      <div className=" hidden md:flex ">
        <img className="" src={metroLogo} />
        <div className="">Rental Property Search</div>
        <div className="">Property Management Services</div>
        <div className="]">About Us</div>
        <div className="">Contact Us</div>
        <img className="h-11" src={phoneIcon}></img>

        <div className="">09 391 4642</div>
      </div>
    </div>
  );
};
