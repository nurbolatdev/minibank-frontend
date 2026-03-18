import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import logo from "../src/assets/logo.png";
import RequireAuth from "./auth/RequireAuth.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Accounts from "./pages/Accounts.jsx";
import Transfer from "./pages/Transfer.jsx";
import Transactions from "./pages/Transactions.jsx";
import ProfileMenu from "./pages/ProfileMenu.jsx";

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

                    <ProfileMenu />
                </div>
            </header>

            <main className="container">
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/" element={<RequireAuth><Dashboard/></RequireAuth>} />
                    <Route path="/accounts" element={<RequireAuth><Accounts/></RequireAuth>} />
                    <Route path="/transfer" element={<RequireAuth><Transfer/></RequireAuth>} />
                    <Route path="/transactions" element={<RequireAuth><Transactions/></RequireAuth>} />

                </Routes>
            </main>
        </div>
    );
}