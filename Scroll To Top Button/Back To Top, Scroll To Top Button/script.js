const scrollBtn = document.querySelector('#scroll-btn');

window.onscroll = function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollBtn.style.display = 'block';
    }
    else{
        scrollBtn.style.display = 'none';
    }
}
function upScroll(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;


}
function upScroll(){
    window.scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth',
    });
}