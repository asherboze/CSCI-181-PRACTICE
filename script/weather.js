// Weather program

let is_loading = false;
let error_message = "";
let weather_data = null;

let output_element = document.querySelector("#weather-output");

function renderUI() {
    if (is_loading) {
        output_element.textContent = "Loading...";
    }
    if (error_message) {
        console.error("Error:", error_message);
    }
    if (weather_data) {
        const TEMPERATURE = weather_data.properties.periods[0].temperature;
        const WEATHER = weather_data.properties.periods[0].shortForecast;
        output_element.innerHTML = `<div id = "temperature">${TEMPERATURE}&deg;</div><div>${WEATHER}</div>`;
    }
}

async function renderWeather() {
    is_loading = true;
    error_message = "";
    renderUI();

    try {
        const response = await fetch("https://api.weather.gov/gridpoints/MSO/105,131/forecast")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        weather_data = await response.json();
        console.log("Success!");
        
    }   catch(error) {
        error_message = error.message;
        console.error("Error:", error_message);
}       
        finally{
            is_loading = false;
            renderUI();
        }
}

renderWeather()