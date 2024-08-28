import { Outlet } from "react-router-dom";
import styles from "./Sidebar.module.css";

import Logo from "../../../common-components/logo/Logo";
import AppNav from "./components/appNav/AppNav";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <Logo />
        <AppNav />


         <Outlet />
        <footer className={styles.footer}>
            <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by WorldWise inc.</p>
        </footer>
      
    </div>
  )
}

export default Sidebar
