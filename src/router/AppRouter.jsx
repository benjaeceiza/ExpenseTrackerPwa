import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeScreen from "../pages/HomeScreen";
import ExpensesScreen from "../pages/ExpensesScreen";
import ExpenseDetailScreen from "../pages/ExpenseDetailScreen";
import SettingsScreen from "../pages/SettingsScreen";

const AppRouter = () => {
    return (
        <Routes>
            {/* Rutas con barra de navegación inferior (MainLayout) */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/expenses" element={<ExpensesScreen />} />
                <Route path="/settings" element={<SettingsScreen />} />
            </Route>

            {/* Pantalla de detalle de gasto (usa useParams y navigate(-1)) */}
            <Route path="/expenses/:id" element={<ExpenseDetailScreen />} />
        </Routes>
    );
};

export default AppRouter;
