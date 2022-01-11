// checks whether number is prime or not 
function checkPrime(number) 
{
    if (number <= 1) 
    {
        return false;
    } 
    else 
    {
        for (i = 2; i < number; i++) 
        {
            if (number % i == 0) 
            {
                return false;
            }
        }
        return true;
    }
}

// gets reverse number 
function getPalindrome(number) 
{
    reverse = 0;
    remainder = 0;
    temp = number;
    while (number > 0) 
    {
        remainder = Math.floor(number % 10);
        reverse = reverse * 10 + remainder;
        number = Math.floor(number / 10);
    }
    return reverse;
}
const prompt = require('prompt-sync')();
let number = parseInt( prompt("Enter the number : "));
if (checkPrime(number)) 
{
    console.log(`Number ${number} is prime ...`);
} 
else 
{
    console.log(`Number ${number} is not prime`);
}
let palindromeNumber = getPalindrome(number);
if (checkPrime(palindromeNumber)) 
{
    console.log(`Number's Palindrome ${palindromeNumber} is prime `);
} 
else 
{
    console.log(`Number's Palindrome ${palindromeNumber} is not prime `);
}