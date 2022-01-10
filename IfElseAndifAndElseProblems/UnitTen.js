"use strict"
const prompt = require('prompt-sync')();

let number = parseInt( prompt("Enter the single digit number : "));

    if (number == 1) {
        console.log("UNIT");
    } else if (number == 10) {
        console.log("TEN");
    } else if (number == 100) {
        console.log("HUNDRED");
    } else if (number == 1000) {
        console.log("THOUSAND");   
    } else {
        console.log("INVALID INPUT");
    }
