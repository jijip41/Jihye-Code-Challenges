// check whether it's square number or not
// if n is a squre number, return true otherwise return false
// from codewars => https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

const isSquare = function (n) {
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
