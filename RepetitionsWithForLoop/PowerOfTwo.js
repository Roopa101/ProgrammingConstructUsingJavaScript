function powersOfTwo() {
    const prompt = require('prompt-sync')();
    var number = prompt("Enter the limit : ");
    console.log("Powers of 2 are : ")
    for (i = 0; i <= number; i++) {
        power = Math.pow(2, i);
        console.log(power);
    }
}
powersOfTwo();