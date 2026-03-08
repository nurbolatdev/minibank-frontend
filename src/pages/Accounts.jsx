import { useEffect, useState } from "react";
import { createAccount, listAccounts } from "../api/accounts";
import "../css/pages/account.css";

export default function Accounts() {
    const [currency, setCurrency] = useState("KZT");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    const load = async (p = 0) => {
        try {
            setError("");
            const res = await listAccounts(p, 5);
            setData(res.data);
        } catch (err) {
            setError("Failed to load accounts");
            console.error(err);
        }
    };

    useEffect(() => {
        load(0);
    }, []);

    const onCreate = async () => {
        try {
            setError("");
            await createAccount(currency);
            await load(0);
        } catch (err) {
            setError("Failed to create account");
            console.error(err);
        }
    };

    return (
        <div className="card">
            <div className="accounts-head">
                <div>
                    <h2 className="card-title">Accounts</h2>
                    <div className="muted">Создай счет и проверяй баланс</div>
                </div>

                <div className="accounts-actions">
                    <select
                        className="select"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <option value="KZT">KZT</option>
                        <option value="USD">USD</option>
                    </select>

                    <button className="btn btn-primary" onClick={onCreate}>
                        Create
                    </button>
                </div>
            </div>

            <hr />

            {error && <div className="alert alert-danger">{error}</div>}

            {!data ? (
                "Loading..."
            ) : (
                <>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Currency</th>
                            <th>Balance</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.items?.map((a) => (
                            <tr key={a.id}>
                                <td>#{a.id}</td>
                                <td>{a.currency}</td>
                                <td>{a.balance}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div className="pager">
                        <button
                            className="btn"
                            disabled={data.page === 0}
                            onClick={() => load(data.page - 1)}
                        >
                            Prev
                        </button>

                        <span className="muted">
                            Page {data.page + 1} / {data.totalPages || 1}
                        </span>

                        <button
                            className="btn"
                            disabled={data.page + 1 >= data.totalPages}
                            onClick={() => load(data.page + 1)}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}