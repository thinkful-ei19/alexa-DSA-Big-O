'use strict';

// Polynomial O(n^2) - doubly nested loop
// going through with one off
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      console.log(arr[i] + ', ' +  arr[j] );
    }
  }
}

createPairs([1, 2, 3]);
//createPairs([1, 2, 3, 4, 5, 6, 7]);

// What is this trying to solve? --> Takes an array and pairs each element with every element
// Is it being solved in best way? --> 
// best? worse? average? 