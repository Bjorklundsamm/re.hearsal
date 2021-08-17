/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  var demoninator = Math.pow(10, (number.toString().length - 2));
  var numerator = number * demoninator;

  const fractionate = (num, dem) => {
    if(dem < 0.00001) return num;
    return fractionate(dem, (num % dem));
  }
  const divisor = fractionate(numerator, demoninator);
  demoninator /= divisor;
  numerator /= divisor;

  return (Math.floor(numerator) + '/' + Math.floor(demoninator));
};
