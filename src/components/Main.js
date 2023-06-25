import { useEffect, useState } from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([dataUser, cards]) => {
                setUserName(dataUser.name);
                setUserDescription(dataUser.about);
                setUserAvatar(dataUser.avatar);
                setCards(cards);
                console.log(dataUser);
                console.log(cards);
            })
            .catch((err) => {
                console.error(`Ошибка ${err}`);
            });
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-unit">
                    <img
                        className="profile__avatar"
                        src={userAvatar}
                        alt="Аватар"
                        onClick={props.onEditAvatar}
                    />
                </div>
                <div className="profile__info">
                    <div className="profile__person">
                        <h1 className="profile__username">{userName}</h1>
                        <button
                            className="profile__edit-button"
                            type="button"
                            aria-label="Редактировать профиль"
                            onClick={props.onEditProfile}
                        >
                        </button>
                    </div>
                    <p className="profile__text">{userDescription}</p>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    aria-label="Добавить место"
                    onClick={props.onAddPlace}
                >
                </button>
            </section>
            <div className="places">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={props.onCardClick}
                    />
                ))}
            </div>
        </main>
    );
}

export default Main;