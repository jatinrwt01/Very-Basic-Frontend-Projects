const input = document.querySelector('.input');
const button = document.querySelector('.search-btn');
const weatherImage = document.querySelector('.cloud-image');
const temp = document.querySelector('.temperature');
const city = document.querySelector('.city');
const conditions = document.querySelector('.conditions');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const APIkey = "" //enter API key here

button.addEventListener("click", ()=>{
    const inputCity = input.value;
    fetchWeather(inputCity)
})

function fetchWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`)
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
         if(data.cod === "404"){
        throw new Error("City not found!! Enter another city");
    }
        updateUI(data);
    })
    .catch((error)=>{
        alert(error.message);
    })
}

function updateUI(response){
     const image =`https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
     const  temperature = Math.round(response.main.temp);
     weatherImage.src = image
    temp.innerText = `${temperature}°C`;
    city.innerText = `${response.name}`;
    conditions.innerText = `${response.weather[0].main}`;
    humidity.innerHTML = `Humidity: ${response.main.humidity}%`;
    wind.innerHTML = `Wind Speed: ${response.wind.speed} km/h`;
}

