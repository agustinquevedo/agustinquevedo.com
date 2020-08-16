let bg = document.getElementById("header");

window.addEventListener("scroll", function(){
    let value = window.scrollY

    bg.style.backgroundPositionY = value * 0.05 + 'px';

})