const redSlider = document.getElementById('red-slider');
const greenSlider = document.getElementById('green-slider');
const blueSlider = document.getElementById('blue-slider');
const redValue = document.getElementById('red-value');
const greenValue = document.getElementById('green-value');
const blueValue = document.getElementById('blue-value');
const colorPreview = document.getElementById('color-preview');
const colorSave = document.getElementById('color-save')

function updateColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    const color = `rgb(${red}, ${green}, ${blue})`;
    colorPreview.style.backgroundColor = color;
    return color; // Return the color value
}

function updateValue(slider, value) {
    if (slider === 'red') {
        redValue.innerText = value;
    } else if (slider === 'green') {
        greenValue.innerText = value;
    } else if (slider === 'blue') {
        blueValue.innerText = value;
    }
    updateColor();
}

redSlider.addEventListener('input', () => updateValue('red', redSlider.value));
greenSlider.addEventListener('input', () => updateValue('green', greenSlider.value));
blueSlider.addEventListener('input', () => updateValue('blue', blueSlider.value));

function saveColor() {
    const newSpan = document.createElement('span');
    newSpan.innerText = "hello";
    const color = updateColor(); // Get the color value from updateColor()
    newSpan.style.backgroundColor = color; // Set the background color of the new span element
    colorSave.insertAdjacentElement('afterend', newSpan);
}

colorSave.addEventListener('click', saveColor);


updateColor();
function generateSpan() {

    var newSpan = document.createElement("span");
    const spanText = document.createTextNode("color");
    newSpan.appendChild(spanText);
    document.getElementById("spanContainer").appendChild(newSpan);

}