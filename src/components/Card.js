import React from "react";

function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card);
    }
    return (
        <div className="card">
            <button
                className="card__button-removal"
                type="button"
                aria-label="Удалить"
            >
            </button>
            <img className="card__image"
                src={props.card.link}
                alt={props.card.name}
                onClick={handleCardClick}
            />
            <div className="card__caption">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__like">
                    <button
                        className="card__button-like"
                        type="button"
                        aria-label="Нравится"
                    >
                    </button>
                    <p className="card__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;