import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/ranked-icon.png';
import { Typography } from '@mui/material';

import './Navbar.css'


export function Navbar({ }) {
    return (
        <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
            <Toolbar variant="dense">
                <div className='nav-bar-title-container'>
                    <img src={logo} alt='RankedWR' />
                    <Typography
                        variant="h5"
                        className='nav-bar-title-container'
                    >
                        rankedwr
                    </Typography>
                </div>
                {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={'test'} sx={{ color: '#fff' }}>
                test
              </Button>
            ))}
          </Box> */}
            </Toolbar>
        </AppBar>
    )
}