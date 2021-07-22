// // Look into how to implement ES6 array methods, like map, reduce, filter and forEach, using just a for-loop. Choose one as a challenge for next week in the role of coach.

// // 1. map

// // In this challenge you're given a string.

// // Your function should change lowercase to uppercase and vice versa

// // the fuction will return a string

// // string won't include space or symbols

// function letsMap(str) {

// }

// console.log(letsMap("hello")) //will return "HELLO"
// console.log(letsMap("mapismap")) //will return "MAPISMAP!"
// console.log(letsMap("tyrannosaurus"))

// // 2. reduce

// // the function will pass an array as an argument

// // the array consits elements that are numbers

// // you will need to change each element to number based on orders using for loop

// // for example a = 1, b = 2, c = 3, z = 26

// // then return sum of the array

// function sumOfArr(array) {

// }

// console.log(sumOfArr(['a', 'b', 'c'])); // 6
// console.log(sumOfArr(['s', 'u', 'm'])); // 53
// console.log(sumOfArr(['o', 'l', 'l', 'e', 'h'])); // 52

// 3. filter

// lessThanTen function takes the arr argument which is an arr

// Create a new array containing only numbers less than 10 from an arr

function filter(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

function lessThanTen(num) {
  return num < 10;
}

console.log(filter([1, 4, 29, 3], lessThanTen));
console.log(filter([11, 6, 9, 12], lessThanTen));
console.log(filter([8, 10, 9, 93], lessThanTen));

//

// 4. forEach

// I made an array in a wrong way
// value for each element should be negative
// return array which only includes negative values
// 4 should return -4, 10 should be -10
// empty array will return []

// function letsForEach(array) {

// }

console.log(letsForEach([3, 5, 7]));
console.log(letsForEach([10, 41, 56]));
console.log(letsForEach([-4, -43, 6]));

// Solutions

// 1. map

function letsMap(str) {
  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].toUpperCase();
  }
  return strArr.join('');
}

// 2. reduce

function sumOfArr(array) {
  sum = 0;

  for (let i = 0; i < array.length; i++) {
    let num = array[i].charCodeAt() - 96;
    sum += num;
  }
  return sum;
}

// 3. filter

// lessThanTen function takes the arr argument which is an arr

// Create a new array containing only numbers less than 10 from an arr

function lessThanTen(arr) {
  let array = arr;
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 10) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(lessThanTen([1, 4, 29, 3]));
console.log(lessThanTen([11, 6, 9, 12]));
console.log(lessThanTen([8, 10, 9, 93]));

// 4. forEach

function letsForEach(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      result.push(-array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(letsForEach([3, 5, 7]));
console.log(letsForEach([10, 41, 56]));
console.log(letsForEach([-4, -43, 6]));
