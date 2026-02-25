import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import OverviewDashboardPage from "./pages/OverviewDashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import BudgetPlannerPage from "./pages/BudgetPlannerPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<OverviewDashboardPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/budgets" element={<BudgetPlannerPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
