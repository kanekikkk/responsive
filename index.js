const navUl = document.querySelector(".nav-ul");
const toggle = document.querySelector(".toggle");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const body = document.querySelector("body");
const header = document.querySelector("header");
toggle.addEventListener("click",function(){
    navUl.classList.toggle("nav-hidden");
    hamburger.classList.toggle("nav-hidden");
    header.classList.toggle("nav");
    body.classList.toggle("fix");
    close.classList.toggle("nav-hidden");
});
const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    responsive: {
        560: {
          dots: false 
        }
    }    
  });