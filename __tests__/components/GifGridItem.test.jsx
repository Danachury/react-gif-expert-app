import { render, screen } from '@testing-library/react'
import GifGridItem from '../../src/components/GifGridItem.jsx'

describe('Tests in <GifGridItem />', () => {

    const title = 'Saitama'
    const url = 'https://one-punch-man/saitama.jpg'

    test('should match with snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url}/>)
        expect(container).toMatchSnapshot()
    })

    test('should show the image with the sent url and its alt', () => {
        render(<GifGridItem title={title} url={url}/>)
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('should show the Gif title', () => {
        render(<GifGridItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()
    })
})
