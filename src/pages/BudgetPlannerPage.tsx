import { Plus, Edit2 } from "lucide-react";
import { Button, Card } from "@geenius-ui/react-css";

export default function BudgetPlannerPage() {
    const budgets = [
        { name: "Housing", emoji: "🏠", budget: 1800, spent: 1800, pct: 100 },
        { name: "Food & Groceries", emoji: "🛒", budget: 500, spent: 342, pct: 68 },
        { name: "Transportation", emoji: "🚗", budget: 200, spent: 155, pct: 78 },
        { name: "Entertainment", emoji: "🎬", budget: 150, spent: 76, pct: 51 },
        { name: "Utilities", emoji: "💡", budget: 250, spent: 189, pct: 76 },
        { name: "Shopping", emoji: "🛍️", budget: 300, spent: 89, pct: 30 },
        { name: "Savings Goal", emoji: "🎯", budget: 1000, spent: 800, pct: 80 }
    ];

    const totalBudget = budgets.reduce((a, b) => a + b.budget, 0);
    const totalSpent = budgets.reduce((a, b) => a + b.spent, 0);
    const remaining = totalBudget - totalSpent;

    return (<div style={{ padding: "var(--space-6)", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, marginBottom: 4 }}>Budget Planner</h1>
                <p style={{ color: "var(--color-text-secondary)" }}>Track and manage your monthly budgets.</p>
            </div>
            <Button variant="primary" icon={<Plus size={16} />}>New Budget</Button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
            <Card padding="lg" className="text-center"><div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)" }}>Total Budget</div><div className="mono" style={{ fontSize: "24px", fontWeight: 700, marginTop: 4 }}>${totalBudget.toLocaleString()}</div></Card>
            <Card padding="lg" className="text-center"><div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)" }}>Spent So Far</div><div className="mono" style={{ fontSize: "24px", fontWeight: 700, marginTop: 4, color: "var(--expense-color)" }}>${totalSpent.toLocaleString()}</div></Card>
            <Card padding="lg" className="text-center"><div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)" }}>Remaining</div><div className="mono" style={{ fontSize: "24px", fontWeight: 700, marginTop: 4, color: "var(--income-color)" }}>${remaining.toLocaleString()}</div></Card>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {budgets.map((b, i) => (
                <Card key={i} padding="lg">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                            <span style={{ fontSize: "24px" }}>{b.emoji}</span>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: "16px" }}>{b.name}</div>
                                <div className="mono" style={{ fontSize: "13px", color: "var(--color-text-tertiary)" }}>${b.spent} / ${b.budget}</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                            <span className="mono" style={{ fontWeight: 700, fontSize: "16px", color: b.pct >= 90 ? "var(--expense-color)" : b.pct >= 70 ? "var(--color-warning)" : "var(--income-color)" }}>{b.pct}%</span>
                            <Button variant="ghost" size="sm" icon={<Edit2 size={14} />} />
                        </div>
                    </div>
                    <div style={{ height: 8, borderRadius: 4, background: "var(--color-bg-tertiary)", overflow: "hidden" }}>
                        <div style={{ height: "100%", borderRadius: 4, width: `${Math.min(b.pct, 100)}%`, background: b.pct >= 90 ? "var(--expense-color)" : b.pct >= 70 ? "var(--color-warning)" : "var(--income-color)", transition: "width 0.5s ease" }}></div>
                    </div>
                </Card>
            ))}
        </div>
    </div>);
}
