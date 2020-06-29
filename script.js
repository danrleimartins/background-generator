var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient () {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " +  color2.value + ")"; 

    h3.textContent = body.style.background + ";";
}

h3.textContent = body.style.background + "linear-gradient(to right, rgb(65, 162, 200), rgb(215, 48, 37))";

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
