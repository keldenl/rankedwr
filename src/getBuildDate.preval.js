import preval from 'next-plugin-preval';

async function getDate() {
    return { timeStamp: new Date().getTime() }
}

export default preval(getDate());