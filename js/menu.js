/*$(document).ready(function(){
	var touch=$(".header-mobile__menu");
	var menu=$(".header__nav-menu");
	$(touch).on('click',function(e){
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).ready(function(){
		var w=$(window).width();
		if(w>767){
		$('.menu__header').click(function() {
  		$('.menu__content').slideToggle("slow");
});
		}
	});
});*/

$('.header-mobile__menu').click(function() {
  $('.header__nav').slideToggle("normal");
});

$('.nav-menu__dropdown-button').click(function() {
  $('.nav-menu__dropdown-list').slideToggle("normal");
  if ($(window).width() > 500) {
  	$('.nav-menu__dropdown-list').css('position', 'absolute');
  }	
  else {
  $('.nav-menu__dropdown-list').css('position', 'relative');	
  }
});
