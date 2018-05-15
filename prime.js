'use strict';

// if statement --> Constant O(1)
// for loop --> Linear O(n) - as prime number increases, counter in loop increases
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(isPrime(17));
// What is this trying to solve? --> Find if number is prime
// Is it being solved in best way? --> Feel as if there are better ways to accomplish this, unsure how
// best? worse? average? 
// Best --> O(1)
