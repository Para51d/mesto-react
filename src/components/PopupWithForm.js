import React from "react";

function PopupWithForm({
    name,
    title,
    buttonText,
    children,
    isOpen,
    onSubmit,
    onClose,
    onCloseOverlay,
}) {

    return (
        <section
            className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}
            onClick={onCloseOverlay}
            id="popup_add"
        >
            <div className="popup__block">
                <button
                    className="popup__button-close"
                    type="button"
                    aria-label="Закрыть окно"
                    onClick={onClose}
                ></button>
                <h2 className="popup__header">{title}</h2>
                <form className={`form form-${name}`} noValidate onSubmit={onSubmit}>
                    {children}
                    <button
                        className="form__save"
                        type="submit"
                        aria-label="Сохранить"
                        onClick={onSubmit}
                    >
                        {buttonText || 'Сохранить'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;