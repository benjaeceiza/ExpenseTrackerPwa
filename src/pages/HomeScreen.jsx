import { useState } from "react";
import { Link } from "react-router-dom";
import { expenses } from "../data/mockExpenses";
import NewExpenseModal from "../components/NewExpenseModal";
import "../styles/HomeScreen.css";

const HomeScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const totalRegistrado = expenses.reduce((acc, item) => acc + Number(item.monto), 0);
    const cantidadMovimientos = expenses.length;

    return (
        <div className="home-main-container">
            {/* Encabezado semántico con área segura superior */}
            <header className="home-header-container">
                <h1 className="home-title">ExpenseTracker</h1>
            </header>

            <main className="home-content">
                {/* Tarjeta con el contenido de bienvenida */}
                <section className="home-card">
                    <h2 className="home-subtitle">¡Bienvenido a ExpenseTracker!</h2>
                    <p className="home-description">
                        ExpenseTracker es una aplicación diseñada para ayudarte a registrar,
                        gestionar y controlar tus gastos diarios de una manera rápida y sencilla.
                    </p>
                </section>

                {/* Resumen con el total registrado y la cantidad de movimientos */}
                <section className="home-summary-section">
                    <article className="home-summary-box">
                        <span className="home-summary-label">Total Registrado</span>
                        <p className="home-summary-amount">${totalRegistrado.toLocaleString("es-AR")}</p>
                    </article>

                    <article className="home-summary-box">
                        <span className="home-summary-label">Movimientos</span>
                        <p className="home-summary-count">{cantidadMovimientos}</p>
                    </article>
                </section>

                {/* Accesos rápidos con <button> y <Link> */}
                <section className="home-actions-section">
                    <button
                        type="button"
                        className="home-btn-primary"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Registrar Nuevo Gasto
                    </button>

                    <Link to="/expenses" className="home-btn-secondary">
                        Ver Listado Completo
                    </Link>
                </section>
            </main>

            <NewExpenseModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default HomeScreen;
