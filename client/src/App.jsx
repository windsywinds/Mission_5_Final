import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './pages/sam/searchContext';

import { WebConfig } from "./pages/services/Admin"; //needed for seeding the DB, add <WebConfig /> to use


//Navigation pages flow required:
//Homepage
import { Home } from './pages/sam/Homepage';
//Search results page
import { Results } from './pages/sam/Results';
//Property listing page

//Booking page


function App() {
  return (
    <div className="bg-white flex flex-col text-black font-normal font-inter h-screen w-screen items-center">
      {/* Header goes here */}
      <Router>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results/>} />
            {/* Page route for listings path="/listing/:id" element= */}
            {/* Page route for bookings path="/booking/:id" element= */}
          </Routes>
        </SearchProvider>
      </Router>
      {/* Footer goes here */}
    </div>
  );
}

export default App;
