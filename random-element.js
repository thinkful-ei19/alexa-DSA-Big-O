'use strict';

// Constant O(1)
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(findRandomElement([1, 2, 3, 4, 5, 6, 7, 8]));

// What is this trying to solve? --> Randomly finds element in array
// Is it being solved in best way? --> 
// best? worse? average? 