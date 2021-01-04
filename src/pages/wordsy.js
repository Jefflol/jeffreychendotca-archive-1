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
                    <p>Your personal word bank built with the MERN stack! Saw a new word that you read somewhere? Look up the definition and add it to Wordsy. Keep track of all your past learnt words, review them, and expand your vocabulary!</p>
                </div>
                <div className={styles.project__section}>
                    <h3>My Role In Wordsy</h3>
                    <p>This was a side project where I wanted to learn React. I also wanted to make the application more complete by providing a presentable front end and add some verification and authentication so that users can have their own accounts when using this application. Some of the features I implemented include:</p>
                    <ul>
                        <li>Developing a registration and login system that utilizes bcrypt for password hashing</li>
                        <li>Authenticating with JWT to ensure that users weren’t accessing another user’s data and only makes changes to their own</li>
                        <li>Validating user’s input and the front end so that the application can provide feedback if the form wasn’t filled correctly</li>
                        <li>Validating the back end to ensure that the data going into the database was properly sanitized</li>
                        <li>Accessing the MongoDB database to display words that a user adds to their word bank</li>
                        <li>Deploying Wordsy on Heroku</li>
                    </ul>
                    <p>However, something for me to work on for next time would be to improve application’s feedback with loading indicators. At the moment, the user doesn’t really know if the data is in the process of being sent and only knows what’s happening until the effects are made or if there was an error.</p>
                </div>
                <div className={styles.project__section}>
                    <h3>Problem of Resizing and the Use of Debounce</h3>
                    <p>Originally, I designed the word lexeme icons to be evenly spaced apart. However, this took a lot of space and so I decided to make this design more compact. In addition, I wanted to ensure that the icons would display an ellipsis if the screen cannot add any more icons to prevent overflow.</p>
                    <p>Therefore to make this more responsive, I added an event listener that would rerender the icons if the user was resizing their browser. This way, the icons would display the ellipsis if needed. After implementing this, I realized that there could be some performance issues since the functions that rerendered the icons were essentially being called every time the user resized their browser. This meant that a change in a pixel would require another  check to see if the icons needed rerendering.</p>
                    <p>To deal with this potential problem, I implemented a debounce/throttling function that would wrap the re render function to delay the function being called repeatedly. So what’s the difference between debounce and throttle? Debounce will bunch a series of executions into a single call that happens at the end or at the start of a bunch of events whereas throttle will delay executing a function by reducing the amount of times it’s being called. You can see the <a href="http://demo.nimius.net/debounce_throttle/">difference visually here</a>.</p>
                    <p>In the end, I didn’t end up using either of them because I realized that I wasn’t really rendering a big part of the UI (Although, I could imagine this becoming an issue if a lot of word entries were added). I figured that many words wouldn’t have more than 3 different parts of speech (In this case, it needed at least 3 to triggle the ellipsis icon) and that the user wouldn’t be continuously resizing the browser. That being said, the code still exists as a comment in the case that this feature is needed in the future. I think that a debounce method would be more useful here since the user probably won’t continuously resize the browser screen; it’s more of a “resize once”; therefore, the user really only needs to see the results and not the changes in between. I can also see how these functions would be useful for other projects in the future.</p>
                </div>
                <div className={styles.project__section}>
                    <h3>Problem of Adding Controlled Components Dynamically</h3>
                    <p>When a user adds a word, they may want to add more than one definition/example. They may also want to add different parts of speech to the word as well. To support this, I had to make sure that textareas could be added and rendered dynamically. In other words, the users should be able to add or delete the textareas whenever they want.</p>
                    <p>This posed a bit of an issue because normally in a form, you would have states (already defined) for each input/fields of the form. I also wanted to link the definitions to its example so that whenever you added a definition, you could also add an example that ties to that definition. This was important so that when a user adds a definition, they can ensure that there is a matching example or the example isn’t referencing another definition of the word.</p>
                    <p>So the simple solution to this was to add the same ID to both definitions and examples. This ensured that the definitions and examples were linked to each other. This also meant that you could edit or delete each definition individually without accidentally editing/deleting another one. Unfortunately, I couldn’t use the standard setState([e.target.name]: [e.target.value]) and I had to write a custom handleChange function to support setting the states properly because the id would be introduced dynamically, and to reduce redundancy I had to nest the states which is a tradeoff I was willing to make.</p>
                    <p>However, introducing an ID would often mean that the orders were not maintained. I didn’t think it was necessary to maintain orders of definition since the first one the user enters is likely the most important/recent ones they learned. In addition, the changes are only saved after all definitions and examples are configured rather than after each definition or example so the order wouldn’t really be affected. That being said, you can always maintain the order by keeping the ids in an array.</p>
                </div>
                <div className={styles.project__section}>
                    <h3>Learning About Technical Debt</h3>
                    <p>As you work on your application, bugs begin to pile up if they’re not squashed. Code begins to look messier if they’re not refactored. This grows the technical debt especially if other people are working with your code. Fortunately, I was working alone on this but I had to maintain a habit of dealing with bugs and refactoring my code frequently instead of doing them all once I had finished the app.</p>
                    <p>I was glad that I refactored frequently (that is…more frequently than before) because it made development easier to handle, or at the very least, sustainable. Leaving these issues towards the end can create a burnout situation where you no longer not want to solve the issue but just want to release the app as is. The polishing of the app would be lacking and therefore not as successful as it could have been if refactoring had been done frequently.</p>
                    <p>I also kept track of the bugs throughout the development. There are bug tracking systems to help you with this but I just used an excel sheet and kept it simple. I was able to categorize issues into UI enhancement, cleanup, bugs, and features so that I can prioritize the issues. In addition, it was nice to be able to mark off the ones you completed and track your progress. Overall this aided the project’s organization.</p>
                </div>
                <div>
                    <h3>Learning to "Break It Up"</h3>
                    <p>This one is probably a given but I always felt comfortable tackling a challenge presented to me. Most of the libraries and dependencies I used in this project were a first time for me. Whenever I felt that I didn’t understand something, I broke down the tasks and tackled them individually. Learning something new can be overwhelming at first so it’s important to break them down and pace yourself.</p>
                    <p>I kept a written todo list by my side and constantly kept writing new ones. I broke the task down into manageable tasks and this kept me motivated and working, knowing what I can work on for the day.</p>
                    <p>Breaking up tasks also made it possible for me to find solutions and continue to work on the project all the way to the end. It kept me accountable and motivated especially when I don’t have any other external factors to force me to complete this project (unlike a school project or work deadline).</p>
                </div>
            </div>
        </div>
    </Layout>
)

export default ProjectWordsyPage;