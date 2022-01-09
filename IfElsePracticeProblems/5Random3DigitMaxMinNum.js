let Number1=Math.floor(Math.random()* 900 +100)
console.log(Number1)
let Number2 =Math.floor(Math.random()* 900+100)
console.log(Number2)
let Number3 =Math.floor(Math.random()*900+100)
console.log(Number3)
let Number4=Math.floor(Math.random()*900+100)
console.log(Number4)
let Number5=Math.floor(Math.random()*900+100)
console.log(Number5)

if((Number1>Number2)&&(Number1>Number3)&&(Number1>Number4)&&(Number1>Number5))
{
    console.log(Number1+" is largest")
}
else if((Number2>Number3)&&(Number2>Number4)&&(Number2>Number5))
{
    console.log(Number2+" is largest")
}
else if((Number3>Number4)&(Number3>Number5))
{
    console.log(Number3+" is largest")
}
else if((Number4>Number5))
{
    console.log(Number4+" is largest")
}
else
{
    console.log(Number5+" is largest")
}
if((Number1<Number2)&&(Number1<Number3)&&(Number1<Number4)&&(Number1<Number5))
{
    console.log(Number1+" is smallest")
}
else if((Number2<Number3)&&(Number2<Number4)&&(Number2<Number5))
{
    console.log(Number2+" is smallest")
}
else if((Number3<Number4)&(Number3<Number5))
{
    console.log(Number3+" is smallest")
}
else if((Number4<Number5))
{
    console.log(Number4+" is smallest")
}
else
{
    console.log(Number5+" is smallest")
}