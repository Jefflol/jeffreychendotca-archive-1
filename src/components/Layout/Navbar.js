import { Link } from "gatsby"
import React, { useState, useEffect } from "react"

import Image from "../Image"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"
import styles from "./Navbar.module.css"

const Navbar = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        let newScrollPos = document.body.getBoundingClientRect().top;
        let show = document.body.getBoundingClientRect().top > scrollPos;

        setScrollPos(newScrollPos)
        setVisible(show);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPos, visible]);

    return (
        <nav className={[styles.navbar, visible ? styles.active : styles.hidden].join(' ')}>
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
    );
}

export default Navbar
