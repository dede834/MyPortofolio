$(window).on('scroll', function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $('body').addClass('fixed-header');
  } else {
    $('body').removeClass('fixed-header');
  }
});

//Document Ready
$(document).ready(function () {
  //Typing animation
  new Typed('#type-it', {
    strings: ['Web Developer', '.Net Developer', 'Fullstack Developer'],
    typeSpeed: 100,
    loop: true,
  });

  $.scrollIt();
});

new Swiper('.card-wrapper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
