// var b=220
let a=200
{
 let a=29      // that a is define using let and it is inside the block so iska scope is block ke andr hi rhega. bcz let is block scope.
 var b=30       // but var has global scope. thats why we don't use var for declearing variables.
 const c=34     //same as let.

 console.log(a)   // output is 29.
}
console.log(a);   // output is 200. bcz that a has block scope here.
// console.log(b);   // output is 30. bcz that b has global scope here. 
// console.log(c);
