import React from "react";
import { useEffect, useState } from "react";

import { WebConfig } from "./pages/Admin";
import { Home } from "./pages/sam/Homepage";

function App() {
  return (
    <div className="bg-white flex flex-col text-black font-normal font-inter h-screen w-screen items-center">
      
      <Home />
    </div>
  );
}

export default App;
