
function updateClock(){
let chicagoCity = document.querySelector("#chicago");

if (chicagoCity){
let chicagoDate = document.querySelector("#date");
let chicagoTime = document.querySelector("#time");

chicagoDate.innerHTML= moment().tz("America/Chicago").format('MMMM Do YYYY');
chicagoTime .innerHTML= moment().tz("America/Chicago").format('h:mm:ss [<smaller>]A[</smaller>]');
}
let londonCity = document.querySelector("#london");


if (londonCity){

let londonDate = document.querySelector("#date-london");
let londonTime = document.querySelector("#time-london");

londonDate.innerHTML= moment().tz("Europe/London").format('MMMM Do YYYY');
londonTime.innerHTML= moment().tz("Europe/London").format('h:mm:ss [<smaller>]A[</smaller>]');
}
}


function updateCity(event){
let cityZone= event.target.value;
if (cityZone === "current"){
  cityZone = moment.tz.guess();
}

let cityName = cityZone.replace("_", " ").split("/")[1];

let zoneTime= moment().tz(`${cityZone}`).format("h:mm:ss [<smaller>]A[</smaller>]");
let zoneDate = moment().tz(`${cityZone}`).format('MMMM Do YYYY');
let cities = document.querySelector("#cities");
cities.innerHTML= `
    <div class="city">
        <div class="name">
           <h2>${cityName}</h2>
           <div class="date" id="date">${zoneDate}</div>
        </div>
        <div class="time" id="time">${zoneTime} </div>
     </div>
`;

}

let selector = document.querySelector("#city")
selector.addEventListener("change", updateCity)


setInterval(updateClock, 1000)

setInterval(updateCity, 1000);