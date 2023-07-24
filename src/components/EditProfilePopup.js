import React, { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({
    isOpen,
    onUpdateUser,
    onLoading,
    onClose,
    onCloseOverlay,
}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [about, setAbout] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
    }, [currentUser, isOpen]);

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateUser({
            name: name,
            about: about,
        });
    }

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeAbout(evt) {
        setAbout(evt.target.value);
    }
    return (
        <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            buttonText={onLoading ? `Сохранение...` : `Сохранить`}
            onSubmit={handleSubmit}
            onClose={onClose}
            isOpen={isOpen}
            onCloseOverlay={onCloseOverlay}
        >
            <div htmlFor="name" className="form__section">
                <input
                    id="name"
                    required
                    className="form__input form__input_name"
                    type="text"
                    name="name"
                    value={name || ""}
                    onChange={handleChangeName}
                    placeholder="Ваше имя"
                    minLength="2"
                    maxLength="40"
                />
                <span className="form__input-error_active form__input-error" id="name-error"></span>
            </div>
            <div htmlFor="position" className="form__section">
                <input
                    id="position"
                    required
                    className="form__input form__input_info"
                    type="text"
                    name="about"
                    value={about || ""}
                    onChange={handleChangeAbout}
                    placeholder="О себе"
                    minLength="2"
                    maxLength="200"
                />
                <span className="form__input-error_active form__input-error" id="position-error"></span>
            </div>
        </PopupWithForm>
    );
}
export default EditProfilePopup;