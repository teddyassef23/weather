
var zip = document.getElementById("frmSubmit");
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
          
          //    // All days waether icon
          
          
          document.getElementById("todayTem").src = 'https://openweathermap.org/img/wn/' + weather.list[0].weather[0].icon + '@2x.png';
          document.getElementById("day1img").src = 'https://openweathermap.org/img/wn/' + weather.list[1].weather[0].icon + '@2x.png';
          document.getElementById("day2img").src = 'https://openweathermap.org/img/wn/' + weather.list[2].weather[0].icon + '@2x.png';
          document.getElementById("day3img").src = 'https://openweathermap.org/img/wn/' + weather.list[3].weather[0].icon + '@2x.png';
          document.getElementById("day4img").src = 'https://openweathermap.org/img/wn/' + weather.list[4].weather[0].icon + '@2x.png';
          document.getElementById("day5img").src = 'https://openweathermap.org/img/wn/' + weather.list[5].weather[0].icon + '@2x.png';
          
          //    // All days waether Tempertuer
          // console.log("temp is :" + weather.list[0].main[0].temp);

          document.getElementById("today").textContent = " To days Tempretuer " + weather.list[0].main.temp;


          // document.getElementById("day1temp").textContent = weather.list[1].main.temp;

          console.log("day feel like " + weather.list[1].main.feels_like);
          console.log("day1condition " + weather.list[1].weather[0].main);
          console.log("day1wind " + weather.list[1].wind.speed);
          console.log("day1Min" + weather.list[1].main.temp_min);
          console.log("day1Max " + weather.list[1].main.temp_max);


          
                        //Day 0 
                    document.getElementById("day0temp").textContent = "Today Temp is : " + weather.list[0].main.feels_like;
                    document.getElementById("day0feelLike").textContent =  "Today feel like " + weather.list[0].main.feels_like;
                    document.getElementById("day0condition").textContent = "Today condition " + weather.list[0].weather[0].main;
                    document.getElementById("day0wind").textContent = "wind Speed " + weather.list[0].wind.speed;
                    document.getElementById("day0Min").textContent = "Min-" + weather.list[0].main.temp_min;
                    document.getElementById("day0Max").textContent = "Max-" + weather.list[0].main.temp_max;


              //Day 1 
          document.getElementById("day1temp").textContent = "day feel like " + weather.list[1].main.feels_like;
          document.getElementById("day1feelLike").textContent += weather.list[1].main.feels_like;
          document.getElementById("day1condition").textContent = "day1condition " + weather.list[1].weather[0].main;
          document.getElementById("day1wind").textContent = "day1wind " + weather.list[1].wind.speed;
          document.getElementById("day1Min").textContent = "day1Min" + weather.list[1].main.temp_min;
          document.getElementById("day1Max").textContent = "day1Max " + weather.list[1].main.temp_max;

              //Day 1 
          document.getElementById("day1temp").textContent = "day feel like " + weather.list[1].main.feels_like;
          document.getElementById("day1feelLike").textContent += weather.list[1].main.feels_like;
          document.getElementById("day1condition").textContent = "day1condition " + weather.list[1].weather[0].main;
          document.getElementById("day1wind").textContent = "day1wind " + weather.list[1].wind.speed;
          document.getElementById("day1Min").textContent = "day1Min" + weather.list[1].main.temp_min;
          document.getElementById("day1Max").textContent = "day1Max " + weather.list[1].main.temp_max;
          
              //Day 1 
          document.getElementById("day1temp").textContent = "day feel like " + weather.list[1].main.feels_like;
          document.getElementById("day1feelLike").textContent += weather.list[1].main.feels_like;
          document.getElementById("day1condition").textContent = "day1condition " + weather.list[1].weather[0].main;
          document.getElementById("day1wind").textContent = "day1wind " + weather.list[1].wind.speed;
          document.getElementById("day1Min").textContent = "day1Min" + weather.list[1].main.temp_min;
          document.getElementById("day1Max").textContent = "day1Max " + weather.list[1].main.temp_max;
          
              //Day 2
          document.getElementById("day2temp").textContent = "day feel like " + weather.list[2].main.feels_like;
          document.getElementById("day2feelLike").textContent += weather.list[2].main.feels_like;
          document.getElementById("day2condition").textContent = "day1condition " + weather.list[2].weather[0].main;
          document.getElementById("day2wind").textContent = "day1wind " + weather.list[2].wind.speed;
          document.getElementById("day2Min").textContent = "day1Min" + weather.list[2].main.temp_min;
          document.getElementById("day2Max").textContent = "day1Max " + weather.list[2].main.temp_max;
          
              //Day 3
          document.getElementById("day3temp").textContent = "day feel like " + weather.list[3].main.feels_like;
          document.getElementById("day3feelLike").textContent += weather.list[3].main.feels_like;
          document.getElementById("day3condition").textContent = "day1condition " + weather.list[3].weather[0].main;
          document.getElementById("day3wind").textContent = "day1wind " + weather.list[3].wind.speed;
          document.getElementById("day3Min").textContent = "day1Min" + weather.list[3].main.temp_min;
          document.getElementById("day3Max").textContent = "day1Max " + weather.list[3].main.temp_max;
          
          
          //Day 4
          document.getElementById("day4temp").textContent = "day feel like " + weather.list[4].main.feels_like;
          document.getElementById("day4feelLike").textContent += weather.list[4].main.feels_like;
          document.getElementById("day4condition").textContent = "day1condition " + weather.list[4].weather[0].main;
          document.getElementById("day4wind").textContent = "day1wind " + weather.list[4].wind.speed;
          document.getElementById("day4Min").textContent = "day1Min" + weather.list[4].main.temp_min;
          document.getElementById("day4Max").textContent = "day1Max " + weather.list[4].main.temp_max;
      // All days waether Fill like
      
      //Day 5
         document.getElementById("day5temp").textContent = "day feel like " + weather.list[5].main.feels_like;
         document.getElementById("day5feelLike").textContent += weather.list[5].main.feels_like;
         document.getElementById("day5condition").textContent = "day1condition " + weather.list[5].weather[0].main;
         document.getElementById("day5wind").textContent = "day1wind " + weather.list[5].wind.speed;
         document.getElementById("day5Min").textContent = "day1Min" + weather.list[5].main.temp_min;
         document.getElementById("day5Max").textContent = "day1Max " + weather.list[5].main.temp_max;


          // document.getElementById("todayTem").src = 'https://openweathermap.org/img/wn/' + weather.list[0].weather[0].icon + '@2x.png';
          // document.getElementById("day1img").src = 'https://openweathermap.org/img/wn/' + weather.list[1].weather[0].icon + '@2x.png';
          // document.getElementById("day2img").src = 'https://openweathermap.org/img/wn/' + weather.list[2].weather[0].icon + '@2x.png';
          // document.getElementById("day3img").src = 'https://openweathermap.org/img/wn/' + weather.list[3].weather[0].icon + '@2x.png';
          // document.getElementById("day4img").src = 'https://openweathermap.org/img/wn/' + weather.list[4].weather[0].icon + '@2x.png';
          // document.getElementById("day5img").src = 'https://openweathermap.org/img/wn/' + weather.list[5].weather[0].icon + '@2x.png';
          
          
          
          // All days waether Min
          
          // document.getElementById("todayTem").src = 'https://openweathermap.org/img/wn/' + weather.list[0].weather[0].icon + '@2x.png';
          // document.getElementById("day1img").src = 'https://openweathermap.org/img/wn/' + weather.list[1].weather[0].icon + '@2x.png';
          // document.getElementById("day2img").src = 'https://openweathermap.org/img/wn/' + weather.list[2].weather[0].icon + '@2x.png';
          // document.getElementById("day3img").src = 'https://openweathermap.org/img/wn/' + weather.list[3].weather[0].icon + '@2x.png';
          // document.getElementById("day4img").src = 'https://openweathermap.org/img/wn/' + weather.list[4].weather[0].icon + '@2x.png';
          // document.getElementById("day5img").src = 'https://openweathermap.org/img/wn/' + weather.list[5].weather[0].icon + '@2x.png';
          
          
          // All days waether Max
          
          // document.getElementById("todayTem").src = 'https://openweathermap.org/img/wn/' + weather.list[0].weather[0].icon + '@2x.png';
          // document.getElementById("day1img").src = 'https://openweathermap.org/img/wn/' + weather.list[1].weather[0].icon + '@2x.png';
          // document.getElementById("day2img").src = 'https://openweathermap.org/img/wn/' + weather.list[2].weather[0].icon + '@2x.png';
          // document.getElementById("day3img").src = 'https://openweathermap.org/img/wn/' + weather.list[3].weather[0].icon + '@2x.png';
          // document.getElementById("day4img").src = 'https://openweathermap.org/img/wn/' + weather.list[4].weather[0].icon + '@2x.png';
          // document.getElementById("day5img").src = 'https://openweathermap.org/img/wn/' + weather.list[5].weather[0].icon + '@2x.png';
          
          
          // All days waether condetion
          
          // document.getElementById("todayTem").src = 'https://openweathermap.org/img/wn/' + weather.list[0].weather[0].icon + '@2x.png';
          // document.getElementById("day1img").src = 'https://openweathermap.org/img/wn/' + weather.list[1].weather[0].icon + '@2x.png';
          // document.getElementById("day2img").src = 'https://openweathermap.org/img/wn/' + weather.list[2].weather[0].icon + '@2x.png';
          // document.getElementById("day3img").src = 'https://openweathermap.org/img/wn/' + weather.list[3].weather[0].icon + '@2x.png';
          // document.getElementById("day4img").src = 'https://openweathermap.org/img/wn/' + weather.list[4].weather[0].icon + '@2x.png';
          // document.getElementById("day5img").src = 'https://openweathermap.org/img/wn/' + weather.list[5].weather[0].icon + '@2x.png';
          
          
          
          
          
          
          // document.getElementById("todayFillLike").textContent = "feels like " + weather.list[0].main.feels_like;
          // document.getElementById("today").textContent = "Temp " + weather.list[0].main.temp;
          // document.getElementById("Min-max").textContent = "Temp " + weather.list[0].main.temp;
          // console.log("icon :" + weather.list[0].weather.icon);
          // // Day one weather condetion

          // document.getElementById("day1img").textContent = weather.list[0].weather.icon;
          // document.getElementById("day1temp").textContent = weather.list[0].main.temp;
          // document.getElementById("day1feelLike").textContent = weather.list[0].main.temp;
          // document.getElementById("day1symbol").textContent = weather.list[0].main.temp;
          // document.getElementById("day1min-max").textContent = weather.list[0].main.temp;



        });



    });


}