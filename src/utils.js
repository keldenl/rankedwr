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