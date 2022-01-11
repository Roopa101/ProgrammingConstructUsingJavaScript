"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var number=parseInt(prompt("Enter The number: "))
var a =0;
for (a = 1; a <= number; a++)
{
    if (number % a == 0)
    {
        console.log(a + " is a factor of " + number);
    }
}