import React from "react";
import SEO from "../components/seo"

import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";

import styles from "./styles/index.module.css";

const MainPage = () => (
    <>
        <SEO title="Home" />
        <div className={styles.page}>
            <div className={styles.navbar__dark_mode}>
                <DarkModeToggle />
            </div>
            <h1 className={styles.brand__name}>Jeffrey Chen</h1>
            <h3 className={styles.brand__occupation}>Front End Developer</h3>
            <h5 className={styles.brand__description}>who dabbles in back end from time to time.</h5>
            <h5 className={styles.brand__connect}>Connect with me on <a href="https://www.linkedin.com/in/jeffreychen246">LinkedIn</a></h5>
        </div>
    </>
)

export default MainPage;