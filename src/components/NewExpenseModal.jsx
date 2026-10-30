import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "../styles/NewExpenseModal.css";

const CATEGORIES = [
    "Compras",
    "Comida",
    "Transporte",
    "Servicios",
    "Salud",
    "Otros",
];

const NewExpenseModal = ({ isOpen = false, onClose }) => {
    const dialogRef = useRef(null);
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [monto, setMonto] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            if (!dialog.open) {
                dialog.showModal();
            }
        } else if (dialog.open) {
            dialog.close();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleClose = () => {
        setError("");
        setSuccessMsg("");
        if (dialogRef.current?.open) {
            dialogRef.current.close();
        }
        if (onClose) {
            onClose();
        } else {
            navigate(-1);
        }
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();

        if (!nombre.trim() || !monto.trim() || !categoria) {
            setError("Por favor, complete el nombre, monto y seleccione una categoría.");
            return;
        }

        setError("");
        const nuevoGasto = {
            nombre: nombre.trim(),
            monto: Number(monto),
            categoria,
            descripcion: descripcion.trim(),
        };

        console.log("Nuevo gasto registrado:", nuevoGasto);
        setSuccessMsg(`¡Gasto "${nuevoGasto.nombre}" por $${nuevoGasto.monto} guardado!`);

        setTimeout(() => {
            setNombre("");
            setMonto("");
            setCategoria("");
            setDescripcion("");
            setSuccessMsg("");
            handleClose();
        }, 900);
    };

    return createPortal(
        <dialog
            ref={dialogRef}
            className="modal-dialog"
            onCancel={(e) => {
                e.preventDefault();
                handleClose();
            }}
            onClick={(e) => {
                if (e.target === dialogRef.current) {
                    handleClose();
                }
            }}
        >
            <div className="modal-content">
                <header className="modal-header-container">
                    <h2 className="modal-title">Nuevo Gasto</h2>
                    <button
                        type="button"
                        onClick={handleClose}
                        className="modal-close-button"
                        aria-label="Cerrar modal"
                    >
                        <IoClose size={28} />
                    </button>
                </header>

                <form className="modal-form" onSubmit={onHandleSubmit} noValidate>
                    <div className="modal-field">
                        <label htmlFor="expense-nombre" className="modal-label">
                            Nombre del gasto *
                        </label>
                        <input
                            id="expense-nombre"
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="modal-input"
                            placeholder="Ej. Supermercado"
                        />
                    </div>

                    <div className="modal-field">
                        <label htmlFor="expense-monto" className="modal-label">
                            Monto *
                        </label>
                        <input
                            id="expense-monto"
                            type="text"
                            inputMode="decimal"
                            value={monto}
                            onChange={(e) => setMonto(e.target.value)}
                            className="modal-input"
                            placeholder="Ej. 1500"
                        />
                    </div>

                    <div className="modal-field">
                        <span className="modal-label" id="categoria-label">
                            Categoría *
                        </span>
                        <div
                            className="modal-chips-container"
                            role="group"
                            aria-labelledby="categoria-label"
                        >
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    className={
                                        categoria === cat
                                            ? "modal-chip active"
                                            : "modal-chip"
                                    }
                                    onClick={() => setCategoria(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="modal-field">
                        <label htmlFor="expense-descripcion" className="modal-label">
                            Descripción (Opcional)
                        </label>
                        <textarea
                            id="expense-descripcion"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            className="modal-input modal-textarea"
                            placeholder="Detalle adicional del gasto..."
                            rows={2}
                        />
                    </div>

                    {error ? <p className="modal-error-text">{error}</p> : null}
                    {successMsg ? <p className="modal-success-text">{successMsg}</p> : null}

                    <div className="modal-actions">
                        <button
                            type="button"
                            className="modal-cancel-button"
                            onClick={handleClose}
                        >
                            Cancelar
                        </button>
                        <button type="submit" className="modal-save-button">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </dialog>,
        document.body
    );
};

export default NewExpenseModal;
