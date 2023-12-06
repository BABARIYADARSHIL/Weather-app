const apikey = "6264a33e4106d2ff9b5a472c70c1ee66";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWether(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
   
   if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
   }else{

    var data = await response.json();

    //console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Image/clouds1.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Image/clear1.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Image/rain-sun.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Image/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "Image/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".erroe").style.display = "none";
}

    
}

searchBtn.addEventListener("click", ()=>{
    checkWether(searchBox.value);
    
})

checkWether();