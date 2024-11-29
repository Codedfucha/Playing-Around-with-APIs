const API_KEY = "8a78b63ecd306c0074ba9d66dbed8b94"; // Replace with your API key
const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");
const body = document.body;

searchButton.addEventListener("click", () => {
    const cityName = cityInput.value.trim();
    if (cityName) {
        fetchWeather(cityName);
    } else {
        alert("Please enter a city name.");
    }
});

async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        displayWeather(data);
        changeBackground(data.weather[0].main);
    } catch (error) {
        weatherResult.innerHTML = "<p>Error fetching weather data. Please try again later.</p>";
        console.error(error.message);
    }
}

function displayWeather(data) {
    const timezone = getTimezone(data.timezone);
    weatherResult.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Timezone: ${timezone}</p>
    `;
}

function getTimezone(offset) {
    const utcOffset = offset / 3600; // Convert seconds to hours
    return `UTC${utcOffset >= 0 ? '+' : ''}${utcOffset}`;
}

function changeBackground(weatherCondition) {
    body.className = '';
    removeElementsByClass('clouds');
    removeElementsByClass('dark-clouds');
    removeElementsByClass('sun');
    removeElementsByClass('rain');

    switch (weatherCondition) {
        case 'Clear':
            body.classList.add('clear-sky-background');
            body.appendChild(createSun());
            break;
        case 'Rain':
            body.classList.add('rainy-background');
            body.appendChild(createDarkClouds());
            body.appendChild(createRainEffect());
            break;
        case 'Clouds':
            body.classList.add('sunny-background');
            body.appendChild(createClouds());
            break;
        default:
            body.classList.add('sunny-background');
            break;
    }
}

function createClouds() {
    const clouds = document.createElement('div');
    clouds.classList.add('clouds');
    return clouds;
}

function createDarkClouds() {
    const darkClouds = document.createElement('div');
    darkClouds.classList.add('dark-clouds');
    return darkClouds;
}

function createSun() {
    const sun = document.createElement('div');
    sun.classList.add('sun');
    return sun;
}

function createRainEffect() {
    const rain = document.createElement('div');
    rain.classList.add('rain');
    return rain;
}

function removeElementsByClass(className) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(el => el.remove());
}
