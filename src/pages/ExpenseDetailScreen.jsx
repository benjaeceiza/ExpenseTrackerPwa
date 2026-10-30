import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { expenses } from "../data/mockExpenses";
import "../styles/ExpenseDetailScreen.css";

const ExpenseDetailScreen = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const expense = expenses.find((item) => item.id === Number(id));

    return (
        <div className="detail-screen-wrapper">
            <header className="detail-header">
                <button
                    type="button"
                    className="back-button"
                    onClick={() => navigate(-1)}
                    aria-label="Volver atrás"
                >
                    <IoArrowBack size={24} />
                </button>
                <h1 className="detail-header-title">Detalle del Gasto</h1>
            </header>

            <main className="detail-body">
                {expense ? (
                    <section className="detail-card">
                        <span className="detail-category-badge">{expense.categoria}</span>
                        <h2 className="detail-name">{expense.nombre}</h2>
                        <p className="detail-amount">${expense.monto}</p>

                        <div className="detail-divider" />

                        <div className="detail-info-group">
                            <span className="detail-label">Descripción</span>
                            <p className="detail-description">{expense.descripcion}</p>
                        </div>

                        <div className="detail-info-group">
                            <span className="detail-label">ID de registro</span>
                            <p className="detail-description">#{expense.id}</p>
                        </div>

                        <button
                            type="button"
                            className="detail-back-btn"
                            onClick={() => navigate(-1)}
                        >
                            Volver al listado
                        </button>
                    </section>
                ) : (
                    <section className="detail-card">
                        <p className="detail-description">No se encontró el gasto solicitado.</p>
                        <button
                            type="button"
                            className="detail-back-btn"
                            onClick={() => navigate(-1)}
                        >
                            Volver atrás
                        </button>
                    </section>
                )}
            </main>
        </div>
    );
};

export default ExpenseDetailScreen;
