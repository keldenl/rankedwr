export const getNameFromHero = (hero) => {
    const urlSplit = hero.poster.split('/')
    const nameWithNum = urlSplit[urlSplit.length - 1]
    return nameWithNum.split('_')[0]
}

export const positionIdToName = {
    1: 'Mid',
    2: 'Baron/Top',
    3: 'Dragon/ADC',
    4: 'Support',
    5: 'Jungle'
}