import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import 'chartjs-adapter-moment';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import './ChampionDetails.css';
import { chartColorList, getFloat, positionOrder } from '../utils';
import { DateTime } from 'luxon';


export function ChampionDetails({ }) {
    const { championName } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const [champDetails, setChampDetails] = useState({});
    const [champInfo, setChampInfo] = useState({});
    const [champStat, setChampStat] = useState({});

    const [champPickData, setChampPickData] = useState({});
    const [champPickOption, setChampPickOption] = useState([]);

    const [viewingAbility, setViewingAbility] = useState(0);

    function getNumberWithOrdinal(n) {
        var s = ["th", "st", "nd", "rd"],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    const abilityTypeToName = (type) =>
        !isNaN(type) ? `${getNumberWithOrdinal(+type)} ability`.toUpperCase() : type.toUpperCase()

    useEffect(() => {
        ChartJS.register(
            CategoryScale,
            TimeScale,
            LinearScale,
            PointElement,
            LineElement,
            Title,
            Tooltip,
            Legend,
        );

        const fetchChampData = fetch(`http://localhost:5001/champion/${championName}`)
            .then((res) => {
                if (res.ok) return res.json()
                throw new Error('Network response was not ok.')
            })
            .then((contents) => {
                const { champWRDetails: champDetails, champInfo, champStat } = contents;
                setChampDetails(champDetails);
                setChampInfo(champInfo);
                setChampStat(champStat);
                setIsLoading(false);
                console.log(champStat);
                const dataSet = {};
                champStat.positionRanks.map(stat => {
                    if (!dataSet[stat.updateDate]) {
                        dataSet[stat.updateDate] = {};
                    }

                    dataSet[stat.updateDate] = { ...dataSet[stat.updateDate], [stat.position]: getFloat(stat.appear_rate) };
                })

                console.log(dataSet)

                const xData = Object.keys(dataSet).sort((a, b) => DateTime.fromISO(a).toMillis() - DateTime.fromISO(b).toMillis());
                const pickOptions = xData.map(date => DateTime.fromISO(date, { zone: 'UTC+8' }).toFormat('d LLL y'))

                // const sets = [];

                const sets = positionOrder.flatMap((pos, i) => {
                    let valid = false;
                    const data = xData.map(x => {
                        if (dataSet[x] && dataSet[x][pos]) {
                            valid = true;
                            return dataSet[x][pos] * 100;
                        }
                        return null;
                    });

                    console.log(chartColorList[i]);

                    return valid ?
                        {
                            label: pos,
                            data,
                            borderColor: chartColorList[i],
                            backgroundColor: chartColorList[i],
                            lineTension: 0.5,
                            spanGaps: true,
                        } :
                        [];
                })
                setChampPickData({ labels: pickOptions, datasets: sets });
                setChampPickOption(pickOptions);

                console.log(sets);

                // console.log({
                //     champDetails,
                //     champInfo,
                //     champStat
                // })
            })
            .catch((err) => {
                setNotFound(true);
            })

        Promise.all([fetchChampData])

    }, [])


    const options =
    {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: () => '#fff',
                    usePointStyle: true,
                }
            },
        },
        scales: {
            x: {
                type: 'time',
                display: true,
                ticks: {
                    color: () => '#fff'
                },
                time: {
                    tooltipFormat: 'll',
                }
            },
            y: {
                ticks: {
                    callback: (value, index, ticks) => `${value}%`,
                    color: '#fff'
                },
            }
        }

    };

    return (
        <div >
            {!isLoading ?
                <>
                    <video className='champ-turn' preload="yes" autoPlay muted loop playsInline>
                        <source src={champDetails.heroVideo[0].video.file.url} type="video/mp4" />
                    </video>
                    <div className='champ-details-container tier-page-wrapper'>
                        <div className='champ-header'>
                            <img src={champInfo.avatar} className='champ-avatar gold-border' />
                            <Typography variant="h4">
                                {champInfo.engName}
                            </Typography>
                            <Typography variant="p" sx={{ fontWeight: 'lighter', opacity: 0.8 }}>
                                {champDetails.subtitle}
                            </Typography>
                        </div>
                        <div className='champ-roles'>
                            {champInfo.engRoles.map(r =>
                                <Typography key={r} variant="p" sx={{ fontWeight: 'lighter', opacity: 0.8 }}>
                                    {r}
                                </Typography>
                            )}
                        </div>

                        <div className='card'>
                            {champPickOption.length > 0 && <Line options={options} data={champPickData} />}
                        </div>

                        <div className='card'>
                            <Typography variant="h5" className='card-title' sx={{ fontWeight: 'bolder' }}>
                                Abilities
                            </Typography>
                            <div className='abilities-wrapper'>
                                <div className='ability-thumb-container'>
                                    {champDetails.abilities.map((ability, i) => {
                                        const { thumbnail, title } = ability;
                                        return (
                                            <img
                                                key={title}
                                                className={`ability-thumb gold-border ${i === viewingAbility ? 'selected' : ''}`}
                                                src={thumbnail.url}
                                                alt={thumbnail.title}
                                                onClick={() => setViewingAbility(i)}
                                            />
                                        )
                                    })}
                                </div>
                                <div className='ability-curr-container'>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'lighter', opacity: 0.8 }}>
                                        {abilityTypeToName(champDetails.abilities[viewingAbility].type)}
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                        {champDetails.abilities[viewingAbility].title}
                                    </Typography>
                                    <Typography variant="p">
                                        {champDetails.abilities[viewingAbility].description}
                                    </Typography>
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