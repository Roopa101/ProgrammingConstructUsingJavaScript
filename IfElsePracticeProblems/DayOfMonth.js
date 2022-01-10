"use strict"
const prompt = require('prompt-sync')();
let date =parseInt( prompt("Enter the date : "));
let month =parseInt( prompt("Enter the month number : "));

console.log(date + "/" + month);
if (month == 6 && date < 21) {
    console.log("True");
} else if (month == 3 && date >= 20 && date <= 31) {
    console.log("True");
} else if (month == 4 && date >= 1 && date <= 30) {
    console.log('True');
} else if (month == 5 && date >= 1 && date <= 31) {
    console.log("True");
} else {
    console.log("False");
}
