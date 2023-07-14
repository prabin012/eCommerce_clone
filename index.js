const bar= document.querySelector('#nav');
const navba= document.querySelector('#navbar');
const close= document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        navba.classList.add("show");
    })
}
if(close){
    close.addEventListener('click', () => {
        navba.classList.remove("show");
    })
}

const Mainimg= document.querySelector('#Mainimg');
const smallimg= document.getElementsByClassName('smallimg');

smallimg[0].onclick=function(){
    Mainimg.src=smallimg[0].src;

}
smallimg[1].onclick=function(){
    Mainimg.src=smallimg[1].src;

}
smallimg[2].onclick=function(){
    Mainimg.src=smallimg[2].src;

}
smallimg[3].onclick=function(){
    Mainimg.src=smallimg[3].src;

}