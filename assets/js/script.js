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
