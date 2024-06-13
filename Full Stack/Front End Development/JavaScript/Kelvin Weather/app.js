// Today's forecast 
const kelvin = 293;

// Celsius temperate (kelvin conversion)
const celsius = kelvin - 273

// Equation to calculate fahrenheit 
let fahrenheit = celsius * (9/5) + 32

// Round down the Fahrenheit temperature 
fahrenheit = Math.floor(fahrenheit)

// String interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)