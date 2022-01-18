$(document).ready(function() {
    $('.slider').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        dots: true,
        nav: false,
        navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
    });
});

$(document).ready(function() {
    $('.new-product-images').owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
              items:1,
              nav: false,
            },
            562:{
                items:2,
                nav: false,       
            },

            768:{
                items: 3,
                nav: false,
            },

            960:{
                items: 3,
                nav: false,
            },
            1200:{
                items:4,
                loop:false
            },

          }
    });
});

$(document).ready(function() {
    $('.all-category .container').owlCarousel({
        items: 5,
        margin: 20,
        loop: true,
        dots: false,
        nav: false,
        navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
              items:1,
            },
            562:{
                items:2,          
            },

            768:{
                items: 3,
            },

            960:{
                items: 4,
            },
            1200:{
                items:5,
                loop:false
            },

          }
    });
});


$(document).ready(function() {
    $('.selling-product-images').owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        dots: false,
        nav: false,
        navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
        autoplay: true,
        responsive: {
            0: {
              items:1,
            },
            562:{
                items:2,          
            },

            860:{
                items: 3,
            },
            1200:{
                items:4,
                loop:false
            },

          }
    });
});


let menuBtn = document.querySelector('.menu');
let navbarMobile = document.querySelector('.navbar-mobile');
let arrowClose = document.querySelector('.arrow-close');
let overlay = document.querySelector('.overlay');



menuBtn.addEventListener('click', function() {
    navbarMobile.classList.add('active');
    overlay.classList.add('active');
})

arrowClose.addEventListener('click', function() {
    navbarMobile.classList.remove('active');
    overlay.classList.remove('active');

})

window.onscroll = function() {
    navbarMobile.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', function() {
    navbarMobile.classList.remove('active');
    overlay.classList.remove('active');
})