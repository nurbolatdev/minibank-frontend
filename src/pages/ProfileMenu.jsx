import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "../css/pages/profile-menu.css";

const DEFAULT_AVATAR =
    "https://cdn-icons-png.flaticon.com/512/9131/9131529.png";

export default function ProfileMenu() {
    const { logout } = useAuth();
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const userName = localStorage.getItem("user_name") || "User";
    const userEmail = localStorage.getItem("user_email") || "user@example.com";
    const userAvatar = localStorage.getItem("user_avatar") || DEFAULT_AVATAR;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="profile-menu-wrapper" ref={menuRef}>
            <button
                className="profile-trigger"
                onClick={() => setOpen((prev) => !prev)}
                type="button"
            >
                <img src={userAvatar} alt="avatar" className="profile-trigger-avatar" />
            </button>

            {open && (
                <div className="profile-dropdown">
                    <div className="profile-dropdown-header">
                        <img src={userAvatar} alt="avatar" className="profile-dropdown-avatar" />
                        <div>
                            <div className="profile-name">{userName}</div>
                            <div className="profile-email">{userEmail}</div>
                        </div>
                    </div>

                    <div className="profile-divider" />

                    <Link to="/user-settings" className="profile-item" onClick={() => setOpen(false)}>
                        <span>👤</span>
                        <span>User Settings</span>
                    </Link>

                    <Link to="/account-settings" className="profile-item" onClick={() => setOpen(false)}>
                        <span>⚙️</span>
                        <span>Account Settings</span>
                    </Link>

                    <Link to="/app-settings" className="profile-item" onClick={() => setOpen(false)}>
                        <span>🛠</span>
                        <span>App Settings</span>
                    </Link>

                    <div className="profile-divider" />

                    <button
                        className="profile-item profile-item-danger"
                        onClick={() => {
                            setOpen(false);
                            logout();
                        }}
                        type="button"
                    >
                        <span>⏻</span>
                        <span>Log Out</span>
                    </button>
                </div>
            )}
        </div>
    );
}