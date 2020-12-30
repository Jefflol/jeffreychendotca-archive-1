import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo"

import { Highlight } from "../components/components";
import ProjectJumbotron, { ProjectDescription, ProjectLinks } from "../components/ProjectJumbotron/ProjectJumbotron";

import styles from "./styles/project.module.css";

const ProjectMood4FoodPage = () => (
    <Layout>
        <SEO title="Mood4Food" />
        <div className={styles.page}>
            <ProjectJumbotron title="M4F" src="m4f.png" alt="Mood4Food" x={5}>
                <ProjectDescription>
                    <p>Check the safety hub before you get some grub.</p>
                    <p>A web application built with <Highlight>Bootstrap</Highlight> and <Highlight>Firebase</Highlight>.</p>
                </ProjectDescription>
                <ProjectLinks demoURL="https://mood4food-a276a.web.app" githubURL="https://github.com/Jefflol/mood4food" />
            </ProjectJumbotron>
            <div className={styles.project__detail}>
                <div className={styles.project__section}>
                    <h3>Tools Used</h3>
                    <p>Bootstrap, Firebase, Trello, Figma.</p>
                </div>
                <div className={styles.project__section}>
                    <h3>Project Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={styles.project__section}>
                    <h3>What I learned</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </Layout>
)

export default ProjectMood4FoodPage;