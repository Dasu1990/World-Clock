
setInterval(function () {
    let firstCity = document.querySelector("#first-city");
    let date = document.querySelector("#first-city .date");
    let day = moment.tz("Europe/Paris").format("MMMM Do YYYY");
    date.innerHTML = day;
    let timeParis = moment.tz("Europe/Paris").format("h:m:s");
    let time1 = document.querySelector("#first-city .time");
    time1.innerHTML = `${timeParis} <small>${moment.tz("Europe/Paris").format("A")}`;

let date2 = document.querySelector("#second-city .date");
let day2 = moment.tz("Asia/Tokyo").format("MMMM Do YYYY");
date2.innerHTML = day2;
let timeTokyo = moment.tz("Asia/Tokyo").format("h:m:s");
let time2 = document.querySelector("#second-city .time");
time2.innerHTML = `${timeTokyo} <small>${moment.tz("Asia/Tokyo").format("A")}`;
let date3 = document.querySelector("#third-city .date");
let day3 = moment.tz("America/Sao_Paulo").format("MMMM Do YYYY");
date3.innerHTML = day3;
let timeRio = moment.tz("America/Sao_Paulo").format("h:m:s");
let time3 = document.querySelector("#third-city .time");
time3.innerHTML = `${timeRio} <small>${moment.tz("America/Sao_Paulo").format("A")}`;
}, 1000);
function display(event) {
    console.log(event.target.value);
}
let selectCity = document.querySelector("#cities");
selectCity.addEventListener("change", display);