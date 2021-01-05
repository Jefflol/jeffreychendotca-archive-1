import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import ShiftBy from "../utils/ShiftBy";

import { Anchor } from "../components/components";
import SkillIcon from "../components/SkillIcon/SkillIcon";

import HTMLIcon from "../images/svg/html5-plain.svg";
import CSSIcon from "../images/svg/css3-plain.svg";
import JavaScriptIcon from "../images/svg/javascript-plain.svg";
import ReactIcon from "../images/svg/react-original.svg";
import ReduxIcon from "../images/svg/redux-original.svg";
import MongoDBIcon from "../images/svg/mongodb-plain.svg";
import NodeJSIcon from "../images/svg/nodejs-plain.svg";
import JavaIcon from "../images/svg/java-plain.svg";
import GithubIcon from "../images/svg/github-original.svg";

import styles from "./styles/about.module.css";

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <div className={styles.page}>
            <ShiftBy x={5}>
                <h1 className={styles.about__title}>About Me</h1>
            </ShiftBy>
            <p className={styles.about__description}>Hi there! I'm Jeffrey. I'm a passionate intervert who loves developing designs with code.</p>
            <p className={styles.about__description}>I enjoy both front end and back end development but lately I've been working with front end more. Right now, I'm learning React and building my portfolio with it!</p>
            <p className={styles.about__description}>I'm a student seeking for an 8-month co-op position starting May 2021.</p>

            <div className={styles.about__social}>
                <Anchor className={styles.link} href="https://drive.google.com/file/d/1nEBWVpVY5HB3Y0MtqtdD7J-poSmDr-VW/view?usp=sharing">Resume</Anchor>
                <Anchor className={styles.link} href="https://www.linkedin.com/in/jeffreychen246">LinkedIn</Anchor>
                <Anchor className={styles.link} href="https://github.com/Jefflol">Github</Anchor>
            </div>
            <div className={styles.about__skill}>
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