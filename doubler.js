'use strict';

// Linear O(n) - number of operations is directly proportional to input 
function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array; // Return Statements --> constant O(1)
}

console.log(doubleArrayValues([1, 2, 3, 4]));
console.log(doubleArrayValues([1, 2, 3, 4, 100, 200]));
console.log(doubleArrayValues([1, 2, 3, 4, 1000, 2000]));

// What is this trying to solve? --> Takes an array and doubles --> outputs new array
// Is it being solved in best way? --> Yes
// best? worse? average? 