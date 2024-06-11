function sayMyName(){
    console.log("dev jaiswal");
}
// sayMyName     //this is only reference.
// sayMyName()   //execution.


// function addTwoNumber(num1,num2){   // here num1 & num2 is parameters.
//     console.log(num1+num2);
// }
// addTwoNumber("2","4")   //at the time of function call value send by us is arguments.

// const result= addTwoNumber(3,5)  

// console.log(result);  // it shows undefined bcz we are not return the value from function call. it just prints.


// function addTwoNumber(num1,num2){   // here num1 & num2 is parameters.
//   return num1+num2     //now it returns the value.
// }
// const result= addTwoNumber(3,5)  

// console.log("result: ",result);


function loginUserMessage(username="lakhan"){      // u can take default values of parameter. 
    if(!username){
        console.log("please ender username");
        return
    }
    return `${username} just logged In.`
}
loginUserMessage("Dev jaiswal")   // function executed but print noting on the screen bcz function is returning the value only not print value.
// console.log(loginUserMessage("dev jaiswal"))

function calculateCartsum(...num1){    // (...)--> is rest operator. 
    return num1                  // this returns arr of all the arguments entered by user.
}

// console.log(calculateCartsum(233,500,57,23));

//how to pass object as an argument.
const user={
    username:"dev",
    email:"jaiswaldev479@gmail.com"
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and email is ${anyobject.email}`);
}

// handleobject(user);
// handleobject({
//      username:"dev",
//     email:"jaiswaldev479@gmail.com"
// })

const myarr=[345,573,479,58]
function secondvalue(getarray){
    return getarray[1]
}
// console.log(secondvalue(myarr));
// console.log(secondvalue([345,573,479,58]));


