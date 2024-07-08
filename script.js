//var has global scope, it can be reintialised
var a=10;//intialise value
console.log(a);//print value of a , it will be 10
{
    var a=20;
    console.log(a);//output will be 20
}
console.log(a);//output 20


//let cannot be reintialised
