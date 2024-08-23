// ModalDatePicker.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ModalDatePicker from './ModalDatePicker.component'
import { AllFess } from 'components/BookingOverview/BookingOverview.component'
import Bike from 'models/Bike'
import { Value } from 'components/DatePickerBike/DatePickerBike.component'

// Mock data
const mockSetSelectedDate = jest.fn()
const mockRequestBikePrice = jest.fn()
const mockSetOpenCalendar = jest.fn()
const mockBike: Bike = {
  id: 1,
  name: 'Mountain Bike',
  type: 'Mountain',
  imageUrls: ['https://example.com/bike.jpg'],
  rate: 20,
  candidateId: 1,
  bodySize: 2,
  maxLoad: 2,
  description: 'test',
  ratings: 4,
}
const defaultProps = {
  bike: mockBike,
  setSelectedDate: mockSetSelectedDate,
  valueDate: [null, null] as Value,
  prices: null,
  openCalendar: false,
  setOpenCalendar: mockSetOpenCalendar,
  requestBikePrice: mockRequestBikePrice,
  error: '',
}

describe('Test for ModalDatePicker', () => {
  it('renders without crashing', () => {
    render(<ModalDatePicker {...defaultProps} />)
    expect(screen.getByTestId('bike-background-date-picker')).toBeInTheDocument()
  })

  it('displays bike name and date range', () => {
    const props = {
      ...defaultProps,
      valueDate: [new Date('2024-08-02'), new Date('2024-08-11')] as Value,
    }
    render(<ModalDatePicker {...props} />)
    expect(screen.getByTestId('bike-name-details-modal')).toHaveTextContent('From Aug/01 to Aug/10')
  })

  it('renders price details when prices are provided', () => {
    const props = {
      ...defaultProps,
      prices: {
        rentAmount: 30,
        fee: 5,
        totalAmount: 35,
      } as AllFess,
    }
    render(<ModalDatePicker {...props} />)
    expect(screen.getByTestId('bike-overview-single-subtotal')).toHaveTextContent('30.00 €')
    expect(screen.getByTestId('bike-overview-single-price')).toHaveTextContent('5.00 €')
    expect(screen.getByTestId('bike-overview-total')).toHaveTextContent('35.00 €')
  })

  it('toggles calendar modal visibility', () => {
    const props = {
      ...defaultProps,
      openCalendar: true,
      valueDate: [new Date('2024-08-02'), new Date('2024-08-11')] as Value,
    }
    render(<ModalDatePicker {...props} />)
    expect(screen.getByTestId('bike-booking-button')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Select'))
    expect(mockRequestBikePrice).toHaveBeenCalled()
  })

  it('displays error message when error is present', () => {
    const props = {
      ...defaultProps,
      openCalendar: true,
      error: 'An error occurred',
    }
    render(<ModalDatePicker {...props} />)
    expect(screen.getByText('An error occurred')).toBeInTheDocument()
  })

  it('verify if open the calendar', () => {
    const props = {
      ...defaultProps,
      valueDate: [new Date('2024-08-02'), new Date('2024-08-11')] as Value,
    }
    render(<ModalDatePicker {...props} />)
    fireEvent.click(screen.getByText('From Aug/01 to Aug/10'))
    expect(mockSetOpenCalendar).toBeCalled()
  })

  it('verify if open the calendar', () => {
    const props = {
      ...defaultProps,
      openCalendar: true,
    }
    render(<ModalDatePicker {...props} />)
    fireEvent.click(screen.getByTestId('back-button-date'))
    expect(mockSetOpenCalendar).toBeCalled()
  })
})
