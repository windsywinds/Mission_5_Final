import React from "react";
import { useEffect, useState } from "react";

import { WebConfig } from "./pages/Admin";

function App() {
  return (
    <div className="bg-white flex flex-col text-[#213547] max-w-[full] items-center justify-center ">
      <h1 className="text-6xl font-bold">Docker + MongoDB</h1>

      <div className="flex flex-col items-center p-[2em]">
        <h1 className="text-6xl font-bold pt-4 pb-6 ">Welcome,</h1>
        <WebConfig />
      </div>
    </div>
  );
}

export default App;
