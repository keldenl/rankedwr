import React, { useEffect, useState } from 'react';
import ReactGA from "react-ga4";
import { DateTime } from 'luxon';
import CookieConsent from "react-cookie-consent";
import preval from 'preval.macro'


import { blue } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LinearProgress, Link } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CloseIcon from '@mui/icons-material/Close';

import { fetchCORS } from './fetchUtils';
import { urls } from './urls';
import { getNameFromHero, positionIdToName, getPatchByDate, getTier } from './utils';
import { renderProgress } from './renderProgress';
import logo from './assets/ranked-icon.png';
import './App.css';

function App() {
  const [showBanner, setShowBanner] = useState(true);
  const [buildDate, setBuildDate] = useState();

  const [heroData, setHeroData] = useState({});
  const [heroDataLoaded, setHeroDataLoaded] = useState(false);

  const [heroRankList, setHeroRankList] = useState({});
  const [heroRankListLoaded, setHeroRankListLoaded] = useState(false);

  const [positionList, setPositionList] = useState([]);
  const [currPosition, setCurrPosition] = useState();

  const [lastUpdateDate, setLastUpdateDate] = useState();

  const [rows, setRows] = useState([]);

  const columns = [
    { field: 'rank', headerName: 'Rank', headerClassName: 'tier-header', type: 'number', width: 25 },
    {
      field: 'champion',
      headerName: 'Champion', headerClassName: 'tier-header',
      minWidth: 100,
      flex: 4,
      valueGetter: (params) => params.row.name,
      renderCell: (params) => (
        <div className='champion-container'>
          <img className={'avatar-img'} src={params.row.avatar} alt={params.row.name} />
          <p>{params.row.name}</p>
        </div>
      )
    },
    { field: 'tier', headerName: 'Tier', headerClassName: 'tier-header', type: 'number', align: 'left', headerAlign: 'left', renderCell: (params) => getTier(params.row.tier), width: 50 },
    { field: 'win', headerName: 'Win %', headerClassName: 'tier-header', type: 'number', align: 'left', headerAlign: 'left', renderCell: renderProgress, minWidth: 70, flex: 1 },
    { field: 'pick', headerName: 'Pick %', headerClassName: 'tier-header', type: 'number', align: 'left', headerAlign: 'left', renderCell: renderProgress, minWidth: 70, flex: 1 },
    { field: 'ban', headerName: 'Ban %', headerClassName: 'tier-header', type: 'number', align: 'left', headerAlign: 'left', renderCell: renderProgress, minWidth: 70, flex: 1 },
  ];

  const handlePositionChange = (_, newPosition) => {
    setCurrPosition(newPosition);
  };


  useEffect(() => {
    if (!heroRankListLoaded || !heroDataLoaded || !heroRankList[currPosition]) { return }

    const newRows = heroRankList[currPosition].map((wr, index) => {
      const { hero_id, win_rate: win, appear_rate: pick, forbid_rate: ban } = wr;
      const hero = heroData[hero_id];
      const { name, avatar } = hero;

      const tier = (parseFloat(win) + ((parseFloat(win) * parseFloat(pick) / 5) + (parseFloat(win) * parseFloat(ban) / 5))) * 100

      return ({
        id: wr.id,
        rank: index + 1,
        name: name.replace(/([A-Z])/g, ' $1').trim(),
        avatar,
        tier,
        win,
        pick,
        ban
      })
    })

    setRows(newRows)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPosition, heroDataLoaded, heroRankListLoaded])

  const handleAcceptCookie = () => {
    ReactGA.initialize("G-C2S8YQDJBT", { debug: true });
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }

  useEffect(() => {
    const dateTimeStamp = preval`module.exports = new Date().getTime()`
    setBuildDate(DateTime.fromMillis(dateTimeStamp));

    // Remove this when implementing cookie consent
    handleAcceptCookie()

    const fetchHeroes = fetchCORS(urls.heroList)
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('Network response was not ok.')
      })
      .then((data) => JSON.parse(data.contents))
      .then((contents) => {
        const heroData = {}
        Object.keys(contents.heroList).map(heroId => {
          const hero = contents.heroList[heroId];
          const name = getNameFromHero(hero);
          heroData[heroId] = {
            name,
            avatar: hero.avatar
          }
        })

        setHeroData(heroData)
        setHeroDataLoaded(true)
      })

    const fetchRankedList = fetchCORS(urls.heroRankList)
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('Network response was not ok.')
      })
      .then((data) => JSON.parse(data.contents))
      .then((contents) => {
        const lastUpdateDate = contents.data[1][0]['dtstatdate']
        const updateDate = DateTime.fromISO(lastUpdateDate)

        setHeroRankList(contents.data)
        setHeroRankListLoaded(true)
        setPositionList(Object.keys(contents.data));
        setCurrPosition(Object.keys(contents.data)[0])
        setLastUpdateDate(lastUpdateDate)
        document.title = `Wild Rift Ranked Tier List Patch ${getPatchByDate(updateDate)} - rankedwr`
      })

    Promise.all([fetchHeroes, fetchRankedList])
  }, [])

  return (
    <div className="App">
      <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
        <Toolbar variant="dense">
          <div className='nav-bar-title-container'>
            <img src={logo} alt='RankedWR' />
            <Typography
              variant="h5"
              className='nav-bar-title-container'
            >
              rankedwr
            </Typography>
          </div>
          {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={'test'} sx={{ color: '#fff' }}>
                test
              </Button>
            ))}
          </Box> */}
        </Toolbar>
      </AppBar>
      {showBanner ?
        <div className='banner'>
          <Typography variant="p">
            ✨ What's new ({!!buildDate ? buildDate.toFormat('d LLL y') : '-'}) <Link href='#'>Change log</Link>
          </Typography>
          <CloseIcon onClick={() => setShowBanner(false)} style={{ justifySelf: 'flex-end', fontSize: '1.25em', cursor: 'pointer' }} />
        </div>
        : null
      }
      {/* <CookieConsent
        enableDeclineButton
        flipButtons
        onAccept={handleAcceptCookie}
        containerClasses='cookie-consent-container'
        buttonWrapperClasses='cookie-consent-button-wrapper'
        buttonClasses='cookie-consent-button'
        contentStyle={{
          wordBreak: 'break-word',
          flex: 'unset',
          margin: '15px 0',
        }}
        buttonText={'Accept cookies'}
        declineButtonText={'Reject cookies'}
        style={{ background: "#3d9ff4" }}
        buttonStyle={{ borderRadius: 10, backgroundColor: '#fff' }}
        declineButtonStyle={{ backgroundColor: 'transparent', margin: '5px 0' }}
      >
        Site (optionally) uses cookies that help me understand how to improve the website – accepting cookies helps me continue making this the best website it can be!
      </CookieConsent> */}

      <ToggleButtonGroup
        value={currPosition}
        exclusive
        onChange={handlePositionChange}
        className='position-container'
      >
        {positionList.length && positionList.map(posId => {
          return (
            <ToggleButton color="primary" key={posId} value={posId} aria-label={positionIdToName[posId]} fullWidth>
              <span className={`position-icon ${positionIdToName[posId].toLowerCase()}`} />
              <Typography
                variant="subtitle2"
                sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 0.5, fontWeight: 600, textTransform: 'capitalize' }}

              >
                {positionIdToName[posId]}
              </Typography>
            </ToggleButton>
          )
        })
        }
      </ToggleButtonGroup>

      <div className='tier-table'>
        <DataGrid
          rows={rows}
          columns={columns}
          stickyHeader
          hideFooterPagination={true}
          components={{
            LoadingOverlay: LinearProgress,
            Footer: () => {
              const updateDate = DateTime.fromISO(lastUpdateDate)
              return (
                <div className='tier-table-footer'>
                  <p>
                    Updated {!!lastUpdateDate ? `${updateDate.toRelativeCalendar()} (Patch ${getPatchByDate(updateDate)})`
                      :
                      '-'}
                  </p>
                </div>
              )
            }
          }}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row'
          }
          sx={{
            bgcolor: 'footer.default',
            borderRadius: 2.5,
            border: 0,
            padding: '0 20px',
          }}
          loading={!heroDataLoaded || !heroRankListLoaded}
        />
      </div>


      <div className='footer'>
        <p>Data by Riot's Official Wild Rift <Link href='https://lolm.qq.com/act/a20220818raider/index.html'>CN Dia+ Statistics</Link></p>
        <p>Built by <Link href='https://twitter.com/RepotedWR'>RepotedWR</Link> © {DateTime.now().year}</p>
      </div>
    </div>
  )
}

export default App;


//  <h1> All Champions </h1>
//       <div>
//         {heroDataLoaded && Object.keys(heroData).map(heroId => {
//           const hero = heroData[heroId]
//           return (
//             <div>
//               <img src={hero.avatar} alt={hero.name} />
//               <h2>{hero.name}</h2>
//             </div>
//           )
//         })}
//       </div> 