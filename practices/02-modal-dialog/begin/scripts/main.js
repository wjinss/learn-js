// 우진방법

const modalOverlay = document.querySelector(".modal-overlay");
const closeModalBtn = modalOverlay.querySelector(".modal-close-button");
const openModalBtn = document.querySelector(".modal-open-button");
const MODAL_OPEN_CLASSNAME = "modal-open";

const modalOpen = () => {
  modalOverlay.classList.add(MODAL_OPEN_CLASSNAME);
};
const modalOff = () => {
  modalOverlay.classList.remove(MODAL_OPEN_CLASSNAME);
};

openModalBtn.addEventListener("click", modalOpen);
closeModalBtn.addEventListener("click", modalOff);

// 야무쌤 방법
// const body = document.body
// const modal_open_button = document.querySelector('main .modal-open-button')
// const modal_close_button = document.querySelector('.modal-overlay .modal-close-button')

// modal_open_button.addEventListener('click', () => {
//   body.classList.add('modal-is-open')
// })

// modal_close_button.addEventListener('click', () => {
//   body.classList.remove('modal-is-open')
// })
// 접근성 4원칙
// 1. 인식의 용이성
// 2. 운용의 용이성
// 3. 이해의 용이성
// 4. 견고성
