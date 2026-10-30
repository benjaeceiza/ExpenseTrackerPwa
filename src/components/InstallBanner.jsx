import { useState } from "react";
import { IoDownloadOutline, IoShareOutline, IoClose } from "react-icons/io5";
import { usePWAInstall } from "../hooks/usePWAInstall";
import "../styles/InstallBanner.css";

const InstallBanner = () => {
    const { isInstallable, isIOS, isInstalled, promptInstall } = usePWAInstall();
    const [dismissed, setDismissed] = useState(false);

    if (isInstalled || dismissed || (!isInstallable && !isIOS)) {
        return null;
    }

    return (
        <div className="install-banner">
            <div className="install-banner-info">
                <img
                    src="/icons/icon-192x192.png"
                    alt="ExpenseTracker"
                    className="install-banner-icon"
                />
                <div className="install-banner-texts">
                    <strong className="install-banner-title">Instalar ExpenseTracker</strong>
                    {isIOS ? (
                        <p className="install-banner-subtitle">
                            En iOS: tocá <IoShareOutline className="inline-icon" />{" "}
                            <strong>Compartir</strong> y luego{" "}
                            <strong>"Agregar a inicio"</strong>.
                        </p>
                    ) : (
                        <p className="install-banner-subtitle">
                            Accedé más rápido desde tu pantalla de inicio.
                        </p>
                    )}
                </div>
            </div>

            <div className="install-banner-actions">
                {isInstallable && (
                    <button
                        type="button"
                        className="install-banner-btn"
                        onClick={promptInstall}
                    >
                        <IoDownloadOutline size={18} />
                        <span>Instalar App</span>
                    </button>
                )}
                <button
                    type="button"
                    className="install-banner-close"
                    onClick={() => setDismissed(true)}
                    aria-label="Cerrar aviso de instalación"
                >
                    <IoClose size={20} />
                </button>
            </div>
        </div>
    );
};

export default InstallBanner;
