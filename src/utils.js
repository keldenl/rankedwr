import { DateTime } from "luxon"

export const getNameFromHero = (hero) => {
    const urlSplit = hero.poster.split('/')
    const nameWithNum = urlSplit[urlSplit.length - 1]
    return nameWithNum.split('_')[0]
}

export const positionIdToName = {
    1: 'Mid',
    2: 'Baron',
    3: 'Duo',
    4: 'Support',
    5: 'Jungle'
}

const patchDates = [
    { ver: '3.5', date: DateTime.fromISO('20221117') },
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