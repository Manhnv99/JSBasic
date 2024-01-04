const button=document.querySelector('button');

button.addEventListener('click',()=>{
    createToast();
})

createToast=()=>{
    //toast content
    let toastContent=document.createElement("div")
    toastContent.classList.add('toast-body')
    toastContent.innerHTML=
    `
        <i class="fa-solid fa-circle-check"></i>
        <span class="message">Thêm Sản Phẩm Thành Công</span>
        <span class="countdown"></span>
    `

    //toast container
    let toastContainer=document.getElementsByClassName('toast-container')[0]
    toastContainer.appendChild(toastContent)
    console.log(toastContainer);

    setTimeout(()=>{
        toastContent.style.animation='endd ease-in-out 1.5s forwards'
    },3000)

    setTimeout(()=>{
        toastContent.remove()
    },6000)
}