import { NavLink } from "react-router-dom";
import { IoHomeOutline, IoListOutline, IoSettingsOutline } from "react-icons/io5";
import "../styles/BottomNav.css";

const BottomNav = () => {
    return (
        <nav className="bottom-nav">
            <NavLink
                to="/"
                end
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
                <IoHomeOutline className="nav-icon" />
                <span>Inicio</span>
            </NavLink>

            <NavLink
                to="/expenses"
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
                <IoListOutline className="nav-icon" />
                <span>Gastos</span>
            </NavLink>

            <NavLink
                to="/settings"
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
                <IoSettingsOutline className="nav-icon" />
                <span>Ajustes</span>
            </NavLink>
        </nav>
    );
};

export default BottomNav;
