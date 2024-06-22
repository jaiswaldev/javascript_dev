const clock=document.querySelector('.show')

setInterval(function(){
    let date=new Date()
    clock.innerText=date.toLocaleTimeString();
},1000)