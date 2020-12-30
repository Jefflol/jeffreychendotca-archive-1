import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo"

import {Highlight } from "../components/components";
import ProjectJumbotron, { ProjectDescription, ProjectLinks } from "../components/ProjectJumbotron/ProjectJumbotron";

import styles from "./styles/project.module.css";

const ProjectWordsyPage = () => (
    <Layout>
        <SEO title="Wordsy" />
        <div className={styles.page}>
            <ProjectJumbotron title="Wordsy" src="wordsy.png" alt="Wordsy" x={-9}>
                <ProjectDescription>
                    <p>Your personal word bank.</p>
                    <p>A web application built with <Highlight>React</Highlight> and <Highlight>MongoDB</Highlight>.</p>
                </ProjectDescription>
                <ProjectLinks demoURL="https://wordsy-jc.herokuapp.com/" githubURL="https://github.com/Jefflol/wordsy" />
            </ProjectJumbotron>
            <div className={styles.project__detail}>
                <div className={styles.project__section}>
                    <h3>Tools Used</h3>
                    <p>MongoDB, Express, React, NodeJS, Redux, Axios, JWT, Bcrypt, Mongoose.</p>
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

export default ProjectWordsyPage;