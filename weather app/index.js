// const apiKey ="";
// const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

// async function checkweather(city){
//     const response = await fetch(apiUrl + city);
//     if(response.status ==404){
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".weather").style.display = "none";
//     }
//     else{document.querySelector(".weather").style.display = "block";

//     }
//     var data = await response.json()
//     // console.log(data);


// document.querySelector(".city").innerHTML=data.name;
// document.querySelector(".temp").innerHTML =math.round(data.main.temp)  +"°c";
// document.querySelector(".humidity").innerHTML= data.main.temp +"%";
// document.querySelector(".wind").innerHTML= data.wind.speed +"km/hr";

// if(data.weather[0].main=="clouds"){
//     weatherIcon.src = "images/clouds.png";
// }
// else if(data.weather[0].main =="Clear"){
//     weatherIcon.src = "images/clear.png";
// }
// else if(data.weather[0].main =="Rain"){
//     weatherIcon.src = "images/rain.png";
// }
// else if(data.weather[0].main =="Drizzle"){
//         weatherIcon.src = "images/clear.png";
//     }
// else if(data.weather[0].main =="Mist"){
//     weatherIcon.src = "images/mist.png"
// }
// document.querySelector(".weather").style.display="block";
// document.querySelector(".error").style.display = "none";

// }
// searchBtn.addEventListener("click", ()=>{
//     checkweather(searchBox.value);
// })
// checkweather();data.main.temp



