import { useState } from "react";
import { expenses } from "../data/mockExpenses";
import ExpenseCard from "../components/ExpenseCard";
import NewExpenseModal from "../components/NewExpenseModal";
import "../styles/ExpensesScreen.css";

const ExpensesScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="expenses-main-container">
            <header className="expenses-header-container">
                <h1 className="expenses-title">Gastos Recientes</h1>
                <button
                    type="button"
                    className="expenses-add-button"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Nuevo gasto"
                >
                    <span className="expenses-add-button-text">+</span>
                </button>
            </header>

            <ul className="expenses-list-container">
                {expenses.map((expense) => (
                    <li key={expense.id} className="expenses-list-item">
                        <ExpenseCard expense={expense} />
                    </li>
                ))}
            </ul>

            <NewExpenseModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default ExpensesScreen;
