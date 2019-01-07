$(document).ready(function(){
  $('.clients-carousel').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows:false,
  nextArrow: $('.clients-button__right'),
  prevArrow: $('.clients-button__left'),
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false
      }
    }
  ]
});
});