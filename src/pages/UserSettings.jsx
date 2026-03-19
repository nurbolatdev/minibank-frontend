import { useRef, useState } from "react";
import "../css/pages/user-settings.css";

const DEFAULT_AVATAR =
    "https://cdn-icons-png.flaticon.com/512/9131/9131529.png";

export default function UserSettings() {
    const [name, setName] = useState(localStorage.getItem("user_name") || "User");
    const [email, setEmail] = useState(localStorage.getItem("user_email") || "");
    const [avatar, setAvatar] = useState(
        localStorage.getItem("user_avatar") || DEFAULT_AVATAR
    );
    const [message, setMessage] = useState("");

    const fileInputRef = useRef(null);

    const handleSave = () => {
        localStorage.setItem("user_name", name);
        localStorage.setItem("user_email", email);
        localStorage.setItem("user_avatar", avatar);
        setMessage("Profile updated successfully ✅");
    };

    const handleChooseFile = () => {
        fileInputRef.current?.click();
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setMessage("Please upload an image file");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatar(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="settings-page">
            <div className="card settings-card">
                <h2 className="card-title">User Settings</h2>
                <p className="muted">Update your profile information and avatar</p>

                <div className="settings-avatar-block">
                    <img src={avatar} alt="avatar" className="settings-avatar" />
                    <div className="settings-avatar-actions">
                        <button className="btn" type="button" onClick={handleChooseFile}>
                            Upload Photo
                        </button>
                        <button
                            className="btn"
                            type="button"
                            onClick={() => setAvatar(DEFAULT_AVATAR)}
                        >
                            Reset
                        </button>
                    </div>

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden-file-input"
                        onChange={handleAvatarChange}
                    />
                </div>

                <hr />

                <div className="form">
                    <input
                        className="input"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        className="input"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button className="btn btn-primary" type="button" onClick={handleSave}>
                        Save Changes
                    </button>

                    {message && <div className="alert">{message}</div>}
                </div>
            </div>
        </div>
    );
}