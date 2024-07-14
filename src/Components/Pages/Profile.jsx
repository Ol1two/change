import { useState, useEffect } from "react"
import { auth } from "../../firebaseConfig.js"
import { updateEmail, updatePassword, updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import "./CSS-for-pages/Profile_Auth.css"

export default function Profile() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.currentUser) {
            setEmail(auth.currentUser.email);
            setNickname(auth.currentUser.displayName);
        } else {
            navigate("/profile/auth"); // Redirect to login page if user is not logged in
        }
    }, [navigate]);

    const handleUpdateEmail = async () => {
        try {
            await updateEmail(auth.currentUser, email);
            alert("Email updated successfully");
        } catch (error) {
            alert("Невозможно поменять почту")
        }
    };

    const handleUpdatePassword = async () => {
        try {
            await updatePassword(auth.currentUser, password);
            alert("Password updated successfully");
        } catch (error) {
            alert("Невозможно поменять пароль")
        }
    };

    const handleUpdateProfile = async () => {
        try {
            await updateProfile(auth.currentUser, {
                displayName: nickname,
            });
            alert("Profile updated successfully");
        } catch (error) {
            alert("Невозможно поменять никнейм")
        }
    };

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate("/");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth">
                <h2>Профиль</h2>
                <form className="form-aut-user">
                    <label htmlFor="email-user"> Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email-user"
                        />
                        <span className="profile-button-container">
                        <button onClick={handleUpdateEmail}>Изменить email</button>
                    </span>
                    </label>

                    <label>Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="profile-button-container">
                        <button onClick={handleUpdatePassword}>Изменить пароль</button>
                    </span>
                    </label>

                    <label>Nickname:
                        <input
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                        />
                        <span className="profile-button-container">
                        <button onClick={handleUpdateProfile}>Изменить никнейм</button>
                    </span>
                    </label>
                </form>
                <div className="profile-button-logout">
                    <button onClick={handleLogout}>Выйти из аккаунта</button>
                </div>
            </div>
        </div>
    )
}