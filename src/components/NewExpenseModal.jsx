import { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "../styles/NewExpenseModal.css";

const NewExpenseModal = ({ isOpen = true, onClose }) => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [monto, setMonto] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleClose = () => {
        setError("");
        if (onClose) {
            onClose();
        } else {
            navigate(-1);
        }
    };

    const onHandleSave = () => {
        if (!nombre || !monto || !categoria) {
            setError("Por favor, complete todos los campos obligatorios.");
            return;
        }
        setError("");
        alert(`Gasto guardado: ${nombre} - $${monto}`);

        setNombre("");
        setMonto("");
        setCategoria("");
        setDescripcion("");
        handleClose();
    };

    return createPortal(
        <dialog
            open
            className="modal-overlay"
            onClick={(e) => {
                if (e.target === e.currentTarget) handleClose();
            }}
        >
            <div className="modal-content">
                <div className="modal-header-container">
                    <h2 className="modal-title">Nuevo Gasto</h2>
                    <button
                        type="button"
                        onClick={handleClose}
                        className="modal-close-button"
                        aria-label="Cerrar modal"
                    >
                        <IoClose size={28} />
                    </button>
                </div>

                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="modal-input"
                    placeholder="Nombre del gasto *"
                />
                <input
                    type="text"
                    inputMode="decimal"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                    className="modal-input"
                    placeholder="Monto (ej. 1500) *"
                />
                <input
                    type="text"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    className="modal-input"
                    placeholder="Categoría (ej. Comida) *"
                />
                <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="modal-input modal-textarea"
                    placeholder="Descripción (Opcional)"
                    rows={3}
                />

                <button
                    type="button"
                    className="modal-save-button"
                    onClick={onHandleSave}
                >
                    Guardar Gasto
                </button>

                {error ? <p className="modal-error-text">{error}</p> : null}
            </div>
        </dialog>,
        document.body
    );
};

export default NewExpenseModal;
