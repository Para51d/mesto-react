import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardLike, onCardDelete, onCardClick, onPopupConfirm }) {
    const currentUser = useContext(CurrentUserContext);
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    const likeButtonClassName = `card__button-like ${isLiked ? "card__button-like_active" : ""
        }`;
    const isOwner = card.owner._id === currentUser._id;

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
        onPopupConfirm(true);
    }

    function handleCardClick() {
        onCardClick(card);
    }
    return (
        <figure className="card">
            {isOwner && (
                <div
                    className="card__button-removal"
                    type="button"
                    onClick={handleDeleteClick}
                >
                </div>
            )}
            <img className="card__image"
                src={card.link}
                alt={card.name}
                onClick={handleCardClick}
            />
            <figcaption className="card__caption">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like">
                    <button
                        className={likeButtonClassName}
                        onClick={handleLikeClick}
                        type="button"
                        aria-label="Нравится"
                    >
                    </button>
                    <span className="card__like-counter">{card.likes.length}</span>
                </div>
            </figcaption>
        </figure>
    )
}

export default Card;