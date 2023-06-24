export const options = {
    formSelector: ".form",
    submitSelector: ".form__save",
    inputSelector: ".form__input",
    inputInvalidClass: "form__input_invalid",
    inputSectionSelector: ".form__section",
    inputErrorClass: "form__input-error_active",
    inputErrorSelector: ".form__input-error",
    disabledButtonClass: "form__save_inactive",
};

export const buttonEditProfile = document.querySelector(".profile__edit-button");
export const buttonProfileCardEdit = document.querySelector(".profile__add-button");
export const buttonChangeAvatar = document.querySelector(".profile__change-avatar");

export const popupEditAvatar = ".popup_type_change-avatar";
export const formPopupChangeAvatar = document.querySelector(".form-avatar");

export const popupProfileSection = ".popup_type_profile";
export const formEditProfile = document.querySelector(".form-profile");

export const popupTypeAddPlace = ".popup_type_add-place";
export const formPopupTypeAddCard = document.querySelector(".form-add-card");
export const placeCards = ".places";
export const popupWithConfirmation = ".popup_type_delete-card";
export const popupIncreaseImage = ".popup_type_image";


export const cardTemplate = document.querySelector("#item").content;
export const buttonRemoveCard = cardTemplate.querySelector(".card__button-removal");

export const settings = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
    headers: {
        authorization: 'bc0e8a37-d4e2-49ec-b42f-132165b9c35f',
        'Content-Type': 'application/json'
    }
};

export const profileInfo = {
    nameSelector: ".profile__username",
    aboutSelector: ".profile__text",
    avatarSelector: ".profile__avatar"
};