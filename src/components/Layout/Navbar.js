import { Link } from "gatsby"
import React from "react"

import Image from "../Image"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"
import styles from "./Navbar.module.css"

const Navbar = () => (
    <nav className={styles.navbar}>
        <div className={styles.navbar__content}>
            <Link className={styles.navbar__brand} to="/">
                <Image src="logo_light.png" alt="JC" />
            </Link>
            <div className={styles.navbar__links}>
                <Link className={styles.navbar__link} to="/">Projects</Link>
                <Link className={styles.navbar__link} to="/">Blogs</Link>
                <Link className={styles.navbar__link} to="/">About</Link>
            </div>
            <div className={styles.navbar__dark_mode}>
                <DarkModeToggle />
            </div>
        </div>
    </nav>
)

export default Navbar
