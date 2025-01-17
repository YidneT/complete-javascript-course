'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnModal = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');

for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener('click', function(e){
    document.querySelector('.btn-clicked').innerHTML = i+1;
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});