"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var number=parseInt(prompt("Enter The number: "))
var i =0;
for (i = 1; i <= number; i++)
{
    if (number % i == 0)
    {
        console.log(i + " is a factor of " + number);
    }
}