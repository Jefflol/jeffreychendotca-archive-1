import React from "react";

import Layout from "../components/Layout/Layout";
import Image from "../components/Image";
import SEO from "../components/seo"

import ShiftBy from "../utils/ShiftBy";
import styles from "./styles/projectLayout.module.css";

const ProjectArchivePage = () => {
    const goToLink = url => {
        window.location=`${url}`;
    }

    const handleKeyDown = (event, url) => {
        if (event.keyCode === 13) {
            goToLink(url);
        }
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
                    <div className={styles.archive__section} role={"button"} tabIndex={0} onClick={() => goToLink("https://github.com/Jefflol/palette-picker")} onKeyDown={(e) => handleKeyDown(e, "https://github.com/Jefflol/palette-picker")}>
                        <div className={styles.archive__section_detail}>
                            <h3 className={styles.archive__section_title}>Palette Picker</h3>
                            <p className={styles.archive__section_description}>Built with <span className={styles.tech_highlight}>HTML</span>, <span className={styles.tech_highlight}>CSS</span>, <span className={styles.tech_highlight}>NodeJS</span></p>
                            <p className={styles.archive__section_description}>A website showcasing different palettes.</p>
                            <p className={styles.archive__section_description}><span className={styles.tech_highlight}>See Github</span></p>
                        </div>
                        <Image className={styles.archive__image} src="palette_picker.png" alt="Palette Picker" />
                    </div>
                    <div className={styles.archive__section} role={"button"} tabIndex={0} onClick={() => goToLink("https://github.com/Jefflol/instant-recipe")} onKeyDown={(e) => handleKeyDown(e, "https://github.com/Jefflol/instant-recipe")}>
                        <div className={styles.archive__section_detail}>
                            <h3 className={styles.archive__section_title}>Instant Recipe</h3>
                            <p className={styles.archive__section_description}>Built with <span className={styles.tech_highlight}>React</span> and <span className={styles.tech_highlight}>MongoDB</span></p>
                            <p className={styles.archive__section_description}>A web application with a database of recipes.</p>
                            <p className={styles.archive__section_description}><span className={styles.tech_highlight}>See Github</span></p>
                        </div>
                        <Image className={styles.archive__image} src="instant_recipe.png" alt="Instant Recipe" />
                    </div>
                    <div className={styles.archive__section} role={"button"} tabIndex={0} onClick={() => goToLink("https://github.com/Jefflol/game-of-life")} onKeyDown={(e) => handleKeyDown(e, "https://github.com/Jefflol/game-of-life")}>
                        <div className={styles.archive__section_detail}>
                            <h3 className={styles.archive__section_title}>Game of Life</h3>
                            <p className={styles.archive__section_description}>Built with <span className={styles.tech_highlight}>JavaScript</span>, <span className={styles.tech_highlight}>HTML</span>, <span className={styles.tech_highlight}>CSS</span></p>
                            <p className={styles.archive__section_description}>A website demonstrating the game of life.</p>
                            <p className={styles.archive__section_description}><span className={styles.tech_highlight}>See Github</span></p>
                        </div>
                        <Image className={styles.archive__image} src="gol.png" alt="Game of Life" />
                    </div>
                    <div className={styles.archive__section} role={"button"} tabIndex={0} onClick={() => goToLink("https://github.com/Jefflol/maze-generator")} onKeyDown={(e) => handleKeyDown(e, "https://github.com/Jefflol/maze-generator")}>
                        <div className={styles.archive__section_detail}>
                            <h3 className={styles.archive__section_title}>Maze Generator</h3>
                            <p className={styles.archive__section_description}>Built with <span className={styles.tech_highlight}>JavaScript</span>, <span className={styles.tech_highlight}>HTML</span>, <span className={styles.tech_highlight}>CSS</span></p>
                            <p className={styles.archive__section_description}>A website demonstrating a maze generation.</p>
                            <p className={styles.archive__section_description}><span className={styles.tech_highlight}>See Github</span></p>
                        </div>
                        <Image className={styles.archive__image} src="maze_generator.png" alt="Maze Generator" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProjectArchivePage;