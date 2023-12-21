import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { SearchProvider } from "./pages/Homepage/searchContext";

import { WebConfig } from "./pages/services/Admin"; //needed for seeding the DB, add <WebConfig /> to use

//Navigation pages flow required inside <Router>:
import { Header } from "./pages/Header/Header";
import { Home } from "./pages/Homepage/Homepage";
import Searchpage from "./pages/Search/Searchpage";
import { ListingPage } from "./pages/Listing/Listing";
import { BookingPage } from "./pages/Booking/BookingPage";
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
        <div className="bg-white flex flex-col text-black font-normal font-inter h-full w-screen overflow-x-hidden items-center">
            <SearchProvider>
                <Header />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/search" element={<Searchpage />} />
                    <Route path="/listing/:propertyID" element={<ListingPage />} />
                    <Route path="/booking/:propertyID" element={<BookingPage />} />
                </Routes>
                {location.pathname === "/home" ? null : <Footer />}
            </SearchProvider>
        </div>
    );
}

export default App;
