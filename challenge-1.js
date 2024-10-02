const getCelsius = fahrenheit => ((fahrenheit - 32) * 5 / 9).toFixed(2);

// Example usage:
const userInput = prompt("Enter temperature in Fahrenheit: ");
const celsiusTemperature = getCelsius(Number(userInput));
console.log(`The temperature is ${celsiusTemperature} °C`);