import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ChampionDetails.css';


export function ChampionDetails({ }) {
    const { championName } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const [champDetails, setChampDetails] = useState({});
    const [champInfo, setChampInfo] = useState({});
    const [champStat, setChampStat] = useState({});

    const [viewingAbility, setViewingAbility] = useState(0);

    function getNumberWithOrdinal(n) {
        var s = ["th", "st", "nd", "rd"],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    const abilityTypeToName = (type) =>
        !isNaN(type) ? `${getNumberWithOrdinal(+type)} ability`.toUpperCase() : type.toUpperCase()

    useEffect(() => {
        const fetchChampData = fetch(`http://localhost:5001/champion/${championName}`)
            .then((res) => {
                if (res.ok) return res.json()
                throw new Error('Network response was not ok.')
            })
            .then((contents) => {
                console.log(contents);
                const { champWRDetails: champDetails, champInfo, champStat } = contents;
                setChampDetails(champDetails);
                setChampInfo(champInfo);
                setChampStat(champStat);
                setIsLoading(false);

                console.log({
                    champDetails,
                    champInfo,
                    champStat
                })
            })
            .catch((err) => {
                setNotFound(true);
            })

        Promise.all([fetchChampData])

    }, [])

    return (
        <div>
            {!isLoading ?
                <>
                    <video className='champ-turn' preload="yes" autoPlay muted loop playsInline>
                        <source src={champDetails.heroVideo[0].video.file.url} type="video/mp4" />
                    </video>
                    <div className='champ-details-container'>
                        <div className='champ-header'>
                            <img src={champInfo.avatar} className='gold-border' />
                            <Typography variant="h4">
                                {champInfo.engName}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 'lighter', opacity: 0.8 }}>
                                {champDetails.subtitle}
                            </Typography>
                            <div className='champ-roles'>
                                {champInfo.engRoles.map(r =>
                                    <Typography key={r} variant="p" sx={{ fontWeight: 'lighter', opacity: 0.8 }}>
                                        {r}
                                    </Typography>
                                )}
                            </div>
                        </div>
                        <div>
                            <p>Abilities</p>
                            <div className='abilities-wrapper'>
                                <div className='ability-thumb-container'>
                                    {champDetails.abilities.map((ability, i) => {
                                        const { thumbnail, title } = ability;
                                        return (
                                            <img
                                                key={title}
                                                className='ability-thumb gold-border'
                                                src={thumbnail.url}
                                                alt={thumbnail.title}
                                                onClick={() => setViewingAbility(i)}
                                            />
                                        )
                                    })}
                                </div>
                                <div className='ability-curr-container'>
                                    <p>
                                        {champDetails.abilities[viewingAbility].title}
                                        <span>
                                            {abilityTypeToName(champDetails.abilities[viewingAbility].type)}
                                        </span>
                                    </p>
                                    <p>{champDetails.abilities[viewingAbility].description}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
                : undefined
            }
            {notFound ?
                <div>
                    <p>Champion Not Found</p>
                </div>
                : undefined}
        </div>
    )
}