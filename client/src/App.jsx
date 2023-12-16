import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
  //sends user to /home as the landing page so that the Footer does not render on the homepage
  const navigate = useNavigate(); 
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home')
    }
  })
  
  return (
    <div className="bg-white flex flex-col text-black font-normal font-inter h-screen w-screen overflow-x-hidden items-center">
      <SearchProvider>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* Page route for results <Route path="/results" element={<Results/>} */}
          {/* Page route for listings path="/listing/:id" element= */}
          {/* Page route for bookings path="/booking/:id" element= */}
          </Routes>
          {location.pathname === '/home' ? null : <Footer />}
      </SearchProvider>
    </div>
  );
}

export default App;
