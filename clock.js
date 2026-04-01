console.log("fail ühendatud");

let fontSize = 8;
let is24h = true;
let fonts = ["Arial", "Courier New", "Georgia", "Verdana"];
let currentFont = 0;


// Prompt: "Give me multiple solutions and examples for the next question: Tell me how to toggle 12h/24h format in javascript"
function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "";

    if (!is24h) {
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
    }

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("hours").innerHTML = hours + ":";
    document.getElementById("minutes").innerHTML = minutes + ":";
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("ampm").innerHTML = ampm;
}

function updateDate() {
    let now = new Date();

    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    document.getElementById("day").innerHTML = day + ".";
    document.getElementById("month").innerHTML = month + ".";
    document.getElementById("year").innerHTML = year;
}

function updateWeekday() {
    const days = ["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"];
    document.getElementById("weekday").innerHTML = days[new Date().getDay()];
}

// Prompt: "Give me multiple solutions and examples for every sentences/questions i will ask. How to change font family on button click javascript"
function changeFont() {
    currentFont++;
    if (currentFont >= fonts.length) currentFont = 0;
    document.body.style.fontFamily = fonts[currentFont];
}

function bigger() {
    fontSize += 1;
    document.getElementById("clockContainer").style.fontSize = fontSize + "vw";
}

function smaller() {
    fontSize -= 1;
    if (fontSize < 2) fontSize = 2;
    document.getElementById("clockContainer").style.fontSize = fontSize + "vw";
}

// Prompt: "Give me websites that describe how to change the button input/value in Javascript after clicking on it, for example night/day mode switch. You can also give me the the logic on how to do that.
function toggleFormat() {
    is24h = !is24h;

    let btn = document.getElementById("format");

    if (is24h) {
        btn.innerHTML = "12H";
    } else {
        btn.innerHTML = "24H";
    }
}

document.getElementById("bgColor").addEventListener("input", (e) => {
    document.body.style.background = e.target.value;
});

// Prompt: "My current code allows me to change the website background theme depending on night/day time switch but the icon doesnt change, what should the code look like in js"
let isDark = true;

function toggleTheme(){
    let body = document.body;
    let icon = document.getElementById("themeChange");

    if(isDark){
        body.style.background = "black";
        body.style.color = "white";
        icon.src = "summer.png";
        isDark = false;
    } else {
        body.style.background = "white";
        body.style.color = "black";
        icon.src = "moon.png";
        isDark = true;
    }
}

document.getElementById("fontBtn").addEventListener("click", changeFont);
document.getElementById("bigger").addEventListener("click", bigger);
document.getElementById("smaller").addEventListener("click", smaller);
document.getElementById("format").addEventListener("click", toggleFormat);
document.getElementById("theme").addEventListener("click", toggleTheme);

updateClock();
updateDate();
updateWeekday();
setInterval(updateClock, 1000);
setInterval(updateDate, 60000);
setInterval(updateWeekday, 60000);