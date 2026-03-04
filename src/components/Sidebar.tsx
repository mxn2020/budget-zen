import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, ArrowRightLeft, PiggyBank } from "lucide-react";
import { Card } from "@geenius-ui/react-css";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: LayoutDashboard, label: "Overview" },
        { to: "/transactions", icon: ArrowRightLeft, label: "Transactions" },
        { to: "/budgets", icon: PiggyBank, label: "Budgets" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-card)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>💰</div>
            <div>
                <strong style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.5px" }}>BudgetZen</strong>
                <div style={{ fontSize: "11px", color: "var(--color-text-tertiary)", fontWeight: 600 }}>Personal Finance</div>
            </div>
        </div>

        <nav style={{ padding: "var(--space-3)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "10px 14px", borderRadius: "var(--radius-md)", color: loc.pathname === l.to ? "var(--color-text-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-bg-secondary)" : "transparent", fontWeight: loc.pathname === l.to ? 700 : 500, fontSize: "15px", transition: "all var(--transition-fast)" }}><l.icon size={18} style={{ color: loc.pathname === l.to ? "var(--color-accent-primary)" : "inherit" }} />{l.label}</Link>)}
        </nav>

        <div style={{ padding: "var(--space-5)", borderTop: "1px solid var(--color-border)" }}>
            <Card padding="md" className="sidebar-networth-card">
                <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 4 }}>Net Worth</div>
                <div className="mono" style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-accent-primary)" }}>$24,580</div>
            </Card>
        </div>

        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)" }}>Oct 2026</span>
            <ThemeToggle />
        </div>
    </aside>);
}
