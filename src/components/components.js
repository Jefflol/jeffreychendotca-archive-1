import React from 'react';
import styles from './components.module.css';

import { Link } from 'gatsby';

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