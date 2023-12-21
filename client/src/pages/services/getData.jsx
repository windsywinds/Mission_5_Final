

//Will return the entire database collection as an array
export async function getData() {

    const SERVER_URI = import.meta.env.VITE_SERVER_URI || "http://localhost:8001/";
    
    try {
      const response = await fetch(SERVER_URI + "searchDatabase");
      const data = await response.json();
        
      return data
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    }
}