
let weather =
{
    'apikey':'65d277672f7149cc724576b79d0453f1',
    fetchWeather : function(city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid="+ this.apikey
        ).then((response)=>response.json())
        .then((data)=>this.displayWeather(data))
    },

    displayWeather: function(data)
    {
       const {name} = data;
       const {icon ,description} = data.weather[0];
       const {temp,humidity} =data.main;
       const {speed}=data.wind;


       console.log(data);


      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector('.icon').src= "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      document.querySelector('.description').innerText= description;
      document.querySelector('.temp').innerText= temp+"° C";
      document.querySelector('.humidity').innerText= "Humidity : "+humidity+" %";
      document.querySelector('.wind').innerText= "Wind Speed : "+speed +" Km/Hr";

    },

    search : function()
    {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector('.search button')
.addEventListener("click", function()
{
  weather.search();
})
