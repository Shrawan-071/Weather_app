
const button = document.querySelector("button");
const temperature = document.querySelector(".temperature");


const base_url ="https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=193b430d16c8dc0e6f728c8bf6ec8ea2&units=metric";
 
const api_key = "15ebe2d898eaa07c9629cc4c16c532ce";




const showdata = async ()=> {
    const city = document.querySelector("input").value;
    const city_Name = document.querySelector(".city-Name");
    const wind_Speed = document.querySelector(".wind-Speed");
    const message = document.querySelector(".message");
    
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=193b430d16c8dc0e6f728c8bf6ec8ea2&units=metric`
    const response = await fetch(url);
    const data = await response.json();

    temperature.innerHTML = data.main["temp"]+"°C";
    wind_Speed.innerHTML = "Wind Speed :"+data.wind["speed"] +"m/s";
    city_Name.innerHTML = city;
    message.innerHTML = `Weather : ${data.weather["0"].main}`;
    display_Photo(data.weather["0"].main);
    display_dateTime(data.timezone);
}

button.addEventListener("click",(evt)=>{
    evt.preventDefault();
    showdata();
});


function display_Photo (msg) {

    const emoji = document.querySelector("#weather-Icon");
  
    if (msg=="Haze"){
        emoji.className = "fa-solid fa-cloud";
    }
    else if (msg == "Clear"){
        emoji.className = "fa-solid fa-sun";
    } 

    else if (msg == "Clouds"){
        emoji.className = "fa-solid fa-cloud-sun-rain";
    }

}

function display_dateTime (timezone){
    
    const date_Time = new Date(Date.now()-(20700*1000)+(timezone*1000));
    
    var date__Time = document.querySelector(".date-Time");
    
    date__Time.innerHTML = date_Time.toLocaleString();
}


window.addEventListener("load", () =>{
    showdata();
})