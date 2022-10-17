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

import { calculateTier, convertStatToAppearPie, convertStatToLineGraph, getFloat, getTier, lineOptions, pieOptions } from '../utils';
import { Card } from '../components/Card';
import './ChampionDetails.css';


export function ChampionDetails({ }) {
    const { championName } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const [champDetails, setChampDetails] = useState({});
    const [champInfo, setChampInfo] = useState({});
    const [champStat, setChampStat] = useState({});
    const [champTldr, setChampTldr] = useState([]);
    const [selectedChampTldr, setSelectedChampTldr] = useState(0);

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
                const { champWRDetails: champDetails, champInfo, champStat, lastChecked } = contents;
                setChampDetails(champDetails);
                setChampInfo(champInfo);
                setChampStat(champStat);

                const winData = convertStatToLineGraph(champStat.positionRanks, 'win_rate')
                const pickData = convertStatToLineGraph(champStat.positionRanks, 'appear_rate')
                const currPickData = convertStatToAppearPie(champStat.positionRanks);
                const banData = convertStatToLineGraph(champStat.positionRanks, 'forbid_rate')

                setChampWinData(winData);
                setChampPickData(pickData);
                setChampCurrPickData(currPickData);
                setChampBanData(banData);
                // setChampPickOption(pickOptions);
                console.log(lastChecked)

                const dupedLatestStats = champStat.positionRanks.filter(r => r.dtstatdate === lastChecked.updateDate)
                const latestStats =
                    dupedLatestStats
                        .filter((v, i, a) => a.findIndex(v2 => (v2.position === v.position)) === i)
                        .sort((a, b) => getFloat(b.appear_rate) - getFloat(a.appear_rate))
                const newTldr = latestStats.map(ls => {
                    const {
                        win_bzc: winRank,
                        appear_bzc: pickRank,
                        forbid_bzc: banRank,
                        win_rate,
                        appear_rate,
                        forbid_rate,
                        position
                    } = ls

                    // console.log({
                    //     win_bzc: winRank,
                    //     appear_bzc: pickRank,
                    //     forbid_bzc: banRank,
                    //     win_rate,
                    //     appear_rate,
                    //     forbid_rate,
                    // })

                    const winR = `${Number((getFloat(win_rate) * 100).toFixed(2))}%`
                    const pickR = `${Number((getFloat(appear_rate) * 100).toFixed(2))}%`
                    const banR = `${Number((getFloat(forbid_rate) * 100).toFixed(2))}%`
                    const tier = getTier(calculateTier(getFloat(win_rate), getFloat(appear_rate), getFloat(forbid_rate)));

                    // console.log(tier)
                    return { tier, winR, pickR, banR, winRank, pickRank, banRank, position }
                })

                console.log(newTldr[0]);

                setChampTldr(newTldr);
                // setSelectedChampTldr(0);
                // champStat.positionRanks

                // console.log(sets);

                console.log({
                    champDetails,
                    champInfo,
                    champStat
                })

                setIsLoading(false);

            })
            .catch((err) => {
                setNotFound(true);
            })

        Promise.all([fetchChampData])

    }, [])


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

                        <div className='champ-tldr-wrapper'>
                            <div className='champ-tldr-roles'>
                                <Typography variant="button" sx={{ fontWeight: 'bolder', flex: 1 }}>
                                    {champInfo.engRoles.join(', ')}
                                </Typography>
                                {champTldr.map((ct, i) =>
                                    <Typography
                                        variant="button"
                                        sx={{ fontWeight: 'bolder', opacity: 0.4, transition: '0.2s opacity ease-in-out' }}
                                        className={`${i === selectedChampTldr ? 'tldr-role-active' : ''}`}
                                        onClick={() => setSelectedChampTldr(i)}
                                    >
                                        {ct.position}
                                    </Typography>
                                )}
                            </div>
                            <div className='champ-tldr'>
                                <div>
                                    <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                                        {champTldr[selectedChampTldr].tier}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 'lighter', opacity: 0.8 }}>
                                        TIER
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                                        {champTldr[selectedChampTldr].winR}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 'lighter', opacity: 0.8 }}>
                                        WIN%
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                                        #{champTldr[selectedChampTldr].winRank}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 'lighter', opacity: 0.8 }}>
                                        RANK
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                                        {champTldr[selectedChampTldr].pickR}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 'lighter', opacity: 0.8 }}>
                                        PICK%
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                                        {champTldr[selectedChampTldr].banR}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 'lighter', opacity: 0.8 }}>
                                        BAN%
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div className='rates-container'>
                            <Card title='Win Rate' Icon={EmojiEventsIcon}>
                                {!!champWinData && <Line options={lineOptions} data={champWinData} />}
                            </Card>
                            <Card title='Popular Roles' Icon={WhatshotIcon}>
                                {!!champPickData && <div className='chart-child'><Doughnut options={pieOptions} data={champCurrPickData} /></div>}
                            </Card>
                            <Card title='Ban Rate' Icon={DoNotDisturbIcon}>
                                {!!champBanData && <Line options={lineOptions} data={champBanData} />}
                            </Card>
                            <Card title='Pick Rate' Icon={PanToolAltIcon}>
                                {!!champPickData && <div className='chart-child'><Line options={lineOptions} data={champPickData} /></div>}
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