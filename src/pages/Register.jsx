import { useState } from "react";
import { authApi } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";
import "../css/pages/register.css";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const nav = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        setMsg("");
        try {
            await authApi.register(email, password);
            setMsg("Готово! Теперь можно войти.");
            setTimeout(() => nav("/login"), 700);
        } catch {
            setMsg("Ошибка регистрации (возможно email уже занят)");
        }
    };

    return (
        <div className="auth-wrap">
            <div className="card">
                <h2 className="auth-title">Регистрация</h2>
                <p className="auth-sub">Создай аккаунт, чтобы тестировать банк-систему</p>

                <form onSubmit={onSubmit} className="form">
                    <input className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input className="input" placeholder="Password (min 6)" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button className="btn btn-primary">Create account</button>

                    {msg && <div className="alert">{msg}</div>}
                </form>

                <hr />
                <p className="muted">
                    Уже есть аккаунт? <Link to="/login">Войти</Link>
                </p>
            </div>
        </div>
    );
}