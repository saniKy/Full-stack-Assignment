const btn = document.getElementById("btn");
const loading = document.getElementById("loading");

btn.addEventListener("click", getWeather);

function getWeather(){

loading.innerText = "Loading weather...";

const delhi = fetch(
"https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true"
);

const mumbai = fetch(
"https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&current_weather=true"
);

const bangalore = fetch(
"https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true"
);

Promise.all([delhi, mumbai, bangalore])

.then(responses => Promise.all(responses.map(res => res.json())))

.then(data => {

loading.innerText = "";

document.querySelector("#delhi .temp").innerHTML =
`🌡 ${data[0].current_weather.temperature}°C`;

document.querySelector("#mumbai .temp").innerHTML =
`🌡 ${data[1].current_weather.temperature}°C`;

document.querySelector("#bangalore .temp").innerHTML =
`🌡 ${data[2].current_weather.temperature}°C`;

})

.catch(error => {

loading.innerText = "⚠ Failed to load weather data";

console.error(error);

});

}