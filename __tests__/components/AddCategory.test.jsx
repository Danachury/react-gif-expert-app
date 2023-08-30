import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Tests in <AddCategory />', () => {

    test('should change the name of input', () => {
        render(<AddCategory onNewCategory={() => {
        }}/>)

        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: 'Saitama' } })

        expect(input.value).toBe('Saitama')
    })

    test('should call onNewCategory if the input has value', () => {
        const inputValue = 'Saitama'
        const onNewCategoryMock = jest.fn()
        render(<AddCategory onNewCategory={onNewCategoryMock}/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(input.value).toBe('')
        expect(onNewCategoryMock).toHaveBeenNthCalledWith(1, inputValue)
    })

    test('should not call onNewCategory if the input is empty', () => {
        const onNewCategoryMock = jest.fn()
        render(<AddCategory onNewCategory={onNewCategoryMock}/>)

        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect(onNewCategoryMock).not.toHaveBeenCalled()
    })
})
