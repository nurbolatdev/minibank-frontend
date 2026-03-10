import { useState } from "react";
import { transactionsApi } from "../api/transactions";
import "../css/pages/transation.css";

export default function Transactions() {
    const [accountId, setAccountId] = useState("");
    const [data, setData] = useState(null);

    const load = async (p = 0) => {
        const res = await transactionsApi.getAll(Number(accountId), p, 6);
        setData(res.data);
    };

    return (
        <div className="card">
            <h2 className="card-title">Transactions</h2>
            <div className="muted">История операций по счету (pagination)</div>

            <hr />

            <div className="tx-controls">
                <input className="input" placeholder="accountId" value={accountId} onChange={(e)=>setAccountId(e.target.value)} />
                <button className="btn btn-primary" onClick={()=>load(0)} disabled={!accountId}>Load</button>
            </div>

            <hr />

            {!data ? <div className="muted">Введите accountId и нажмите Load</div> : (
                <>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th><th>Type</th><th>Status</th><th>Amount</th><th>Description</th><th>Created</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.items.map(t => (
                            <tr key={t.id}>
                                <td>{t.id}</td>
                                <td>{t.type}</td>
                                <td>{t.status}</td>
                                <td>{t.amount}</td>
                                <td>{t.description}</td>
                                <td>{String(t.createdAt).replace("T", " ").slice(0, 19)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div className="pager">
                        <button className="btn" disabled={data.page===0} onClick={()=>load(data.page-1)}>Prev</button>
                        <span className="muted">Page {data.page+1} / {data.totalPages || 1}</span>
                        <button className="btn" disabled={data.page+1>=data.totalPages} onClick={()=>load(data.page+1)}>Next</button>
                    </div>
                </>
            )}
        </div>
    );
}