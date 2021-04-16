const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');

function togglePopup (){
    popup.classList.toggle('popup_is-opened');
}

openPopupButton.addEventListener("click", togglePopup);

closePopupButton.addEventListener("click", togglePopup);
