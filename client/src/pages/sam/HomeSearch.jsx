import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from './searchContext'
import { getData } from '../services/getData';

const HomeSearch = () => {
  const [data, setData] = useState([]);
  const [cities, setCities] = useState();
  const [districts, setDistricts] = useState();
  const [suburbs, setSuburbs] = useState();
  const [selectedCity, setSelectedCity] = useState("City");
  const [selectedDistrict, setSelectedDistrict] = useState("District");
  const [selectedSuburb, setSelectedSuburb] = useState("Suburb");

  const { updateSearch } = useSearch(); //context for user search input

  const navigate = useNavigate(); //to use navigation

  //get data to set searchable locations
  useEffect(() => {
    const getLocationData = async () => {
      try {
        const response = await getData();
  
        //Set collection data
        setData(response);
        //Set city list
        const allCities = [...new Set(response.map((item) => item.city))];
        setCities(allCities);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    };

    getLocationData();
  }, []);

    // Update districts based on user selected city
    useEffect(() => {
      if (data && selectedCity) {
        const cityData = data.filter((item) => item.city === selectedCity);
        const allDistricts = [...new Set(cityData.map((item) => item.district))];
        setDistricts(allDistricts);
      }
    }, [data, selectedCity]);

  // Update suburbs based on user selected city and district
  useEffect(() => {
    if (data && selectedCity && selectedDistrict) {
      const filteredData = data.filter(
        (item) => item.city === selectedCity && item.district === selectedDistrict
      );
      const allSuburbs = [...new Set(filteredData.map((item) => item.suburb))];
      setSuburbs(allSuburbs);
    }
  }, [data, selectedCity, selectedDistrict]);
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const combinedWord = [{
      "city": selectedCity, 
      "district": selectedDistrict, 
      "suburb": selectedSuburb
    }]
    updateSearch(combinedWord);
    console.log(combinedWord)
    navigate('/results');
  };

  return (
 
    <form className="flex flex-col md:flex-row w-[70%]  items-center justify-center md:space-x-4"
    onSubmit={handleFormSubmit}>
<select
  className="w-full md:w-1/5 bg-white border-[#a6a6a6] rounded-t-lg md:rounded-lg border-[1px] p-2"
  id="city"
  name="city"
  value={selectedCity}
  onChange={(e) => {setSelectedCity(e.target.value)}}
>
  <option disabled value="City">
    City
  </option>
  {data && cities && 
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
  value={selectedDistrict}
  onChange={(e) => {setSelectedDistrict(e.target.value)}}
>
  <option disabled>District</option>
  {data && districts && 
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
  value={selectedSuburb}
  onChange={(e) => {setSelectedSuburb(e.target.value)}}
>
  <option disabled>Suburb</option>
  {data && suburbs &&
    suburbs.map((suburb) => (
      <option key={suburb} value={suburb}>
        {suburb}
      </option>
    ))}
</select>
<div className="flex w-full md:w-auto h-full items-center justify-center py-2">
  <button className="bg-[#d70707] text-white rounded-lg py-1.5 w-[80%] md:w-auto md:px-4"
          type="submit">
    Search
  </button>
</div>
</form>

  );
};

export default HomeSearch;
