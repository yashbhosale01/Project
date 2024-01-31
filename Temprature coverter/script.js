
function convertTemperature() {
const temperatureInput = document.getElementById('temperature').value;
const unitSelect = document.getElementById('unit');
const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
const resultContainer = document.getElementById('result');

if (isNaN(temperatureInput)) {
    resultContainer.textContent = 'Please enter a valid number for temperature.';
    return;
}

const temperature = parseFloat(temperatureInput);

switch (selectedUnit) {
    case 'celsius':
    displayResult(convertCelsius(temperature), 'Celsius');
    break;
    case 'fahrenheit':
    displayResult(convertFahrenheit(temperature), 'Fahrenheit');
    break;
    case 'kelvin':
    displayResult(convertKelvin(temperature), 'Kelvin');
    break;
    default:
    resultContainer.textContent = 'Invalid unit selection.';
}
}

function convertCelsius(fahrenheit) {
return ((fahrenheit - 32) * 5) / 9;
}

function convertFahrenheit(celsius) {
return (celsius * 9) / 5 + 32;
}

function convertKelvin(celsius) {
return celsius + 273.15;
}

function displayResult(result, unit) {
const resultContainer = document.getElementById('result');
resultContainer.textContent = `Converted Temperature: ${result.toFixed(2)} ${unit}`;
}
