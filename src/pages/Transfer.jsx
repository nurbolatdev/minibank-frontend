import {useState} from "react";
import {transferApi} from "../api/transfers";
import "../css/pages/transfer.css";

export default function Transfer() {
    const [fromAccountId, setFrom] = useState("");
    const [toAccountId, setTo] = useState("");
    const [amount, setAmount] = useState("");
    const [msg, setMsg] = useState("");
    const [ok, setOk] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setMsg("");
        setOk(false);
        try {
            await transferApi.transfer({
                fromAccountId: Number(fromAccountId),
                toAccountId: Number(toAccountId),
                amount: Number(amount),
                description: "UI transfer"
            });
            setOk(true);
            setMsg("Transfer success ✅");
        } catch {
            setOk(false);
            setMsg("Transfer failed ❌ (проверь баланс/валюту/ID)");
        }
    };

    return (
        <div className="card">
            <h2 className="card-title">Transfer</h2>
            <div className="transfer-tip">Переводы выполняются между счетами с одинаковой валютой.</div>

            <hr/>

            <form onSubmit={onSubmit} className="form">
                <div className="row">
                    <input className="input" placeholder="fromAccountId" value={fromAccountId}
                           onChange={(e) => setFrom(e.target.value)}/>
                    <input className="input" placeholder="toAccountId" value={toAccountId}
                           onChange={(e) => setTo(e.target.value)}/>
                </div>
                <input className="input" placeholder="amount" value={amount}
                       onChange={(e) => setAmount(e.target.value)}/>
                <button className="btn btn-primary">Send</button>

                {msg && <div className={`alert ${ok ? "alert-success" : "alert-danger"}`}>{msg}</div>}
            </form>
        </div>
    );
}