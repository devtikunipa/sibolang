import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typograph from '../../components/Typograph';
import { Link } from '@mui/material';
import { useLocation } from 'react-router-dom';


const pages = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/about',
        name: 'Tentang Sibolang',
    },
    {
        path: '/sibolangs',
        name: 'Data Pengaduan',
    },

]

const NavBar = () => {
    let resolved = useLocation();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typograph text="SIBOLANG"
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.05rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={index}>
                                    <Link maxWidth='xs' href={page.path} underline='none' sx={{ fontWeight: resolved.pathname === page.path ? 'bold' : 'none', color: resolved.pathname === page.path ? 'primary.dark' : '' }}>{page.name}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typograph text="SIBOLANG"
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    />

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                href={page.path}
                                sx={{ my: 2, color: 'white', display: 'block', fontWeight: resolved.pathname === page.path ? 'bold' : 'none' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        <Button href='http://mkwlapor.com' variant="contained" color='inherit' sx={{ color: 'primary.dark' }}>LOGIN</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar