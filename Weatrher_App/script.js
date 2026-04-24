// let input = document.getElementById("input");
// let btn = document.getElementById("btn");

// let result = document.getElementById("result");

// btn.addEventListener("click",async function() {

//     let city = input.value;

//     result.innerText = "Loading..";

//     try{
//         let res = await fetch(`https://wttr.in/${city}?format=j1`);

//         let data = await res.json();

//         let temp = data.current_condition[0].temp_C;
//         let desc = data.current_condition[0].weatherDesc[0].value;

//         result.innerText = `Temperature:${temp}°C\nCondition: ${desc}`;
//     }catch(err) {
//         result.innerText = "Error fetching weather";
//     }
// })

let cityInput = document.getElementById("city");
let searchBtn = document.getElementById("searchBtn");
let weatherBox = document.getElementById("weatherBox");
let loading = document.getElementById("loading");
let errorBox = document.getElementById("error");

let cityNameEl = document.getElementById("cityName");
let tempEl = document.getElementById("temp");
let descEl = document.getElementById("desc");
let humidityEl = document.getElementById("humidity");
let windEl = document.getElementById("wind");
let feelsLikeEl = document.getElementById("feelsLike");
let uvIndexEl = document.getElementById("uvIndex");
let weatherIconEl = document.getElementById("weatherIcon");

const weatherIcons = {
    'Sunny': '☀️',
    'Clear': '🌤️',
    'Partly cloudy': '⛅',
    'Cloudy': '☁️',
    'Overcast': '🌥️',
    'Mist': '🌫️',
    'Fog': '🌫️',
    'Light rain': '🌦️',
    'Moderate rain': '🌧️',
    'Heavy rain': '⛈️',
    'Light snow': '🌨️',
    'Heavy snow': '❄️',
    'Thunderstorm': '⛈️'
};

searchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        getWeather();
    }
});

async function getWeather() {
    let city = cityInput.value.trim();
    
    if (!city) {
        showError("Please enter a city name! 😊");
        return;
    }

    // Show loading
    hideAll();
    loading.style.display = "flex";
    searchBtn.disabled = true;
    searchBtn.textContent = "Searching...";
    
    try {
        let res = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
        
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }
        
        let data = await res.json();
        
        if (!data.current_condition || !data.current_condition[0]) {
            throw new Error("No weather data available");
        }

        const weather = data.current_condition[0];
        displayWeather(weather, city);
        
    } catch (err) {
        console.error("Weather API Error:", err);
        showError("Could not fetch weather. Please check the city name and try again! 🌐");
    } finally {
        loading.style.display = "none";
        searchBtn.disabled = false;
        searchBtn.textContent = "Get Weather";
    }
}

function displayWeather(weather, city) {
    // Hide error
    errorBox.style.display = "none";
    
    // Update elements
    cityNameEl.textContent = city.toUpperCase();
    tempEl.textContent = weather.temp_C || "--";
    descEl.textContent = weather.weatherDesc[0]?.value || "Unknown";
    
    // Weather icon
    const desc = weather.weatherDesc[0]?.value || "";
    weatherIconEl.textContent = getWeatherIcon(desc);
    
    // Stats
    humidityEl.textContent = weather.humidity || "--";
    windEl.textContent = `${weather.windspeedKmph || "--"} km/h`;
    feelsLikeEl.textContent = weather.FeelsLikeC || weather.temp_C || "--";
    uvIndexEl.textContent = weather.uvIndex || "--";
    
    // Show weather box with animation
    weatherBox.classList.add("show");
    weatherBox.style.display = "block";
    
    // Clear input
    cityInput.value = "";
}

function getWeatherIcon(description) {
    const icon = Object.keys(weatherIcons).find(key => 
        description.toLowerCase().includes(key.toLowerCase())
    );
    return icon ? weatherIcons[icon] : '🌤️';
}

function showError(message) {
    hideAll();
    errorBox.querySelector("p").textContent = message;
    errorBox.style.display = "block";
}

function hideAll() {
    weatherBox.style.display = "none";
    weatherBox.classList.remove("show");
    errorBox.style.display = "none";
}

// Geolocation feature
if (navigator.geolocation) {
    document.querySelector(".subtitle").innerHTML += ' <button id="geoBtn" style="background:none;border:none;font-size:1rem;cursor:pointer;color:#0984e3;font-weight:600;">📍 Use my location</button>';
    
    document.getElementById("geoBtn")?.addEventListener("click", () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            try {
                let res = await fetch(`https://wttr.in/?format=j1&lat=${latitude}&lon=${longitude}`);
                let data = await res.json();
                const weather = data.current_condition[0];
                displayWeather(weather, data.nearest_area[0]?.areaName[0]?.value || "Your Location");
            } catch (err) {
                showError("Could not get your location weather!");
            }
        }, () => {
            showError("Location access denied!");
        });
    });
}

// Auto-focus input
cityInput.focus();