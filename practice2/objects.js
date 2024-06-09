// singleton-->when u create a object with constructor it means it's a single object like that(single instance).
//object.create


//object literals.
const mysymbl=Symbol("dev")
   //const jsuser={} //its an empty object.
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
console.log(typeof jsuser[mysymbl]);  //doubt



