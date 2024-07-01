// singleton-->when u create a object with constructor it means it's a single object like that(single instance).
//object.create
const tinderuser=new Object()   //singleton object.

 
tinderuser.id="2214136"
tinderuser.name="Dev jaiswal"
tinderuser.isloggedin=false

// console.log(tinderuser);

tinderuser.moredetails={     //we can create functions inside objects.
    age: 22,
    color: "white",
    nature:{
         calm: true,
         looks: "good"
    }
}
// console.log(tinderuser.moredetails.nature.calm);  //u can access like this.

const obj1={
    1:"a",
    2:"b"
}

// const obj2={  tinderuser,obj1}   // this is going to merge both objects.
// const obj2= Object.assign({},tinderuser,obj1)  // it inserts obj1 and tinderuser into another object..
// console.log(obj2);
const obj2={...tinderuser,...obj1}    // generally we use this syntax for merging.
// console.log(obj2);  

const user=[                 //when data comes from database then it is in the form of array of objects. 
    {
        id: 2214136,
        email:"d@gmail.com"
    },
    {
       id: 2214137,
       email:"n@gmail.com"
    },
    {

    }
]
// console.log(user[1].email)

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));   // output is array to keys of tinderuser.
// console.log(Object.values(tinderuser));  // output is array to values of tinderuser.
// console.log(Object.entries(tinderuser));  

// console.log(tinderuser.hasOwnProperty("isloggedi"));  //just return true/false according to key present in object or not.

const course={
    coursename:"js in hindi",
    price:"free",
    courseinstructor:"hitesh sir"
}

// how to de-structure objects.
const {courseinstructor: ins, price:p} = course    // now u can define another name to the keys by yourself.

// console.log(ins);
// console.log(p);



//object literals.
//const jsuser={} //its an empty object.
const mysymbl=Symbol("dev")
//console.log(typeof mysymbl); //symbol.
const jsuser={
    name:"dev jaiswal",
    "half name": 'dev', //this is another way to add key in object.but we don't access this by using .half name.
    [mysymbl]:'myname',  // way to add symbol as a key.
    age:21,
    location:"jaipur",
    email:"jaiswaldev479@gmail.com",
    isloggedin: true,
    last_login:['monday','saturday']

}

// console.log(jsuser.age);
// console.log(jsuser["age"]);   //both have same output.
// console.log(jsuser[mysymbl]);  

jsuser.age=22
// Object.freeze(jsuser)     // now we can't change anything in jsuser.
// jsuser.email="devjaiswal479@gmail.com"
// console.log(jsuser);

jsuser.greetings=function(){
    console.log("Hello dev");
}

// console.log(jsuser.greetings());



//*********json API */
// {
//     "name":"dev jaiswal",
//     "id": "2214136",
//     "branch": "electronics and communication"
// }

//or

[
    {},
    {},
    {}
]




