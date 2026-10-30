import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import CategoryBadge from "./CategoryBadge";
import "../styles/ExpenseCard.css";

const ExpenseCard = ({ expense }) => {
    return (
        <Link to={`/expenses/${expense.id}`} className="expense-item-link">
            <article className="expense-item">
                <div className="expense-header-row">
                    <h3 className="expense-name">{expense.nombre}</h3>
                    <div className="expense-amount-row">
                        <span className="expense-amount">${expense.monto}</span>
                        <IoChevronForward className="expense-chevron" />
                    </div>
                </div>

                <CategoryBadge categoria={expense.categoria} />
                <p className="expense-description">{expense.descripcion}</p>
            </article>
        </Link>
    );
};

export default ExpenseCard;
