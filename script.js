const openMenu = document.querySelector('#menu-open');
const navBar = document.querySelector('.nav-links');
const overLay = document.querySelector('.overlay');
openMenu.addEventListener('click', () => {
  navBar.classList.toggle('active');
  if (navBar.classList.contains('active')) {
    openMenu.src = 'images/icon-close.svg';
    overLay.classList.add('active');
  } else {
    openMenu.src = 'images/icon-hamburger.svg';
    overLay.classList.remove('active');
  }
  document.addEventListener('scroll', () => {
    navBar.classList.remove('active');
    openMenu.src = 'images/icon-hamburger.svg';
    overLay.classList.remove('active');
  });
});
const prevBtn = document.querySelector('.left-arrow');
const nextBtn = document.querySelector('.right-arrow');
const heroImage = document.querySelector('.hero-picture img');
const heroText = Array.from(document.querySelectorAll('.hero-text'));
let currentHero = 1;
heroText[1].style.display = 'none';
heroText[2].style.display = 'none';
function heroToShow() {
  if (currentHero == 1) {
    heroImage.src = 'images/mobile-image-hero-1.jpg';
    heroText[0].style.display = 'block';
    heroText[1].style.display = 'none';
    heroText[2].style.display = 'none';
  } else if (currentHero == 2) {
    heroImage.src = 'images/mobile-image-hero-2.jpg';
    heroText[0].style.display = 'none';
    heroText[1].style.display = 'block';
    heroText[2].style.display = 'none';
  } else if (currentHero == 3) {
    heroImage.src = 'images/mobile-image-hero-3.jpg';
    heroText[0].style.display = 'none';
    heroText[1].style.display = 'none';
    heroText[2].style.display = 'block';
  }
  if (window.innerWidth > 600 && currentHero == 1) {
    heroImage.src = 'images/desktop-image-hero-1.jpg';
  } else if (window.innerWidth > 600 && currentHero == 2) {
    heroImage.src = 'images/desktop-image-hero-2.jpg';
  } else if (window.innerWidth > 600 && currentHero == 3) {
    heroImage.src = 'images/desktop-image-hero-3.jpg';
  }
}
window.addEventListener('resize', () => {
  heroToShow();
});
nextBtn.addEventListener('click', () => {
  currentHero++;
  if (currentHero > 3) {
    currentHero = 1;
  }
  heroToShow();
});
prevBtn.addEventListener('click', () => {
  currentHero--;
  if (currentHero < 1) {
    currentHero = 3;
  }
  heroToShow();
});
