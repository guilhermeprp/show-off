import React from "react";
import styles from "../styles/Navbar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBody}>
        <h1 className={styles.logo}>
          <a href="#">SHOW OFF</a>
        </h1>

        <div className={styles.menu}>
          <ul className={styles.menuList}>
            <li>
              <a href="#">Slides</a>
            </li>
            <li>
              <a href="#">Sort</a>
            </li>
            <li>
              <a href="#">Api</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
