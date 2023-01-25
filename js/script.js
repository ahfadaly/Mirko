"use strict";

//  start navbar -----------------
let scorllTop = document.querySelector(".header");

window.addEventListener(`scroll`, () => {
  if (this.scrollY >= 100 ? scorllTop.classList.add("scroll_header") : scorllTop.classList.remove("scroll_header"));
});

// ----------------------------------
let navList = document.querySelectorAll(".header .ul-list li a");

navList.forEach((li) => {
  li.addEventListener(`click`, () => {
    document.querySelector(".header .ul-list li a.active").classList.remove("active");
    li.classList.add("active");
  });
});

// ----------------------------------

let links = document.querySelectorAll(".header .ul-list li a");

links.forEach((link) => {
  link.addEventListener(`click`, function (e) {
    e.preventDefault();
    let href = this.getAttribute("href");
    let offsetTop = document.querySelector(href).offsetTop - 50;
    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});

// ---------------------------

var cardSlider = new Swiper(".card-slider", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    dots: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    767: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

// AOS ANIMATION ON SCROLL
AOS.init({
  duration: 1000,
  easing: "ease",
  once: true,
});
