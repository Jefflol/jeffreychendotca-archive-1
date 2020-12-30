import React from "react";
import Image from "../Image";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, src, alt, githubURL, children }) => {
    const goToLink = url => {
        window.location=`${url}`;
    }

    const handleKeyDown = (event, url) => {
        if (event.keyCode === 13) {
            goToLink(url);
        }
    }

    return (
        <div className={styles.card} role={"button"} tabIndex={0} onClick={() => goToLink(githubURL)} onKeyDown={(e) => handleKeyDown(e, githubURL)}>
            <div className={styles.card__detail}>
                <h3 className={styles.card__title}>{title}</h3>
                {children}
            </div>
            <Image className={styles.card__image} src={src} alt={alt} />
        </div>
    );
}

export default ProjectCard;