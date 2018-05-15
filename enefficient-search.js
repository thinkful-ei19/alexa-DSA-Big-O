'use strict';

// Logarithmic - O(log(n))
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

console.log(efficientSearch([1, 2, 3, 4], 3));
console.log(efficientSearch([1, 2, 3, 4, 5, 6, 7, 8], 5));

// What is this trying to solve? --> Takes an array and an item, loops through array to find index of item passed
// Is it being solved in best way? --> More efficient than naive search --> splits the array & eliminates part of data
// best? worse? average? 