import { useEffect, useState } from 'react'
import { search } from '../services/giphy.service.js'

const getGifs = async (category) => {
    const gifs = await search(category)
    return gifs.map(({ id, title, images }) => ({ id, title, url: images.downsized_medium.url }))
}

const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getGifs(category)
            .then(setGifs)
            .then(() => setIsLoading(false))
    }, [])

    return {
        gifs,
        isLoading
    }
}

export default useFetchGifs
