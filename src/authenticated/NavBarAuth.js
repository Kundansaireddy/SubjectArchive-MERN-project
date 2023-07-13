import { NavLink, Outlet } from "react-router-dom";
import styles from "../components/NavBar.module.css";
const NavBarAuth = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <span className={styles.navbarBrand}>CBIT (Admin)</span>
        </div>
        <div className={styles.navbarRight}>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.loginButton_active : styles.loginButton
              }
            >
              Home Page
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? styles.loginButton_active : styles.loginButton
              }
            >
              Admin Page
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.loginButton_active : styles.loginButton
              }
            >
              Logout
            </NavLink>
          </ul>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerData}>CSE(AI-ML)</div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBarAuth;
