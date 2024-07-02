import React, { useContext } from 'react'
import ThemeProvider, { ThemeContext } from '../components/ThemeProvider';


const TopNav = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000 " }}>
            <button onClick={() => setTheme("dark")}>Dark</button>
            <button onClick={() => setTheme("light")}>Light</button>
        </div>
    );
};

const ProviderPattern = () => {
    return (
        <ThemeProvider>
            <TopNav />
        </ThemeProvider>
    )
}

export default ProviderPattern
