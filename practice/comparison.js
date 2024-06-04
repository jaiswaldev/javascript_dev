// console.log(2>1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2!=1)   // these output are boolean. true/false.

// console.log("2"> 1);
// console.log("02" > 1); // sometimes js don't show predictable comparison results. so try to compare same datatypes always. here js autometically convert string into number.

// console.log(null > 0);
// console.log(null==0);
// console.log(null>=0); //try to don't use these type of comparisons in code. bcz they shows unpredictable outputs. 
 
// use "===" for checking datatypes also.
// console.log("2"===2);   

//*************Datatypes summary************* */

// on the basis of how to store data in memory datatypes are catagorise into two types.
//1) primitive. (call by value)-----> 7 types : string,Number,boolean,null,undefined,symbol,BinInt.

// symbol 
//  const id =Symbol('234')
//  const secondid = Symbol('234') // these both are different even they have same input values.
//  console.log(id===secondid);   // false.
// console.log(typeof id); //symbol.

//  const bigNumber= 2444445566576867867867856645154521415454515484554858n // BigInt
//  console.log(typeof bigNumber); //bigint.


//2) Reference. (call by memory)-----> Arrays, Objects, Functions.

// let heros=[ "Dev jaiswal" , 123] //Array
// console.log(typeof heros); //object.

// let myobj={
//     name: "DEV JAISWAL",    //Object--> collection of different datatypes.
//     age: 21,
// }
// console.log(typeof myobj);  //object.

// const myfunction= function(){
//     console.log("Hellow world");  //function
// }
// console.log(typeof myfunction); //function.


//JavaScript is a dynamically typed language. 
//This means that variable types are determined at runtime, 
//and you do not need to explicitly declare the type of a variable before using it.
// You can assign different types of values to a variable during its lifetime.



// ++++++++++++++++++++++++++ Memory +++++++++++++++++++++++

// Stack (Primitive)--> get copy of variable.

//   let myname="DEV JAISWAL"
//   let anothername=myname   // assigned a copy of myname variable not original.

//   anothername="lakhan jaiswal"
//   console.log(myname);
//   console.log(anothername);

// Heap (Non-primitive)--> get reference of variable.
    
//    let userOne={
//      email: "jaiswaldev479@gmail.com",
//      upi: "jaiswaldev479@axl"
//    }
//    let userTwo = userOne   // assigned a reference of userOne variable, bcz it is in heap. that's why email of both users is updated.
//    userTwo.email="jaiswaldev955@gmail.com"  

//    console.log(userOne.email);
//    console.log(userTwo.email);
     



