import React from "react";

function PopupWithForm(props) {
    const isOpenPopup = props.isOpen ? "popup_opened" : "";

    return (
        <section className={`popup popup_${props.name} ${isOpenPopup}`}>
            <div className="popup__block">
                <button
                    className="popup__button-close"
                    type="button"
                    aria-label="Закрыть окно"
                    onClick={props.onClose}
                ></button>
                <form className="form" name={props.form} noValidate>
                    <h2 className="popup__header">{props.title}</h2>
                    {props.children}
                    <button
                        className="form__save"
                        type="submit"
                        aria-label="Сохранить"
                        onClick={props.onSubmit}
                    >
                        {props.buttonText || 'Сохранить'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;