import { Autocomplete, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Image from 'next/future/image';

import { BASE_URL } from "../api";
import { getUrlFriendlyName } from "../utils";
import Link from "next/link";
import { SocialHeader } from "../components/SocialHeader";



export function Home() {
    const router = useRouter();

    const currBg = 'https://assets.contentstack.io/v3/assets/blt370612131b6e0756/blt490ef68cbbd7a071/6324af2e8a5a2b30fbe29c01/Yone_TurnTable_DesktopHeader.mp4'
    const currBgMobile = "https://assets.contentstack.io/v3/assets/blt370612131b6e0756/blt813e67cbaa036e2c/6324af2d0faea1497015fa57/Yone_TurnTable_MobileHeader.mp4"

    const [bgSrc, setBgSrc] = useState(currBg);
    const [heroData, setHeroData] = useState([]);
    const [heroDataLoaded, setHeroDataLoaded] = useState(false);


    useEffect(() => {
        if (window.innerWidth < 560) {
            setBgSrc(currBgMobile);
        }

        const fetchHeroes = fetch(`${BASE_URL}/champion/`)
            .then((res) => {
                if (res.ok) return res.json()
                throw new Error('Network response was not ok.')
            })
            .then((contents) => {
                const heroData = contents.heroList.map(hero => {
                    return {
                        label: hero.engName,
                        avatar: hero.avatar
                    }
                })
                setHeroData(heroData)
                setHeroDataLoaded(true)
            })
        Promise.all([fetchHeroes])

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
                    {/* <Typography variant='caption' sx={{ }}>
                    The Ultimate Wild Rift Hub
                </Typography> */}

                    <Autocomplete
                        disablePortal
                        autoFocus
                        disableClearable
                        popupIcon={""}
                        disabled={!heroDataLoaded}
                        onChange={(e, value) => {
                            e.preventDefault();
                            router.push(`/champion/${getUrlFriendlyName(value.label)}`)
                        }}

                        id="combo-box-demo"
                        options={heroData}
                        sx={{ width: '80%', maxWidth: 500, borderRadius: 15 }}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                autoFocus
                                variant="outlined"
                                label="Search Champion..."
                                sx={{
                                    '& label': { paddingLeft: (theme) => theme.spacing(2) },
                                    '& input': { paddingLeft: (theme) => theme.spacing(3.5) },
                                    '& fieldset': {
                                        paddingLeft: (theme) => theme.spacing(2.5),
                                        borderRadius: '30px',
                                    },
                                }}
                            />
                        }

                        renderOption={(props, option) => (
                            <Box className='home-suggestions' component="li"
                                sx={{
                                    backgroundColor: 'transparent',
                                    '& > img': {
                                        mr: 2,
                                        mt: 1,
                                        mb: 1,
                                        flexShrink: 0,
                                        borderRadius: '100%',
                                    }
                                }}
                                {...props}>
                                <img
                                    loading="lazy"
                                    width="25"
                                    src={option.avatar}
                                    alt=""
                                />
                                <Typography variant="p">
                                    {option.label}
                                </Typography>
                            </Box>
                        )}
                    />
                </div>
            </div>
        </>

    )
}

export default Home;