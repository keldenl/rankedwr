import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import 'chartjs-adapter-moment';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
    ArcElement
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

import { convertStatToAppearPie, convertStatToLineGraph } from '../utils';
import { Card } from '../components/Card';
import './ChampionDetails.css';


export function ChampionDetails({ }) {
    const { championName } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const [champDetails, setChampDetails] = useState({});
    const [champInfo, setChampInfo] = useState({});
    const [champStat, setChampStat] = useState({});

    const [champWinData, setChampWinData] = useState();
    const [champPickData, setChampPickData] = useState();
    const [champCurrPickData, setChampCurrPickData] = useState();
    const [champBanData, setChampBanData] = useState();

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
            ArcElement,
            ChartDataLabels,
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

                const winData = convertStatToLineGraph(champStat.positionRanks, 'win_rate')
                const pickData = convertStatToLineGraph(champStat.positionRanks, 'appear_rate')
                const currPickData = convertStatToAppearPie(champStat.positionRanks);
                const banData = convertStatToLineGraph(champStat.positionRanks, 'forbid_rate')

                setChampWinData(winData);
                setChampPickData(pickData);
                setChampCurrPickData(currPickData);
                setChampBanData(banData);
                // setChampPickOption(pickOptions);

                // console.log(sets);

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


    const options =
    {
        responsive: true,
        maintainAspectRatio: true,

        aspectRatio: 4 / 3,
        layout: {
            padding: {
                // left: 20,
                right: 30,
                top: 20,
                // bottom: 10
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: () => '#fff',
                    usePointStyle: true,
                }
            },
            datalabels: {
                display: 'auto',
                align: -65,
                // offset:10,
                clamp: true,
                backgroundColor: '#19364eaa',
                color: '#fff',
                borderRadius: 3,
                formatter: function (value, ctx) {
                    return (value).toFixed(1) + '%';
                },
            },
        },
        autocolors: false,
        annotation: {
            annotations: {
                line1: {
                    type: 'line',
                    yMin: 50,
                    yMax: 50,
                    borderColor: '#fff',
                    borderWidth: 2,
                }
            }
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
        },
    };

    const pieOptions = {
        responsive: true,
        aspectRatio: 4 / 3,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: () => '#fff',
                    usePointStyle: true,
                }
            },
            datalabels: {
                display: true,
                align: 'center',
                backgroundColor: '#19364eaa',
                color: '#fff',
                borderRadius: 3,
                formatter: function (value, ctx) {
                    return `${ctx.chart.data.labels[ctx.dataIndex]} ${(value).toFixed(1) + '%'}`;
                },
            },
        },
        events: []
    }

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

                        <div className='rates-container'>
                            <Card title='Win Rate' Icon={EmojiEventsIcon}>
                                {!!champWinData && <Line options={options} data={champWinData} />}
                            </Card>
                            <Card title='Popular Roles' Icon={WhatshotIcon}>
                                {!!champPickData && <div className='chart-child'><Doughnut options={pieOptions} data={champCurrPickData} /></div>}
                            </Card>
                            <Card title='Ban Rate' Icon={DoNotDisturbIcon}>
                                {!!champBanData && <Line options={options} data={champBanData} />}
                            </Card>
                            <Card title='Pick Rate' Icon={PanToolAltIcon}>
                                {!!champPickData && <div className='chart-child'><Line options={options} data={champPickData} /></div>}
                            </Card>
                        </div>


                        <Card title='Abilities' Icon={AutoFixHighIcon}>
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

                        </Card>

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