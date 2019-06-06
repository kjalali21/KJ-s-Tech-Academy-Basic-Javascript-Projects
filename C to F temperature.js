function convertToCelsius(tempInF) {
    //function to convert temperature
    // from fahrenheit to Celsius
    tempInC = ( tempInF - 32 ) * 5/9;
    return tempInC
}

console.log( convertToCelsius(212) );