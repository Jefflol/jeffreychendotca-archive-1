import React from "react";

import SEO from "../components/seo"
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle"

import styles from "./styles/index.module.css";
import "../components/Layout/Layout.css";

const IndexPage = () => (
  <>
    <SEO title="Hi" />
    <div className={styles.page}>
      <DarkModeToggle />
      <h1 className={styles.brand__name}>Jeffrey Chen</h1>
      <h3 className={styles.brand__position}>Front End Developer</h3>
      <h5 className={[styles.brand__description, styles.text_primary].join(' ')}>who dabbles in back end from time to time.</h5>
      <p className={[styles.brand__contact, styles.text_primary].join(' ')}>Connect with me on <a href="https://www.linkedin.com/in/jeffreychen246">LinkedIn</a>.</p>
    </div>
  </>
)

export default IndexPage;