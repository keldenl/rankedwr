const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export const BASE_URL = isDev ? 'http://localhost:5001' : 'http://google.com'