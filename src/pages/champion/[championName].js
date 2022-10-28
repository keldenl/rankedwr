import { CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import 'chartjs-adapter-moment';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import AnnotationPlugin from "chartjs-plugin-annotation";

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
import { calculateTier, convertStatToAppearPie, convertStatToLineGraph, getFloat, getTier, getUrlFriendlyName, lineOptions, pieOptions } from '../../utils';
import { Card } from '../../components/Card';
import Image from 'next/future/image';
import { SocialHeader } from '../../components/SocialHeader';
import { DateTime } from 'luxon';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export async function getStaticPaths() {
    return fetch(`${BASE_URL}/champion/`)
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
            const paths = heroData.map(h => ({ params: { championName: getUrlFriendlyName(h.name) } }))
            return {
                paths,
                fallback: true
            }
        })
}

// // Pre Rendering using 'getStaticProps' method for fetching the currency list
export async function getStaticProps(context) {
    const { championName } = context.params
    return fetch(`${BASE_URL}/champion/${championName}`)
        .then((res) => {
            if (res.ok) return res.json()
            throw new Error('Network response was not ok.')
        })
        .then((contents) => {
            const { champWRDetails: champDetails, champInfo, champStat, lastChecked } = contents;
            return {
                props: {
                    champDetails, champInfo, champStat, lastChecked,
                    championName,
                },
            }
        })
        .catch(e => {
            return {
                props: {
                    championName
                }
            }
        })
}



export function ChampionDetails({ championName, champDetails, champInfo, champStat, lastChecked }) {
    const router = useRouter()
    // const { championName } = router.query;

    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    // const [champDetails, setChampDetails] = useState({});
    // const [champInfo, setChampInfo] = useState({});
    // const [champStat, setChampStat] = useState({});
    const [champTldr, setChampTldr] = useState([]);
    const [selectedChampTldr, setSelectedChampTldr] = useState(0);

    const [champWinData, setChampWinData] = useState();
    const [champPickData, setChampPickData] = useState();
    const [champCurrPickData, setChampCurrPickData] = useState();
    const [champBanData, setChampBanData] = useState();
    const [champDiffData, setChampDiffData] = useState();

    const [viewingAbility, setViewingAbility] = useState(0);

    function getNumberWithOrdinal(n) {
        var s = ["th", "st", "nd", "rd"],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    const abilityTypeToName = (type) =>
        !isNaN(type) ? `${getNumberWithOrdinal(+type)} ability`.toUpperCase() : type.toUpperCase()

    const getChampDiffData = (name) => {
        const diffName = `${name}Diff`
        const data = champDiffData[champTldr[selectedChampTldr].position]
        if (!data || data.isNew) {
            return {
                value: 'New',
                icon: <AutoAwesomeIcon fontSize='small' />,
                color: 'rgba(255,255,255,0.3)',
            }
        }
        const value = data[diffName]

        return {
            value: Math.abs(champDiffData[champTldr[selectedChampTldr].position][diffName]),
            icon: value === 0 ? <HorizontalRuleIcon fontSize='small' /> : (value > 0 ? <ArrowDropUpIcon fontSize='small' /> : <ArrowDropDownIcon fontSize='small' />),
            color: value === 0 ? 'rgba(255,255,255,0.3)' : (value > 0 ? 'rgba(0,255,0,0.35)' : 'rgba(255,0,0,0.45)')
        }
    }

    useEffect(() => {
        ChartJS.register(
            CategoryScale,
            TimeScale,
            LinearScale,
            PointElement,
            LineElement,
            ArcElement,
            ChartDataLabels,
            AnnotationPlugin,
            Title,
            Tooltip,
            Legend,
        );
    }, [])


    useEffect(() => {
        if (router.isFallback) {
            return;
        }

        if (!champStat || !championName) {
            setNotFound(true);
            return;
        }

        // Get recent stats diff
        const sortedStats = [...champStat.positionRanks].sort((a, b) => DateTime.fromISO(b.updateDate) - DateTime.fromISO(a.updateDate))
        const statDates = []
        const recentStats = {} // ordered by newest -> oldest
        const numOfDates = 2

        sortedStats.forEach(stat => {
            // Add to list of stat dates if not existed yet
            if (!statDates.includes(stat.updateDate)) {
                if (statDates.length > numOfDates - 1) {
                    return;
                } else {
                    statDates.push(stat.updateDate)
                }
            }
            recentStats[stat.position] = [...recentStats[stat.position] || [], stat];
        })

        const statsDiff = {}
        Object.keys(recentStats).forEach(pos => {
            const posStats = recentStats[pos];
            const isNew = posStats.length === 1;
            if (isNew) {
                return {
                    isNew,
                    winDiff: 0,
                    rankDiff: 0,
                    pickDiff: 0,
                    banDiff: 0,
                }
            }

            const { appear_rate: pickNew, win_rate: winNew, forbid_rate: banNew, win_bzc: rankNew } = posStats[0];
            const { appear_rate: pickOld, win_rate: winOld, forbid_rate: banOld, win_bzc: rankOld } = posStats[1];
            statsDiff[pos] = {
                isNew,
                winDiff: Number((getFloat(winNew) - getFloat(winOld)) * 100).toFixed(2),
                rankDiff: rankNew - rankOld,
                pickDiff: Number((getFloat(pickNew) - getFloat(pickOld)) * 100).toFixed(2),
                banDiff: Number((getFloat(banNew) - getFloat(banOld)) * 100).toFixed(2),
            }
        })
        setChampDiffData(statsDiff);

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
    }, [router.isFallback])

    return (
        <>
            <SocialHeader
                title={`${champInfo.engName || ''} Wild Rift Champion Stats`}
                imgSrc={champInfo?.poster}
                imgTallSrc={champInfo?.card}
                description="
                    All-in-one hub for Riot's Official Wild Rift Stats. 
                    Find top champions for all positions using Riot's official ranked stats for solo top, mid, jungle, duo ADC, and support champions updated for China Diamond and above ranked players.
                "
            />
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
                                        <Typography variant="caption" sx={{ fontWeight: 'bolder', backgroundColor: getChampDiffData('win').color }} className='tldr-diff'>
                                            {getChampDiffData('win').icon}
                                            {getChampDiffData('win').value}%
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                                            {champTldr[selectedChampTldr].winR}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: 'lighter', opacity: 0.8 }}>
                                            WIN%
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="caption" sx={{ fontWeight: 'bolder', backgroundColor: getChampDiffData('rank').color }} className='tldr-diff'>
                                            {getChampDiffData('rank').icon}
                                            {getChampDiffData('rank').value}
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                                            #{champTldr[selectedChampTldr].winRank}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: 'lighter', opacity: 0.8 }}>
                                            RANK
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="caption" sx={{ fontWeight: 'bolder', backgroundColor: getChampDiffData('pick').color }} className='tldr-diff'>
                                            {getChampDiffData('pick').icon}
                                            {getChampDiffData('pick').value}%
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                                            {champTldr[selectedChampTldr].pickR}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: 'lighter', opacity: 0.8 }}>
                                            PICK%
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="caption" sx={{ fontWeight: 'bolder', backgroundColor: getChampDiffData('ban').color }} className='tldr-diff'>
                                            {getChampDiffData('ban').icon}
                                            {getChampDiffData('ban').value}%
                                        </Typography>
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
                    notFound ?
                        <div>
                            <Typography variant="subtitle1">
                                Champion Not Found
                            </Typography>
                        </div>
                        :
                        <div className='full-page-load'>
                            <CircularProgress />
                            <Typography variant="subtitle1">
                                Looking for {championName}
                            </Typography>
                        </div>
                }
            </div>
        </>
    )
}

export default ChampionDetails;