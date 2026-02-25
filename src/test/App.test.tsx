import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import OverviewDashboardPage from "../pages/OverviewDashboardPage";
import TransactionsPage from "../pages/TransactionsPage";
import BudgetPlannerPage from "../pages/BudgetPlannerPage";

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("BudgetZen")).toBeInTheDocument(); });
    it("OverviewDashboardPage renders", () => { wrap(<OverviewDashboardPage />); expect(screen.getByText("Financial Overview")).toBeInTheDocument(); });
    it("TransactionsPage renders", () => { wrap(<TransactionsPage />); expect(screen.getByText("Transactions")).toBeInTheDocument(); });
    it("BudgetPlannerPage renders", () => { wrap(<BudgetPlannerPage />); expect(screen.getByText("Budget Planner")).toBeInTheDocument(); });
});
