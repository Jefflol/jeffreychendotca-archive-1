import React from "react";
import { ThemeContext } from '../ThemeContext';
import { useSpring, animated } from "react-spring";
import styles from "./DarkModeToggle.module.css";

const properties = {
    dark: {
        r: 9,
        transform: "rotate(40deg)",
        cx: 12,
        cy: 4,
        opacity: 0
    },
    light: {
        r: 5,
        transform: "rotate(90deg)",
        cx: 30,
        cy: 0,
        opacity: 1
    },
    springConfig: {
        mass: 4,
        tension: 250,
        friction: 35
    }
};

const DarkModeToggle = () => {
    const { colorMode, setColorMode } = React.useContext(ThemeContext);
    
    const toggleDarkMode = () => {
        setColorMode(colorMode === 'dark' ? 'light': 'dark');
    };
    
    const { r, transform, cx, cy, opacity } = properties[
        (colorMode === 'dark') ? 'light' : 'dark'
    ];
    
    const svgContainerProps = useSpring({ transform, config: properties.springConfig });
    const centerCircleProps = useSpring({ r, config: properties.springConfig });
    const maskedCircleProps = useSpring({ cx, cy, config: properties.springConfig });
    const linesProps = useSpring({ opacity, config: properties.springConfig });
    
    const labelString = `Activate ${(colorMode === 'dark') ? 'light' : 'dark'} mode`;

    if (!colorMode) {
        return null;
    }

    return (
        <button className={styles.dark_mode__button} aria-label={labelString} title={labelString}>
            <animated.svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={toggleDarkMode}
                style={{ cursor: "pointer", ...svgContainerProps }}
            >
                <mask id="sunMask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <animated.circle style={maskedCircleProps} r="9" fill="black" />
                </mask>
                <animated.circle
                    className={styles.sun}
                    style={centerCircleProps}
                    cx="12"
                    cy="12"
                    fill="currentColor"
                    mask="url(#sunMask)"
                />
                <animated.g 
                    className={styles.sunrays}
                    style={linesProps}
                    stroke="currentColor"
                >
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </animated.g>
            </animated.svg>
        </button>
    );
  };

export default DarkModeToggle;