// preloader
window.addEventListener("load",()=>document.querySelector(".preloader").classList.add("hide-preloader"))
// end preloader

// tooltip
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
})
// end tooltip

// nav item active
let navItem=document.querySelectorAll(".nav-item")
navItem.forEach(item=>{
    item.addEventListener("click",function(e) {
        document.querySelector(".navbar-nav li.active").classList.remove("active")
        this.classList.add("active")
    })
})
// end nav item active

// top btn
const topBtn=document.querySelector("#top-btn")
window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop>100){
       topBtn.style.display="block"
    }else{
       topBtn.style.display="none"

    }
})

topBtn.addEventListener("click",()=>{
    scrollTop(0,200)
})

function scrollTop(scroll,duration){
    let currentTime=duration
    let speed=5
    let doc=document.documentElement

    animation=()=>{
        if(currentTime<scroll) return

        setTimeout(() => {
            doc.scrollTop-=doc.scrollTop/(currentTime/speed)
            currentTime-=speed        
            animation()
        }, speed);
    }

    animation()
}
// end top btn

// js reveal
ScrollReveal().reveal('.reveal', { duration: 1000 });
ScrollReveal().reveal('.container', { duration: 500 });
ScrollReveal().reveal('.row', { duration: 500 });
// end js reveal

// gallery section
let galleryImg=document.querySelectorAll(".gallery-item")
galleryImg.forEach(item=>{
    item.addEventListener("click",function(e){
        let childImg=this.childNodes[1].src
        let mainPhoto=document.querySelector(".main-photo")
        mainPhoto.src=childImg
    })
})
// end gallery section