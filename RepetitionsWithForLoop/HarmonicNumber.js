"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var number = parseFloat (prompt("Enter the number of terms: "))
var HarmonicSum=0;
var i=0

for(i=1;i<=number;i++)
{
    console.log("1/" + i + "=" + (1 / i))
    HarmonicSum += (1 / i);

}
console.log("The Sum of harmonic number is : " + HarmonicSum)
