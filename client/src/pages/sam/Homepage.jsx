import React from "react";
import { useState, useEffect } from "react";

import banner from "../../assets/banner.jpg";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import quill_paper from "../../assets/quill_paper.svg";
import homeIcon from '../../assets/home-icon.svg'


//useContext component
import HomeSearch from "./HomeSearch";

export const Home = () => {

  return (
    <div className="flex flex-col w-[full] items-center justify-center">
      <div
        className={`flex flex-col w-full h-[22rem] md:h-[20rem] items-center justify-center`}
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white text-center mt-12 sm:py-6">
          Find&nbsp;Your&nbsp;Dream Rental&nbsp;Home&nbsp;Today
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-white text-center py-6">
          Where&nbsp;are&nbsp;you planning&nbsp;to&nbsp;move&nbsp;to?
        </h3>
          <HomeSearch />
      </div>
      <div className="bg-[#ececec] w-full flex flex-col md:flex-row items-center justify-evenly py-12  drop-shadow-lg">
        <div className="md:mt-16 md:w-1/3 drop-shadow-lg px-4 md:px-0">
          <img src={home1} className="" alt="An image of a house"/>
        </div>
        <div className="h-full flex flex-col md:w-1/3 space-y-8 px-6 pt-4 md:pt-0 md:justify-center">
          <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
          <p className="text-sm">
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
        <div className="md:w-1/3 drop-shadow-lg px-4 md:px-0">
          <img src={home2} className="" alt="An image of a house"/>
        </div>
        <div className="h-full flex flex-col md:w-1/3 space-y-8 px-6 pt-4 md:pt-0 md:justify-center">
          <h2 className="text-2xl md:text-3xl font-bold">Outstanding Properties</h2>
          <p className="text-sm">
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

      <div className="w-full flex flex-col bg-black h-full pb-12 text-white items-center justify-center">
  <div className="flex w-full items-center justify-center">
    <h2 className="text-3xl font-semibold py-12 text-left w-[90%]">How To Apply For A Rental Property</h2>
  </div>
  <div className="w-[90%] flex flex-col items-center justify-center">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">

      <div className="bg-[#404040] flex flex-col h-full py-12 items-center text-center gap-y-4 px-4 relative">
        <p className="z-10 text-4xl font-bold absolute top-4 left-4">1</p>
        <img   className="mt-6 max-h-20" src={homeIcon} />
        <h4 className="text-lg font-semibold">Book a Viewing</h4>
        <p className="text-sm">Found a property you're interested in? Book in a time in our calendar to arrange for a viewing.</p>
      </div>

      <div className="bg-[#404040] flex flex-col h-full py-12 items-center text-center gap-y-4 px-4 relative">
      <p className="z-10 text-4xl font-bold absolute top-4 left-4">2</p>
        <img className="mt-6 max-h-20" src={quill_paper} />
        <h4 className="text-lg font-semibold">Complete The Tenancy Application</h4>
        <p className="text-sm">Decided this is the right property? Simply fill in and submit you the tenancy application form.</p>
      </div>

      <div className="bg-[#404040] flex flex-col h-full py-12 items-center text-center gap-y-4 px-4 relative">
      <p className="z-10 text-4xl font-bold absolute top-4 left-4">3</p>
        <img className="mt-6 max-h-20" src={homeIcon} />
        <h4 className="text-lg font-semibold">We’ll Assess your Application </h4>
        <p className="text-sm">Our team will assess whether if this is the right property for you. If not, we’ll offer you alternative properties suited to your needs.</p>
      </div>

      <div className="bg-[#404040] flex flex-col h-full py-12 items-center px-4 text-center gap-y-4 relative">
      <p className="z-10 text-4xl font-bold absolute top-4 left-4">4</p>
      <img className="mt-6 max-h-20" src={quill_paper} />
        <h4 className="text-lg font-semibold">Sign The Tenancy Agreement</h4>
        <p className="text-sm">Once your application is successful, simply sign the tenancy agreement and congratulation, welcome to your new home.</p>
      </div>
    </div>
  </div>
</div>



    </div>
  );
};
