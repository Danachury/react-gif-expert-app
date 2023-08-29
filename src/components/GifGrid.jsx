import GifGridItem from './GifGridItem.jsx'
import { Loader } from './Loader.jsx'
import useFetchGifs from '../hooks/useFetchGifs.js'

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            <Loader isLoading={isLoading}/>

            <div className="card-grid">
                {
                    gifs.map((gif) => <GifGridItem key={gif.id} {...gif}/>)
                }
            </div>
        </>
    )
}
