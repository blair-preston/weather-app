const key = '94017407c1b8e8bc75ac701e2dbb7042';
let userZip = '40509'; // need to change later
const weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${key}`;
let weatherData = [];
let weatherState = {
    city: [],
    temperature: [],
    condition: []
}
const cityP = document.createElement('p');
const temperatureP = document.createElement('p');
const conditionP = document.createElement('p');
const weatherBlock = document.querySelector('#weatherContainer'); // id in html


async function asyncAxios () {
    let request = await axios.get(weatherLink);
    console.log(request);
    weatherData = await request.data;
    setState(weatherData);
}

asyncAxios(); // call function
console.log(weatherData);

function setState(weatherData) {
    weatherState.city = weatherData.name;
    const cityText = document.createTextNode(weatherState.city);
    cityP.appendChild(cityText);
    weatherBlock.appendChild(cityP);

    weatherState.temperature = weatherData.main.temp + "K";
    const weatherText = document.createTextNode(weatherState.temperature);
    temperatureP.appendChild(weatherText);
    weatherBlock.appendChild(temperatureP);

    weatherState.condition = weatherData.weather[0].description;
    const conditionText = document.createTextNode(weatherState.condition);
    conditionP.appendChild(conditionText);
    weatherBlock.appendChild(conditionP);

    console.log(weatherState);
}
