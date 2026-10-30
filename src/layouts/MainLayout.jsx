import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import InstallBanner from "../components/InstallBanner";
import "../styles/MainLayout.css";

const MainLayout = () => {
    return (
        <div className="app-layout">
            {/* Banner de instalación PWA (Android / Chrome e instrucciones en iOS) */}
            <InstallBanner />

            {/* Acá se renderiza la pantalla activa (HomeScreen, ExpensesScreen, SettingsScreen) */}
            <main className="main-content">
                <Outlet />
            </main>

            {/* Barra de navegación inferior */}
            <BottomNav />
        </div>
    );
};

export default MainLayout;
