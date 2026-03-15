import { useState } from "react";
import { authApi } from "../api/auth";
import { useAuth } from "../auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../css/pages/login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const auth = useAuth();
    const nav = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        setErr("");
        try {
            const res = await authApi.login(email, password);
            auth.login(res.data.token);
            nav("/");
        } catch {
            setErr("Неверный email или пароль");
        }
    };

    return (
        <div className="auth-wrap">
            <div className="card">
                <h2 className="auth-title">Вход</h2>
                <p className="auth-sub">Войди в MiniBank, чтобы управлять счетами</p>

                <form onSubmit={onSubmit} className="form">
                    <input className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input className="input" placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button className="btn btn-primary">Login</button>

                    {err && <div className="alert alert-danger">{err}</div>}
                </form>

                <hr />
                <p className="muted">
                    Нет аккаунта? <Link to="/register">Регистрация</Link>
                </p>
            </div>
        </div>
    );
}