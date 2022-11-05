'use strict';

let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');

burger.addEventListener('click', (event) => {
	event.preventDefault();
	menu.classList.toggle('show');
});

$(function() {

	// Slider
	$('.reviews__inner').slick({
		speed: 800,
		autoplay: true,
  		autoplaySpeed: 1500,
  		infinite: true
	});

})