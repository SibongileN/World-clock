
function updateClock(){
let city = document.querySelector("#pretoria")
let pretoriaDate = document.querySelector("#date")
let pretoriaTime = document.querySelector("#time")

pretoriaDate.innerHTML= moment().format('MMMM Do YYYY');
pretoriaTime.innerHTML= moment().format('h:mm:ss [<smaller>]A[</smaller>]');


let londonCity = document.querySelector("#london")
let londonDate = document.querySelector("#date-london")
let londonTime = document.querySelector("#time-london")

londonDate.innerHTML= moment().tz("Europe/London").format('MMMM Do YYYY');
londonTime.innerHTML= moment().tz("Europe/London").format('h:mm:ss [<smaller>]A[</smaller>]');
}

updateClock();
setInterval(updateClock, 1000)