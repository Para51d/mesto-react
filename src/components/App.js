import React from "react";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import ImagePopup from "./ImagePopup.js";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import PopupConfirm from "./PopupConfirm";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isPopupConfirmOpen, setIsPopupConfirmOpen] = useState(false);
  const [deletedCard, setDeletedCard] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((profileInfo) => setCurrentUser(profileInfo))
      .catch((err) => {
        console.log(err);
      });
    api
      .getInitialCards()
      .then((data) => {
        setCards(
          data.map((card) => ({
            _id: card._id,
            name: card.name,
            link: card.link,
            likes: card.likes,
            owner: card.owner,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPopupConfirmOpen(false);
    setDeletedCard({});
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function closeEscPress(evt) {
    if (evt.target === evt.currentTarget) {
      console.log();
      closeAllPopups();
    }
  }

  const isOpen =
    isEditAvatarPopupOpen ||
    isEditProfilePopupOpen ||
    isAddPlacePopupOpen ||
    isPopupConfirmOpen ||
    selectedCard.link;

  useEffect(() => {
    function closeEscPress(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeEscPress);
      return () => {
        document.removeEventListener("keydown", closeEscPress);
      };
    }
  }, [isOpen]);

  function handleUpdateAvatar(newAvatar) {
    setIsLoading(true);
    api
      .changeUserAvatar(newAvatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleUpdateUser(newUserInfo) {
    setIsLoading(true);
    api
      .editUserInfo(newUserInfo)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }
  function handleAddPlaceSubmit(data) {
    setIsLoading(true);
    console.log(data);
    api
      .addNewCard(data)

      .then((newCard) => {
        setCards([newCard, ...cards]);

        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    if (isLiked) {
      api
        ._removeLike(card._id)
        .then((newCard) =>
          setCards((state) =>
            state.map((item) => (item._id === card._id ? newCard : item))
          )
        )
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        ._addLike(card._id)
        .then((newCard) =>
          setCards((state) =>
            state.map((item) => (item._id === card._id ? newCard : item))
          )
        )
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleCardDelete(card) {
    setIsLoading(true);
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id));
        closeAllPopups();
      })

      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Header />
          <Main
            onEditProfile={setIsEditProfilePopupOpen}
            onAddPlace={setIsAddPlacePopupOpen}
            onEditAvatar={setIsEditAvatarPopupOpen}
            onPopupConfirm={setIsPopupConfirmOpen}
            onCardClick={setSelectedCard}
            onDeletedCard={setDeletedCard}
            onCardLike={handleCardLike}
            cards={cards}
          />
          <Footer />
          <EditAvatarPopup
            onUpdateAvatar={handleUpdateAvatar}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onLoading={isLoading}
            onCloseOverlay={closeEscPress}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onUpdateUser={handleUpdateUser}
            onClose={closeAllPopups}
            onLoading={isLoading}
            onCloseOverlay={closeEscPress}
          />

          <AddPlacePopup
            onAddPlace={handleAddPlaceSubmit}
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onLoading={isLoading}
            onCloseOverlay={closeEscPress}
          />

          <EditAvatarPopup
            onUpdateAvatar={handleUpdateAvatar}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onLoading={isLoading}
            onCloseOverlay={closeEscPress}
          />

          <PopupConfirm
            onClose={closeAllPopups}
            isOpen={isPopupConfirmOpen}
            onCardDelete={handleCardDelete}
            onLoading={isLoading}
            card={deletedCard}
            onCloseOverlay={closeEscPress}
          />

          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            onCloseOverlay={closeEscPress}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;