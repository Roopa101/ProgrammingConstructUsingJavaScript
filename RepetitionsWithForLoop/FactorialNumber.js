"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var number=parseInt(prompt("Enter a number : "))
var i=0
var fact=1

for(i=1;i<=number;i++)
{
    fact=fact*i

}
console.log("Factorial of " +number+ " is " +fact)