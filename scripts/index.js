const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__container');
const inputName = formElement.querySelector('.popup__field-name');
const inputProfession = formElement.querySelector('.popup__field-profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

function togglePopup (){
    popup.classList.toggle('popup_is-opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    let inputNameValue = inputName.value;
    let inputProfessionValue = inputProfession.value;

    profileName.textContent = inputNameValue;
    profileProfession.textContent = inputProfessionValue;
    togglePopup();
}

formElement.addEventListener('submit',formSubmitHandler);
openPopupButton.addEventListener("click", togglePopup);
closePopupButton.addEventListener("click", togglePopup);
