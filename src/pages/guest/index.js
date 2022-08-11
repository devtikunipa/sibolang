import React from 'react'
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './Navbar';

const theme = createTheme({
    palette: {
        primary: {
            main: '#A47E3B',
            light: '#eceff1',
            dark: '#61481C',
            contrastText: '#ffffff',
        },
        blue: {
            main: '#E6B325',
            contrastText: 'white'
        },
        grey: {
            main: '#9e9e9e',
            dark: '#212121',
            contrastText: '#fafafa',
        }
    },
});

const GuestLayout = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </ThemeProvider>
    )
}

export default GuestLayout