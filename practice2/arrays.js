const myarr=[2,4,2,4,24,24,4,"dev",true,332432434324323432432n]
//arrays in js can be resizable and can be of different datatypes.

// arrays can be access based on zero based indexing.

//JavaScript array-copy operations create shallow copies.
    //--->shallow copies----A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
    //---> deep copies----A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

//***********array methods************** */


// myarr.push(34)     //add element to end of array.
// console.log(myarr)
// myarr.pop();         //remove element from end of the array.
// console.log(myarr)

// myarr.unshift(9)    // add element to starting of array.
// myarr.shift()         //remove element from starting.
// console.log(myarr);

// console.log(myarr.includes(9))   //simple gives true/false.
// console.log(myarr.indexOf(24)) 

// const newarray=myarr.join()   //convert myarray into string.
// console.log(typeof newarray);  //string.

// slice or splice.

// console.log("A", myarr);
// const myarr1=myarr.slice(1,3)  //it does'nt change the original array.and also not includes upper limit.
// console.log(myarr1);
// console.log("B", myarr);
// const myarr2=myarr.splice(1,3)  //it changes the original array.and also includes upper limit.
// console.log(myarr2)
// console.log("C", myarr);

const marvel_heros=['ironman','thor','spiderman']
const dc_heros=['superman','flash','batman']

// marvel_heros.push(dc_heros)    // it push dc_heros in marvel_heros as an single element. merge nhi krega ye dono ko.
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allheros=marvel_heros.concat(dc_heros)    // it creates another array to merge both of them.
// console.log(allheros);

const all_new_heros=[...dc_heros,...marvel_heros]   //it merges multiple arrays.
// console.log(all_new_heros);

const another_array=[3,4,5,6,[3,5,2],5,[547,673,[567,57,34]]]
const real=another_array.flat(Infinity)    //concatinate all arrays insides arrays.
// console.log(real);

// console.log(Array.isArray([3,4,5,5,565]))  // it's output is just true/false. based on given argument is array or not.
// console.log(Array.from('dev jaiswal'))   //it forms array of given argument. it converts string character into array elements.
// console.log(Array.from({name: "dev"}));  // it gives blank array bcz it gets confused ki value ka array bnau ya instance ka.
let a=200
let b=300
let c=900
// console.log(Array.of(a,b,c));   // forms array of given parameters.
