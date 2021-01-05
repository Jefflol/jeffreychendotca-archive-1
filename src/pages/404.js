import React from "react";

import SEO from "../components/seo"
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle"

import styles from "./styles/index.module.css";
import { Anchor } from "../components/components";

const NotFoundPage = () => (
    <>
        <SEO title="404" />
        <div className={styles.page}>
            <DarkModeToggle />
            <h1>404</h1>
            <Anchor to="/">Return to Home</Anchor>
            <p className={styles.brand__connect}>Connect with me on <a href="https://www.linkedin.com/in/jeffreychen246">LinkedIn</a>.</p>
        </div>
    </>
)

export default NotFoundPage;