import React from 'react';
import { DateTime } from 'luxon';

import { Link } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

import './Footer.css'


export function Footer({ }) {
    return (
        <div className='footer'>
            <p>All data sourced from Riot's Official Wild Rift <Link target='__blank' href='https://lolm.qq.com/act/a20220818raider/index.html'>CN Dia+ Statistics</Link></p>
            <p>Built by <Link target='__blank' href='https://twitter.com/RepotedWR'><TwitterIcon fontSize={'10px'} />RepotedWR</Link> © {DateTime.now().year}</p>
        </div>
    )
}