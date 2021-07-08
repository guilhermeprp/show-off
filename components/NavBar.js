import React from "react";
import Link from "next/link";
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
              <Link href="/">Slides</Link>
            </li>
            <li>
              <Link href="/crud">Crud</Link>
            </li>
            <li>
              <Link href="/search">Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
