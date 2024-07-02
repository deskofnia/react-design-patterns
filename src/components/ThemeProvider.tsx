import React, { Dispatch, createContext, useState } from 'react'

export const ThemeContext = createContext<{ theme: string, setTheme: Dispatch<React.SetStateAction<string>> }>({});

const ThemeProvider = ({ children }: { children:any}) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider
