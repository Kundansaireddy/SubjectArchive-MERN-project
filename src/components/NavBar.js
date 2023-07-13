import { NavLink, Outlet } from "react-router-dom";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <span className={styles.navbarBrand}>CBIT (Student) </span>
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
          </ul>
        </div>
      </nav>
      <div className={styles.footer}>
        <div className={styles.footerData}>CSE(AI-ML)</div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
