import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo"

import { Highlight } from "../components/components";
import ProjectJumbotron, { ProjectDescription, ProjectLinks } from "../components/ProjectJumbotron/ProjectJumbotron";
import ScrollDown from "../components/ScrollDown/ScrollDown";

import styles from "./styles/index.module.css";

const MainPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className={styles.page}>
            <h1 className={styles.brand__name}>Jeffrey Chen</h1>
            <h3 className={styles.brand__occupation}>Front End Developer</h3>
            <h5 className={styles.brand__description}>who dabbles in back end from time to time.</h5>
            <ScrollDown className={styles.scroll_down} href="#projects" />
        </div>
        <div id="projects">
            <ProjectJumbotron title="M4F" src="m4f.png" alt="Mood4Food" x={5}>
                <ProjectDescription>
                    <p>Check the safety hub before you get some grub.</p>
                    <p>A web application built with <Highlight>Bootstrap</Highlight> and <Highlight>Firebase</Highlight>.</p>
                </ProjectDescription>
                <ProjectLinks projectURL="/mood4food" />
            </ProjectJumbotron>
            <ProjectJumbotron title="Wordsy" src="wordsy.png" alt="Wordsy" x={-9}>
                <ProjectDescription>
                    <p>Your personal word bank.</p>
                    <p>A web application built with <Highlight>React</Highlight> and <Highlight>MongoDB</Highlight>.</p>
                </ProjectDescription>
                <ProjectLinks projectURL="/wordsy" />
            </ProjectJumbotron>
            <ProjectJumbotron title="Archive" src="archive.png" alt="Archive" x={7}>
                <ProjectDescription>
                    <p>A collection of mini-projects.</p>
                </ProjectDescription>
                <ProjectLinks projectsURL="/archive" />
            </ProjectJumbotron>
        </div>
    </Layout>
)

export default MainPage;