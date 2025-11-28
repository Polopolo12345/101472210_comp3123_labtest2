🌤️ Weather App
📝 Project Description

This is a React-based Weather App that allows users to search for any city and view its current weather. The app fetches real-time weather data from the OpenWeatherMap API and displays key information including:

🌡️ Temperature

🥵 Feels like temperature

☁️ Weather description

💧 Humidity

💨 Wind speed

🌈 Weather icon

The UI is modern and user-friendly, featuring glassmorphic cards, smooth GSAP animations, and a responsive layout.

⚡ Features

🔎 Search for any city and display current weather

✨ Animated heading and weather card with GSAP

🎨 Modern UI with gradient backgrounds, shadows, and rounded elements

⚠️ Error handling for invalid city names

🌐 API Used

OpenWeatherMap – https://openweathermap.org/

Endpoint:

http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

Replace {API_KEY} with your own free API key.

🚀 Setup Instructions

Clone the repository

git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>


Install dependencies

npm install


Add your OpenWeatherMap API key

Open App.js

Replace "YOUR_API_KEY" with your API key:

const API_KEY = "YOUR_API_KEY";


Run the app

npm start


Open http://localhost:3000
 in your browser.

🖼️ Screenshots

![Alt text](./src/image/Screenshot%202025-11-27%20221702.png)




💡 Notes & Assumptions

Default city: Toronto

Temperature units: Metric (°C)

Displays error if city is not found

No backend or database required

Styling: CSS, animations: GSAP

🎯 Optional Enhancements

🌙 Night mode / day mode based on local time

🌤️ Dynamic background depending on weather conditions

📈 Display 5-day forecast

🌎 Multi-language support