// Immediately invoked function expressions(IIFE).

// when we want to avoid problems of global scope pollution. we use iife. jo function immediately execute ho jye.

// (function chai(){    //named IIFE.
//     console.log("dev jaiswal");
// })();  // first () is for function defination. and second () is for execution. this colen is necessary if we use IIFE  next after this.

// (()=>{
//     console.log("dev jaiswal");
// })()

((name)=>{    //unnamed IIFE.
    console.log(`dev ${name}`);
})("jaiswal")    // send parameters like this.
