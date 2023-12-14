import React from "react";
import { useState, useEffect } from "react";
import banner from "../../assets/banner.jpg";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";

export const Home = () => {
  const [data, setData] = useState();
  const [cities, setCities] = useState();
  const [districts, setDistricts] = useState();
  const [suburbs, setSuburbs] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [selectedSuburb, setSelectedSuburb] = useState();

  const SERVER_URI =
    import.meta.env.VITE_SERVER_URI || "http://localhost:8001/";

  const getLocationData = async () => {
    try {
      const response = await fetch(SERVER_URI + "searchDatabase");
      const data = await response.json();
      setData(data);

      // Extract only unique fields from each entry (no double up city names etc)
      const allCities = new Set();
      data.forEach((item) => {
        if (item.city) {
          allCities.add(item.city);
        }
      });
      const allDistricts = new Set();
      data.forEach((item) => {
        if (item.district) {
          allDistricts.add(item.district);
        }
      });
      const allSuburbs = new Set();
      data.forEach((item) => {
        if (item.suburb) {
          allSuburbs.add(item.suburb);
        }
      });
      setCities(Array.from(allCities));
      setDistricts(Array.from(allDistricts));
      setSuburbs(Array.from(allSuburbs));
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    }
  };

  useEffect(() => {
    getLocationData();
  }, []);

  const handleCitySelection = (e) => {
    setSelectedCity(e.target.value);
  };
  const handleDistrictSelection = (e) => {
    setSelectedDistrict(e.target.value);
  };
  const handleSuburbSelection = (e) => {
    setSelectedSuburb(e.target.value);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div
        className={`flex flex-col w-full h-[20rem] md:h-[20rem] items-center justify-center`}
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white py-6">
          Find&nbsp;Your&nbsp;Dream Rental&nbsp;Home&nbsp;Today
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-white py-6">
          Where are you planning to move to?
        </h3>

        <form className="flex flex-col md:flex-row w-[70%]  items-center justify-center md:space-x-4">
          <select
            className="w-full md:w-1/5 bg-white border-[#a6a6a6] rounded-t-lg md:rounded-lg border-[1px] p-2"
            id="city"
            name="city"
            defaultValue="City"
            onChange={handleCitySelection}
          >
            <option disabled value="City">
              City
            </option>
            {data &&
              cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
          <select
            className="w-full md:w-1/5 bg-white border-[#a6a6a6] md:rounded-lg border-[1px] p-2"
            id="district"
            name="district"
            defaultValue="District"
            onChange={handleDistrictSelection}
          >
            <option disabled>District</option>
            {data &&
              districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
          </select>
          <select
            className="w-full md:w-1/5 bg-white border-[#a6a6a6] rounded-b-lg md:rounded-lg border-[1px] p-2"
            id="suburb"
            name="suburb"
            defaultValue="Suburb"
            onChange={handleSuburbSelection}
          >
            <option disabled>Suburb</option>
            {data &&
              suburbs.map((suburb) => (
                <option key={suburb} value={suburb}>
                  {suburb}
                </option>
              ))}
          </select>
          <div className="flex w-full md:w-auto h-full items-center justify-center py-2">
            <button className="bg-[#d70707] text-white rounded-lg py-1.5 w-[80%] md:w-auto md:px-4">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="bg-[#ececec] w-full flex flex-col md:flex-row items-center justify-evenly py-12  drop-shadow-lg">
        <div className="md:mt-16 md:w-1/3 drop-shadow-lg px-8 md:px-0">
          <img src={home1} className="" />
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
          <img src={home2} className="" />
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
    </div>
  );
};
