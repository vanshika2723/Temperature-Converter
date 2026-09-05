// Get input elements
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const error = document.getElementById("error");


// Celsius conversion
function fromCelsius(value) {
    const f = (value * 9 / 5) + 32;
    const k = value + 273.15;

    fahrenheit.value = f.toFixed(2);
    kelvin.value = k.toFixed(2);
}


// Fahrenheit conversion
function fromFahrenheit(value) {
    const c = (value - 32) * 5 / 9;
    const k = c + 273.15;

    celsius.value = c.toFixed(2);
    kelvin.value = k.toFixed(2);
}


// Kelvin conversion
function fromKelvin(value) {
    const c = value - 273.15;
    const f = (c * 9 / 5) + 32;

    celsius.value = c.toFixed(2);
    fahrenheit.value = f.toFixed(2);
}


// Celsius input event
celsius.addEventListener("input", function () {

    if (celsius.value === "") {
        fahrenheit.value = "";
        kelvin.value = "";
        error.textContent = "";
        return;
    }

    const value = Number(celsius.value);

    if (value < -273.15) {
        error.textContent = "Celsius cannot be below -273.15°C.";
        fahrenheit.value = "";
        kelvin.value = "";
        return;
    }

    error.textContent = "";
    fromCelsius(value);
});


// Fahrenheit input event
fahrenheit.addEventListener("input", function () {

    if (fahrenheit.value === "") {
        celsius.value = "";
        kelvin.value = "";
        error.textContent = "";
        return;
    }

    const value = Number(fahrenheit.value);

    if (value < -459.67) {
        error.textContent = "Fahrenheit cannot be below -459.67°F.";
        celsius.value = "";
        kelvin.value = "";
        return;
    }

    error.textContent = "";
    fromFahrenheit(value);
});


// Kelvin input event
kelvin.addEventListener("input", function () {

    if (kelvin.value === "") {
        celsius.value = "";
        fahrenheit.value = "";
        error.textContent = "";
        return;
    }

    const value = Number(kelvin.value);

    if (value < 0) {
        error.textContent = "Kelvin cannot be below 0 K.";
        celsius.value = "";
        fahrenheit.value = "";
        return;
    }

    error.textContent = "";
    fromKelvin(value);
});