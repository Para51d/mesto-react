import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({
    onClose,
    onAddPlace,
    onLoading,
    isOpen,
    onCloseOverlay,
}) {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {
        setName("");
        setLink("");
    }, [isOpen]);

    function handleSubmit(evt) {
        evt.preventDefault();
        onAddPlace({
            name: name,
            link: link,
        });
    }

    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    function handleLinkChange(evt) {
        setLink(evt.target.value);
    }

    return (
        <PopupWithForm
            name="place"
            buttonText={onLoading ? `Сохранение` : `Создать`}
            title="Новое место"
            onSubmit={handleSubmit}
            onClose={onClose}
            isOpen={isOpen}
            onCloseOverlay={onCloseOverlay}
        >
            <div htmlFor="title" className="form__section">
                <input
                    id="title"
                    required
                    className="form__input form__input_title"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Название"
                    minLength="2"
                    maxLength="30"
                    onChange={handleNameChange}
                />
                <span className="form__input-error_active form__input-error" id="title-error"></span>
            </div>
            <div htmlFor="link" className="form__section">
                <input
                    id="link"
                    required
                    className="form__input form__input_link"
                    type="url"
                    name="link"
                    value={link}
                    onChange={handleLinkChange}
                    placeholder="Ссылка на картинку"
                />
                <span className="form__input-error_active form__input-error" id="link-error"></span>
            </div>
        </PopupWithForm>
    );
}
export default AddPlacePopup;