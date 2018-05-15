'use strict';

// Polynomial O(n^2) - doubly nested loop
function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

console.log(areYouHere([1, 2, 3], [10, 11, 4, 12]));
console.log(areYouHere([1, 2, 3, 4], [10, 11, 4, 12]));
console.log(areYouHere([1, 2, 3, 4, 5], [10, 11, 4, 12, 5]));
console.log(areYouHere(['cat', 'dog', 'elephant'], ['elephant', 'bird']));

// What is this trying to solve? --> Is there an element that both arr1 and arr2 have
// Is it being solved in best way? --> Maybe sort both arrays first then try to find matching element
// best? worse? average? 