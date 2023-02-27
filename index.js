const container = document.querySelector(".container")
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
});


let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');


document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
    btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});

// accordion 
new Accordion('.accordion-container', {
  triggerClass: 'ac-header',
  elementClass: 'ac',
  panelClass: 'ac-panel',
  showMultiple: false,
  collapse: true
});


// burger 
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav');
let menuLinks = document.querySelectorAll('.header-link')

burger.addEventListener('click', 
  function(){
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header-nav--active')

    document.body.classList.toggle('stop-scroll');
    
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header-nav--active');

    document.body.classList.remove('stop-scroll');

  })
})


// search 
let searchWindow = document.querySelector('.search-open');
let searchBtn = document.querySelector('.search');
let closeBtn = document.querySelector('.close-btn');

searchBtn.addEventListener('click', 
  function() {
    searchWindow.classList.toggle('search-open--active');

    document.querySelector('.header__header-logo').classList.toggle('header__header-logo--hidden');

    searchBtn.classList.toggle('search--hidden');

    document.querySelector('.header-nav').classList.toggle('header-nav--desktop-active');

  })

  closeBtn.addEventListener('click', 
  function() {
    searchWindow.classList.remove('search-open--active');

    document.querySelector('.header__header-logo').classList.remove('header__header-logo--hidden');

    searchBtn.classList.remove('search--hidden');

    document.querySelector('.header-nav').classList.remove('header-nav--desktop-active')

  })




