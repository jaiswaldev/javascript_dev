const form=document.querySelector('form')
const message=document.querySelector('.message')
let min=1
let max=100
let randomnumber= Math.floor(Math.random()*(max-min+1)) + min;
let guesses_remaning=10

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const number=parseInt(document.querySelector("#predictednumber").value)
    if(number > randomnumber && guesses_remaning!=0){
       message.innerHTML= "FUCK U!!! Enter Smaller Number."
       guesses_remaning--;
    }else if(number < randomnumber && guesses_remaning!=0){
        message.innerHTML= "FUCK U!!! Enter Larger Number."
        guesses_remaning--;
     }else if(number == randomnumber && guesses_remaning!=0){
         message.innerHTML= "YEAH!!! YOU WON."
         guesses_remaning--;
     }else{
        message.innerHTML= "YOU LOOSER. FUCK U!"
     }
    
})