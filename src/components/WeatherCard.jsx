import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../style/WeatherCard.css";

function WeatherCard({ weather }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (weather) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [weather]);

  if (!weather) return null;

  const { name, main, weather: details, wind } = weather;
  const iconUrl = `http://openweathermap.org/img/wn/${details[0].icon}@2x.png`;

  return (
    <div
      ref={cardRef}
      className="weather-card"
    >
      <h2>{name}</h2>
      <img src={iconUrl} alt={details[0].description} />
      <p className="description">
        {details[0].description}
      </p>
      <div className="weather-details">
        <p>Temperature: {main.temp}°C</p>
        <p>Feels Like: {main.feels_like}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
