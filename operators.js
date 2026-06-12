//Arithmetic operator
console.log("Arithmetic Operator")
var a=10
var b=15
console.log(a+b)//add
console.log(a-b)//subtract
console.log(a*b)//multiplication
console.log(a/b)//divide
console.log(a%b)//modulus
console.log(a**b)//expo

//Assignment operator
console.log("Assignment Operator")
var x=10
console.log(x+=20)
console.log(x-=20)
console.log(x*=20)
console.log(x/=20) 

//Comparison Operator
console.log("Comparison Operator")
var x=10
var y=20
console.log(x==y)
console.log(x!=y)
console.log(x<=y)
console.log(x>=y)
console.log(x<y)
console.log(x>y)

//Logical operators
console.log("Logical Operators")
console.log(a > 0 && b > 0)// o/p-true (both statements should be true) 
console.log(a > 0 || b < a)// o/p-true (Any one statement can be true)
console.log(!(a > 0))//o/p- false (opposite to the statement)

//unary operation
console.log("Unary Operator")
console.log(x++)
console.log(x--)
console.log(++x)
console.log(--x)

//ternary operation
console.log("Ternary Operation")
var result = ( a > b) ? "a is greater" : "b is greater"
console.log(result); 