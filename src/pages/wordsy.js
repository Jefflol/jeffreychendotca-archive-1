import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout/Layout";
import Image from "../components/Image";
import SEO from "../components/seo"

import ShiftBy from "../utils/ShiftBy";
import styles from "./styles/projectLayout.module.css";

const ProjectWordsyPage = () => (
    <Layout>
        <SEO title="Wordsy" />
        <div className={styles.page}>
            <div className={styles.project_layout} data-sal="fade" data-sal-delay="100" data-sal-duration="500" data-sal-easing="ease-in-out-cubic">
                <Image className={styles.project__image} src="wordsy.png" alt="Wordsy" />
                <div className={styles.project__brief_detail}>
                    <ShiftBy x={-9}>
                        <h2 className={styles.project__title}>Wordsy</h2>
                    </ShiftBy>
                    <p className={styles.project__description}>Your personal word bank.</p>
                    <p className={styles.project__description}>A web application built with <span className={styles.tech_highlight}>React</span> and <span className={styles.tech_highlight}>MongoDB</span>.</p>
                    <div className={styles.projects__links}>
                        <Link className={styles.link} to="/">Try Demo</Link>
                        <Link className={styles.link} to="/">View Github</Link>
                    </div>
                </div>
            </div>
            <div className={styles.project__detail}>
                <div className={styles.project__section}>
                    <h3 className={styles.project__section_title}>Tools Used</h3>
                    <p className={styles.project__section_description}>MongoDB, Express, React, NodeJS, Redux, Axios, JWT, Bcrypt, Mongoose.</p>
                </div>
                <div className={styles.project__section}>
                    <h3 className={styles.project__section_title}>Project Description</h3>
                    <p className={styles.project__section_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={styles.project__section}>
                    <h3 className={styles.project__section_title}>What I learned</h3>
                    <p className={styles.project__section_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </Layout>
)

export default ProjectWordsyPage;