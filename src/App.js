import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LinearProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { DateTime } from 'luxon';

import { fetchCORS } from './fetchUtils';
import { urls } from './urls';
import { getNameFromHero, positionIdToName } from './utils';
import './App.css';
import { renderProgress } from './renderProgress';

function App() {
  const [heroData, setHeroData] = useState({});
  const [heroDataLoaded, setHeroDataLoaded] = useState(false);

  const [heroRankList, setHeroRankList] = useState({});
  const [heroRankListLoaded, setHeroRankListLoaded] = useState(false);

  const [positionList, setPositionList] = useState([]);
  const [currPosition, setCurrPosition] = useState();

  const [lastUpdateDate, setLastUpdateDate] = useState();

  const [rows, setRows] = useState([]);

  const columns = [
    { field: 'rank', headerName: 'Rank', type: 'number', width: 50 },
    {
      field: 'champion',
      headerName: 'Champion',
      minWidth: 50,
      flex: 4,
      valueGetter: (params) => params.row.name,
      renderCell: (params) => (
        <div className='champion-container'>
          <img className={'avatar-img'} src={params.row.avatar} alt={params.row.name} />
          <p>{params.row.name}</p>
        </div>
      )
    },
    { field: 'win', headerName: 'Win Rate', type: 'number', renderCell: renderProgress, minWidth: 100, flex: 1 },
    { field: 'pick', headerName: 'Pick Rate', type: 'number', renderCell: renderProgress, minWidth: 100, flex: 1 },
    { field: 'ban', headerName: 'Ban Rate', type: 'number', renderCell: renderProgress, minWidth: 100, flex: 1 },
  ];

  const handlePositionChange = (event, newPosition) => {
    setCurrPosition(newPosition);
  };


  useEffect(() => {
    if (!heroRankListLoaded || !heroDataLoaded || !heroRankList[currPosition]) { return }

    const newRows = heroRankList[currPosition].map((wr, index) => {
      const { hero_id, win_rate: win, appear_rate: pick, forbid_rate: ban } = wr;
      const hero = heroData[hero_id];
      const { name, avatar } = hero;

      return ({
        id: wr.id,
        rank: index + 1,
        name,
        avatar,
        win,
        pick,
        ban
      })
    })

    setRows(newRows)
  }, [currPosition])


  useEffect(() => {
    fetchCORS(urls.heroList)
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
        console.log(heroData)
      })

    fetchCORS(urls.heroRankList)
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('Network response was not ok.')
      })
      .then((data) => JSON.parse(data.contents))
      .then((contents) => {
        setHeroRankList(contents.data)
        setHeroRankListLoaded(true)
        setPositionList(Object.keys(contents.data));
        setCurrPosition(Object.keys(contents.data)[0])
        setLastUpdateDate(contents.data[1][0]['dtstatdate'])
        console.log(contents)
      })
  }, [])

  return (
    <div className="App">
      <AppBar position="static" sx={{ bgcolor: "#0477BF" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" className='nav-bar-title' sx={{ fontWeight: 600 }}>
            RankedWR
          </Typography>
        </Toolbar>
      </AppBar>

      <ToggleButtonGroup
        value={currPosition}
        exclusive
        onChange={handlePositionChange}
        className='position-container'
      >
        {positionList.length && positionList.map(posId => {
          return (
            <ToggleButton key={posId} value={posId} aria-label={positionIdToName[posId]} fullWidth>
              <span className={`position-icon ${positionIdToName[posId].toLowerCase()}`} />
              <Typography
                sx={{ display: { xs: 'none', sm: 'block' } }}
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
          }}
          loading={!heroDataLoaded || !heroRankListLoaded}
        />
      </div>

      <div className='footer'>
        <p>Last Updated: {DateTime.fromISO(lastUpdateDate).toLocaleString()}</p>
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