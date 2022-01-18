let header = document.querySelector('.header');
let slider = document.querySelector('.slider');

window.onscroll = function() {
    if(window.pageYOffset >= slider.clientHeight){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}


$(document).ready(function() {
    $('.slider').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        dots: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
    });
});


$(document).ready(function() {
    $('.event-left-bottom').owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,

        responsive: {
            0: {
              items:1,
              nav:false
            },
            768:{
                items:2,
                nav:false
            },
            1200:{
                items:3,
                nav:true,
                loop:false
            },

          }
    });
});

