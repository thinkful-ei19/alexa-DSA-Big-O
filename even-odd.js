'use strict';

// Constant O(1)
function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

console.log(isEven(6));
console.log(isEven('6'));

// What is this trying to solve? --> isEven takes a value and determines if it is divisible by 2 without remainder
// Is it being solved in best way? --> Yes (change == to ===)
// best? worse? average? 