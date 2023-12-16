import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './pages/sam/searchContext';

import { WebConfig } from "./pages/services/Admin"; //needed for seeding the DB, add <WebConfig /> to use


//Navigation pages flow required inside <Router>:
import { Header } from './pages/nils/Header'
//Homepage
import { Home } from './pages/sam/Homepage';
//Search results page
// <Route path="/results" element={<Results/>} />
//Property listing page

//Booking page

//Footer
import { Footer } from './pages/sam/Footer';

function App() {
  return (
    <div className="bg-white flex flex-col text-black font-normal font-inter h-screen w-screen overflow-x-hidden items-center">
      <Router>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Page route for results <Route path="/results" element={<Results/>} */}
            {/* Page route for listings path="/listing/:id" element= */}
            {/* Page route for bookings path="/booking/:id" element= */}
          </Routes>
        </SearchProvider>
        {!window.location.pathname || window.location.pathname === '/' ? null : <Footer />}
      </Router>
    </div>
  );
}

export default App;
