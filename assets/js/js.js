const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let header__nav_a = $$(".header__nav a");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("header").style.height = "6rem";
    $(".logo").style.fontSize = "2.8rem";
    $(".header__nav-mobile").style.top = "6rem";
    for (let i = 0; i < header__nav_a.length; i++) {
      header__nav_a[i].style.fontSize = "1.5rem";
    }
    $("article").style.marginTop = "6rem";
  } else {
    $("header").style.height = "12rem";
    $(".logo").style.fontSize = "3.6rem";
    $(".header__nav-mobile").style.top = "12rem";

    for (let i = 0; i < header__nav_a.length; i++) {
      header__nav_a[i].style.fontSize = "2.4rem";
    }
    $("article").style.marginTop = "12rem";

  }
}
// --------------- end ---------------
// --------------- menuIcon ---------------
function menuIcon(x) {
  x.classList.toggle("change");
}
// --------------- end menuIcon ---------------
