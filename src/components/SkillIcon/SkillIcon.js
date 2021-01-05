import React from "react";

import styles from "./SkillIcon.module.css";

const SkillIcon = ({ children, className, title }) => (
    <div className={[styles.skill_icon, className].join(' ')}>
        <div className={styles.skill_icon__image}>
            {children}
        </div>
        <div className={styles.skill_icon__title}>{title}</div>
    </div>
);

export default SkillIcon;