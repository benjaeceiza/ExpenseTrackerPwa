import "../styles/HomeScreen.css";

const HomeScreen = () => {
    return (
        <div className="home-main-container">
            {/* Contenedor del Título Principal */}
            <header className="home-header-container">
                <h1 className="home-title">ExpenseTracker</h1>
            </header>

            {/* Tarjeta con el contenido de bienvenida */}
            <section className="home-card">
                <h2 className="home-subtitle">¡Bienvenido a ExpenseTracker!</h2>
                <p className="home-description">
                    ExpenseTracker es una aplicación diseñada para ayudarte a registrar,
                    gestionar y controlar tus gastos diarios de una manera rápida y sencilla.
                </p>
            </section>
        </div>
    );
};

export default HomeScreen;
