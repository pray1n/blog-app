import * as contentful from 'contentful'

export const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    environment: process.env.REACT_APP_ENVIRONMENT,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
})