import { DateTime } from "luxon"
import clsx from 'clsx';
import { renderProgress } from "./renderProgress";

const championNameRemap = {
    'Monkey King': 'Wukong'
}

export const getNameFromHero = (hero) => {
    const urlSplit = hero.poster.split('/')
    const nameWithNum = urlSplit[urlSplit.length - 1]
    const nameNoSpaces = nameWithNum.split('_')[0];
    const name = nameNoSpaces.replace(/([A-Z]+)/g, ' $1').trim();
    return championNameRemap[name] ?? name;
}

export const positionIdToName = {
    1: 'mid',
    2: 'solo',
    3: 'duo',
    4: 'support',
    5: 'jungle'
}

export const positionNametoId = {
    mid: 1,
    solo: 2,
    duo: 3,
    support: 4,
    jungle: 5
}

export const positionOrder = ['all', 'solo', 'jungle', 'mid', 'duo', 'support']

const patchDates = [
    { ver: '3.5', date: DateTime.fromISO('20221117') },
    { ver: '3.4a', date: DateTime.fromISO('20220928') },
    { ver: '3.4', date: DateTime.fromISO('20220915') },
    { ver: '3.3', date: DateTime.fromISO('20220714') },
]

export const getPatchByDate = (date) => {
    for (let patch of patchDates) {
        if (date.startOf('day') >= patch.date.startOf('day')) {
            return patch.ver;
        }
    }
    return '-'
}

function binarySearch(arr, target, lo = 0, hi = arr.length - 1) {
    if (target < arr[lo]) { return arr[0] }
    if (target > arr[hi]) { return arr[hi] }

    const mid = Math.floor((hi + lo) / 2);

    return hi - lo < 2
        ? (target - arr[lo]) < (arr[hi] - target) ? arr[lo] : arr[hi]
        : target < arr[mid]
            ? binarySearch(arr, target, lo, mid)
            : target > arr[mid]
                ? binarySearch(arr, target, mid, hi)
                : arr[mid]
}

const tiersByGrade = {
    58: 'S',
    54: 'A',
    52: 'B',
    48: 'C',
    46: 'D',
    40: 'F'
}
const tiersCutoffs = Object.keys(tiersByGrade);

export const getTier = (grade) => {
    return tiersByGrade[binarySearch(tiersCutoffs, grade)];
}


export const getRole = (role) => {
    return <span className={`position-icon ${role}`} />
}

export const headerSortConfig = (currSortColumn) => {
    return {
        headerClassName: (params) => {
            const baseClass = 'tier-header'
            if (!currSortColumn || !currSortColumn[0] || params.field !== currSortColumn[0].field) {
                return baseClass;
            }
            return clsx(`${baseClass} active-sorting-cell active-sorting-cell-${currSortColumn[0].sort}`)

        },
        cellClassName: (params) => {
            if (!currSortColumn || !currSortColumn[0] || params.field !== currSortColumn[0].field) {
                return;
            }
            return clsx(`active-sorting-cell`)
        },
    }
}

export const statFieldConfig = {
    type: 'number',
    align: 'center',
    headerAlign: 'center',
    minWidth: 60,
    renderCell: renderProgress,
}

export const getFloat = (nd) => parseFloat(nd.$numberDecimal);

export const chartColorList = [
    '#2196F3', // all will never be used
    '#2196F3',
    '#ffffff',
    '#81F4E1',
    '#FF729F',
    '#D3C4D1'
]

export const convertStatToLineGraph = (positionRanks, statToGet) => {
    const dataSet = {};
    positionRanks.map(stat => {
        if (!dataSet[stat.updateDate]) {
            dataSet[stat.updateDate] = {};
        }

        dataSet[stat.updateDate] = { ...dataSet[stat.updateDate], [stat.position]: getFloat(stat[statToGet]) };
    })

    const xData = Object.keys(dataSet).sort((a, b) => DateTime.fromISO(a).toMillis() - DateTime.fromISO(b).toMillis());
    const pickOptions = xData.map(date => DateTime.fromISO(date, { zone: 'UTC+8' }).toFormat('d LLL y'))

    const sets = positionOrder.flatMap((pos, i) => {
        let valid = false;
        const data = xData.map(x => {
            if (dataSet[x] && dataSet[x][pos]) {
                valid = true;
                return dataSet[x][pos] * 100;
            }
            return null;
        });

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

    return { labels: pickOptions, datasets: sets };
}

export const convertStatToAppearPie = (positionRanks) => {
    const dataSet = {};
    positionRanks.map(stat => {
        if (!dataSet[stat.updateDate]) {
            dataSet[stat.updateDate] = {};
        }

        dataSet[stat.updateDate] = { ...dataSet[stat.updateDate], [stat.position]: getFloat(stat['appear_rate']) };
    })

    const xData = Object.keys(dataSet).sort((a, b) => DateTime.fromISO(b).toMillis() - DateTime.fromISO(a).toMillis());
    const appearData = dataSet[xData[0]];
    const labels = Object.keys(appearData);
    const data = Object.values(appearData).map(v => v * 100);
    return {
        labels,
        datasets: [{
            label: 'Pick ratio',
            data,
            backgroundColor: labels.map((l, i) => chartColorList[i+1]),
            hoverOffset: 4
        }]
    }
}

// {
//     label: 'My First Dataset',
//     data: [300, 50, 100],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)'
//     ],
//     hoverOffset: 4
//   }