let mydate = new Date()     //gives current date.
//  console.log(mydate.toString());
//  console.log(mydate.toDateString());
//  console.log(mydate.toISOString());
//  console.log(mydate.toJSON());
//  console.log(mydate.toLocaleDateString());
//  console.log(mydate.toLocaleString());
//  console.log(mydate.toLocaleTimeString());
//  console.log(mydate.toTimeString());
//  console.log(mydate.toUTCString());
 
// console.log(typeof mydate);   //object.


let mycreateddate=new Date(2003,6,20,12,44,32)   //take argument as year,month(0-based),date,hour,min,sec.
// console.log(mycreateddate.toLocaleString());

let mytime=Date.now()

// console.log(mytime);   //it is in miliseconds. time from January 1, 1970. in milisec.
// console.log(mycreateddate.getTime());


let newdate= new Date()
// console.log(newdate);
// console.log(newdate.getMonth());   //month based on 0-index.

console.log(newdate.toLocaleString('default',{
    timeZoneName:"short",      
    day: "2-digit"                                          // to know more function press ctrl+ space.
}))