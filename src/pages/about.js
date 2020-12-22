import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/Layout/Layout";

import HTMLIcon from "../images/svg/html5-plain.svg";
import CSSIcon from "../images/svg/css3-plain.svg";
import JavaScriptIcon from "../images/svg/javascript-plain.svg";
import ReactIcon from "../images/svg/react-original.svg";
import ReduxIcon from "../images/svg/redux-original.svg";
import MongoDBIcon from "../images/svg/mongodb-plain.svg";
import NodeJSIcon from "../images/svg/nodejs-plain.svg";
import JavaIcon from "../images/svg/java-plain.svg";
import GithubIcon from "../images/svg/github-original.svg";

import SkillIcon from "../components/SkillIcon/SkillIcon";
import styles from "./styles/about.module.css";
import ShiftBy from "../utils/ShiftBy";

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <div className={styles.page}>
            <ShiftBy x={5}>
                <h1 className={styles.page__title}>About Me</h1>
            </ShiftBy>
            <p className={styles.page__description}>I enjoy both front end and back end development but lately I've been working with front end more. Right now, I'm learning React and this website is built with it!</p>
            <div className={styles.page__social_media}>
                <Link className={styles.link} to="/">Resume</Link>
                <Link className={styles.link} to="/">LinkedIn</Link>
                <Link className={styles.link} to="/">Github</Link>
            </div>
            <div className={styles.page__skill}>
                <h3 className={styles.skill__description}>Here's what I work with</h3>
                <SkillIcon className={styles.first_icon_fix} title="HTML" ><HTMLIcon /></SkillIcon>
                <SkillIcon title="CSS"><CSSIcon /></SkillIcon>
                <SkillIcon title="JavaScript"><JavaScriptIcon /></SkillIcon>
                <SkillIcon title="React"><ReactIcon /></SkillIcon>
                <SkillIcon title="Redux"><ReduxIcon /></SkillIcon>
                <SkillIcon title="MongoDB"><MongoDBIcon /></SkillIcon>
                <SkillIcon title="NodeJS"><NodeJSIcon /></SkillIcon>
                <SkillIcon title="Java"><JavaIcon /></SkillIcon>
                <SkillIcon title="Github"><GithubIcon /></SkillIcon>
            </div>
        </div>
    </Layout>
);

export default AboutPage;