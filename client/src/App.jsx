import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { SearchProvider } from "./pages/Homepage/searchContext";

import { WebConfig } from "./pages/services/Admin"; //needed for seeding the DB, add <WebConfig /> to use

//Navigation pages flow required inside <Router>:
import { Header } from "./pages/nils/header";
//Homepage
import { Home } from "./pages/Homepage/Homepage";
//Search results page

// <Route path="/results" element={<Results/>} />
//Property listing page
import Searchpage from "./pages/toby/Searchpage";

//Booking page
import { BookingPage } from "./pages/nils/Bookingpage";
//Footer
import { Footer } from "./pages/Footer/Footer";

function App() {
    //sends user to /home as the landing page so that the Footer does not render on the homepage
    const navigate = useNavigate();
    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/home");
        }
    });

    return (
        <div className="bg-white flex flex-col text-black font-normal font-inter h-screen w-screen overflow-x-hidden items-center">
            <SearchProvider>
                <Header />
                <Routes>
                    <Route path="/home" element={<Home />} />

                    {/* Page route for results <Route path="/results" element={<Results/>} */}
                    {/* Page route for listings path="/listing/:id" element= */}
                    <Route path="/booking/:id" element={<BookingPage />} />
                    <Route path="/search" element={<Searchpage />} />
                </Routes>
                {location.pathname === "/home" ? null : <Footer />}
            </SearchProvider>
        </div>
    );
}

export default App;
