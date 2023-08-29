const API_KEY = 'qoxU186F30tFORytaO5U3N6gYdTAEpuw'
const HOST = 'https://api.giphy.com/v1/gifs'

export const getRandomGif = async () => {
    const response = await fetch(`${HOST}/random?api_key=${API_KEY}`)
    const { data } = await response.json()
    const { url } = data.images.original
    return url
}

export const search = async (search, limit=10) => {
    const response = await fetch(`${HOST}/search?q=${search}&api_key=${API_KEY}&limit=${limit}`)
    const { data = [] } = await response.json()
    return data
}
