import React from "react";

import styles from "./ScrollDown.module.css";

const ScrollDown = ({ className, href }) => {
    return (
        <a className={[styles.scroll_down, className].join(" ")} href={href}>
            Scroll
            <svg className={styles.scroll_down__chevron}>
                <polyline points="0 0 16 7 32 0"></polyline>
                <polyline points="0 8 16 15 32 8"></polyline>
            </svg>
        </a>
    );
}

export default ScrollDown;