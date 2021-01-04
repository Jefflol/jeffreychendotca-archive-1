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
                    <p>JavaScript, JQuery, Bootstrap, Firebase, Trello, Figma.</p>
                </div>
                <div className={styles.project__section}>
                    <h3>Project Description</h3>
                    <p>Mood4Food aggregates and displays the safety protocols of restaurants in a standardized place. It also allows users to leave reviews and rate their experience at a restaurant.</p>
                </div>
                <div className={styles.project__section}>
                    <h3>My Role in Mood4Food</h3>
                    <p>I was a programmer and helped design a consistent layout for the web application. Some of the features I implemented include:</p>
                    <ul>
                        <li>A restaurant registration form to allow users to add a new restaurant to the database</li>
                        <li>A page to display these restaurants and their details</li>
                        <li>A filter and sorting option to display restaurants by preferences</li>
                        <li>A landing page and 404 page to complete the application</li>
                    </ul>
                </div>
                <div className={styles.project__section}>
                    <h3>From the Grounds up</h3>
                    <p>For Mood4Food, my team had to develop the project from the grounds up. This gave us the opportunity to walk through different phases of the project’s development.</p>
                    <p>We started off by brainstorming for an idea that could help alleviate an issue with the pandemic. We had to conduct a survey so that we could get a better understanding of whether the idea was viable or not. After this, we gave a preliminary pitch of our project to receive further feedback from our peers and instructor.</p>
                    <p>After a go-ahead for Mood4Food, we created wireframes for our web application and tested its usability with our peers. From this testing session, we learned how Mood4Food’s usability can be improved and so we made adjustments to our designs to create a better user experience.</p>
                    <p>After the planning and analysis of Mood4Food was completed, we developed the application to completion through weekly sprints. By the final sprint, we finished up the application and deployed the application. Lastly, we presented Mood4Food to our instructors for a final review.</p>
                    <p>Throughout this development, we quickly realized the actual amount of time it takes to complete a feature. We learned how to better break tasks down into smaller parts which gave a better idea of how long a feature would take. Towards the end of the project, we had to prioritize certain features that would provide more value to our project which was focused on safety protocols of restaurants.</p>
                </div>
                <div className={styles.project__section}>
                    <h3>New Technologies and Agile</h3>
                    <p>For this project, I wanted to delve into new technologies and expand my skill set. The following lists how each technologies were used during the development of Mood4Food:</p>
                    <ul>
                        <li>Github allowed for collaboration and management of source code</li>
                        <li>Figma allowed for collaboration of designing wireframes for the web application</li>
                        <li>Trello helped with the tracking of the project’s progress and what tasks needed to be completed</li>
                        <li>Firebase allowed for management of a database and hosting of the web application</li>
                        <li>The Bootstrap Framework made it really easy to create a responsive web application</li>
                    </ul>
                    <p>Using the agile methodologies allowed the project to be constantly improved through iterative feedback. This meant that the project’s requirement could be adjusted to better meet the user's requirement. The weekly Scrum meeting helped my group stay on track as we were able to update each other on our progress and our plans for the week.</p>
                </div>
                <div className={styles.project__section}>
                    <h3>Learning to Work in a Team</h3>
                    <p>Because of the current pandemic, collaboration with team members had to be done online. This meant that we had to make good use of lab sessions where we were able to work together.</p>
                    <p>Outside of these lab sessions, we sometimes scheduled additional sessions where we could code together. This provided the benefit of having a problem or question addressed immediately. It also created a motivating atmosphere because everyone is working towards a common goal. This experience continues to teach me that collaborative teamwork invites an efficient workflow so that a member would not waste time dwelling on a problem.</p>
                    <p>One thing that I would like to do for the next group project is to establish a basic coding convention that my team and I could follow. Especially when integrating different code together, it became obvious that there were different styles of coding. Although we didn’t need to maintain the source code, it was clear that it would be more difficult to maintain the code base if we were to continue to expand on this project.</p>
                </div>
            </div>
        </div>
    </Layout>
)

export default ProjectMood4FoodPage;