import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout/Layout";
import Image from "../components/Image";
import SEO from "../components/seo"

import ShiftBy from "../utils/ShiftBy";
import styles from "./styles/projectLayout.module.css";

const ProjectArchivePage = () => {
    const goToLink = url => {
        window.location=`${url}`;
    }

    return (
        <Layout>
            <SEO title="Archive" />
            <div className={styles.page}>
                <div className={styles.project_layout} data-sal="fade" data-sal-delay="100" data-sal-duration="500" data-sal-easing="ease-in-out-cubic">
                    <Image className={styles.project__image} src="archive.png" alt="Archive" />
                    <div className={styles.project__brief_detail}>
                        <ShiftBy x={7}>
                            <h2 className={styles.project__title}>Archive</h2>
                        </ShiftBy>
                        <p className={styles.project__description}>A collection of mini-projects.</p>
                    </div>
                </div>
                <div className={styles.archive__detail}>
                    <div className={styles.archive__section} onClick={() => goToLink("https://www.google.com")}>
                        <div className={styles.archive__section_detail}>
                            <h3 className={styles.archive__section_title}>Palette Picker</h3>
                            <p className={styles.archive__section_description}>Built with <span className={styles.tech_highlight}>HTML</span>, <span className={styles.tech_highlight}>CSS</span>, <span className={styles.tech_highlight}>NodeJS</span></p>
                            <p className={styles.archive__section_description}>A website showcasing different palettes.</p>
                        </div>
                        <Image className={styles.archive__image} src="archive.png" alt="Archive" />
                    </div>
                    <div className={styles.archive__section}>
                        <div className={styles.archive__section_detail}>
                            <h3 className={styles.archive__section_title}>Instant Recipe</h3>
                            <p className={styles.archive__section_description}>Built with <span className={styles.tech_highlight}>HTML</span>, <span className={styles.tech_highlight}>CSS</span>, <span className={styles.tech_highlight}>NodeJS</span></p>
                            <p className={styles.archive__section_description}>A website showcasing different palettes.</p>
                        </div>
                        <Image className={styles.archive__image} src="archive.png" alt="Archive" />
                    </div>
                    <div className={styles.archive__section}>
                        <div className={styles.archive__section_detail}>
                            <h3 className={styles.archive__section_title}>Game of Life</h3>
                            <p className={styles.archive__section_description}>Built with <span className={styles.tech_highlight}>HTML</span>, <span className={styles.tech_highlight}>CSS</span>, <span className={styles.tech_highlight}>NodeJS</span></p>
                            <p className={styles.archive__section_description}>A website showcasing different palettes.</p>
                        </div>
                        <Image className={styles.archive__image} src="archive.png" alt="Archive" />
                    </div>
                    <div className={styles.archive__section}>
                        <div className={styles.archive__section_detail}>
                            <h3 className={styles.archive__section_title}>Maze Generator</h3>
                            <p className={styles.archive__section_description}>Built with <span className={styles.tech_highlight}>HTML</span>, <span className={styles.tech_highlight}>CSS</span>, <span className={styles.tech_highlight}>NodeJS</span></p>
                            <p className={styles.archive__section_description}>A website showcasing different palettes.</p>
                        </div>
                        <Image className={styles.archive__image} src="archive.png" alt="Archive" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProjectArchivePage;