import { useState } from "react";
//import "./styles.css"; // Import CSS for styling

const WeatherDashboard = () => {
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("Sunny");

  
  const getBackgroundColor = () => {
    if (weather === "Sunny") return "yellow";
    if (weather === "Rainy") return "blue";
    if (weather === "Cloudy") return "gray";
    return "white";
  };

  
  const getTemperatureMessage = () => {
    if (temperature === "") return "";
    if (temperature > 30) return "It's too hot! Stay hydrated.";
    if (temperature < 10) return "It's freezing! Wear warm clothes.";
    return "The weather is pleasant today.";
  };

  return (
    <div className="dashboard" style={{ backgroundColor: getBackgroundColor() }}>
      <h2>Weather Dashboard</h2>
      
      <label>Weather Condition:</label>
      <select value={weather} onChange={(e) => setWeather(e.target.value)}>
        <option value="Sunny">Sunny ☀</option>
        <option value="Cloudy">Cloudy ☁</option>
        <option value="Rainy">Rainy 🌧</option>
      </select>

      <label>Temperature (°C):</label>
      <input 
        type="number" 
        value={temperature} 
        onChange={(e) => setTemperature(e.target.value)} 
        placeholder="Enter temperature"
      />

      <h3>{getTemperatureMessage()}</h3>
    </div>
  );
};

export default WeatherDashboard;