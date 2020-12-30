import React from 'react';
import { Link } from "gatsby";

import styles from './components.module.css';

export const Anchor = ({ className, to, children }) => {
    return (
        <Link className={[styles.link, className].join(' ')} to={to}>
            {children}
        </Link>
    );
}

export const Highlight = ({ children }) => {
    return (
        <span className={styles.highlight}>
            {children}
        </span>
    );
}