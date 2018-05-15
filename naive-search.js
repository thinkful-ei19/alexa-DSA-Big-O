'use strict';

//Linear O(n) -
function naiveSearch(array, item) {
  let inc = 0;
  for (let i=0; i<array.length; i++) {
    inc++;
    if (array[i] === item) {
      console.log(inc);
      return i;
    }
  }
}

// console.log(naiveSearch([1, 2, 3, 4], 3));
// console.log(naiveSearch([1, 2, 3, 4], 'cat'));
console.log(naiveSearch([1, 2, 3, 4, 5, 6, 7], 7));
console.log(naiveSearch([1, 2, 3, 4, 5, 6, 7], 3));

// What is this trying to solve? --> Takes an array and an item, loops through array to find index of item passed
// Is it being solved in best way? --> 
// best? worse? average? 