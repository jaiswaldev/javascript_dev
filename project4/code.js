const submit=document.querySelector('#submit')
const restart=document.querySelector('#restart')
const message=document.querySelector('.message')
const remaining= document.querySelector('.remaining')
const userinpt= document.querySelector('#predictednumber')
let min=1
let max=100
let randomnumber= Math.floor(Math.random()*(max-min+1)) + min;
let numattempts=0

restart.setAttribute('disabled','')
submit.addEventListener('click',(e)=>{
   e.preventDefault()
   const number=parseInt(userinpt.value)
   checknum(number)
    
})

function checknum(num){
   numattempts++;
   if(numattempts!=0){
      restart.removeAttribute('disabled')
      startnewgame()
   }
   if(isNaN(num)){
      message.innerHTML= "Please Enter a Valid Number."
      remaining.innerHTML=`Remaining Attempts: ${10-numattempts}`
   }else if(num > 100 ){
      message.innerHTML= "Please Enter a Number Lesser then 101."
       remaining.innerHTML=`Remaining Attempts: ${10-numattempts}`
   }else if(num < 1){
      message.innerHTML= "Please Enter a Number Greater then 0."
      remaining.innerHTML=`Remaining Attempts: ${10-numattempts}`
   }
   else{
      if(numattempts == 10 ){
          message.innerHTML=`Game Over!! Random number was ${randomnumber}`
          userinpt.setAttribute('disabled','')
          submit.setAttribute('disabled','')
          startnewgame()
      }else{
         checkguess(num)
      }
      remaining.innerHTML=`Remaining Attempts: ${10-numattempts}`
   }
}

function checkguess(num){
   if(num > randomnumber ){
      message.innerHTML= "Please Enter Smaller Number."
      
   }else if(num < randomnumber ){
       message.innerHTML= "Please Enter Larger Number."
      
    }else {
        message.innerHTML= "YEAH!!! YOU WON."
        submit.setAttribute('disabled','')
        userinpt.setAttribute('disabled','')
        startnewgame()
    }
}

function startnewgame(){
    restart.addEventListener('click',function(e){
      userinpt.removeAttribute('disabled')
      submit.removeAttribute('disabled')
      restart.setAttribute('disabled','')
      userinpt.value= ''
      message.innerHTML=''
      randomnumber= Math.floor(Math.random()*(max-min+1)) + min;
      numattempts=0
      remaining.innerHTML=`Remaining Attempts: ${10-numattempts}`

    })
}
