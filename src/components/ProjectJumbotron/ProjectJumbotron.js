import React from "react";
import Image from "../Image";
import ShiftBy from "../../utils/ShiftBy";

import { Anchor } from "../components";

import styles from "./ProjectJumbotron.module.css";

export const ProjectDescription = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
}

export const ProjectLinks = ({ projectURL, projectsURL, demoURL, githubURL }) => {
    return (
        <div className={styles.projects__links}>
            { projectURL && <Anchor className={styles.link} to={projectURL}>View Project</Anchor> }
            { projectsURL && <Anchor className={styles.link} to={projectsURL}>View Projects</Anchor> }
            { demoURL && <Anchor className={styles.link} to={demoURL}>Try Demo</Anchor> }
            { githubURL && <Anchor className={styles.link} to={githubURL}>View Github</Anchor> }
        </div>
    );
        
}

const ProjectJumbotron = ({ title, src, alt, children, x=0, y=0 }) => {
    return (
        <div className={styles.project_layout} data-sal="fade" data-sal-delay="100" data-sal-duration="500" data-sal-easing="ease-in-out-cubic">
            <Image className={styles.project__image} src={src} alt={alt} />
            <div className={styles.project__detail}>
                <ShiftBy x={x} y={y}>
                    <h2>{title}</h2>
                </ShiftBy>
                {children}
            </div>
        </div>
    );
}

export default ProjectJumbotron;