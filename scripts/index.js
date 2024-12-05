// Hamburger menu toggle

const menuBtn = document.getElementById('main-nav-button')
const menuLinks = document.getElementById('main-nav-list')
const buttonSVG = document.getElementById('button-svg')

menuBtn.addEventListener('click', function(){
    if (menuLinks.classList.contains('open')){
        menuLinks.classList.remove('open')
        menuLinks.classList.add('close')
        menuBtn.src = '/images/close.svg'
    } else if (menuLinks.classList.contains('close')){
        menuLinks.classList.remove('close');
        menuLinks.classList.add('open');
        menuBtn.src = '/images/menu.svg';
    }
})
