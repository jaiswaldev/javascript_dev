// const promiseOne = new Promise(function(resolve, reject) {
//     //here we do async tasks.
//     setTimeout(function(){
//      console.log('task completed');
//      resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log('promise consumed');
// })


// new Promise(function(resolve, reject) {
   
//     setTimeout(function(){
//      console.log('task completed');
//      resolve()
//     },1000)
// }).then(function(){
//     console.log('promise consumed');
// })


// const promiseThree= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: 'dev jaiswal', email: 'jaiswaldev479@gmail.com'})
//     },1000)
// })
// promiseThree.then(function(user){
//   console.log(user);
// })

// const promiseFour= new Promise(function(resolve,reject){
    // setTimeout(function(){
    //   let error= true
    //   if(!error){
    //     resolve({username: 'dev jaiswal', email: 'jaiswaldev479@gmail.com'})
    //   } else{
    //     reject('Something went wrong')
    //   }
    // },1000)
// })
// promiseFour.then(function(user){
//   console.log(user);
//   return user.username
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log('promise is either rejected or resolved');
// })


const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= false
        if(!error){
          resolve({username: 'dev', password: '2454'})
        } else{
          reject('JS went wrong')
        }
      },1000)
});


async function consumePromisFive(){      // this can't handle errors directly.
    const response = await promiseFive;
    console.log(response);
}
