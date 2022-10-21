import { CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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

import { BASE_URL } from '../../api';
import { calculateTier, convertStatToAppearPie, convertStatToLineGraph, getFloat, getTier, lineOptions, pieOptions } from '../../utils';
import { Card } from '../../components/Card';
import Image from 'next/future/image';


export function ChampionDetails({ }) {
    const router = useRouter()
    const { championName } = router.query;

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
    }, [])


    useEffect(() => {
        if (!championName) return;

        const fetchChampData = fetch(`${BASE_URL}/champion/${championName}`)
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

                    const winR = `${Number((getFloat(win_rate) * 100).toFixed(2))}%`
                    const pickR = `${Number((getFloat(appear_rate) * 100).toFixed(2))}%`
                    const banR = `${Number((getFloat(forbid_rate) * 100).toFixed(2))}%`
                    const tier = getTier(calculateTier(getFloat(win_rate), getFloat(appear_rate), getFloat(forbid_rate)));

                    return { tier, winR, pickR, banR, winRank, pickRank, banRank, position }
                })

                setChampTldr(newTldr);
                setIsLoading(false);
            })
            .catch((err) => {
                setNotFound(true);
            })

        Promise.all([fetchChampData])
    }, [championName])

    return (
        <div style={{ overflow: 'hidden' }}>
            {!isLoading ?
                <>
                    <video className='champ-turn' preload="yes" autoPlay muted loop playsInline>
                        <source src={champDetails.heroVideo[0].video.file.url} type="video/mp4" />
                    </video>
                    <div className='champ-details-container tier-page-wrapper'>
                        <div className='champ-header'>
                            <Image
                                src={champInfo.avatar}
                                alt={champInfo.engName}
                                className='champ-avatar gold-border'
                                width='150'
                                height='150'
                                priority
                            />
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
                                        key={ct.position}
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
                            <Card title='Win Rate' Icon={EmojiEventsIcon} color='gold'>
                                {!!champWinData && <Line options={lineOptions} data={champWinData} />}
                            </Card>
                            <Card title='Popular Roles' Icon={WhatshotIcon} color='orangered'>
                                {!!champPickData && <div className='chart-child'><Doughnut options={pieOptions} data={champCurrPickData} /></div>}
                            </Card>
                            <Card title='Ban Rate' Icon={DoNotDisturbIcon} color='red'>
                                {!!champBanData && <Line options={lineOptions} data={champBanData} />}
                            </Card>
                            <Card title='Pick Rate' Icon={PanToolAltIcon} color='lightskyblue'>
                                {!!champPickData && <div className='chart-child'><Line options={lineOptions} data={champPickData} /></div>}
                            </Card>
                        </div>


                        <Card title='Abilities' Icon={AutoFixHighIcon} color='primary.main'>
                            <div className='abilities-wrapper'>
                                <video key={viewingAbility} className='ability-vid' preload="yes" autoPlay muted loop playsInline>
                                    <source src={champDetails.abilities[viewingAbility].videos[0].video.file.url} type="video/mp4" />
                                </video>
                                <div className='ability-thumb-container'>
                                    {champDetails.abilities.map((ability, i) => {
                                        const { thumbnail, title } = ability;
                                        return (
                                            <Image
                                                key={title}
                                                className={`ability-thumb gold-border ${i === viewingAbility ? 'selected' : ''}`}
                                                src={thumbnail.url}
                                                alt={thumbnail.title}
                                                onClick={() => setViewingAbility(i)}
                                                width='60'
                                                height='60'
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
                :
                <div className='full-page-load'>
                    <CircularProgress />
                    <Typography variant="subtitle1">
                        Looking for {championName}
                    </Typography>
                </div>
            }
            {notFound ?
                <div>
                    <Typography variant="subtitle1">
                        Champion Not Found
                    </Typography>
                </div>
                : undefined}
        </div>
    )
}

export default ChampionDetails;