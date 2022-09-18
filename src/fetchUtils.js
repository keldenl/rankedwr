
export const fetchCORS = (url) =>
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)