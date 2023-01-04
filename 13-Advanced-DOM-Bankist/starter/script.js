'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots');

///////////////////////////////////////
// Modal window

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

///////////////////////////////////////
// Scroll to features

btnScrollTo.addEventListener('click', function (e) {
  // Old school way
  /* const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);

  window.scrollTo({
    left: s1Coords.left + window.pageXOffset, 
    top: s1Coords.top + window.pageYOffset,
    behavior: 'smooth'
  }); */

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Sticky Navigation

/* const featureCord = section1.getBoundingClientRect().top;
window.addEventListener('scroll', function (e) {
  if (window.scrollY > featureCord) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');    
  }
}); */

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  rootMargin: `-${navHeight}px`,
  threshold: 0,
});
headerObserver.observe(header);

///////////////////////////////////////
// Reaveal Elements on Scroll
const allSections = document.querySelectorAll('section');
const secDisplay = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(secDisplay, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => {
  // section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

///////////////////////////////////////
// Lazy Loading Images
const allImages = document.querySelectorAll('.features__img');
const imgDisplay = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  const target = entry.target;
  target.src = target.dataset.src;
  target.classList.remove('lazy-img');
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(imgDisplay, {
  root: null,
  rootMargin: '100px',
  threshold: 0.15,
});
allImages.forEach(img => {
  imgObserver.observe(img);
});

///////////////////////////////////////
// Slider Component
const slideMe = function (curSlide) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
};
let currentSlide = 0;
slideMe(currentSlide);

slider.addEventListener('click', function (e) {
  if (e.target.classList.contains('slider__btn--left')) {
    // Previous Slide
    if (currentSlide > 0) {
      currentSlide--;
      slideMe(currentSlide);
    } else {
      currentSlide = slides.length - 1;
      slideMe(currentSlide);
    }
  } else if (e.target.classList.contains('slider__btn--right')) {
    // Next Slide
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      slideMe(currentSlide);
    } else {
      currentSlide = 0;
      slideMe(currentSlide);
    }
  }
});

// Create dot slider
const createDots = function () {
  slides.forEach((slide, i) => {
    const button = document.createElement('button');
    button.classList.add('dots__dot');
    button.dataset.slide = i;
    dotContainer.insertAdjacentElement('beforeend', button);
  });
};
createDots();
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    currentSlide = e.target.dataset.slide;
    slideMe(currentSlide);
  }
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
