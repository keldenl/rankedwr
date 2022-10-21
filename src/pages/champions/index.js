import { Typography } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../api';
import { SocialHeader } from '../../components/SocialHeader';
import { getUrlFriendlyName } from '../../utils';

export function Champions({ }) {
    const [heroData, setHeroData] = useState([]);
    const [heroDataLoaded, setHeroDataLoaded] = useState(false);

    const bgImageFade = 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(20,20,20,1) 90%,rgba(20,20,20,1) 100%)'

    useEffect(() => {
        const fetchHeroes = fetch(`${BASE_URL}/champion/`)
            .then((res) => {
                if (res.ok) return res.json()
                throw new Error('Network response was not ok.')
            })
            .then((contents) => {
                const heroData = contents.heroList.map(hero => {
                    return {
                        name: hero.engName,
                        card: hero.card
                    }
                })

                heroData.sort((a, b) => a.name.localeCompare(b.name))
                setHeroData(heroData)
                setHeroDataLoaded(true)
            })
        Promise.all([fetchHeroes])
    }, [])

    return (
        <>
            <SocialHeader
                title='Wild Rift Champions'
                description="View list of champions that currently exist in Wild Rift. See their latest rankings, their historical statistical trends, and abilities descriptions."
            />
            <div>
                <div className="tier-page-wrapper">
                    <Typography variant="h5">
                        Wild Rift <span style={{ fontWeight: 'lighter', opacity: 0.8 }}> Champions </span>
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        sx={{ opacity: 0.8, mt: 1, mb: 2 }}
                    >
                        List of champions that currently exist in Wild Rift. Click on champion cards to view their latest rankings, their historical statistical trends, and abilities descriptions.
                    </Typography>
                    <div className='champions-container'>
                        {heroDataLoaded && heroData.map(hero => {
                            return (
                                <Link key={hero.name} href={`/champion/${getUrlFriendlyName(hero.name)}`}>
                                    <a className='no-style'>
                                        <div key={hero.name} className='champion-card' style={{ backgroundImage: `${bgImageFade},url(${hero.card})` }} >
                                            <Typography variant="p" sx={{ mb: 2, opacity: 0.9 }}>{hero.name}</Typography>
                                        </div>
                                    </a>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Champions;