let navItems = document.querySelectorAll ('.nav__item');
let navButton = document.querySelector('.nav__button');
let navButtonSpan = document.querySelector('#button-span');
let navButtonImg = document.querySelector('#nav__button__img');

let funk = function () {
    navItems.forEach((element) => {
        element.classList.remove('nav__item-hidden');
    });
    if (window.innerWidth > 1064) {
        navItems.forEach((element, index) => {

            if (index >= 8 ) {
                element.classList.add('nav__item-hidden')
            }
            if (element.classList.contains('nav__item-hidden')) {
                navButtonSpan.innerHTML = 'Показать все';
                navButtonImg.classList.remove('nav__button-img-rotate-180');
            }
        });
    }
    else if (window.innerWidth > 740) {
        navItems.forEach((element, index) => {
            
            if ( index >= 6) {
                element.classList.add('nav__item-hidden')
            }
            if (element.classList.contains('nav__item-hidden')) {
                navButtonSpan.innerHTML = 'Показать все';
                navButtonImg.classList.remove('nav__button-img-rotate-180');
            }
        });
        
    }
    else if (window.innerWidth > 499) {
        navItems.forEach((element, index) => {
            
            if ( index >= 4) {
                element.classList.add('nav__item-hidden')
            }
            if (element.classList.contains('nav__item-hidden')) {
                navButtonSpan.innerHTML = 'Показать все';
                navButtonImg.classList.remove('nav__button-img-rotate-180');
            }
        });
    }
    else if (window.innerWidth <= 499){
        navItems.forEach((element) => {
            element.classList.remove('nav__item-hidden');
        });
    }
}

function roll() {
    if (navButtonSpan.innerText === 'Показать все') {
        
        navButtonSpan.innerHTML = 'Скрыть';
        navButtonImg.classList.add('nav__button-img-rotate-180');
        
        navItems.forEach((element) => {
            element.classList.remove('nav__item-hidden');
        });
        
    }
    
    else {
        navButtonSpan.innerHTML = 'Показать все';
        navButtonImg.classList.remove('nav__button-img-rotate-180');
        funk()
    }
}


window.addEventListener('resize', funk);
window.addEventListener('DOMContentLoaded', funk);

navButton.addEventListener('click', roll)


let swiper;

function initSwiper() {
    swiper = new Swiper ('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 16,
        slidesPerView: 1.2,
    })
    
}

function checkWindowSize() {
    if (window.innerWidth <= 500) {
        if (!swiper) {
            initSwiper();
        }
    } else {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
    }
    }
}

checkWindowSize();

window.addEventListener('resize', checkWindowSize);