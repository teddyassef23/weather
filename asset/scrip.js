
var zip = document.getElementById("frmSubmit");
var lat, lon;
var weatherApiURL;
var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat';
var apikey = '9d21cee1b28b1481203a53b4d7fd6a12';
var apikey1 = 'e2dbdc051fc56d2a9def7b404457bd7f';

var tempDay1, tempDay2,tempDay3,tempDay4,tempDay5,tempDay6;
var minTempDay1, minTempDay2,mimTempDay3,minTempDay4,minTempDay5,mimTempDay6;
var maxTempDay1, maxTempDay2,maxTempDay3,maxTempDay4,maaxTempDay5,maxTempDay6;
var tempicoDay1, tempicoDay2,tempicoDay3,tempicoDay4,tempicoDay5,tempIcoDay6;




var fullWeatherData
function search(){
  var  zip = document.getElementById("searhc").value;
    
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
});



  }); 


}