import { useState, useEffect, useRef } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { gsap } from "gsap";
import './style/App.css'

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const API_KEY = "96a995a4455723a4eb0b8704984829b5";
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(headingRef.current, {y: -50, opacity: 0}, { y: 0, opacity: 1, duration: 1, ease: "bounce.out" });
    }
  }, []);

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  const handleSearch = (city) => {
    fetchWeather(city);
  };

  useEffect(() => {
    fetchWeather("Toronto"); 
  }, []);

  return (
    <div className="app-container">
      <h1 ref={headingRef} className="app-heading">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error-message">{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
