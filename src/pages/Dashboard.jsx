import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "../css/pages/Dashboard.css";

export default function Dashboard() {
    const { logout } = useAuth();

    return (
        <div className="card">
            <h2 className="dash-title">Dashboard</h2>
            <p className="dash-sub">Мини финтех-платформа (MVP). Дальше добавим карты, кредиты и расходы.</p>

            <div className="kpi">
                <div className="kpi-box">
                    <div className="kpi-label">Security</div>
                    <div className="kpi-value">JWT</div>
                </div>
                <div className="kpi-box">
                    <div className="kpi-label">Backend</div>
                    <div className="kpi-value">Spring</div>
                </div>
                <div className="kpi-box">
                    <div className="kpi-label">DB</div>
                    <div className="kpi-value">Postgres</div>
                </div>
            </div>

            <div className="dash-actions">
                <Link className="btn" to="/accounts">Open Accounts</Link>
                <Link className="btn" to="/transfer">Make Transfer</Link>
                <Link className="btn" to="/transactions">View Transactions</Link>
                <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>
        </div>
    );
}