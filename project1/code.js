const boxes=document.querySelectorAll('.color')
const body=document.body
const h1=document.querySelector('h1')
console.log(h1);


boxes.forEach((box)=>{
   box.addEventListener('click', function(e){
     if(e.target.id==='grey'){
        body.style.backgroundColor=e.target.id;
         h1.style.color="black"
     }
     if(e.target.id==='yellow'){
        body.style.backgroundColor=e.target.id;
        h1.style.color="black"
     }
     if(e.target.id==='blue'){
        body.style.backgroundColor=e.target.id;
        h1.style.color="black"
     }
     if(e.target.id==='black'){
        body.style.backgroundColor=e.target.id;
        h1.style.color="white"
     }
   })
})