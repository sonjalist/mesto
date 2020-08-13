const popup = document.querySelector('.pop-up');

function openPopup() {
popup.classList.add('pop-up_opened');
}

const editButton = document.querySelector('.profile__edit-button');

editButton.addEventListener('click', openPopup);

function closePopup() {
popup.classList.remove('pop-up_opened');
}

const closeButton = document.querySelector('.pop-up__close-button');

closeButton.addEventListener('click', closePopup);

const saveButton = document.querySelector('.pop-up__save-button');

saveButton.addEventListener('click', closePopup);


const formElement = document.querySelector('.pop-up__form');

let nameInput = document.querySelector('.pop-up__name');
let jobInput = document.querySelector('.pop-up__occupation');

let name = document.querySelector('.profile__name');
let occupation = document.querySelector('.profile__occupation');

nameInput.value = name.textContent;
jobInput.value = occupation.textContent;

function formSubmitHandler (evt) {

    evt.preventDefault(); 

    name.textContent = nameInput.value;
    occupation.textContent = jobInput.value;

}

formElement.addEventListener('submit', formSubmitHandler);