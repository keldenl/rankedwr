import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

import "./Champions.css"

export function Champions({ }) {
    const [heroData, setHeroData] = useState([]);
    const [heroDataLoaded, setHeroDataLoaded] = useState(false);

    const bgImageFade = 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(20,20,20,1) 90%,rgba(20,20,20,1) 100%)'



    useEffect(() => {
        const fetchHeroes = fetch('http://localhost:5001/champion/')
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

                setHeroData(heroData)
                setHeroDataLoaded(true)
            })

        Promise.all([fetchHeroes])
    }, [])

    return (
        <div>
            <Navbar />
            <div className='champions-container tier-page-wrapper'>
                {heroDataLoaded && heroData.map(hero => {
                    return (
                        <div key={hero.name} className='champion-card' style={{ backgroundImage: `${bgImageFade},url(${hero.card})` }} >
                            <Typography variant="p" sx={{ mb: 2, opacity: 0.9 }}>{hero.name}</Typography>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}