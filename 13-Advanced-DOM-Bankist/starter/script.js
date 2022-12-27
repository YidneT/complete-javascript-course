'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // Old school way
  /* const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);

  window.scrollTo({
    left: s1Coords.left + window.pageXOffset, 
    top: s1Coords.top + window.pageYOffset,
    behavior: 'smooth'
  }); */

  section1.scrollIntoView({behavior: 'smooth'});
});


// ## Types of event handlers
/* 
const h1  = document.querySelector('h1');

h1.onmouseenter = function (e) {
  console.log('Clicked H1');
}

h1.addEventListener('click', function (e) {
  console.log('Clicke H1: addEventListner');
})

const alertH1 = function (e) {
  alert('Happiness');
  h1.removeEventListener('mouseenter', alertH1)
}
h1.addEventListener('mouseenter', alertH1); */

// ## Event propagation Bubbling and capturing



