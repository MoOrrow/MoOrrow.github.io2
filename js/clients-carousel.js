$(document).ready(function(){
  $('.clients-carousel').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: $('.clients-button__right'),
  prevArrow: $('.clients-button__left')
  });
});