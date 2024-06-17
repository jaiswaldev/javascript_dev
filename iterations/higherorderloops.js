//these loops are array and object specifific.
//for of loop.
const arr=[23,2,23,4,432,4]
for (const iterator of arr) { // u can apply also on strings or maps.
    // console.log(iterator);
}
//Maps. //does'nt contain duplicates keys.

const map=new Map()
map.set("Name","dev jaiswal")
map.set("age",22)
map.set("Name","lakhan")   //overwrite ho jyega yha phele wali name key mei.
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':', value);
}

//for of loop can't iterate on objects. for objects we use for in loop.

//for in loop.
const myobj={
    js: "javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myobj) {
//    console.log(key,":",myobj[key]);
} //also valid for arrays and strings. but for maps we can't use for in loop it does'nt show any type of error but here map is non iteratable.

//for each loop.
// const coding=["js","python","cpp","ruby","rust"]

// coding.forEach(function(item){
    // console.log(item);
// })
// coding.forEach((value)=>{
//   console.log(value);
// })

function printme(item){
    // console.log(item);
}
// coding.forEach(printme)   // this also works.

// coding.forEach((items,keys,array)=>{   // this not only having excess items of array iske pss keys or complete array ka bhi access.
    //   console.log(items,keys,array);
//  })

 const mycoding=[
    {
        languagename:"javascript",
        file:"js"
    },
    {
        languagename:"java",
        file:"java"
    },
    {
        languagename:"python",
        file:"py"
    }
 ]

 mycoding.forEach((item)=>{
    //  console.log(item.file);
 })

//  const coding=["js","python","cpp","ruby","rust"]

//  const value= coding.forEach( (item)=>{
//     // console.log(item);               // this foreach loop can't return any value.
//     return item
//  })
//  console.log(value);  //output is undefined.


//filter operation/loop.

// const mynums=[0,1,2,3,4,5,6,7,8,9]
// const newnums=mynums.filter((num)=> num>8)   //this filter operation returns the values if condition satisfies (returns in form of another array).
// console.log(newnums);

// const newnums=[]
// mynums.forEach((num)=>{
//     if(num>=5){
//         newnums.push(num)
//     }
// })
// console.log(newnums);

//map operation/loop.

// const mynums=[0,1,2,3,4,5,6,7,8,9]
// const newnums=mynums.map((num)=> num+10)  // it updates the arr values.
// console.log(newnums);

// const newnums=[]
// mynums.forEach((num)=>{
//     newnums.push(num+10)
// })
// console.log(newnums);

// const newnums=mynums.map((num)=> num*10).map((num)=> num+1).filter((num)=>num>=50)     //this is called channing.
// console.log(newnums);

//reduce operation/loop.

const mynums=[0,1,2,3,4,5,6,7,8,9]
// const total=mynums.reduce(function(acc,curr){
//    return acc+curr
// },0)
// console.log(total);
// 

const soppingcart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"cpp course",
        price:1999
    },
    {
        itemname:"web development course",
        price:4999
    }
]
 
const totalprice=soppingcart.reduce((acc,item)=> acc+item.price,0)
console.log(totalprice);

