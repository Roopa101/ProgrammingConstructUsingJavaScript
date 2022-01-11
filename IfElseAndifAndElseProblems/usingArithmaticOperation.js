"use strict"
const prompt = require('prompt-sync')();
let a = parseInt( prompt("Enter a value : "));
console.log(a)
let b = parseInt( prompt("Enter b value : "));
console.log(b)
let c = parseInt( prompt("Enter c value : "));
console.log(c)

let Problem1= (a + b * c);
console.log(Problem1);
let Problem2 = (a % b + c);
console.log(Problem2);
let Problem3 = (c + a / b);
console.log(Problem3);
let Problem4 = (a * b + c);
console.log(Problem4);