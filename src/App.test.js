import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
    render(<App />)
    const myList = screen.getByText(/список дел/i)
    const btn = screen.getByRole('button')
    const completedTasks = screen.getByText(/задачи в процессе выполнения/i)
    const uncompletedTasks = screen.getByText(/выполненные задачи/i)
    expect(myList).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    expect(completedTasks).toMatchSnapshot()
    expect(uncompletedTasks).toMatchSnapshot()
})