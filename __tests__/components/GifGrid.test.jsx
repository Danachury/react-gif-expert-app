import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import useFetchGifs from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Tests in <GifGrid />', () => {

    const category = 'Dragon Ball'

    test('should show the loader', () => {

        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        })
        const { container } = render(<GifGrid category={category}/>)

        expect(screen.getByRole('heading', { level: 3 }).innerHTML).toContain(category)
        expect(container.getElementsByClassName('loader').length).toBe(1)
    })

    test('should show the items when gifs are available on "useFetchGifs" hook', () => {
        const gifs = [
            { id: 'Goku123', title: 'Dragon Ball - Goku', url: 'https://localhost:8080/goku.jpg' },
            { id: 'Saitama123', title: 'Saitama', url: 'https://localhost:8080/saitama.jpg' }
        ]
        useFetchGifs.mockReturnValue({
            gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>)

        expect(screen.getAllByRole('img').length).toBe(2)
    })
})
