'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnModal = document.querySelectorAll('.show-modal');
const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener('click', function(e){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
document.querySelector('.close-modal').addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});