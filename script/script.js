// modalFeedback

const modalFeedback = document.querySelector('.modal-feedback');
const buttonFeedback = document.querySelector('.write-us');
const buttonClose = document.querySelector('.modal-close');
const loginForm = modalFeedback.querySelector('.feedback-form');
const formName = modalFeedback.querySelector('.form-name-user');
const emailForm = modalFeedback.querySelector('.form-email');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}


buttonFeedback.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add('modal-show');

  if (storage) {
    formName.value = storage;
    emailForm.focus();
  } else {
    formName.focus();
  }

});

buttonClose.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove('modal-show');
  modalFeedback.classList.remove('modal-error');
});

loginForm.addEventListener ('submit', function (evt) {
  if (!formName.value || !emailForm.value) {
  evt.preventDefault();
  modalFeedback.classList.remove('modal-error');
  modalFeedback.offsetWidth = modalFeedback.offsetWidth;
  modalFeedback.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
    localStorage.setItem('name', formName.value);
    }
  }
});

window.addEventListener ('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains('modal-show')) {
      evt.preventDefault();
      modalFeedback.classList.remove('modal-show');
      modalFeedback.classList.remove('modal-error');
    }
  }
});


// modalMap

const mapLink = document.querySelector('.contacts-map');
const modalMap = document.querySelector('.modal-map');
const mapClose = modalMap.querySelector('.modal-close');

mapLink.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});

mapClose.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal-show');
});

window.addEventListener ('keydown', function (evt) {

  if (evt.keyCode === 27) {
    if (modalMap.classList.contains('modal-show')) {
      evt.preventDefault();
      modalMap.classList.remove('modal-show');
    }
  }
})

//modalCart

const buttonBuy = document.querySelector('.button-buy');
const modalCart = document.querySelector('.modal-cart');
const cartClose = modalCart.querySelector('.modal-close');

buttonBuy.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modalCart.classList.add('modal-show');
});

cartClose.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modalCart.classList.remove('modal-show');
});

window.addEventListener ('keydown', function (evt) {

  if (evt.keyCode === 27) {
    if (modalCart.classList.contains('modal-show')) {
      evt.preventDefault();
      modalCart.classList.remove('modal-show');
    }
  }
})