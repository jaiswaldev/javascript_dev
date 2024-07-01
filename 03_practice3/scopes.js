// var b=220
let a=200
{
 let a=29      // that a is define using let and it is inside the block so iska scope is block ke andr hi rhega. bcz let is block scope.
 var b=30       // but var has global scope. thats why we don't use var for declearing variables.
 const c=34     //same as let.

//  console.log(a)   // output is 29.
}
// console.log(a);   // output is 200. bcz that a has block scope here.
// console.log(b);   // output is 30. bcz that b has global scope here. 
// console.log(c);

function one(){
    const website="youtube"
    function two(){
        const username="dev jaiswal"
        console.log(website);     // this line can be execute if two function will call. 
    }
    console.log(username);    // this line can't execute bcz username ka scope only two() function ke andr hi hai.
}
// child function can access their parent function variables.but vice versa is not possible.

if(true){
     const username="dev jaiswal"
     if(username==="dev jaiswal"){
         const website=" youtuber"
        //  console.log(username+ website);
     }
    //  console.log(website);    //here this shows error. kyuki website ka scope only inside if statement me hi hai.
}
// console.log(username);    // here this also shows error. reason same.
 
// both are the syntax of declearing functions.
addone(4)    // this executes perfectly even hamne addone function iske bad declear kiya hai but ye usko access kr lega.
function addone(num){
    return num+1
}
addtwo(5)   // but this shows error. bcz ye addtwo function ko access nhi kr paa rha.
const addtwo=function(num){
  return num+2
}       
