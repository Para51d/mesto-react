import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({
    onLoading,
    onClose,
    onUpdateAvatar,
    isOpen,
    onCloseOverlay,
}) {
    const avatarRef = React.useRef(null);

    useEffect(() => {
        avatarRef.current.value = "";
    }, [isOpen]);

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    function handleChangeAvatar() {
        return avatarRef.current.value;
    }

    return (
        <PopupWithForm
            name="avatar"
            buttonText={onLoading ? `Сохранение...` : `Сохранить`}
            title="Обновить аватар"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            onCloseOverlay={onCloseOverlay}
        >
            <div htmlFor="avatar" className="form__section">
                <input
                    id="avatar"
                    required
                    className="form__input form__input_link"
                    type="url"
                    name="avatar"
                    onChange={handleChangeAvatar}
                    ref={avatarRef}
                    placeholder="Ссылка на аватар"
                />
                <span className="form__input-error_active form__input-error" id="avatar-error"></span>
            </div>
        </PopupWithForm>
    );
}
export default EditAvatarPopup;