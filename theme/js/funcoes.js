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
    
});
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
$('#myMosaic').Mosaic();