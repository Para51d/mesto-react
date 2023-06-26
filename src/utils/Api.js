import { settings } from "./constants.js";

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _getResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: this._headers,
        }).then(this._getResponse);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: "GET",
            headers: this._headers,
        }).then(this._getResponse);
    }

    editUserInfo({ name, about }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        }).then(this._getResponse);
    }

    addNewCard({ name, link }) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        }).then(this._getResponse);
    }

    changeUserAvatar({ avatar }) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar,
            })
        }).then(this._getResponse);
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers
        }).then(this._getResponse);
    }

    _addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers
        }).then(this._getResponse);
    }

    _removeLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers
        }).then(this._getResponse);
    }

    handleLike(cardId, isLiked) {
        if (isLiked) {
            return this._removeLike(cardId);
        } else {
            return this._addLike(cardId);
        }
    }
}

const api = new Api(settings);

export default api;