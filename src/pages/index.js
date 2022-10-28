import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Image from 'next/future/image';

import Link from "next/link";
import { SocialHeader } from "../components/SocialHeader";
import { Search } from "../components/Search";



export function Home() {
    const currBg = 'https://assets.contentstack.io/v3/assets/blt370612131b6e0756/blt490ef68cbbd7a071/6324af2e8a5a2b30fbe29c01/Yone_TurnTable_DesktopHeader.mp4'
    const currBgMobile = "https://assets.contentstack.io/v3/assets/blt370612131b6e0756/blt813e67cbaa036e2c/6324af2d0faea1497015fa57/Yone_TurnTable_MobileHeader.mp4"

    const [bgSrc, setBgSrc] = useState(currBg);

    useEffect(() => {
        if (window.innerWidth < 560) {
            setBgSrc(currBgMobile);
        }
    }, [])


    return (
        <>
            <SocialHeader
                title='Wild Rift Tier List & Champion Stats'
                description="
                    All-in-one hub for Riot's Official Wild Rift Stats. 
                    Find top champions for all positions using Riot's official ranked stats for solo top, mid, jungle, duo ADC, and support champions updated for China Diamond and above ranked players.
                "
            />
            <div className='home-container'>
                <video key={bgSrc} className='home-bg' preload="yes" autoPlay muted loop playsInline>
                    <source src={bgSrc} type="video/mp4" />
                </video>
                <div className='home-items'>
                    <Link href='/'>
                        <a className='no-style navbar-title-container' >
                            <Image src={'/assets/ranked-icon.png'} alt='RankedWR' width='23' height='23' />
                            <Typography variant="h3" sx={{ fontWeight: '600' }} className='home-title navbar-title-container' >
                                rankedwr
                            </Typography>
                        </a>
                    </Link>
                    {/* <Typography variant='subtitle2' sx={{ opacity: 0.7}}>
                        The Ultimate Wild Rift Hub
                    </Typography> */}
                    <Search autoFocus />

                </div>
            </div>
        </>

    )
}

export default Home;