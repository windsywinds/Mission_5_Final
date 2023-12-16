import React from "react";
import { useState, useEffect } from "react";

import banner from "../../assets/banner.jpg";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";

//useContext component
import HomeSearch from "./HomeSearch";

export const Home = () => {

  return (
    <div className="flex flex-col w-[full] items-center justify-center">
      <div
        className={`flex flex-col w-full h-[20rem] md:h-[20rem] items-center justify-center`}
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white text-center mt-12 py-6">
          Find&nbsp;Your&nbsp;Dream Rental&nbsp;Home&nbsp;Today
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-white text-center py-6">
          Where&nbsp;are&nbsp;you planning&nbsp;to&nbsp;move&nbsp;to?
        </h3>
          <HomeSearch />
      </div>
      <div className="bg-[#ececec] w-full flex flex-col md:flex-row items-center justify-evenly py-12  drop-shadow-lg">
        <div className="md:mt-16 md:w-1/3 drop-shadow-lg px-8 md:px-0">
          <img src={home1} className="" alt="An image of a house"/>
        </div>
        <div className="h-full flex flex-col md:w-1/3 space-y-8 px-6 pt-4 md:pt-0 md:justify-center">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p>
            At Metro NZ Property Management we encompass several key elements
            aimed at providing a comprehensive and user friendly platform for
            both property owners and tenants.
            <br />
            <br />
            We offer a diverse range of properties ensuring a wide selection
            across various locations & budgets. We ensure transparency in
            property details, rental prices, terms and conditions to build trust
            among users.
            <br />
            <br />
            Our aim is to become the trusted partner for anyone navigating the
            property market, ensuring they find their dream home efficiently and
            with confidence. <br />
            All our properties are 100% compliant.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row-reverse md:flex-row items-center justify-evenly py-12">
        <div className="md:w-1/3 drop-shadow-lg px-8 md:px-0">
          <img src={home2} className="" alt="An image of a house"/>
        </div>
        <div className="h-full flex flex-col md:w-1/3 space-y-8 px-6 pt-4 md:pt-0 md:justify-center">
          <h2 className="text-3xl font-bold">Outstanding Properties</h2>
          <p>
            Our properties have exceptional features that makes a rental
            property highly desirable and attractive.
            <br />
            <br />
            We are dedicated to guiding tenants through every step of their
            rental journey, simplifying the rental process.
            <br />
            <br />
            We aim in providing expert advice and support ensuring tenants find
            not just a place to live, but a home that suits their needs.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col bg-black h-[500px] text-white items-center justify-center">
  <div className="">
    <h1 className="text-5xl py-12 text-left">How To Apply For A Rental Property</h1>
  </div>
  <div className="w-[90%] md:w-[80%] flex flex-col items-center justify-center border-2 border-pink-500">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
      <div className="bg-[#404040] h-64 w-4/6  md:w-5/6 md:h-64">
        <p>Icon</p>
        <p>Book a Viewing</p>
        <p>Found a property you're interested in? Book in a time in our calendar to arrange for a viewing.</p>
      </div>

      <div className="bg-[#404040] h-64 w-4/6 md:w-5/6 md:h-64">
        <p><img src="https://www.figma.com/file/nJin9GiTO6GAy6QBBpwCa7/High-Fidelity-Prototype-for-Metro-NZ-Redesign?type=design&node-id=186-184&mode=design&t=mk5AvhTJE5KKhuv0-4"/></p>
        <p>Book a Viewing</p>
        <p>Found a property you're interested in? Book in a time in our calendar to arrange for a viewing.</p>
      </div>

      <div className="bg-[#404040] h-64 w-4/6  md:w-5/6 md:h-64">
        <p>Icon</p>
        <p>Book a Viewing</p>
        <p>Found a property you're interested in? Book in a time in our calendar to arrange for a viewing.</p>
      </div>

      <div className="bg-[#404040] h-64 w-4/6  md:w-5/6 md:h-64">
        <p>Icon</p>
        <p>Book a Viewing</p>
        <p>Found a property you're interested in? Book in a time in our calendar to arrange for a viewing.</p>
      </div>
    </div>
  </div>
</div>



    </div>
  );
};
