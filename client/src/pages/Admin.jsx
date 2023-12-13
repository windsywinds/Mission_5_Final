import { useEffect, useState } from "react";
import React from "react";

//Front end page to check and seed database with one click

export const WebConfig = () => {
  const [data, setData] = useState();

  const SERVER_URI =
    import.meta.env.VITE_SERVER_URI || "http://localhost:8001/";

  useEffect(() => {
    //fetch database messages on load
    const fetchData = async () => {
      try {
        const response = await fetch(SERVER_URI + "searchDatabase");
        const data = await response.json();
        setData(data);
        console.log("Fetch complete.");
      } catch (error) {
        console.error("Error getting entries:", error);
      }
    };
    fetchData();
  }, []);

  const handleDocker = async (e) => {
    e.preventDefault();
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ requestType: "docker" }),
    };
    try {
      const response = await fetch(SERVER_URI + "seedDatabase", fetchOptions);
      const newData = await response.json();
      //update the data variable with the new data so it is displayed instantly - requires the route to also return the new data once it has added it to the database
      setData(newData);
    } catch (error) {
      console.error("There was an error seeding the database:", error);
    }
  };

  const handleLocal = async (e) => {
    e.preventDefault();
    try {
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ requestType: "local" }),
      };
      const response = await fetch(SERVER_URI + "seedDatabase", fetchOptions);
      const newData = await response.json();
      //update the data variable with the new data so it is displayed instantly - requires the route to also return the new data once it has added it to the database
      if (newData) {
        setData(newData);
        console.log("Seed complete");
      }
    } catch (error) {
      console.error("There was an error seeding the database:", error);
    }
  };

  return (
    <div className="bg-white flex flex-col text-[#213547] max-w-[full] items-center justify-center ">
      {data ? (
        <>
          <p>Found: {data.length} entries in the database.</p>
        </>
      ) : (
        <p className="pt-4">No database entries found</p>
      )}

      <div className="flex flex-col items-center space-y-2 pt-6">
        <h3>Click to seed database:</h3>
        <p>Seed while running locally:</p>
        <button
          onClick={handleLocal}
          className="bg-[#1a1a1a] text-white font-bold py-2 px-4 rounded-md "
        >
          Seed Local
        </button>
        <p>Seed while in a container:</p>
        <button
          onClick={handleDocker}
          className="bg-[#1a1a1a] text-white font-bold py-2 px-4 rounded-md "
        >
          Seed Docker
        </button>
      </div>
    </div>
  );
};
