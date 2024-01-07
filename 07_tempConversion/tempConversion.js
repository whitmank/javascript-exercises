const convertToCelsius = function(F) {
  tempC = (F-32)*(5/9);
  return +tempC.toFixed(1);
};

const convertToFahrenheit = function(C) {
  tempF = (C*(9/5)+32);
  return +tempF.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
