import { DateTime } from "luxon"
import clsx from 'clsx';
import { renderProgress } from "./renderProgress";

export const positionOrder = ['all', 'solo', 'jungle', 'mid', 'duo', 'support']

const patchDates = [
    { ver: '4.0', date: DateTime.fromISO('20230215') },
    { ver: '4.0a', date: DateTime.fromISO('20230201') },
    { ver: '4.0', date: DateTime.fromISO('20230112') },
    { ver: '3.5b', date: DateTime.fromISO('20221214') },
    { ver: '3.5a', date: DateTime.fromISO('20221130') },
    { ver: '3.5', date: DateTime.fromISO('20221117') },
    { ver: '3.4c', date: DateTime.fromISO('20221102') },
    { ver: '3.4b', date: DateTime.fromISO('20221019') },
    { ver: '3.4a', date: DateTime.fromISO('20220928') },
    { ver: '3.4', date: DateTime.fromISO('20220915') },
    // { ver: '3.3', date: DateTime.fromISO('20220714') },
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

export const calculateTier = (win, pick, ban) =>
    (parseFloat(win) + ((parseFloat(win) * parseFloat(pick) / 5) + (parseFloat(win) * parseFloat(ban) / 5))) * 100

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
    '#2196F3', // "all" role will never be used
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
                lineTension: 0.1,
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
    const totalPick = Object.values(appearData).reduce((prev, curr) => prev + curr);
    const data = Object.values(appearData).map(v => (v / totalPick) * 100);
    return {
        labels,
        datasets: [{
            label: 'Pick ratio',
            data,
            backgroundColor: labels.map((l, i) => chartColorList[i + 1]),
            hoverOffset: 4
        }]
    }
}

const patchVerOptions = ({ver, date}) => {
    return [{
        type: "line",
        mode: "vertical",
        scaleID: "x",
        value: date.toMillis(),
        borderColor: '#4d4229',
        borderWidth: 2,
        drawTime: 'afterDraw',
    },
    {
        type: 'label',
        xValue: date.toMillis(),
        color: 'white',
        drawTime: 'afterDraw',
        xAdjust: 10,
        yAdjust: 50,
        backgroundColor: '#4d4229',
        content: [ver],
        font: {
            size: 10,
            weight: 'bold'
        },
        padding: 2.5,
    }]
}

const commonOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 4 / 3,
    autocolors: false,

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
                return Number((value).toFixed(1)) + '%';
            },
        },
        annotation: {
            annotations: patchDates.flatMap(patch => {
                return patchVerOptions(patch)
            })
        }
    },
}

export const lineOptions =
{
    ...commonOptions,
    layout: {
        padding: {
            right: 30,
            top: 20,
        }
    },
    scales: {
        x: {
            type: 'time',
            display: true,
            ticks: {
                color: () => '#fff',
            },
            time: {
                tooltipFormat: 'll',
            }
        },
        y: {
            ticks: {
                callback: (value, index, ticks) => Number((value).toFixed(1)) + '%',
                color: '#fff',
            },
        }
    },
};

export const pieOptions = {
    ...commonOptions,
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

export const getUrlFriendlyName = (name) => name.split(' ').join('-');