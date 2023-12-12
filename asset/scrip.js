

var lastKey = [];
var lat, lon;
var weatherApiURL;
var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat';
var apikey = '9d21cee1b28b1481203a53b4d7fd6a12';
var apikey1 = 'e2dbdc051fc56d2a9def7b404457bd7f';

var tempDay1, tempDay2, tempDay3, tempDay4, tempDay5, tempDay6;
var minTempDay1, minTempDay2, mimTempDay3, minTempDay4, minTempDay5, mimTempDay6;
var maxTempDay1, maxTempDay2, maxTempDay3, maxTempDay4, maaxTempDay5, maxTempDay6;
var tempicoDay1, tempicoDay2, tempicoDay3, tempicoDay4, tempicoDay5, tempIcoDay6;




var fullWeatherData
function searhc() {
  var zip = document.getElementById("searhc").value;
  if (!zip){ zip = "55108"}
  
  var cuntyCodeAPI = 'http://api.openweathermap.org/geo/1.0/zip?zip=' + zip + '&appid=9d21cee1b28b1481203a53b4d7fd6a12'
  // var cuntyCodeAPI = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=9d21cee1b28b1481203a53b4d7fd6a12'

  fetch(cuntyCodeAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      lat = data.lat;
      lon = data.lon;

      console.log("lat is :" + lat);
      console.log("lon is :" + lon);

      weatherApiURL = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apikey;

      fetch(weatherApiURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (weather) {
          console.log(weather);

          document.getElementById("CityName").textContent = weather.city.name + ", " + weather.city.country;
          let city = weather.city.name + ", " + weather.city.country;

          lastKey.push(city);
          console.log("leangth of arrery :" + lastKey.length);
          // update(lastKey, city)


          for (var i = 1; i < lastKey.length -1; i++) {
            console.log("list of city is: " + lastKey[i]);
             var ul = document.getElementById("list");
             var li = document.createElement("li");
        
             li.appendChild(document.createTextNode(lastKey[i]));
             ul.appendChild(li);
        
             city += "<li>"  + lastKey[i] + "</li>";
          }

          
document.getElementById("list").innerHTML = city;








          //    // All days waether icon


          document.getElementById("todayTem").src = 'https://openweathermap.org/img/wn/' + weather.list[0].weather[0].icon + '@2x.png';
          document.getElementById("day1img").src = 'https://openweathermap.org/img/wn/' + weather.list[1].weather[0].icon + '@2x.png';
          document.getElementById("day2img").src = 'https://openweathermap.org/img/wn/' + weather.list[2].weather[0].icon + '@2x.png';
          document.getElementById("day3img").src = 'https://openweathermap.org/img/wn/' + weather.list[3].weather[0].icon + '@2x.png';
          document.getElementById("day4img").src = 'https://openweathermap.org/img/wn/' + weather.list[4].weather[0].icon + '@2x.png';
          document.getElementById("day5img").src = 'https://openweathermap.org/img/wn/' + weather.list[5].weather[0].icon + '@2x.png';

          //    // All days waether Tempertuer
    


          //Day 0 
         
        
          document.getElementById("day0temp").textContent =      "Today Temp : " + Math.round((weather.list[0].main.temp - 273.15) * 1.8 + 32);
          document.getElementById("day0feelLike").textContent =  "Today feel like " + Math.round((weather.list[0].main.feels_like - 273.15) * 1.8 + 32);
          document.getElementById("day0condition").textContent =  weather.list[0].weather[0].main;
          document.getElementById("day1wind").textContent =      "wind Speed " + weather.list[0].wind.speed;
          document.getElementById("day0Min").textContent =       "Min-" + Math.round((weather.list[0].main.temp_min - 273.15) * 1.8 + 32);
          document.getElementById("day0Max").textContent =       "Max-" + Math.round((weather.list[0].main.temp_max - 273.15) * 1.8 + 32);
          
          
          //Day 1 
          document.getElementById("day1temp").textContent   =     "Temp " + Math.round((weather.list[1].main.temp - 273.15) * 1.8 + 32);
          document.getElementById("day1feelLike").textContent =   "feel like " + Math.round((weather.list[1].main.feels_like - 273.15) * 1.8 + 32);
          document.getElementById("day1condition").textContent =  weather.list[1].weather[0].main;
          document.getElementById("day1wind").textContent =       "wind Speed " + weather.list[1].wind.speed;
          document.getElementById("day1Min").textContent =        "Min " + Math.round((weather.list[1].main.temp_min - 273.15) * 1.8 + 32);
          document.getElementById("day1Max").textContent   =      "Max " + Math.round((weather.list[1].main.temp_max - 273.15) * 1.8 + 32);

          //Day 2
          document.getElementById("day2temp").textContent   =     "Temp " + Math.round((weather.list[2].main.temp - 273.15) * 1.8 + 32);
          document.getElementById("day2feelLike").textContent =   "feel like " + Math.round((weather.list[2].main.feels_like - 273.15) * 1.8 + 32);
          document.getElementById("day2condition").textContent =  weather.list[2].weather[0].main;
          document.getElementById("day2wind").textContent =       "wind Speed " + weather.list[2].wind.speed;
          document.getElementById("day2Min").textContent =        "Min " + Math.round((weather.list[2].main.temp_min - 273.15) * 1.8 + 32);
          document.getElementById("day2Max").textContent   =      "Max " + Math.round((weather.list[2].main.temp_max - 273.15) * 1.8 + 32);

          //Day 3
          document.getElementById("day3temp").textContent   =     "Temp " + Math.round((weather.list[3].main.temp - 273.15) * 1.8 + 32);
          document.getElementById("day3feelLike").textContent =   "feel like " + Math.round((weather.list[3].main.feels_like - 273.15) * 1.8 + 32);
          document.getElementById("day3condition").textContent =  weather.list[3].weather[0].main;
          document.getElementById("day3wind").textContent =       "wind Speed " + weather.list[3].wind.speed;
          document.getElementById("day3Min").textContent =        "Min " + Math.round((weather.list[3].main.temp_min - 273.15) * 1.8 + 32);
          document.getElementById("day3Max").textContent   =      "Max " + Math.round((weather.list[3].main.temp_max - 273.15) * 1.8 + 32);

          //Day 4
          document.getElementById("day4temp").textContent   =     "Temp " + Math.round((weather.list[4].main.temp - 273.15) * 1.8 + 32);
          document.getElementById("day4feelLike").textContent =   "feel like " + Math.round((weather.list[4].main.feels_like - 273.15) * 1.8 + 32);
          document.getElementById("day4condition").textContent =  weather.list[4].weather[0].main;
          document.getElementById("day4wind").textContent =       "wind Speed " + weather.list[4].wind.speed;
          document.getElementById("day4Min").textContent =        "Min " + Math.round((weather.list[4].main.temp_min - 273.15) * 1.8 + 32);
          document.getElementById("day4Max").textContent   =      "Max " + Math.round((weather.list[4].main.temp_max - 273.15) * 1.8 + 32);

          //Day 5
          document.getElementById("day5temp").textContent   =     "Temp " + Math.round((weather.list[5].main.temp - 273.15) * 1.8 + 32);
          document.getElementById("day5feelLike").textContent =   "feel like " + Math.round((weather.list[5].main.feels_like - 273.15) * 1.8 + 32);
          document.getElementById("day5condition").textContent =  weather.list[5].weather[0].main;
          document.getElementById("day5wind").textContent =       "wind Speed " + weather.list[5].wind.speed;
          document.getElementById("day5Min").textContent =        "Min " + Math.round((weather.list[5].main.temp_min - 273.15) * 1.8 + 32);
          document.getElementById("day5Max").textContent   =      "Max " + Math.round((weather.list[5].main.temp_max - 273.15) * 1.8 + 32);








});



    });


}
function update(list, city) {
  console.log(list);    

  for (var i = 0; i < list.length; i++) {
    console.log("list of city is: " + list[i]);
     var ul = document.getElementById("list");
     var li = document.createElement("li");

     li.appendChild(document.createTextNode(list[i]));
     ul.appendChild(li);

     letters += "<li>"  + list[i] + "</li>";
  }

document.getElementById("list").innerHTML = city;

}

searhc();