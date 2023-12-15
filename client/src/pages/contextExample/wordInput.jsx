// WordInput.js

import React, { useState } from 'react';
import { useWord } from './WordContext';

const WordInput = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedSuburb, setSelectedSuburb] = useState('');

  const { updateWord } = useWord();

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleSuburbChange = (e) => {
    setSelectedSuburb(e.target.value);
  };

  const handleButtonClick = () => {
    const combinedWord = `${selectedCity}, ${selectedDistrict}, ${selectedSuburb}`;
    updateWord(combinedWord);
  };

  return (
    <div>
      <label>
        City:
        <select value={selectedCity} onChange={handleCityChange}>
          <option value="">Select City</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
        </select>
      </label>

      <label>
        District:
        <select value={selectedDistrict} onChange={handleDistrictChange}>
          <option value="">Select District</option>
          <option value="Downtown">Downtown</option>
          <option value="Uptown">Uptown</option>
        </select>
      </label>

      <label>
        Suburb:
        <select value={selectedSuburb} onChange={handleSuburbChange}>
          <option value="">Select Suburb</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Santa Monica">Santa Monica</option>
        </select>
      </label>

      <button onClick={handleButtonClick}>Update Address</button>
    </div>
  );
};

export default WordInput;
