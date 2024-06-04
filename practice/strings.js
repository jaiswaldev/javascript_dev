const name= "Dev"
const repocount= 3

//console.log(name+ repocount)   // this is very outdated method to concatenate. instead of this use backtics.

// console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

//another way to declear string.
 const gamename= new String('Dev-jai')  // stored in zero based indexing.

//  console.log(gamename[1]);
//  console.log(gamename.__proto__);
//  console.log(gamename.length);  // lenght of string.
//  console.log(gamename.toUpperCase());  // convert complete string into uppercase. but original variable is same as before it convert copy of that variable.
//  console.log(gamename.charAt(2));
//  console.log(gamename.indexOf('t'));    // -1 bcz 't' is not in given string.

// const newstring = gamename.substring(3,4)  //4 not included. and cannot give negative value it means reading from back of the string is not allowed.
// console.log(newstring);


// const anotherstring= gamename.slice(-6,4)     // 4 is not included. but also give negative value it reading form back side of string is allowed.
// console.log(anotherstring);
// const anotherstring= gamename.slice(-60,4)    // now automatically starts from zero index bcz string not have 60 character.

// const newstringone= "    Dev jaiswal      "
// console.log(newstringone);
// console.log(newstringone.trim());   //it removes extra spaces. there is also trimStart()-->(remove extra spaces from starting of string) or trimEnd()-->(remove extra spaces from end of string).


// const url= "https://dev_da.com/dev%20jaiswal"
// console.log(url.replace('%20', '-'))   // it search for first argument of replace function in given string and replace it by second argument of replace function.



// console.log(url.includes('%20'))   // it gives simple true/false. given argument is present or not.







