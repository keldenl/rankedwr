import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchCORS } from './fetchUtils';
import { urls } from './urls';
import { getNameFromHero, positionIdToName } from './utils';

function App() {
  const [heroData, setHeroData] = useState({});
  const [heroDataLoaded, setHeroDataLoaded] = useState(false);

  const [heroRankList, setHeroRankList] = useState({});
  const [heroRankListLoaded, setHeroRankListLoaded] = useState(false);

  const [positionList, setPositionList] = useState([]);
  const [currPosition, setCurrPosition] = useState();

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
        console.log(contents)

      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>WR Stats</h1>
      </header>
      <h1> Champion Tier List </h1>
      <div className='pillContainer'>
        {positionList.length && positionList.map(posId => {
          return (
            <div>
              <input
                name='position'
                type='radio'
                id={posId}
                onClick={() => setCurrPosition(posId)}
                checked={posId === currPosition}
                value={posId}
              />
              <label for={posId}>{positionIdToName[posId]}</label>
            </div>
          )
        })}
      </div>

      <div>
        <table>
          <tr>
            <th>Rank</th>
            <th>Position</th>
            <th>Champion</th>
            <th>Win Rate</th>
            <th>Pick Rate</th>
            <th>Ban Rate</th>
          </tr>
          {heroRankListLoaded && heroDataLoaded && heroRankList[currPosition].map((wr, index) => {
            const { hero_id, appear_rate, forbid_rate, win_rate, position } = wr;
            const hero = heroData[hero_id];
            const { name, avatar } = hero;
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{positionIdToName[position]}</td>
                <td>
                  <img src={avatar} />
                  <h2>{name}</h2>
                </td>
                <td>{win_rate * 100}%</td>
                <td>{appear_rate * 100}%</td>
                <td>{forbid_rate * 100}%</td>
              </tr>
            )
          })}
        </table>
      </div>

      <h1> All Champions </h1>
      <div>
        {heroDataLoaded && Object.keys(heroData).map(heroId => {
          const hero = heroData[heroId]
          return (
            <div>
              <img src={hero.avatar} alt={hero.name} />
              <h2>{hero.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
