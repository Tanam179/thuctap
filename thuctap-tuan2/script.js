let menuBtn = document.querySelector('.menu-bars');
let navMobile = document.querySelector('.nav-right-bottom');
let menuIcon = document.querySelector('.menu-bars i');
let activityList = document.querySelectorAll('.activity-left-bottom li');
let activityIcon = document.querySelectorAll('.activity-left-bottom li a i');
let partnerList = document.querySelectorAll('.partner-right ul li');
let partnerIcon = document.querySelectorAll('.partner-right ul li i');
let navbarList = document.querySelectorAll('.nav-right-bottom ul li');

console.log(navbarList);


menuBtn.addEventListener('click', function() {
    navMobile.classList.toggle('active');
    menuIcon.classList.toggle('fa-times');
});

window.onscroll = () => {
  navMobile.classList.remove('active');
  menuIcon.classList.remove('fa-times');
};

for(let i = 0; i < navbarList.length; i++){
  navbarList[i].addEventListener('click', function(e) {
    e.preventDefault();
    for(let j = 0; j < navbarList.length; j++){
      navbarList[j].classList.remove('active');
      
    }
    navbarList[i].classList.add('active');
  })
};


for(let i = 0; i < activityList.length; i++){
  activityList[i].addEventListener('click', function(e) {
    e.preventDefault();
    for(let j = 0; j < activityList.length; j++){
      activityList[j].classList.remove('active');
      activityIcon[j].classList.remove('fas');
      activityIcon[j].classList.add('far');
    }
    activityList[i].classList.add('active');
    activityIcon[i].classList.toggle('fas');
  })
};

for(let i = 0; i < partnerList.length; i++){
  partnerList[i].addEventListener('click', function(e) {
    e.preventDefault();
    for(let j = 0; j < partnerList.length; j++){
      partnerList[j].classList.remove('active');
      partnerIcon[j].classList.remove('fas');
      partnerIcon[j].classList.add('far');
    }
    partnerList[i].classList.add('active');
    partnerIcon[i].classList.toggle('fas');
  })
};


$(document).ready(function() {
    $('.slider').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
    })
});


$(document).ready(function() {
    $('.partner-bottom').owlCarousel({
        items: 5,
        margin: 0,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,

        responsive: {
            0: {
              items:1,
              nav:true
            },
            
            500:{
                items:2,
                nav:true
            },
            800: {
              items:3,
              nav:true,
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            },
            1200: {
              items:5,
              nav:true,
              loop:true
            }
          }
    })
})


