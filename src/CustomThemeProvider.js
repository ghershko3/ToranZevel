import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider } from '@material-ui/styles'
// import { Mode, useLightSwitch } from 'use-light-switch'
import { createMuiTheme } from '@material-ui/core';
import RTLProvider from './RTLProvider';
import Alef from './Assets/Fonts/Alef-Regular.ttf'

export const ThemeContext = createContext();

const CustomThemeProvider = ({ children }) => {
    // const mode = useLightSwitch()

    // const [theme, setTheme] = useState({
    //     palette: {
    //         type: mode === Mode.Dark ? 'dark' : 'light',
    //         type: 'light',
    //         primary: {
    //             main: '#f50057'
    //         }
    //     },
    //     direction: 'rtl',
    //     typography: {
    //         fontFamily: Alef
    //     },
    // });

    // const [darkModeOn, setDarkModeOn] = useState(mode === Mode.Dark === 'dark')

    // const toggleThemeMode = () => {
    //     const newPaletteType = darkModeOn ? "dark" : "light";

    //     setTheme({ ...theme, palette: { ...theme.palette, type: newPaletteType } });
    //     setDarkModeOn(!darkModeOn)
    // };

    const muiTheme = createMuiTheme(
        {
            palette: {
                type: 'light',
                primary: {
                    main: '#f50057'
                }
            },
            direction: 'rtl',
            typography: {
                fontFamily: Alef
            }
        });

    return (
        <ThemeProvider theme={muiTheme}>
            <RTLProvider>
                {/* <ThemeContext.Provider value={{ darkModeOn, toggleThemeMode }}> */}
                {children}
                {/* </ThemeContext.Provider> */}
            </RTLProvider>
        </ThemeProvider>
    )
}

export default CustomThemeProvider
