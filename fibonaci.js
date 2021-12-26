//console.log('hello');


var a=0;
var b=1;
n=prompt("enter the count");
n=parseInt(n);
console.log(a);
console.log(b);
var count=2;
while(count<=n)
{
    var c=a+b;
    console.log(c);
    a=b;
    b=c;
count=count+1
}