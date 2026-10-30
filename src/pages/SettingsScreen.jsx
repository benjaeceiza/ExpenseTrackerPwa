import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "../styles/SettingsScreen.css";

const SettingsScreen = () => {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [budgetAlerts, setBudgetAlerts] = useState(true);

    return (
        <div className="settings-main-container">
            <header className="settings-header">
                <button
                    type="button"
                    className="settings-back-btn"
                    onClick={() => navigate(-1)}
                    aria-label="Volver atrás"
                >
                    <IoArrowBack size={22} />
                </button>
                <h1 className="settings-title">Ajustes</h1>
            </header>

            <div className="settings-content">
                <section className="settings-card">
                    <div className="settings-row">
                        <div className="settings-text-group">
                            <span className="settings-label">Notificaciones</span>
                            <span className="settings-subtext">Recordatorios de gastos diarios</span>
                        </div>
                        <input
                            type="checkbox"
                            role="switch"
                            className="settings-switch"
                            checked={notifications}
                            onChange={(e) => setNotifications(e.target.checked)}
                        />
                    </div>

                    <div className="settings-row">
                        <div className="settings-text-group">
                            <span className="settings-label">Alertas de presupuesto</span>
                            <span className="settings-subtext">Avisar al superar el límite mensual</span>
                        </div>
                        <input
                            type="checkbox"
                            role="switch"
                            className="settings-switch"
                            checked={budgetAlerts}
                            onChange={(e) => setBudgetAlerts(e.target.checked)}
                        />
                    </div>

                    <div className="settings-row">
                        <div className="settings-text-group">
                            <span className="settings-label">Modo oscuro</span>
                            <span className="settings-subtext">Tema visual oscuro para la app</span>
                        </div>
                        <input
                            type="checkbox"
                            role="switch"
                            className="settings-switch"
                            checked={darkMode}
                            onChange={(e) => setDarkMode(e.target.checked)}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SettingsScreen;
