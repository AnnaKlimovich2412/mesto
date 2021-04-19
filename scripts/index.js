const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');

function togglePopup (){
    popup.classList.toggle('popup_is-opened');
}

openPopupButton.addEventListener("click", togglePopup);

closePopupButton.addEventListener("click", togglePopup);

const formElement = document.querySelector('.popup__container');


function formSubmitHandler (evt) {
    evt.preventDefault();
    const inputName = formElement.querySelector('.popup__field-name');
    const inputProfession = formElement.querySelector('.popup__field-profession');

    let inputNameValue = inputName.value;
    let inputProfessionValue = inputProfession.value;

    const profileName = document.querySelector('.profile__name');
    const profileProfession = document.querySelector('.profile__profession');

    profileName.textContent = inputNameValue;
    profileProfession.textContent = inputProfessionValue;
    togglePopup();

}

formElement.addEventListener('submit',formSubmitHandler);
