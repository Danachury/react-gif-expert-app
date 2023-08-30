import { render } from '@testing-library/react'
import { Loader } from '../../src/components/Loader'

describe('Tests in <Loader />', () => {

    test('should not show the loader by default', () => {
        const { container } = render(<Loader/>)
        expect(container.getElementsByClassName('loader').length).toBe(0)
    })

    test('should not show the loader when the "isLoading" attribute is = false', () => {
        const { container } = render(<Loader isLoading={false}/>)
        expect(container.getElementsByClassName('loader').length).toBe(0)
    })

    test('should show the loader when the "isLoading" attribute is = true', () => {
        const { container } = render(<Loader isLoading={true}/>)
        expect(container.getElementsByClassName('loader').length).toBe(1)
    })

    test('should match with snapshot', () => {
        const { container } = render(<Loader isLoading={true}/>)
        expect(container).toMatchSnapshot()
    })
})
