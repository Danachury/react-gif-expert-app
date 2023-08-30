import { render, screen } from '@testing-library/react'
import GifExpertApp from '../../src/GifExpertApp.jsx'

describe('Tests in <GifExpertApp />', () => {

    test('should match with snapshot', () => {
        const { container } = render(<GifExpertApp/>)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe('GifExpertApp')
        expect(container).toMatchSnapshot()
    })
})
