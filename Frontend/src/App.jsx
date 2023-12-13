import "./App.css";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  // State to hold the data received from the backend and loading status
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect hook to perform asynchronous data fetching when the component mounts
  useEffect(() => {
    // Function to fetch data from the server
    const fetchData = async () => {
      try {
        // Send a GET request to the specified endpoint
        const response = await fetch("http://localhost:8000/test");

        // Parse the JSON data from the response
        const data = await response.json();

        // Update the state with the fetched data
        setBackendData(data);
      } catch (error) {
        // Log an error message if there's an issue fetching data
        console.error("Error fetching data:", error);
      } finally {
        // Set loading to false regardless of success or failure to indicate that the data has been loaded
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts (empty dependency array ensures it runs only once)
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  // Render the component's UI
  return (
    <div>
      <h1>Mission 5</h1>
      {loading ? (
        // Display a loading message while data is being fetched
        <p>Loading...</p>
      ) : (
        // Display the fetched data as a JSON-formatted string
        <div>
          <p>{JSON.stringify(backendData.text)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
