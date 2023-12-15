import React from "react";
import { useEffect, useState } from "react";

// import { WebConfig } from "./pages/Admin";
import { Header } from "./pages/nils/header";
import { Home } from "./pages/sam/Homepage";
function App() {
  return (
    <div className="bg-white flex flex-col text-black font-normal font-inter h-screen w-screen items-center">
      {/* Helpful stuff below - styles above this are site global but you can delete below this*/}

      <Header className="sticky top-0" />
      <Home></Home>
      {/* <WebConfig></WebConfig> */}
    </div>
  );
}

export default App;
