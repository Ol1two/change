import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebaseConfig.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "./CSS-for-pages/Profile_Auth.css"
import GoogleButton from "../../Pictures/GoogleIcon.png";


export default function AuthForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isRegister, setIsRegister] = useState(false)
    const navigate = useNavigate();

    const handleAuth = async () => {
        try {
            if (isRegister) {
                await createUserWithEmailAndPassword(auth, email, password)
                alert("Registration successful")
            } else {
                await signInWithEmailAndPassword(auth, email, password)
                alert("Login successful")
            }
            navigate("/profile")
        } catch (error) {
            alert("Пользователя не найдено. Проверьте email и пароль")
        }
    }

    const handleGoogleAuth = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            alert("Login with Google successful")
            navigate("/profile");
        } catch (error) {
            alert("Неизвестная ошибка с подключением Google аккаунта")
        }
    }

    return (
        <div className="auth-container">
            <div className="auth">
                <h2>{isRegister ? "Регистрация" : "Авторизация"}</h2>
                <form className="form-aut-user">
                    <label htmlFor="email"> Введите email:
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                        />
                    </label>
                    <label htmlFor="password"> Введите пароль:
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                        />
                    </label>
                </form>
                <div className="auth-button-container">
                    <button onClick={handleAuth}>
                        {isRegister ? "Зарегистрироваться" : "Авторизоваться"}
                    </button>
                    <button onClick={handleGoogleAuth} className="google-button">
                        Авторизация через Google
                        <img
                            src={GoogleButton}
                            alt="Авторизация через гугл аккаунт"
                            className="google-icon"
                        />
                    </button>
                    <button onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? "Уже есть аккаунт? Авторизация" : "Нет аккаунта? Регистрация"}
                    </button>
                </div>
            </div>
        </div>
    )
}