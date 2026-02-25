import { TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react";

export default function OverviewDashboardPage() {
    const stats = [
        { label: "Income", value: "$6,400", change: "+8%", up: true, icon: TrendingUp, color: "var(--income-color)" },
        { label: "Expenses", value: "$4,120", change: "-2%", up: false, icon: TrendingDown, color: "var(--expense-color)" },
        { label: "Savings", value: "$2,280", change: "+22%", up: true, icon: Wallet, color: "var(--savings-color)" }
    ];

    const recentTx = [
        { desc: "Salary Deposit", amount: "+$6,400.00", type: "income", date: "Oct 28", cat: "Income" },
        { desc: "Rent Payment", amount: "-$1,800.00", type: "expense", date: "Oct 27", cat: "Housing" },
        { desc: "Grocery Store", amount: "-$142.50", type: "expense", date: "Oct 26", cat: "Food" },
        { desc: "Netflix", amount: "-$15.99", type: "expense", date: "Oct 25", cat: "Entertainment" },
        { desc: "Freelance Project", amount: "+$950.00", type: "income", date: "Oct 24", cat: "Side Income" }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: 4 }}>Financial Overview</h1>
            <p style={{ color: "var(--color-text-secondary)" }}>October 2026 at a glance.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
            {stats.map((s, i) => (
                <div key={i} className="card" style={{ padding: "var(--space-5)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
                        <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-text-secondary)" }}>{s.label}</span>
                        <s.icon size={20} style={{ color: s.color }} />
                    </div>
                    <div className="mono" style={{ fontSize: "28px", fontWeight: 700, color: s.color }}>{s.value}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: "var(--space-2)", fontSize: "13px", fontWeight: 600, color: s.up ? "var(--color-success)" : "var(--color-danger)" }}>
                        {s.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {s.change} vs last month
                    </div>
                </div>
            ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "var(--space-6)" }}>
            <div className="card" style={{ padding: "var(--space-5)" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "var(--space-4)" }}>Spending Breakdown</h2>
                <div style={{ height: 200, background: "var(--color-bg-secondary)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "flex-end", padding: "var(--space-4)", gap: "var(--space-3)" }}>
                    {[35, 25, 12, 10, 8, 5, 5].map((pct, i) => (
                        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                            <div style={{ width: "100%", height: `${pct * 4}px`, background: i === 0 ? "var(--expense-color)" : "var(--color-accent-soft)", borderRadius: "4px 4px 0 0", transition: "height 0.3s ease" }}></div>
                            <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--color-text-tertiary)" }}>{["Rent", "Food", "Trans", "Util", "Ent", "Shop", "Other"][i]}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card" style={{ padding: "var(--space-5)" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "var(--space-4)" }}>Recent Transactions</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                    {recentTx.slice(0, 4).map((tx, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: "14px" }}>{tx.desc}</div>
                                <div style={{ fontSize: "12px", color: "var(--color-text-tertiary)" }}>{tx.date}</div>
                            </div>
                            <span className="mono" style={{ fontWeight: 700, fontSize: "14px", color: tx.type === "income" ? "var(--income-color)" : "var(--expense-color)" }}>{tx.amount}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>);
}
