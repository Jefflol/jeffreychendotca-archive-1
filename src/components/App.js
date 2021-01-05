import React from 'react';

import { ThemeProvider } from './ThemeContext';

const App = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}

export default App;
