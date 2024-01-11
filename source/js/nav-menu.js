let btn = document.querySelector(".main-nav__button");
let navList  = document.querySelector(".main-nav__list");
let navMain  = document.querySelector(".main-nav");

navMain.classList.remove('main-nav--no-js');

btn.addEventListener('click', function () {
  console.log("hello");
  if (btn.classList.contains('main-nav__button--open')) {
    btn.classList.toggle('main-nav__button--close');
    btn.classList.toggle('main-nav__button--open');
    navList.classList.remove("main-nav__list--hidden");
  }
  else{
    btn.classList.remove('main-nav__button--close');
    btn.classList.add('main-nav__button--open');
    navList.classList.add("main-nav__list--hidden");
  }
})
