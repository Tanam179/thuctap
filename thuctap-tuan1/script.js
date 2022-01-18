let btnMenu = document.querySelector('.menu');
let navbarMobile = document.querySelector('.navigation-mobile');
let btnCloseNavbar = document.querySelector('.close-btn')

let slider = document.querySelector('.slider');
let slider2 = document.querySelector('.slider2');
let introduce = document.querySelector('.introduce');
let service = document.querySelector('.service');
let statuss = document.querySelector('.status');
let sellingPoint = document.querySelector('.selling-point');
let news = document.querySelector('.news');
let price = document.querySelector('.price');
let footer = document.querySelector('.footer');


const appear = function () {
    navbarMobile.classList.add('active');  
    slider.style.display = 'none'
    slider2.style.display = 'none'
    introduce.style.display = 'none'
    service.style.display = 'none'
    statuss.style.display = 'none'
    sellingPoint.style.display = 'none'
    news.style.display = 'none'
    price.style.display = 'none'
    footer.style.display = 'none'
};



const disappear = function() {
    navbarMobile.classList.remove('active');
    slider.style.display = 'block'
    slider2.style.display = 'block'
    introduce.style.display = 'block'
    service.style.display = 'block'
    statuss.style.display = 'block'
    sellingPoint.style.display = 'block'
    news.style.display = 'block'
    price.style.display = 'block'
    footer.style.display = 'block'
    
}

btnMenu.addEventListener('click', appear)



btnCloseNavbar.addEventListener('click', disappear)

$(document).ready(function() {
    $('.slider').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    })
});

$(document).ready(function() {
    $('.slider2 .container .slider2-img').owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
        margin: 20,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                nav:true,
                padding:30,
            },
            750:{
                items:2,
                nav:true
            },
            997:{
                items:3,
                nav:true,
                loop:true
            },
            1200:{
                items:4,
                nav:true,
                loop:true
            }
           

        }
    })
});