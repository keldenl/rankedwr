import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/ranked-icon.png';
import { Box, Button, Typography } from '@mui/material';

import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';


export function Navbar({ hasBg = true }) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const navItems = [
        // { title: 'Home', url: '/' },
        { title: 'Champions', url: '/champions' },
        { title: 'Tier List', url: '/tier-list' },
    ]


    return (
        <div className='navbar-bg' style={!hasBg ? { backgroundColor: 'transparent' } : {}}>
            <div className='navbar-container' >
                <div className='navbar-title-container' onClick={() => navigate('/')}>
                    <img src={logo} alt='RankedWR' />
                    <Typography
                        variant="h5"
                        className='navbar-title-container'
                    >
                        rankedwr
                    </Typography>
                </div>
                <div className='navbar-items-container'>
                    {navItems.map(item =>
                        <Button key={item.title} onClick={() => navigate(item.url)} sx={{ color: 'white' }}>
                            <Typography
                                variant="p"
                                className={`navbar-item ${pathname === item.url ? 'active' : ''}`}
                            >
                                {item.title}
                            </Typography>
                        </Button>
                    )}
                </div>
            </div>
        </div>
        // <AppBar position="static" sx={{ bgcolor: 'primary.main', flexDirection: 'row', justifyContent: 'center' }}>
        //     <Toolbar variant="dense" sx={{ maxWidth: 750, flex: 1 }}>
        //         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>

        //         </Box>
        //     </Toolbar>
        // </AppBar>
    )
}

