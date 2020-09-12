/*global $ */
var loc, pathName, alt;

$(document).ready(function () {
    'use strict';
    //Menu mobile
    $('.hamburger').on('click touchstart', function (e) {
        $('.hamburger').toggleClass('is-active');
        $('html').toggleClass('menu-active');
        e.preventDefault();
    });
	//Rolagem suave
   $('a[href^="#"]').on('click', function(e) {
	  e.preventDefault();
	  var id = $(this).attr('href'),
	  targetOffset = $(id).offset().top;
		
	  $('html, body').animate({ 
		scrollTop: targetOffset - 100
	  }, 700);
	});
	$("#find").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.125305125585!2d-35.63568998522801!3d-6.754570095117361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7adc7e30f4fbf23%3A0x6e9343f0fe5e5f31!2sStudio%20Val%20Cabeleireiros!5e0!3m2!1spt-BR!2sbr!4v1592424030666!5m2!1spt-BR!2sbr");
});
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
//$('#myMosaic').Mosaic();