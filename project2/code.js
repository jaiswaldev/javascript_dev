const form=document.querySelector('form')
const body= document.body
form.addEventListener('submit', function(e){
    e.preventDefault()

    const color=document.querySelector('#backgroundcolor').value
    body.style.backgroundColor=color
})
