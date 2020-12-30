import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo"

import { Highlight } from "../components/components";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectJumbotron, { ProjectDescription } from "../components/ProjectJumbotron/ProjectJumbotron";

import styles from "./styles/project.module.css";

const ProjectArchivePage = () => (
    <Layout>
        <SEO title="Archive" />
        <div className={styles.page}>
            <ProjectJumbotron title="Archive" src="archive.png" alt="Archive" x={7}>
                <ProjectDescription>
                    <p>A collection of mini-projects.</p>
                </ProjectDescription>
            </ProjectJumbotron>
            <div className={styles.archive__detail}>
                <ProjectCard title="Palette Picker" src="palette_picker.png" alt="Palette Picker" githubURL="https://github.com/Jefflol/palette-picker">
                    <p>Built with <Highlight>NodeJS</Highlight>, <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight></p>
                    <p>A website showcasing different palettes.</p>
                    <p><Highlight>See Github</Highlight></p>
                </ProjectCard>
                <ProjectCard title="Instant Recipe" src="instant_recipe.png" alt="Instant Recipe" githubURL="https://github.com/Jefflol/instant-recipe">
                    <p>Built with <Highlight>React</Highlight> and <Highlight>MongoDB</Highlight></p>
                    <p>A web application with a database of recipes.</p>
                    <p><Highlight>See Github</Highlight></p>
                </ProjectCard>
                <ProjectCard title="Game of Life" src="gol.png" alt="Game of Life" githubURL="https://github.com/Jefflol/game-of-life">
                    <p>Built with <Highlight>JavaScript</Highlight>, <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight></p>
                    <p>A website demonstrating the game of life.</p>
                    <p><Highlight>See Github</Highlight></p>
                </ProjectCard>
                <ProjectCard title="Maze Generator" src="maze_generator.png" alt="Maze Generator" githubURL="https://github.com/Jefflol/maze-generator">
                    <p>Built with <Highlight>JavaScript</Highlight>, <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight></p>
                    <p>A website demonstrating a maze generation.</p>
                    <p><Highlight>See Github</Highlight></p>
                </ProjectCard>
            </div>
        </div>
    </Layout>
)

export default ProjectArchivePage;