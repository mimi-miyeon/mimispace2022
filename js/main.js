console.log('before include function')

console.log('after include function')

// header button
const header = document.querySelector('header');

const hamburger = document.getElementById('hamburger');
const topBread = hamburger.querySelectorAll('span')[0];
const patty = hamburger.querySelectorAll('span')[1];
const bottomBread = hamburger.querySelectorAll('span')[2];

const menuBg = document.getElementById('menuBg');

const mainMenu = document.getElementById('mainMenu');
const mainNav = document.querySelectorAll('#mainMenu .nav');
const contactMenu = document.getElementById('contactMenu');
const contactNav = document.querySelectorAll('#contactMenu .nav');


console.log('before btn click')
hamburger.addEventListener('click', () => {
  if(patty.style.opacity == 1) {
    //header class
    header.classList.add('on');

    // hamburger icon
    gsap.to(topBread, {y: 10})
    gsap.to(topBread, {scale: 0})
    gsap.to(topBread, {rotate: 45, delay: .1})
    gsap.to(topBread, {scale: 1, delay: .3})

    gsap.to(bottomBread, {y: -10})
    gsap.to(bottomBread, {scale: 0})
    gsap.to(bottomBread, {rotate: -45, delay: .1})
    gsap.to(bottomBread, {scale: 1, delay: .3})
    
    gsap.to(patty, {opacity: 0});

    // background
    gsap.to(menuBg, {x: 0, opacity: 1})

    // menu
    gsap.to(mainNav[0], {scale: 1, opacity: 1})
    gsap.to(mainNav[1], {scale: 1, opacity: 1, duration: .6})
    gsap.to(mainNav[2], {scale: 1, opacity: 1, duration: .9})
    gsap.to(contactNav[0], {scale: 1, opacity: 1})
    gsap.to(contactNav[1], {scale: 1, opacity: 1})
    gsap.to(contactNav[2], {scale: 1, opacity: 1})

    // scroll disabled
    document.body.setAttribute('style', 'overflow: hidden');
  } else {

    // hamburger icon
    gsap.to(topBread, {rotate: 0})
    gsap.to(topBread, {scale: 1, delay: .2})
    gsap.to(topBread, {y: 0, delay: .3})

    gsap.to(bottomBread, {rotate: 0})
    gsap.to(bottomBread, {scale: 1, delay: .2})
    gsap.to(bottomBread, {y: 0, delay: .3})
    
    gsap.to(patty, {opacity: 1});

    // background
    gsap.to(menuBg, {x: '100vw', opacity: 0})

    // menu
    gsap.to(mainNav[0], {scale: 0, opacity: 0})
    gsap.to(mainNav[1], {scale: 0, opacity: 0})
    gsap.to(mainNav[2], {scale: 0, opacity: 0})
    gsap.to(contactNav[0], {scale: 0, opacity: 0})
    gsap.to(contactNav[1], {scale: 0, opacity: 0})
    gsap.to(contactNav[2], {scale: 0, opacity: 0})

    // scroll abled
    document.body.setAttribute('style', 'overflow: auto');
    
    // header
    header.classList.remove('on');
  }
});
