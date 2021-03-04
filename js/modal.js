/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onModalOpen);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);



function onModalOpen() {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('show-modal');
};

function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('show-modal');
};

function onBackdropClick() {
    console.log(event.currentTarget);
    console.log(event.target);
    if (event.currentTarget === event.target) {
        onCloseModal();
    }
};

function onEscKeyPress(event) {
    
    console.log(event.code);
    if (event.code === 'Escape') {
        onCloseModal();
    }
}