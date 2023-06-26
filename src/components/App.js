import { useState } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function submitForm(evt) {
    evt.preventDefault();
    closeAllPopups();
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="edit-profile"
          form="form-profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onSubmit={submitForm}
        >
          <div className="form__section">
            <input
              className="form__input form__input_name"
              name="name"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              id="profile-name"
            />
            <span className="form__input-error_active form__input-error"></span>
          </div>
          <div className="form__section">
            <input
              className="form__input form__input_info"
              name="about"
              type="text"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              id="profile-info"
            />
            <span className="form__input-error_active form__input-error"></span>
          </div>

        </PopupWithForm>
        <PopupWithForm
          name="cards"
          form="form-add-card"
          title="Новое место"
          buttonText="Сохранить"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onSubmit={submitForm}
        >
          <div className="form__section">
            <input
              className="form__input form__input_title"
              name="name"
              type="text"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
              id="card-name-input"
            />
            <span className="form__input-error_active form__input-error"></span>
          </div>
          <div className="form__section">
            <input
              className="form__input form__input_link"
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              required
              id="card-link-input"
            />
            <span className="form__input-error_active form__input-error"></span>
          </div>

        </PopupWithForm>
        <PopupWithForm
          name="confirm"
          form="form-delete-card"
          title="Вы уверены?"
          buttonText="Да"
        ></PopupWithForm>
        <PopupWithForm
          name="avatar"
          form="form-avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onSubmit={submitForm}
        >
          <div className="form__section">
            <input
              className="form__input form__input_link"
              name="avatar"
              id="avatar-link-input"
            />
            <span className="form__input-error_active form__input-error"></span>
          </div>

        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;