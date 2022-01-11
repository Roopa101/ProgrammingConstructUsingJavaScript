"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var number=parseInt(prompt("Enter The number: "))
var i =0;
var count=0;

for ( i = 1; i <= number; i++)
{ 
    if (number % i == 0)
    {
        count++;
    }
}
if (count == 2)
{
        console.log(number + " is a Prime number");
}
else
{
        console.log(number + " is not a Prime number");
}
