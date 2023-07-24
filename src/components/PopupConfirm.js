import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupConfirm({
    onLoading,
    onClose,
    isOpen,
    onCardDelete,
    card,
    onCloseOverlay,
}) {
    function handleSubmit(evt) {
        evt.preventDefault();
        onCardDelete(card);
    }
    return (
        <PopupWithForm
            name="confirm"
            buttonText={onLoading ? `Удаление...` : `Да`}
            title="Вы уверены?"
            onClose={onClose}
            isOpen={isOpen}
            onSubmit={handleSubmit}
            onCloseOverlay={onCloseOverlay}
        />
    );
}
export default PopupConfirm;