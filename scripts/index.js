const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');

openPopupButton.addEventListener("click", function (){
    popup.classList.toggle('popup_is-opened');
});

closePopupButton.addEventListener("click", function (){
    popup.classList.toggle('popup_is-opened');
});