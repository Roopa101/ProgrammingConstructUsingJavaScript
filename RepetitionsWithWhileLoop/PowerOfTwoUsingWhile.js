"use strict"
const prompt = require('prompt-sync')();
let number = parseInt( prompt("Enter the Number : "));

let i = 0;
let power = 0;
while (i <= number)
{
    power = Math.pow(2, i);
    console.log(power);
      if (power == 256) 
      {
        break;
      }
        i++;
}
