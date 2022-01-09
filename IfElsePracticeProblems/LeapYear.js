//let year= console.log
let year =Math.floor(Math.random()* 9000 +1000)
console.log(year)

if(year%4==0&&year%100!=0||year%400==0&&year%100==0)
{
    console.log("the year is leap year");
}
else
{
    console.log("the year is not leap year");
}
