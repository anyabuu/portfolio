import './scss/style.scss';

async function check() {
  await fetch ('https://google.com');
}

check().then(()=> {
  console.log('success');
}).catch(()=> {
  console.log('error');
})


let menuBtn = document.querySelector('.hero__mobile-menu-btn');
let menu = document.querySelector('.hero__menu-mobile');
let bars = document.querySelectorAll('.hero__mobile-menu-bar')
menuBtn.addEventListener('click', function(){
  console.log(bars)
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active')
  bars[0].classList.toggle('change');
  bars[2].classList.toggle('change');
})