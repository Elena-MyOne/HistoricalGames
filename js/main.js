$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(function() {
	$(window).on("scroll", function() {
		 if($(window).scrollTop() > 50) {
			  $(".header").addClass("_changeBgc");
			  $(".header__link_active").addClass("_changeColorActive");
			  $(".header__link").addClass("_changeColor");
		 } else {
			 $(".header").removeClass("_changeBgc");
			 $(".header__link_active").removeClass("_changeColorActive");
			 $(".header__link").removeClass("_changeColor");
		 }
	});
});


$(document).ready(function(){
	$('.item-events__item-one').click(function(event){
		$('.item-events__title-one').toggleClass('open-block');
		$('.item-events__text-one').toggleClass('display-block');
	});
});
$(document).ready(function(){
	$('.item-events__item-two').click(function(event){
		$('.item-events__title-two').toggleClass('open-block');
		$('.item-events__text-two').toggleClass('display-block');
	});
});
$(document).ready(function(){
	$('.item-events__item-three').click(function(event){
		$('.item-events__title-three').toggleClass('open-block');
		$('.item-events__text-three').toggleClass('display-block');
	});
});
$(document).ready(function(){
	$('.item-events__item-four').click(function(event){
		$('.item-events__title-four').toggleClass('open-block');
		$('.item-events__text-four').toggleClass('display-block');
	});
});