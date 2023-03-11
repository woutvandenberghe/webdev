var slider = document.getElementById("myRange");
var output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;}

let colorWell;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function printInput() {
    const input = document.getElementById("inputField").value;
    const spacedInput = input.split("").join(" ");
    console.log(spacedInput);
}