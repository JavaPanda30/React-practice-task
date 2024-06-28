import  { useState, useEffect } from "react";
import API_KEY from "./apikey"
function App() {

  const [location, setLocation] = useState("london"); 
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setLocation(e.target.value); 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/timezone.json?key=${API_KEY}&q=${location}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [location]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange();
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="inputPlace">Enter Place</label>
        <input type="text" className="inputPlace" onChange={handleChange} placeholder="Enter City Location to get Details" />
        <button type="submit">Submit</button>
      </form>
      
      {data && (
        <div>
          <h1>Data for {location}</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default App;
