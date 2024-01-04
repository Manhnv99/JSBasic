let button=document.querySelector('button')
let toast=document.getElementById('toast')
button.addEventListener('click',()=>{
    toast.style.animation=''
    setTimeout(()=>{
        toast.style.animation='slideOut ease-in-out 0.8s,fadeOut linear 1s 3s forwards'
    },100)
})