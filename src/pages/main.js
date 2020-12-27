import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout/Layout";
import Image from "../components/Image";
import SEO from "../components/seo"

import ShiftBy from "../utils/ShiftBy";
import styles from "./styles/main.module.css";

const MainPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className={styles.page}>
            <h1 className={styles.brand__name}>Jeffrey Chen</h1>
            <h3 className={styles.brand__position}>Front End Developer</h3>
            <h5 className={[styles.brand__description, styles.text_primary].join(' ')}>who dabbles in back end from time to time.</h5>
            <a className={[styles.scroll_down, styles.brand_primary].join(' ')} href="#projects">
                Scroll
                <svg className={styles.scroll_down__chevron}>
                    <polyline points="0 0 16 7 32 0"></polyline>
                    <polyline points="0 8 16 15 32 8"></polyline>
                </svg>
            </a>
        </div>
        <div id="projects" className={styles.projects}>
            <div className={styles.project_layout} data-sal="fade" data-sal-delay="100" data-sal-duration="500" data-sal-easing="ease-in-out-cubic">
                <Image className={styles.project__image} src="m4f.png" alt="Mood4Food" />
                <div className={styles.project__detail}>
                    <ShiftBy x={5}>
                        <h2 className={styles.project__title}>M4F</h2>
                    </ShiftBy>
                    <p className={styles.project__description}>Check the safety hub before you get some grub.</p>
                    <p className={styles.project__description}>A web application built with <span className={styles.tech_highlight}>Bootstrap</span> and <span className={styles.tech_highlight}>Firebase</span>.</p>
                    <div className={styles.projects__links}>
                        <Link className={styles.link} to="/">View Project</Link>
                    </div>
                </div>
            </div>
            <div className={styles.project_layout} data-sal="fade" data-sal-delay="100" data-sal-duration="500" data-sal-easing="ease-in-out-cubic">
                <Image className={styles.project__image} src="wordsy.png" alt="Wordsy" />
                <div className={styles.project__detail}>
                    <ShiftBy x={-9}>
                        <h2 className={styles.project__title}>Wordsy</h2>
                    </ShiftBy>
                    <p className={styles.project__description}>Your personal word bank.</p>
                    <p className={styles.project__description}>A web application built with <span className={styles.tech_highlight}>React</span> and <span className={styles.tech_highlight}>MongoDB</span>.</p>
                    <div className={styles.projects__links}>
                        <Link className={styles.link} to="/">View Project</Link>
                    </div>
                </div>
            </div>
            <div className={styles.project_layout} data-sal="fade" data-sal-delay="100" data-sal-duration="500" data-sal-easing="ease-in-out-cubic">
                <Image className={styles.project__image} src="archive.png" alt="Archive" />
                <div className={styles.project__detail}>
                    <ShiftBy x={7}>
                        <h2 className={styles.project__title}>Archive</h2>
                    </ShiftBy>
                    <p className={styles.project__description}>A collection of mini-projects.</p>
                    <div className={styles.projects__links}>
                        <Link className={styles.link} to="/">View Projects</Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default MainPage;