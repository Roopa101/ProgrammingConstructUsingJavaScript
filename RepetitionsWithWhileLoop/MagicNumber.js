function magicNumber(userNumber)
{
    const prompt = require('prompt-sync')();
    let guessNumber = parseInt(prompt("Guess the number : "));
    flag = true;
    while (flag) 
    {
        if (guessNumber == userNumber) 
        {
            console.log("Right Guess !!!");
            flag = false;
        } else if (guessNumber < userNumber) 
        {
            console.log("Guess Number is less than User Number");
            magicNumber(userNumber);
        } else if (guessNumber > userNumber) 
        {
            console.log("Guess Number is greater than User Number");
            magicNumber(userNumber);
        }
    }
}
let userNumber = Math.floor(Math.random() * 99 + 1);
console.log(userNumber);
magicNumber(userNumber);