import { useState } from "react";
import "./App.css";
import API_KEY from "./apikey"; 
function App() {
  const [location, setLocation] = useState("london");
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>Find Weather at your Location</h1>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="inputPlace">Enter Place</label>
        <input
          type="text"
          className="inputPlace"
          value={location}
          onChange={handleChange}
          placeholder="Enter City Location to get Details"
        />
        <button type="submit">Submit</button>
      </form>

      {data && (
        <div className="results">
          <h1>Weather Details for {data.location.name}, {data.location.region}</h1>
          <img src={`https:${data.current.condition.icon}`} alt={data.current.condition.text} />
          <div className="data-container">
            <div className="data-item">
              <strong>Temperature:</strong> {data.current.temp_c}°C / {data.current.temp_f}°F
            </div>
            <div className="data-item">
              <strong>Condition:</strong> {data.current.condition.text}
            </div>
            <div className="data-item">
              <strong>Wind:</strong> {data.current.wind_kph} kph, {data.current.wind_dir}
            </div>
            <div className="data-item">
              <strong>Humidity:</strong> {data.current.humidity}%
            </div>
            <div className="data-item">
              <strong>Local Time:</strong> {data.location.localtime}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
