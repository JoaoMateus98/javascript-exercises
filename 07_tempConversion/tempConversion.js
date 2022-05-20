const ftoc = function(temp) {
  const celsius = Math.round((temp - 32) * (5 / 9) * 10);
  return celsius / 10;
};

const ctof = function(temp) {
  const fahrenheit = Math.round((temp * (9 / 5) + 32) * 10);
  return fahrenheit / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
