// There is a function called addArrays()

// The addArrays() will combine two arrays only if they have the same length.

// The combined array will have the same length with each array argument.

// For the combinde array, each element will be the sum from the corrensponding index of 2 array arguments.

// Return false if both arrays's length are not the same.

function addArrays(array1, array2) {}

console.log(addArrays([1, 2], [4, 5])); // => [5,7]
console.log(addArrays(['Hello'], ['World'])); // =>['HelloWorld']
console.log(addArrays([1, 2, 3], [4, 5])); // => false

// function addArrays(array1, array2) {
//   let arr = []
//   if(array1.length !== array2.length) {
//     return false;
//   } else {
//     array1.map((x, i) => arr.push(x + array2[i]));
//   }

//   return arr;
// }
