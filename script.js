const inputBox = document.querySelector('.input-bx');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.getElementById('weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

async function checkWeather(city) {
  const api_key = "37abce427007021ea02a6b079fc0daa5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  console.log(url)
  
  // const weather_data = await fetch(url).then(response => response.json());

  const response = await fetch(url)
  const weather_data = await response.json();
  console.log(weather_data)


  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}`;  

  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  windSpeed.innerHTML = `${weather_data.wind.speed}km/H`;

  switch (weather_data.weather[0].main){
    case 'Clouds':
      weather_img.src = "./images/clouds.png";
      break;
    case 'Clear':
      weather_img.src = "./images/clear.png";
      break;
    case 'rain':
      weather_img.src = "./images/rain.png";
      break;
    case 'Mist':
      weather_img.src = "./images/mist.png";
      break;
    case 'snow':
      weather_img.src = "./images/snow.png";
      break;
    default:
      // Fallback image if weather condition doesn't match any case
      // weather_img.src = "./image/default.png";
      break;
  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(inputBox.value);
});

// Add keypress listener to input box
inputBox.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    checkWeather(inputBox.value);
  }
});
