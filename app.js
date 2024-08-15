// Getting ID's from HTML
var temperatureInput = document.getElementById('temp');
var inputUnitSelect = document.getElementById('input');
var outputUnitSelect = document.getElementById('output_1');
var convertBtn = document.getElementById('convert_btn');
var outputDisplay = document.getElementById('output');
// Functions.....

convertBtn.addEventListener('click', convertTemperature);
function convertTemperature() {
    var temperature = parseFloat(temperatureInput.value);
    var inputUnit = inputUnitSelect.value;
    var outputUnit = outputUnitSelect.value;
    let convertedTemperature;
    if (inputUnit === 'Celsius') {
        if (outputUnit === 'Fahrenheit') {
            convertedTemperature = (temperature * 9 / 5) + 32;
        } else if (outputUnit === 'Kelvin') {
            convertedTemperature = temperature + 273.15;
        } else {
            convertedTemperature = temperature;
        }
    } else if (inputUnit === 'Fahrenheit') {
        if (outputUnit === 'Celsius') {
            convertedTemperature = (temperature - 32) * 5 / 9;
        } else if (outputUnit === 'Kelvin') {
            convertedTemperature = ((temperature - 32) * 5 / 9) + 273.15;
        } else {
            convertedTemperature = temperature;
        }
    } else if (inputUnit === 'Kelvin') {
        if (outputUnit === 'Celsius') {
            convertedTemperature = temperature - 273.15;
        } else if (outputUnit === 'Fahrenheit') {
            convertedTemperature = ((temperature - 273.15) * 9 / 5) + 32;
        } else {
            convertedTemperature = temperature;
        }
    }

    outputDisplay.innerText = `${convertedTemperature} ${outputUnit}`;
}