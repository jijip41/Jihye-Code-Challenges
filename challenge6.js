// check whether it's square number or not
// if n is a squre number, return true otherwise return false
// from codewars => https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

// first solution
const isSquare1 = function (n) {
  if (n < 0) return false;
  if (n === 0 || n === 1) return true;
  for (let i = 0; i < n; i++) {
    if (i * i === n) {
      return true;
      break;
    }
  }
  return false;
};

// second solution
const isSquare2 = function (n) {
  return Number.parseInt(Math.sqrt(n)) ** 2 === n;
};

// third solution
const isSquare3 = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

console.log(isSquare3(5));
