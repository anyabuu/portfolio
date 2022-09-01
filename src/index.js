import './scss/style.scss';

document.addEventListener('DOMContentLoaded', (event) => {

  const menuBtn = document.querySelector('.hero__mobile-menu-btn');
  const menu = document.querySelector('.hero__menu-mobile');
  const menuMobileList = document.querySelector('.hero__menu-list-mobile');
  const crossBtn = document.querySelector('.hero__mobile-menu-btn-cross');


  if (menuBtn && crossBtn) {

    menuBtn.addEventListener('click', () => {
      menu.classList.add('active');
      menuBtn.classList.add('active');
    })

    crossBtn.addEventListener('click', () => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
    })
  }

  menuMobileList.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
  })

})

document.addEventListener('DOMContentLoaded', (event) => {

  const menuList = document.querySelector('.header__nav-list');
  const menuLinks = document.getElementsByClassName('header__nav-item-link')

  menuList.addEventListener('click', (item) => {
    [...menuLinks].forEach(function (element) {
      if (element.classList.contains('active')) {
        element.classList.remove('active')
      }
    })

    item.target.classList.add('active')
  })

})








