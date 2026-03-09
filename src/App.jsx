import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import logo from "../src/assets/logo.png";

export default function App() {
    return (
        <div>
            <header className="app-header">
                <div className="app-header-inner">
                    <Link to="/" className="brand">
                        <img src={logo} alt="Company Logo" className="brand-badge" />
                        <span>MiniBank</span>
                    </Link>

                    <nav className="nav">
                        <Link className="btn" to="/">Dashboard</Link>
                        <Link className="btn" to="/accounts">Accounts</Link>
                        <Link className="btn" to="/transfer">Transfer</Link>
                        <Link className="btn" to="/transactions">Transactions</Link>
                    </nav>
                </div>
            </header>

            <main className="container">
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />

                </Routes>
            </main>
        </div>
    );
}