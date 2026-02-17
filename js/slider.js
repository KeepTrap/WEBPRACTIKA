/*
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    pagination: ".swiper-pagination",
    grabCursor: true,
    speed: 1000,
    paginationClickable: true,
    parallax: true,
    autoplay: false,
    effect: "slide",
    mousewheelControl: 1,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});
*/

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    speed: 1000,
    parallax: true,
    autoplay: false,
    effect: "slide",
    
    mousewheel: {
        enabled: true,
        forceToAxis: true,
        sensitivity: 1,
        eventsTarget: 'container'
    },
    
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});