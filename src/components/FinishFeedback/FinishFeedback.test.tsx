import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Router, Route, Routes } from 'react-router-dom'
import FinishFeedback from './FinishFeedback.component'
import FinishFeedbackContainer from './FinishFeedback.container'
import { Paths } from 'routes/paths'

// Mock useNavigate hook from react-router-dom
const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}))

describe('FinishFeedback and FinishFeedbackContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders FinishFeedback component with correct props', () => {
    render(
      <FinishFeedback
        bikeImg='https://example.com/bike.jpg'
        name='Mountain Bike'
        type='Mountain'
        backHome={() => {}}
        haveborder={'true'}
      />,
    )

    expect(screen.getByTestId('bike-image')).toBeInTheDocument()
    expect(screen.getByText('Mountain Bike')).toBeInTheDocument()
    expect(screen.getByText('Mountain')).toBeInTheDocument()
  })

  it('calls backHome function when button is clicked in FinishFeedback component', () => {
    const mockBackHome = jest.fn()
    render(
      <FinishFeedback
        bikeImg='https://example.com/bike.jpg'
        name='Mountain Bike'
        type='Mountain'
        backHome={mockBackHome}
        haveborder={'true'}
      />,
    )

    const button = screen.getByTestId('bike-booking-button')
    fireEvent.click(button)
    expect(mockBackHome).toHaveBeenCalledTimes(1)
  })

  it('navigates to home page on button click in FinishFeedbackContainer component', () => {
    render(
      <FinishFeedbackContainer
        bikeImg='https://example.com/bike.jpg'
        name='Mountain Bike'
        type='Mountain'
        haveborder={'true'}
      />,
    )

    const button = screen.getByTestId('bike-booking-button')
    fireEvent.click(button)
    expect(mockNavigate).toHaveBeenCalledWith(Paths.HOME)
  })

  it('renders FinishFeedbackContainer with correct props and functionality', () => {
    render(
      <FinishFeedbackContainer
        bikeImg='https://example.com/bike.jpg'
        name='Mountain Bike'
        type='Mountain'
        haveborder={'true'}
      />,
    )

    // Verify that FinishFeedback component is rendered with correct props
    expect(screen.getByTestId('bike-image')).toBeInTheDocument()
    expect(screen.getByText('Mountain Bike')).toBeInTheDocument()
    expect(screen.getByText('Mountain')).toBeInTheDocument()
  })
})
