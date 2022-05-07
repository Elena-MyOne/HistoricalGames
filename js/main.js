//burger menu==========================================================
const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const headerList = document.querySelector(".header__list");

headerBurger.onclick = function () {
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	document.body.classList.toggle('lock')
}

headerList.addEventListener("click", function(event) {
   if( event.target.closest(".header__link")) {
      headerBurger.classList.remove('active');
      headerMenu.classList.remove('active');
      document.body.classList.remove('lock');
   }
});


window.onscroll = function() {
   const header = document.querySelector('.header');
   const headerLinkActive = document.querySelector('.header__link_active');
   const headerLink = document.querySelector('.header__link');

	let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	console.log('y=' + posTop);

   if (posTop > 50) {
      header.classList.add("_changeBgc");
      headerLinkActive.classList.add("_changeColorActive");
      headerLink.classList.add("_changeColor");
   } else {
      header.classList.remove("_changeBgc");
      headerLinkActive.classList.remove("_changeColorActive");
      headerLink.classList.remove("_changeColor");
   }
}





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



$(document).ready(function() {
	$("#switch-controls").on('click', 'span', function() {
	  $("#switch img").removeClass("_opaque");
 
	  var newImage = $(this).index();
 
	  $("#switch img").eq(newImage).addClass("_opaque");
 
	  $("#switch-controls span").removeClass("_selected");
	  $(this).addClass("_selected");
	});
 });