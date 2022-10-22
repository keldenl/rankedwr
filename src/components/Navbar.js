import React, { useEffect, useState } from 'react';
// import buildDate from '../getBuildDate.preval'

import { Box, Button, CircularProgress, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';

import { useLocation, useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
import Image from 'next/future/image';
import Link from 'next/link';
import { useRouter } from 'next/router';


export function Navbar({ }) {
    const router = useRouter()
    const { pathname } = router;
    const isHome = pathname === '/'

    const navItems = [
        { title: 'Champions', url: '/champions' },
        { title: 'Tier List', url: '/tier-list' },
    ]

    const [showBanner, setShowBanner] = useState(true);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [buildDate, setBuildDate] = useState();

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        maxHeight: 400,
        overflowY: 'auto',
        transform: 'translate(-50%, -50%)',
        maxWidth: 500,
        width: '85%',
        bgcolor: 'background.default',
        border: '2px solid',
        borderColor: 'primary.main',
        boxShadow: 24,
        pt: 1,
        px: 3,
        pb: 2,
    }

    return (
        <>
            <div className='navbar-bg' style={isHome ? { backgroundColor: 'transparent', position: 'absolute' } : {}}>
                <div className='navbar-container' style={isHome ? { justifyContent: 'flex-end' } : {}}>
                    {!isHome ? <Link href='/'>
                        <a className='no-style navbar-title-container' >
                            <Image src={'/assets/ranked-icon.png'} width='13' height='13' alt='RankedWR' />
                            <Typography
                                variant="h5"
                                className='navbar-title-container'
                            >
                                rankedwr
                            </Typography>
                        </a>
                    </Link> : undefined}
                    <div className='navbar-items-container'>
                        {navItems.map(item =>
                            <Button key={item.title} href={item.url} sx={{ color: 'white' }}>
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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...modalStyle }}>
                    <h3>What's New</h3>
                    <ul className='date-new-ul'>
                        <li>{DateTime.fromISO('20221021').toFormat('d LLL y')}</li>
                        <ul className='new-things-ul'>
                            <li><b>New:</b> Individual champion pages with history stat trends!</li>
                            <li><b>New:</b> New homepage with search!</li>
                            <li><b>New:</b> New page with list of all champions</li>
                            <li><b>New:</b> You can now view all champions on the tier list table</li>
                            <li><b>New:</b> New "role" column in tier list</li>
                            <li><i>Too many updates to list here TBH but TLDR this is the v2 release!</i></li>
                        </ul>
                        <li>{DateTime.fromISO('20221002').toFormat('d LLL y')}</li>
                        <ul className='new-things-ul'>
                            <li><b>New:</b> Table is now mobile friendly!</li>
                        </ul>
                        <li>{DateTime.fromISO('20220926').toFormat('d LLL y')}</li>
                        <ul className='new-things-ul'>
                            <li><b>New:</b> Added search for champions in the tier table!</li>
                        </ul>
                        <li>{DateTime.fromISO('20220924').toFormat('d LLL y')}</li>
                        <ul className='new-things-ul'>
                            <li><b>New:</b> Complete column sorting redesign. It is now easier to tap to sort and more obvious which column is being sorted.</li>
                            <li><b>Improved:</b> Table performance on mobile</li>
                            <li><b>Improved:</b> Image and stats loading experience</li>
                            <li><b>Improved:</b> Footer now has a cute Twitter icon link for my account</li>
                            <li><b>Fixed:</b> "Monkey King" and "Jarvan I V" -&gt; "Wukong" and "Jarvan IV" :)</li>
                        </ul>
                        <li>{DateTime.fromISO('20220923').toFormat('d LLL y')}</li>
                        <ul className='new-things-ul'>
                            <li><b>New:</b> Proper title and description on top of the page to explain how we're sourcing our stats</li>
                            <li><b>New:</b> Disclaimer on "Tier" and how that's calculated by RankedWR (and not Riot)</li>
                            <li><b>Improved:</b> Moved patch version and update date higher up for better visibility</li>
                        </ul>
                        <li>{DateTime.fromISO('20220922').toFormat('d LLL y')}</li>
                        <ul className='new-things-ul'>
                            <li><b>New:</b> "What's New" banner now tracks new feature changes</li>
                            <li><b>Improved:</b> Roles are now sorted properly (i.e. Solo, Jg, Mid, Duo, Supp) <i>(thanks u/gheycub!)</i></li>
                            <li><b>Improved:</b> "Baron" renamed to "Solo" <i>(thanks u/gheycub!)</i></li>
                            <li><b>Improved:</b> Table design for a cleaner experience</li>
                            <li><b>Bug Fix:</b> Clicking already selected role no longer deselects it <i>(thanks u/PancakeInvaders!)</i></li>
                        </ul>
                    </ul>
                </Box>
            </Modal>

            {showBanner ?
                <div className='banner' style={isHome ? { position: 'absolute', marginTop: 46.5 } : {}}>
                    <Typography variant="p" onClick={handleOpen} style={{ cursor: 'pointer' }}>
                        ✨ what's new
                    </Typography>
                    <CloseIcon onClick={() => setShowBanner(false)} style={{ justifySelf: 'flex-end', fontSize: '1.25em', cursor: 'pointer' }} />
                </div>
                : null
            }
        </>
    )
}

