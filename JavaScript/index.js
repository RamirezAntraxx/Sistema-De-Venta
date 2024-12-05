let list= document.querySelector('.slider .list');
let items= document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active=0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if (active + 1 > lengthItems){
       active = 0; 
    }else{
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active - 1 < 0 ){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px' ;

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 5000)
}
dots.forEach((li, key) => {
    li.addEventListener('click', function (){
        active = key;
        reloadSlider();
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            const menu = link.nextElementSibling; // Selecciona el siguiente elemento hermano del enlace
            if (menu && menu.classList.contains('menu-desplegable')) {
                menu.style.display = 'block';
                menu.style.maxHeight = '1000px';
                menu.style.opacity = '1';
            }
        });

        link.addEventListener('mouseout', () => {
            const menu = link.nextElementSibling;
            if (menu && menu.classList.contains('menu-desplegable')) {
                menu.style.display = 'none';
                menu.style.maxHeight = '0';
                menu.style.opacity = '0';
            }
        });
    });
});