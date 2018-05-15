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

// function fibonacciIterative(number){
//   let inc = 0;
//   let num1 = 1;
//   let num2 = 0;
//   let fib = null;
//   while(number > 0){
//     inc ++;
//     fib = num1;
//     num1 = num1+num2;
//     num2 = fib;
//     number--;
//   }
//   console.log(inc);
//   return num2;
  
// }

// console.log(fibonacciIterative(7));

// function fibonacciIterative2(number){
//     let inc = 0;
//     let [num1, num2] = [1,0];
//     while(number-- > 0){
//         inc++;
//       [num1, num2] = [num2+num1, num1];
//     }
//     console.log(inc);
//     return num2;
  
//   }
//   console.log(fibonacciIterative2(7));

// let inc = 0;
// function countSheep(num){
//   //stopping condition of base case
//   if(num === 0){
//     console.log(inc);
//     console.log('All sheep jumped over the fence');
//   } 
//   //this is the recursive case
//   //this will be executed until it reaches base case
//   else{
//     inc++;
//     console.log(`${num}: Another sheep jump over the fence`);
//     countSheep(num-1);
//   }
// }

// countSheep(10);

// let inc = 0;
// function double_all(arr) {
//   if (!arr.length) {
//     console.log(inc);
//     return [];
//   }
//   inc ++;
//   return [arr[0] * 2, ...double_all(arr.slice(1))];
// }

// console.log(double_all([1, 2, 3, 4, 5, 6]));

// let inc = 0;
// function reverseString(str) {
//   if (str.length < 2) {
//     console.log(inc);
//     return str;
//   }
//   inc++;
//   return reverseString(str.slice(1)) + str[0];
// }

// // console.log(reverseString('hello'));
// // console.log(reverseString('helloo'));
// // console.log(reverseString('hellooo'));
// console.log(reverseString('helloooo'));

// let inc = 0;
// function triangle(n) {
//   if (n < 2) {
//     console.log(inc);
//     return n;
//   }
//   inc++;
//   return n + triangle(n - 1);
// }

// console.log(triangle(10));

// let inc = 0;
// function split(str, sep) {
//   var idx = str.indexOf(sep);
//   if (idx == -1) {
//     console.log(inc);
//     return [str];
//   }
//   //you don't have to return an array, you can return a string as an array of 
//   //character 
//   //return str;
//   inc++;
//   return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep));
//   //all these are valid syntax
//   //return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
//   //return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
// }

// console.log(split('Hi my name is alexa what is your name', ' '));

// let inc = 0;
// function convertToBinary(num){
//   if(num>0){
//     let binary = Math.floor(num%2); //save the reminder in binary
//     //divide the number by 2 and send that to the function again
//     //carry the reminder to the next recursion call
//     inc++;
//     return (convertToBinary(Math.floor(num/2))+ binary);
//   }else{
//     console.log(inc);
//     return ''; //base case - at some point the divisions will lead to 0
//   }
// }

// console.log(convertToBinary(50));

// let inc = 0;
// function factorial(n) {  
//   // Base Case - when n is equal to 0, we stop the recursion
//   if (n === 0) {
//     console.log(inc);
//     return 1;
//   }
//   // This is our Recursive Case
//   // It will run for all other conditions except when n is equal to 0
//   inc++;
//   return n * factorial(n - 1);
// }

// console.log(factorial(10));

// let inc = 0;
// function fibonacci(n) {
//   // Base case
//   if (n <= 0) {
//     console.log(inc);
//     return 0;
//   }
//   // Base case
//   if (n <= 2) {
//     console.log(inc);
//     return 1;
//   }	
//   // Recursive case
//   inc++;
//   return fibonacci(n - 1) + fibonacci(n - 2);	
// }

// console.log(fibonacci(10));

// let inc = 0;
// function anagrams(prefix, str){
//   if(str.length <= 1){
//     console.log(inc);
//     console.log(`The anagram is ${prefix}${str}`);
//   } else {
//     for(let i=0; i<str.length; i++){
//       inc++;
//       let currentLetter = str.substring(i, i+1); 
//       let previousLetters = str.substring(0,i);
//       let afterLetters = str.substring(i+1);
//       anagrams(prefix+currentLetter, previousLetters+afterLetters);
//     }
//   }
// }
// function printAnagram(word){
//   //console.log(`The word for which we will find an anagram is ${word}`);
//   anagrams(' ', word);
// }


// console.log(printAnagram('east'));

// let inc = 0;
// const animalHierarchy = [
//   {id: 'Animals', parent: null},
//   {id: 'Mammals', parent: 'Animals'},
//   {id: 'Dogs', parent:'Mammals' },
//   {id: 'Cats', parent:'Mammals' },
//   {id: 'Golden Retriever', parent: 'Dogs'},
//   {id: 'Husky', parent:'Dogs' },
//   {id: 'Bengal', parent:'Cats' },
//   {id: 'Bengal', parent:'Cats' },
//   {id: 'Bengal', parent:'Cats' },
//   {id: 'Bengal', parent:'Cats' }
// ];
  
//   // ==============================
// function traverse(animalHierarchy, parent) {
//   inc++;
//   let node = {};
//   animalHierarchy.filter(item => item.parent === parent)
//     .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
//   return node;  
// }

// console.log(traverse(animalHierarchy, null));
// console.log('inc', inc);


let organization = {
  'Zuckerberg': {		
    'Schroepfer': {
      'Bosworth': {
        'Steve':{},
        'Kyle':{},
        'Andra':{}
      },
      'Zhao': {
        'Richie':{},
        'Sofia':{},
        'Jen':{}
      },
      'Badros': {
        'John':{},
        'Mike':{},
        'Pat':{}
      },
      'Parikh': {
        'Zach':{},
        'Ryan':{},
        'Tes':{}
      }
    },
    'Schrage': {
      'VanDyck': {
        'Sabrina':{},
        'Michelle':{},
        'Josh':{}
      },
      'Swain': {
        'Blanch':{},
        'Tom':{},
        'Joe':{}
      },
      'Frankovsky': {
        'Jasee':{},
        'Brian':{},
        'Margaret':{}
      }
    },
    'Sandberg': {
      'Goler': {
        'Eddie':{},
        'Julie':{},
        'Annie':{}
      },
      'Hernandez': {
        'Rowi':{},
        'Inga':{},
        'Morgan':{}
      },
      'Moissinac': {
        'Amy':{},
        'Chuck':{},
        'Vinni':{}
      },
      'Kelley': {
        'Eric':{},
        'Ana':{},
        'Wes':{}
      }
    }}};
  
let inc = 0; 
function traverseA(data, depth = 0) {
  let indent = ' '.repeat(depth * 4);
  Object.keys(data).forEach(key => {
    inc++;
    console.log(indent + key);
    traverseA(data[key], depth + 1);
  });
}

traverseA(organization, 0);
console.log('this is the inc', inc);
  
let inc2 = 0;
function traverseB(node, indent=0) {
  for (var key in node) {
    inc2++;
    console.log(' '.repeat(indent), key);
    traverseB(node[key], indent + 4);
  }
}

traverseB(organization, 0);
console.log('this is the inc2', inc2);