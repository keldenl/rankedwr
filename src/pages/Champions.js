import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../api';
import { getUrlFriendlyName } from '../utils';

import "./Champions.css"

export function Champions({ }) {
    const navigate = useNavigate()

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
        <div>
            <div className="tier-page-wrapper">
                <Typography variant="h5">
                    Wild Rift <span style={{ fontWeight: 'lighter', opacity: 0.8 }}> Champions </span>
                </Typography>

                <Typography
                    variant="subtitle2"
                    sx={{ opacity: 0.8, mt: 1, mb: 2 }}
                >
                    List of Champions that currently exist in Wild Rift. Click on champion cards to view their latest rankings, their historical statistical trends, and abilities descriptions.
                </Typography>
                <div className='champions-container'>
                    {heroDataLoaded && heroData.map(hero => {
                        return (
                            <Link className='no-style' to={`/champion/${getUrlFriendlyName(hero.name)}`}>
                                <div key={hero.name} className='champion-card' style={{ backgroundImage: `${bgImageFade},url(${hero.card})` }} >
                                    <Typography variant="p" sx={{ mb: 2, opacity: 0.9 }}>{hero.name}</Typography>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}