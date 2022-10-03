import React, { useEffect, useState } from 'react';
import ReactGA from "react-ga4";
import { DateTime } from 'luxon';
import CookieConsent from "react-cookie-consent";
import preval from 'preval.macro'


import { blue } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { LinearProgress, Link, TextField } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';


import { DataGrid } from '@mui/x-data-grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarRateIcon from '@mui/icons-material/StarRate';
import PersonIcon from '@mui/icons-material/Person';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';


import { fetchCORS } from './fetchUtils';
import { urls } from './urls';
import { getNameFromHero, positionIdToName, getPatchByDate, getTier, positionOrder, positionNametoId, headerSortConfig, statFieldConfig } from './utils';
import logo from './assets/ranked-icon.png';
import './App.css';

function App() {
  const [showBanner, setShowBanner] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [buildDate, setBuildDate] = useState();

  const [heroData, setHeroData] = useState({});
  const [heroDataLoaded, setHeroDataLoaded] = useState(false);

  const [heroRankList, setHeroRankList] = useState({});
  const [heroRankListLoaded, setHeroRankListLoaded] = useState(false);

  const [positionList, setPositionList] = useState([]);
  const [currPosition, setCurrPosition] = useState();

  const [lastUpdateDate, setLastUpdateDate] = useState();

  const [rows, setRows] = useState([]);

  const defaultSortColumn = [{ field: 'win', sort: 'desc' }];
  const [currSortColumn, setCurrSortColumn] = useState(defaultSortColumn);

  const [filter, setFilter] = useState({ columnField: 'champion', operatorValue: 'contains', value: '' });

  const tierHeaderSortConfig = headerSortConfig(currSortColumn);

  const mobileHeader = (Icon, name, additionalText) =>
    () =>
      <span className='MuiDataGrid-columnHeaderTitle'>
        <Tooltip className='mobile-only' title={name} placement='top'>
          <Icon fontSize='small' />
        </Tooltip>
        <span className='mobile-only'>{additionalText}</span>
        <span className='desktop-only'>{name}</span>
      </span>


  const columns = [
    {
      field: 'rank',
      headerName: 'Rank',
      type: 'number',
      ...tierHeaderSortConfig,
      minWidth: 40,
      flex: 1,
      renderHeader: mobileHeader(StarRateIcon, 'Rank'),
    },
    {
      field: 'champion',
      headerName: 'Champion',
      minWidth: 40,
      flex: 4,
      ...tierHeaderSortConfig,
      valueGetter: (params) => params.row.name,
      renderCell: (params) => (
        <div className='champion-container'>
          <span className='avatar-img-container'>
            <img className={'avatar-img'} src={params.row.avatar} alt={params.row.name} />
          </span>
          <p>{params.row.name}</p>
        </div>
      ),
      renderHeader: mobileHeader(PersonIcon, 'Champion'),
    },
    {
      field: 'tier',
      headerName: 'Tier*',
      ...tierHeaderSortConfig,
      ...statFieldConfig,
      width: 50,
      minWidth: 45,
      // width: 55,
      renderCell: (params) => getTier(params.row.tier),
      renderHeader: mobileHeader(WorkspacePremiumIcon, 'Tier*', '*'),
    },
    { field: 'win', headerName: 'Win %', renderHeader: mobileHeader(EmojiEventsIcon, 'Win %'), ...tierHeaderSortConfig, ...statFieldConfig, flex: 1 },
    { field: 'pick', headerName: 'Pick %', renderHeader: mobileHeader(PanToolAltIcon, 'Pick %'), ...tierHeaderSortConfig, ...statFieldConfig, flex: 1 },
    { field: 'ban', headerName: 'Ban %', renderHeader: mobileHeader(DoNotDisturbIcon, 'Ban %'), ...tierHeaderSortConfig, ...statFieldConfig, flex: 1 },
  ];

  const handlePositionChange = (_, newPosition) => {
    if (newPosition !== null) {
      setCurrPosition(newPosition);
    }
  };


  useEffect(() => {
    const positionId = positionNametoId[currPosition]
    if (!heroRankListLoaded || !heroDataLoaded || !heroRankList[positionId]) { return }

    const newRows = heroRankList[positionId].map((wr, index) => {
      const { hero_id, win_rate: win, appear_rate: pick, forbid_rate: ban } = wr;
      const hero = heroData[hero_id];
      const { name, avatar } = hero;

      const tier = (parseFloat(win) + ((parseFloat(win) * parseFloat(pick) / 5) + (parseFloat(win) * parseFloat(ban) / 5))) * 100

      return ({
        id: wr.id,
        rank: index + 1,
        name,
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
    ReactGA.initialize("G-C2S8YQDJBT", { debug: process.env.NODE_ENV === 'development' });
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }

  useEffect(() => {
    const dateTimeStamp = preval`module.exports = new Date().getTime()`
    setBuildDate(DateTime.fromMillis(dateTimeStamp));

    // Remove this when implementing cookie consent
    if (process.env.NODE_ENV !== 'development') {
      handleAcceptCookie()
    }

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
        const updateDate = DateTime.fromISO(lastUpdateDate, { zone: 'UTC+8' })

        const championData = {}

        const input = contents.data;
        for (let i of Object.keys(input)) {
          const positionHeroes = input[i];
          const pos = positionIdToName[i];
          for (let j = 0; j < positionHeroes.length; j++) {
            const { hero_id, position, dtstatdate, ...hero } = positionHeroes[j];
            if (championData[hero_id] && !!championData[hero_id][dtstatdate]) {
              championData[hero_id][dtstatdate] = { ...championData[hero_id][dtstatdate], [pos]: hero }
            } else {
              championData[hero_id] = { ...championData[hero_id], [dtstatdate]: { [pos]: hero } };
            }
          }
        }

        const data = {
          championData,
          lastUpdateDate
        }

        console.log(data);

        setHeroRankList(contents.data);
        setHeroRankListLoaded(true);

        const posList = Object.keys(contents.data).map(p => positionIdToName[p]);
        const validPosList = positionOrder.every(val => posList.includes(val));

        // Validate that the typical positions we expect are fetching
        if (validPosList) {
          setPositionList([...positionOrder]);
          setCurrPosition([...positionOrder][0]);
        }
        setLastUpdateDate(lastUpdateDate)
        document.title = `Wild Rift Tier List Stats (Patch ${getPatchByDate(updateDate)}) - RankedWR`
      })

    Promise.all([fetchHeroes, fetchRankedList])
  }, [])

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxHeight: 400,
    overflowY: 'auto',
    transform: 'translate(-50%, -50%)',
    maxWidth: 500,
    width: '85%',
    bgcolor: 'background.default',
    border: '2px solid',
    borderColor: 'primary.main',
    boxShadow: 24,
    pt: 1,
    px: 3,
    pb: 2,
  }

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...modalStyle }}>
          <h3>What's New</h3>
          <ul className='date-new-ul'>
            <li>{DateTime.fromISO('20220926').toFormat('d LLL y')}</li>
            <ul className='new-things-ul'>
              <li><b>New:</b> Added search for champions in the tier table!</li>
            </ul>
            <li>{DateTime.fromISO('20220924').toFormat('d LLL y')}</li>
            <ul className='new-things-ul'>
              <li><b>New:</b> Complete column sorting redesign. It is now easier to tap to sort and more obvious which column is being sorted.</li>
              <li><b>Improved:</b> Table performance on mobile</li>
              <li><b>Improved:</b> Image and stats loading experience</li>
              <li><b>Improved:</b> Footer now has a cute Twitter icon link for my account</li>
              <li><b>Fixed:</b> "Monkey King" and "Jarvan I V" -&gt; "Wukong" and "Jarvan IV" :)</li>
            </ul>
            <li>{DateTime.fromISO('20220923').toFormat('d LLL y')}</li>
            <ul className='new-things-ul'>
              <li><b>New:</b> Proper title and description on top of the page to explain how we're sourcing our stats</li>
              <li><b>New:</b> Disclaimer on "Tier" and how that's calculated by RankedWR (and not Riot)</li>
              <li><b>Improved:</b> Moved patch version and update date higher up for better visibility</li>
            </ul>
            <li>{DateTime.fromISO('20220922').toFormat('d LLL y')}</li>
            <ul className='new-things-ul'>
              <li><b>New:</b> "What's New" banner now tracks new feature changes</li>
              <li><b>Improved:</b> Roles are now sorted properly (i.e. Solo, Jg, Mid, Duo, Supp) <i>(thanks u/gheycub!)</i></li>
              <li><b>Improved:</b> "Baron" renamed to "Solo" <i>(thanks u/gheycub!)</i></li>
              <li><b>Improved:</b> Table design for a cleaner experience</li>
              <li><b>Bug Fix:</b> Clicking already selected role no longer deselects it <i>(thanks u/PancakeInvaders!)</i></li>
            </ul>
          </ul>
        </Box>
      </Modal>

      {showBanner ?
        <div className='banner'>
          <Typography variant="p" onClick={handleOpen} style={{ cursor: 'pointer' }}>
            ✨ What's new (Last updated {!!buildDate ? buildDate.toFormat('d LLL y') : <CircularProgress size={10} thickness={7} />})
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
          margin: 0,
          marginBottom: 15,
        }}
        buttonText={'Accept cookies'}
        declineButtonText={'Reject cookies'}
        style={{ background: "#3d9ff4" }}
        buttonStyle={{ borderRadius: 10, backgroundColor: '#fff' }}
        declineButtonStyle={{ backgroundColor: 'transparent', margin: '5px 0' }}
      >
        Site (optionally) uses cookies that help me understand how to improve the website – accepting cookies helps me continue making this the best website it can be!
      </CookieConsent> */}

      <div className='tier-page-wrapper'>
        <Typography
          variant="h5"
        >
          Wild Rift Tier List <span style={{ fontWeight: 'lighter', opacity: 0.8 }}> for Diamond+ (Patch {!!lastUpdateDate ? getPatchByDate(DateTime.fromISO(lastUpdateDate)) : <CircularProgress size={20} thickness={5} />})</span>
        </Typography>
        <Tooltip title={!!lastUpdateDate ? DateTime.fromISO(lastUpdateDate).toFormat('d LLL y') : ''} placement="right" arrow>
          <div className='last-update-text'>
            <Typography
              variant="p"
            >
              <span style={{ fontWeight: 'lighter', opacity: 0.8 }}> Last Updated</span> {!!lastUpdateDate ? DateTime.fromISO(lastUpdateDate).toRelativeCalendar({ unit: 'days' }) : <CircularProgress size={10} thickness={7} />}
            </Typography>
          </div>
        </Tooltip>
        <Typography
          variant="subtitle2"
          sx={{ opacity: 0.8, marginTop: 1 }}
        >
          The only Wild Rift tier list based on <Link target='__blank' href='https://lolm.qq.com/act/a20220818raider/index.html'>Riot's official Wild Rift CN statistics</Link>.
          Updates in real-time when new data is published from Riot.
        </Typography>

        <div className='table-options-container'>
          <ToggleButtonGroup
            value={currPosition}
            exclusive
            onChange={handlePositionChange}
            className='position-container'
          >
            {positionList.length && positionList.map(posName => {
              return (
                <ToggleButton color="primary" key={posName} value={posName} aria-label={posName} size="small">
                  <span className={`position-icon ${posName.toLowerCase()}`} />
                  <Typography
                    variant="subtitle2"
                    sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 0.5, marginRight: 0.5, fontWeight: 600, textTransform: 'capitalize' }}
                  >
                    {posName}
                  </Typography>
                </ToggleButton>
              )
            })
            }
          </ToggleButtonGroup>

          <TextField
            onChange={(e) => setFilter(f => ({ ...f, value: e.target.value }))}
            value={filter.value ?? ''}
            label='Search Champion...'
            variant="outlined"
            size="small"
            sx={{
              flexGrow: 1,
              fontSize: '0.9em'
            }}
          />
        </div>

        <div className='tier-table'>
          <DataGrid
            rows={rows}
            columns={columns}
            sortModel={currSortColumn}
            filterModel={{ items: [filter] }}
            stickyHeader
            hideFooterPagination={true}
            components={{
              LoadingOverlay: LinearProgress,
              ColumnSortedAscendingIcon: null,
              ColumnSortedDescendingIcon: null,
              ColumnUnsortedIcon: null,
              ColumnHeaderFilterIconButton: () => <></>,
              Footer: () => {
                return (
                  <div className='tier-table-footer'>
                    <p>
                      *= Tier is not provided by Riot. It is calculated by us based on the official win% / pick% / ban%
                    </p>
                  </div>
                )
              }
            }}
            onSelectionModelChange={(newSelectionModel) => {
              // console.log(newSelectionModel);
            }}
            onSortModelChange={(sortColumn) => {
              // Sorts go from asc -> desc -> none
              // To avoid 'none' state, whenever we get it, take us back to asc (start of loop)
              const newSortColumn = !sortColumn.length ? [{ ...currSortColumn[0], sort: 'asc' }] : sortColumn
              setCurrSortColumn(newSortColumn);
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
            disableColumnMenu={true}
            disableVirtualization // disabling to improve movile performance
          />
        </div>
      </div>


      <div className='footer'>
        <p>All data sourced from Riot's Official Wild Rift <Link target='__blank' href='https://lolm.qq.com/act/a20220818raider/index.html'>CN Dia+ Statistics</Link></p>
        <p>Built by <Link target='__blank' href='https://twitter.com/RepotedWR'><TwitterIcon fontSize={'10px'} />RepotedWR</Link> © {DateTime.now().year}</p>
      </div>
    </div >
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