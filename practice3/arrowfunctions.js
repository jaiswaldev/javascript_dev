const user={
    username: "dev jaiswal",
    price: 5,
    welcomemessage: function(){
        console.log(`${this.username} ,welcome to our world.`)   // if we want to refer current context then use this keyword.
        console.log(this);    // refer to all keys and values inside the user object.
    }
}
// user.welcomemessage()

// user.username="lakhan"
// user.welcomemessage()

// console.log(this);   // this will give empty object bcz we are in node enviroment and in our envirment currently there is no globally context. if we are in browser then this will give different output (non empty object).

// function chai(){
//     let username="dev"
//     console.log(this.username);  // this can't work this show undefined. so this keyword works only in objects.
//     console.log(this);  // but it shows global object. but phir bhi hum use nhi kr paa rhe this.username functons ke andr.
// }
// chai();
// const chai=function(){
//     let username="dev"
//     console.log(this.username);  // this also can't work this show undefined. so this keyword works only in objects.
//     console.log(this);  // but it shows global object. but phir bhi hum use nhi kr paa rhe this.username functons ke andr.
// }
// chai();

// const chai = () =>{       //arrow function.
//     let username="dev"
//     console.log(this.username);  // this also can't work this show undefined.
//     console.log(this);  // but it shows empty object.
// }
// chai();

//const addtwo=(num1,num2)=> num1+num2   // this also works. called implicite return. we just don't need to write return keyword if our code is for just one line.
//const addtwo=(num1,num2)=> (num1+num2)  //this also works.

const addtwo=(num1,num2)=> ({name:"dev"})  // if we want to return object then parenthesis is necessary.
console.log(addtwo(2,3));
