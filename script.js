AOS.init({
  // Global settings:
  disable: "", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-center", // defines which position of the element regarding to window should trigger the animation
});

const name = "DON RAY";
let age = 29;
let boo = true;

const header = document.querySelector("#header");
const navLinks = document.querySelectorAll(".nav__link");
const testBtn = document.querySelector("#testBtn");

console.log(navLinks);

function sayHello() {
  let message = "Hello " + name;
  console.log(message);
}

sayHello();

// Comment

/*
Comment
*/
function simpleMath(a, b) {
  let result = a + b;
  return result;
}

let sum = simpleMath(121, 223);

console.log(sum);

window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
  let scrollPos = window.scrollY;

  if (scrollPos > 0) {
    header.classList.add("white");
  } else {
    header.classList.remove("white");
  }
}

for (let navItem of navLinks) {
  navItem.addEventListener("click", function () {
    console.log(navItem.text);
  });
}

//////////////! боковое меню jquery ///////////////////////////////
/*
$(".menu-btn").on("click", function (e) {
  e.preventDefault();
  $(".menu").toggleClass("menu-active");
  $(".content").toggleClass("content-active");
});
*/

// !!! circle menu !!! //
$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu').toggleClass('menu_active');
});


/* //!Когда пользователь прокручивает вниз, скрыть навигационную панель. Когда пользователь прокручивает вверх, показать навигационную панель */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0rem";
  } else {
    document.getElementById("header").style.top = "-7.5rem";
  }
  prevScrollpos = currentScrollPos;
};

//! скрипт перехода к нужному блоку(JavaScript)
$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    3;
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 5500);
  });
});


/* //! this code is content changes when scrolls !//
gsap.registerPlugin(ScrollTrigger);
// 0
gsap.to('.stroke4_content__left',{
    scrollTrigger:{
        trigger:'.stroke4_content_right_block1',
        start:"top bottom",
        // markers:true,
        scrub: true
    },
    background: "red",

})
// 1
gsap.to('.stroke4_content__left',{
    scrollTrigger:{
        trigger:'.stroke4_content_right_block1',
        start:"bottom 50%",
        // markers:true,
        scrub: true
    },
    background: "red",

})

//2
gsap.to('.stroke4_content__left',{
    scrollTrigger:{
        trigger:'.stroke4_content_right_block2',
        start:"bottom 50%",
        scrub: true
    },
    background: "green",

})
//3
gsap.to('.stroke4_content__left',{
    scrollTrigger:{
        trigger:'.stroke4_content_right_block3',
        start:"bottom 50%",
        scrub: true
    },
    background: "blue",

})
//4
gsap.to('.stroke4_content__left',{
    scrollTrigger:{
        trigger:'.stroke4_content_right_block4',
        start:"bottom 50%",
        scrub: true
    },
    background: "gold",

})
//5
gsap.to('.stroke4_content__left',{
    scrollTrigger:{
        trigger:'.stroke4_content_right_block5',
        start:"bottom 50%",
        scrub: true
    },
    background: "black",

}); */ //! end of code !//

