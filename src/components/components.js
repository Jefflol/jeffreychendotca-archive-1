import React from 'react';
import { Link } from "gatsby";

import styles from './components.module.css';

export const Anchor = ({ className, to, href, children }) => {
    if (to) return (
        <Link className={[styles.link, className].join(' ')} to={to}>
            {children}
        </Link>
    );
    else if (href) return (
        <a className={[styles.link, className].join(' ')} href={href}>
            {children}
        </a>
    );
    else return null;
}

export const Highlight = ({ children }) => {
    return (
        <span className={styles.highlight}>
            {children}
        </span>
    );
}