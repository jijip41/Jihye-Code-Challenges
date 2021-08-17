// Unique In Order
// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// example
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  let arr = iterable.split('');
  let newArr = [];
  arr.forEach((e, i) => {
    if (i === 0) {
      newArr.push(e);
    } else if (e !== arr[i - 1]) {
      newArr.push(e);
    } else {
      return;
    }
  });
  return newArr;
};

console.log(assertSimilar(uniqueInOrder('AAAABBBCCDAABBB')));

// passed
// should work with empty array
// should work with one element
// should reduce duplicates
// and treat lowercase as different from uppercase

//failed
// and work with int arrays
// and work with char arrays
