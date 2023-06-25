import React from "react";

function ImagePopup(props) {
    const isOpenPopup = props.card ? "popup_opened" : "";
    return (
        <section className={`popup popup_type_image ${isOpenPopup}`}>
            <div className="popup__image-container">
                <button
                    className="popup__button-close"
                    type="button"
                    aria-label="Закрыть окно"
                    onClick={props.onClose}
                >
                </button>
                <img
                    className="popup__image"
                    src={props.card ? props.card.link : ""}
                    alt={props.card ? props.card.name : ""}
                />
                <h2 className="popup__figcaption">{props.card ? props.card.name : ""}</h2>
            </div>
        </section>
    )
}

export default ImagePopup;