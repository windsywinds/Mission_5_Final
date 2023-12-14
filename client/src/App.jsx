import React from "react";
import { useEffect, useState } from "react";

import { WebConfig } from "./pages/Admin";

function App() {
  return (
    <div className="bg-white flex flex-col text-black font-normal font-inter h-screen w-screen items-center">
      
      {/* Helpful stuff below - styles above this are site global but you can delete below this*/}
      <div className="bg-white flex flex-col text-[#213547] h-screen w-screen items-center">

          <div className="flex flex-col items-center p-[2em]">
  <h1 className="text-6xl font-bold pt-2 pb-6 ">Welcome,</h1>
  <WebConfig />
</div>
<div>
  <h1 className="underline">UI Kit Colour and Font Ref</h1>
  <p className="text-black front-normal">black, regular</p>
  <p className="text-[#d70707] font-medium">red, medium</p>
  <p className="text-[#003db2] font-semibold">blue, semibold</p>
  <p className="text-[#404040] font-bold">dark gray, bold</p>
  <p className="text-[#a6a6a6] font-extrabold">light gray, extrabold</p>
  <p className="text-[#ececec] font-black">even lighter gray, "black"</p>
  <p className="text-white">white</p>
</div>
      </div>
    </div>
  );
}

export default App;
