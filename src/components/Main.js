import React from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
    cards,
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick,
    onCardLike,
    onDeletedCard,
    onPopupConfirm,
}) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-unit">
                    <img
                        className="profile__avatar"
                        src={currentUser.avatar}
                        alt="Аватар"
                    />
                    <div className="profile__change-avatar" onClick={onEditAvatar}></div>
                </div>
                <div className="profile__info">
                    <div className="profile__person">
                        <h1 className="profile__username">{currentUser.name}</h1>
                        <button
                            className="profile__edit-button"
                            type="button"
                            aria-label="Редактировать профиль"
                            onClick={onEditProfile}
                        >
                        </button>
                    </div>
                    <p className="profile__text">{currentUser.about}</p>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    aria-label="Добавить место"
                    onClick={onAddPlace}
                >
                </button>
            </section>

            <section className="places">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={onCardClick}
                        onCardDelete={onDeletedCard}
                        onCardLike={onCardLike}
                        onPopupConfirm={onPopupConfirm}
                    />
                ))}
            </section>
        </main>
    );
}

export default Main;