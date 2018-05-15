'use strict';

//String splitter
// function split(str, sep) {
//     let inc = 0;
//   var ret = [];
//   while (true) {
//       inc ++;
//     var idx = str.indexOf(sep);
//     if (idx == -1) break;
//     ret.push(str.slice(0, idx));
//     str = str.slice(idx + sep.length);
//   }
//   ret.push(str);
//   console.log(inc);
//   return ret;
// }

// split('Hi my name is Alexa what is your name', ' ');

// function convertToBinaryIter(num){
//   let inc = 0;
//   var binary = '';
//   while(num>0){
//     inc ++;
//     let rem = Math.floor(num%2);
//     binary = rem + binary;
//     num = Math.floor(num/2);
//   }
//   console.log(inc);
//   return binary;

// }

// console.log(convertToBinaryIter(10000000000000)); //

// function factorialIterative(number){
//     let inc = 0;
//   let fact = 1;
//   for (let i = 1; i <= number; i++){
//       inc++;
//     fact *= i;
//   }
//   console.log(inc);
//   return fact;
// }
// console.log(factorialIterative(50));

function fibonacciIterative(number){
  let inc = 0;
  let num1 = 1;
  let num2 = 0;
  let fib = null;
  while(number > 0){
    inc ++;
    fib = num1;
    num1 = num1+num2;
    num2 = fib;
    number--;
  }
  console.log(inc);
  return num2;
  
}

console.log(fibonacciIterative(7));

function fibonacciIterative2(number){
    let inc = 0;
    let [num1, num2] = [1,0];
    while(number-- > 0){
        inc++;
      [num1, num2] = [num2+num1, num1];
    }
    console.log(inc);
    return num2;
  
  }
  console.log(fibonacciIterative2(7));