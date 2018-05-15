'use strict';

// Linear - O(n) - operations is proportional to input
function generateFib(num) {
  let result = [];
  let inc = 0;
  for (let i = 1; i <= num; i++) {
    inc ++;
    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }
  
    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  console.log(inc);
  // once the for loop finishes
  // we return `result`.
  return result;
}

console.log(generateFib(7));
console.log(generateFib(10));

// What is this trying to solve? --> Generates (array) Fibonacci Sequence for a given number
// Is it being solved in best way? --> 
// best? worse? average? 