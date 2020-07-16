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
//    Altura do site
    alt = $(window).height();
//    Altura do site menos topo
    alt = alt - $('.header').height();
//    Altura do site menos banner e rodape
    alt = alt - $('.banner-principal').height();
    alt = alt - $('.footer').height();
    $('.interna').css({"min-height": +alt + "px"});
    
});
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
$('#myMosaic').Mosaic();