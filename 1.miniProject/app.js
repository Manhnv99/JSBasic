let images = document.querySelectorAll('.list-img img')
let mainImg=document.querySelector('.main img')
let btnPrev=document.querySelector('.left')
let btnNext=document.querySelector('.right')


let currentIndex=0;

updateImageByIndex=(index)=>{
    images.forEach(item=>{
        item.classList.remove('active')
    })
    currentIndex=index;
    mainImg.src=images[index].src
    images[index].classList.add('active')
}

images.forEach((item,index) =>{
    item.addEventListener('click',e=>{
        mainImg.style.opacity='0'
        setTimeout(()=>{
            this.updateImageByIndex(index)
            mainImg.style.opacity='1'
        },200)
        // item.classList.add('active')
    })
})

btnNext.addEventListener('click',a=>{
    mainImg.style.animation='0'
    if(currentIndex==images.length-1){
        currentIndex=0;
    }else{
        currentIndex++;
    }
    setTimeout(()=>{
        mainImg.style.animation='slideRight 1s ease-in-out'
        this.updateImageByIndex(currentIndex)
    },0)
})
btnPrev.addEventListener('click',a=>{
    mainImg.style.animation='0'
    if(currentIndex==0){
        currentIndex=images.length-1;
    }else{
        currentIndex--
    }
    setTimeout(()=>{
        mainImg.style.animation='slideLeft 1s ease-in-out'
        this.updateImageByIndex(currentIndex)
    },0)
})

//cách cũ
// for(let i=0;i<images.length;i++){
//     images[i].onclick=function(e){
//         // images[i].getElementsByTagName('img')[0].setAttribute('class','active')
//         // console.log(e.target.style='active')
//         let srcImg=e.target.src;
//         mainImg.src=srcImg
//         // console.log(e.target.src)
//     }
// }
