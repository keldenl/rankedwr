import React, { useEffect, useState } from 'react';
import ReactGA from "react-ga4";
import { DateTime } from 'luxon';
import { useRouter } from 'next/router';
import Image from 'next/future/image';
import CookieConsent from "react-cookie-consent";


import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { LinearProgress, Link, TextField } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { DataGrid } from '@mui/x-data-grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import AppsIcon from '@mui/icons-material/Apps';


import {
  getPatchByDate,
  getTier,
  positionOrder,
  headerSortConfig,
  statFieldConfig,
  getRole,
  getFloat,
  calculateTier,
  getUrlFriendlyName
} from '../../utils';
import { BASE_URL } from '../../api';
import { SocialHeader } from '../../components/SocialHeader';

export function FullTierList() {
  const router = useRouter()


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
        {Icon ? <Tooltip className='mobile-only' title={name} placement='top'>
          <Icon fontSize='small' />
        </Tooltip> : undefined}
        <span className='mobile-only'>{additionalText}</span>
        <span className='desktop-only'>{name}</span>
      </span>


  const columns = [
    {
      field: 'rank',
      headerName: '#',
      type: 'number',
      ...tierHeaderSortConfig,
      width: 30,
      minWidth: 30,
      maxWidth: 30,
      renderCell: (params) => {
        const { sort } = params.api.getSortModel()[0];
        const i = params.api.getRowIndex(params.row.id);
        if (sort === 'asc') {
          const itemCount = params.api.getRowsCount();
          return itemCount - i;
        }
        return i + 1;
      },
    },
    {
      field: 'role',
      headerName: 'Role',
      ...tierHeaderSortConfig,
      ...statFieldConfig,
      width: 50,
      minWidth: 10,
      renderHeader: mobileHeader(AppsIcon, 'Role'),
      renderCell: (params) => getRole(params.row.role),
    },
    {
      field: 'champion',
      headerName: 'Champion',
      minWidth: 30,
      flex: 2,
      ...tierHeaderSortConfig,
      valueGetter: (params) => params.row.name,
      renderCell: (params) => (
        <div className='champion-container'>
          <span className='avatar-img-container'>
            <Image className={'avatar-img gold-border'} src={params.row.avatar} alt={params.row.name} fill sizes="100vw" />
          </span>
          <Typography className='desktop-only' variant="p" sx={{ fontWeight: 'bolder' }}>
            {params.row.name}
          </Typography>
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
      renderHeader: mobileHeader(WorkspacePremiumIcon, 'Tier*', '*'),
      renderCell: (params) => getTier(params.row.tier),
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
    if (!heroRankListLoaded || !heroDataLoaded || !heroRankList || !heroRankList.length) { return }
    let rank = 0;
    const newRows = heroRankList.flatMap(wr => {
      if (currPosition !== positionOrder[0] && currPosition !== wr.position) {
        return [];
      }
      rank++;
      const { hero_id, win_rate: winR, appear_rate: pickR, forbid_rate: banR, position: role } = wr;
      const win = getFloat(winR)
      const pick = getFloat(pickR)
      const ban = getFloat(banR)
      const hero = heroData[hero_id];
      const { name, avatar } = hero;

      const tier = calculateTier(win, pick, ban)

      return ({
        id: wr._id,
        rank,
        name,
        avatar,
        role,
        tier,
        win,
        pick,
        ban
      })
    })

    setRows(newRows)
  }, [currPosition, heroData, heroDataLoaded, heroRankList, heroRankListLoaded])

  const handleAcceptCookie = () => {
    ReactGA.initialize("G-C2S8YQDJBT", { debug: process.env.NODE_ENV === 'development' });
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }

  useEffect(() => {
    // Remove this when implementing cookie consent
    if (process.env.NODE_ENV !== 'development') {
      handleAcceptCookie()
    }

    const fetchHeroes = fetch(`${BASE_URL}/champion/`)
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('Network response was not ok.')
      })
      .then((contents) => {
        const heroData = {}
        contents.heroList.map(hero => {
          heroData[hero._id] = {
            name: hero.engName,
            avatar: hero.avatar
          }
        })
        setHeroData(heroData)
        setHeroDataLoaded(true)
      })

    const fetchRankedList = fetch(`${BASE_URL}/rank/getCurrentList`)
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('Network response was not ok.')
      })
      .then((data) => {
        const { dtstatdate: lastUpdateDate, positionRanks } = data;
        const updateDate = DateTime.fromISO(lastUpdateDate, { zone: 'UTC+8' })

        setHeroRankList(positionRanks);
        setHeroRankListLoaded(true);

        setPositionList([...positionOrder]);
        setCurrPosition([...positionOrder][0]);
        setLastUpdateDate(lastUpdateDate);
        document.title = `Wild Rift Tier List Patch ${getPatchByDate(updateDate)}) - RankedWR`
      })

    Promise.all([fetchHeroes, fetchRankedList])
  }, [])


  return (
    <>
      <SocialHeader
        title={`Wild Rift Tier List Patch ${getPatchByDate(DateTime.fromISO(lastUpdateDate, { zone: 'UTC+8' }))}`}
        description="
        Tier list for top champions for all positions from Riot's Official Wild Rift Stats. 
        Ranked stats for solo top, mid, jungle, duo ADC, and support champions updated for China Diamond and above ranked players.
    "
      />
      <div className="App">
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
          <div className='page-header'>
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
          </div>

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
                    <span className={`position-icon ${posName}`} />
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
                      <Typography variant="caption">
                        *= Tier is not provided by Riot. It is calculated by us based on the official win% / pick% / ban%
                      </Typography>
                    </div>
                  )
                }
              }}
              onSelectionModelChange={(ids, details) => {
                const item = ids.map((id) => rows.find((row) => row.id === id))[0];
                !!router && router.push(`/champion/${getUrlFriendlyName(item.name)}`)
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
      </div>
    </>
  )
}

export default FullTierList;