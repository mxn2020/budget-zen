import { Plus, Search, Filter, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function TransactionsPage() {
    const transactions = [
        { desc: "Salary Deposit", amount: "+$6,400.00", type: "income", date: "Oct 28, 2026", cat: "Income", account: "Checking" },
        { desc: "Rent Payment", amount: "-$1,800.00", type: "expense", date: "Oct 27, 2026", cat: "Housing", account: "Checking" },
        { desc: "Grocery Store", amount: "-$142.50", type: "expense", date: "Oct 26, 2026", cat: "Food", account: "Credit Card" },
        { desc: "Netflix", amount: "-$15.99", type: "expense", date: "Oct 25, 2026", cat: "Entertainment", account: "Credit Card" },
        { desc: "Freelance Project", amount: "+$950.00", type: "income", date: "Oct 24, 2026", cat: "Side Income", account: "Savings" },
        { desc: "Electric Bill", amount: "-$89.00", type: "expense", date: "Oct 23, 2026", cat: "Utilities", account: "Checking" },
        { desc: "Gas Station", amount: "-$55.20", type: "expense", date: "Oct 22, 2026", cat: "Transport", account: "Credit Card" },
        { desc: "Coffee Shop", amount: "-$6.50", type: "expense", date: "Oct 22, 2026", cat: "Food", account: "Credit Card" }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700 }}>Transactions</h1>
            <button className="btn btn-primary"><Plus size={16} /> Add Transaction</button>
        </div>

        <div style={{ display: "flex", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
            <div style={{ flex: 1, position: "relative" }}>
                <Search size={18} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-tertiary)" }} />
                <input type="text" placeholder="Search transactions…" style={{ width: "100%", padding: "10px 14px 10px 44px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "var(--color-bg-card)", color: "var(--color-text-primary)", fontFamily: "inherit", fontSize: "14px" }} />
            </div>
            <button className="btn"><Filter size={16} /> Filter</button>
        </div>

        <div className="card" style={{ overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ background: "var(--color-bg-secondary)", borderBottom: "2px solid var(--color-border)" }}>
                        <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "13px", fontWeight: 700, color: "var(--color-text-secondary)" }}>Date</th>
                        <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "13px", fontWeight: 700, color: "var(--color-text-secondary)" }}>Description</th>
                        <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "13px", fontWeight: 700, color: "var(--color-text-secondary)" }}>Category</th>
                        <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "13px", fontWeight: 700, color: "var(--color-text-secondary)" }}>Account</th>
                        <th style={{ padding: "14px 16px", textAlign: "right", fontSize: "13px", fontWeight: 700, color: "var(--color-text-secondary)" }}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tx, i) => (
                        <tr key={i} style={{ borderBottom: "1px solid var(--color-border)", cursor: "pointer", transition: "background var(--transition-fast)" }}>
                            <td style={{ padding: "14px 16px", fontSize: "14px", color: "var(--color-text-tertiary)", fontWeight: 500 }}>{tx.date}</td>
                            <td style={{ padding: "14px 16px", fontSize: "14px", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                                {tx.type === "income" ? <ArrowUpRight size={14} style={{ color: "var(--income-color)" }} /> : <ArrowDownRight size={14} style={{ color: "var(--expense-color)" }} />}
                                {tx.desc}
                            </td>
                            <td style={{ padding: "14px 16px" }}><span style={{ fontSize: "12px", fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: "var(--color-bg-secondary)", color: "var(--color-text-secondary)" }}>{tx.cat}</span></td>
                            <td style={{ padding: "14px 16px", fontSize: "13px", color: "var(--color-text-tertiary)", fontWeight: 500 }}>{tx.account}</td>
                            <td className="mono" style={{ padding: "14px 16px", textAlign: "right", fontWeight: 700, fontSize: "14px", color: tx.type === "income" ? "var(--income-color)" : "var(--expense-color)" }}>{tx.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>);
}
