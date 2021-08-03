// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// Solution

function switcheroo(x) {
  return x
    .split('')
    .map((e) => {
      if (e === 'a') {
        return e.replace('a', 'b');
      } else if (e === 'b') {
        return e.replace('b', 'a');
      } else {
        return e;
      }
    })
    .join('');
}

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
console.log(switcheroo('ccccc'), 'ccccc');
