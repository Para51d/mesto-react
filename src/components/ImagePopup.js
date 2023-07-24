import React from "react";

function ImagePopup({ card, onClose, onCloseOverlay }) {
    return (
        <section
            className={`popup popup_type_image ${card.name ? "popup_opened" : ""}`}
            onClick={onCloseOverlay}
        >
            <figure className="popup__image-container">
                <button
                    className="popup__button-close"
                    type="button"
                    aria-label="Закрыть окно"
                    onClick={onClose}
                >
                </button>
                <img className="popup__image" src={card?.link || ""} alt={card?.name} />
                <figcaption className="popup__figcaption">{card?.name}</figcaption>
            </figure>
        </section>
    )
}

export default ImagePopup;