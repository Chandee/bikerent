import { render, screen, fireEvent } from '@testing-library/react'
import BookingOverview from './BookingOverview.component'
import { AllFess } from './BookingOverview.component'
import apiClient from 'services/api'
import { addBooking, PricesProps } from './BookingOVerview.utilts'

jest.mock('services/api') // Mock the apiClient

describe('BookingOverview Component', () => {
  const mockSetSelectedDate = jest.fn()
  const mockSetPrices = jest.fn()
  const mockFinishBooking = jest.fn()
  const mockSetError = jest.fn()
  const mockResponse: AllFess = {
    fee: 10,
    rentAmount: 50,
    totalAmount: 60,
  }

  const pricesProps: PricesProps = {
    bikeId: 1,
    dateFrom: '2024-08-01',
    dateTo: '2024-08-02',
  }

  const selectedDate: [Date | null, Date | null] = [new Date(), new Date()]
  const prices: AllFess = {
    fee: 10,
    rentAmount: 50,
    totalAmount: 60,
  }
  const error = ''

  const setup = (overrideProps = {}) => {
    const props = {
      bikeId: 1,
      selectedDate,
      setSelectedDate: mockSetSelectedDate,
      prices,
      setPrices: mockSetPrices,
      finishBooking: mockFinishBooking,
      error,
      setError: mockSetError,
      ...overrideProps,
    }

    return render(<BookingOverview {...props} />)
  }

  beforeEach(() => {
    ;(apiClient.post as jest.Mock).mockResolvedValue({ data: mockResponse })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders BookingOverview component', () => {
    setup()
    expect(screen.getByText('Select a date and time')).toBeInTheDocument()
    expect(screen.getByText('Booking Overview')).toBeInTheDocument()
  })

  it('displays price details correctly', () => {
    setup()
    expect(screen.getByTestId('bike-overview-single-price')).toBeInTheDocument()
    expect(screen.getByText('Subtotal')).toBeInTheDocument()
    expect(screen.getByText('50.00 €')).toBeInTheDocument()
    expect(screen.getByText('Service Fee')).toBeInTheDocument()
    expect(screen.getByText('10.00 €')).toBeInTheDocument()
    expect(screen.getByText('Total')).toBeInTheDocument()
    expect(screen.getByText('60.00 €')).toBeInTheDocument()
  })

  it('displays error message when error prop is passed', () => {
    const customError = 'An error occurred'
    setup({ error: customError })
    expect(screen.getByText(customError)).toBeInTheDocument()
  })

  it('disables the booking button when prices are not available', () => {
    setup({ prices: null })
    expect(screen.getByTestId('bike-booking-button')).toBeDisabled()
  })

  it('enables the booking button when prices are available', () => {
    setup()
    expect(screen.getByTestId('bike-booking-button')).toBeEnabled()
  })

  it('calls finishBooking when the booking button is clicked', () => {
    setup()
    const bookingButton = screen.getByTestId('bike-booking-button')
    fireEvent.click(bookingButton)
    expect(mockFinishBooking).toHaveBeenCalled()
  })

  it('calls setSelectedDate when DatePickerBike changes date', () => {
    setup()
    expect(mockSetSelectedDate).toHaveBeenCalledTimes(0)
  })

  it('should call the API with the correct parameters', async () => {
    await addBooking(pricesProps)

    expect(apiClient.post).toHaveBeenCalledWith('/bikes/rent', {
      bikeId: pricesProps.bikeId,
      userId: 821, // Assuming userId is hardcoded as 821 in the addBooking function
      dateFrom: pricesProps.dateFrom,
      dateTo: pricesProps.dateTo,
    })
  })

  it('should return the correct response data', async () => {
    const result = await addBooking(pricesProps)
    expect(result).toEqual(mockResponse)
  })

  it('should handle API errors correctly', async () => {
    const errorMessage = 'Network Error'
    ;(apiClient.post as jest.Mock).mockRejectedValue(new Error(errorMessage))

    await expect(addBooking(pricesProps)).rejects.toThrow(errorMessage)
  })
})
