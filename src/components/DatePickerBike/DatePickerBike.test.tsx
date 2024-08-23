import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import DatePickerBike from './DatePickerBike.component'
import { getPrices } from './DatePickerBike.utils'

jest.mock('./DatePickerBike.utils', () => ({
  getPrices: jest.fn(),
}))

jest.mock('services/api', () => ({
  post: jest.fn(),
}))

describe('DatePickerBike Component', () => {
  const mockSetSelectedDate = jest.fn()
  const mockSetPrices = jest.fn()
  const mockSetError = jest.fn()

  const mockPrices = {
    fee: 10,
    rentAmount: 100,
    totalAmount: 110,
  }

  beforeEach(() => {
    jest.clearAllMocks()
    const fixedDate = new Date('2024-08-01T12:00:00Z').getTime()
    jest.spyOn(Date, 'now').mockImplementation(() => fixedDate)
    ;(getPrices as jest.Mock).mockResolvedValue(mockPrices)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should call getPrices and set the values correctly on date selection', async () => {
    render(
      <DatePickerBike
        setSelectedDate={mockSetSelectedDate}
        value={[null, null]}
        bikeId={1}
        setPrices={mockSetPrices}
        setError={mockSetError}
      />,
    )

    fireEvent.click(screen.getByText(/23/i))
    fireEvent.click(screen.getByText(/25/i))

    await waitFor(() => {
      expect(getPrices).toHaveBeenCalledWith({
        bikeId: 1,
        dateFrom: '2024-08-23',
        dateTo: '2024-08-25',
      })

      expect(mockSetPrices).toHaveBeenCalledWith(mockPrices)
      expect(mockSetSelectedDate).toHaveBeenCalled()
      expect(mockSetError).toHaveBeenCalledWith('')
    })
  })

  it('should handle errors when getPrices fails', async () => {
    const mockErrorMessage = 'Error fetching prices'
    ;(getPrices as jest.Mock).mockRejectedValue({
      response: { data: { message: mockErrorMessage } },
    })

    render(
      <DatePickerBike
        setSelectedDate={mockSetSelectedDate}
        value={[null, null]}
        bikeId={1}
        setPrices={mockSetPrices}
        setError={mockSetError}
      />,
    )

    fireEvent.click(screen.getByText(/23/i))
    fireEvent.click(screen.getByText(/25/i))

    await waitFor(() => {
      expect(getPrices).toHaveBeenCalledWith({
        bikeId: 1,
        dateFrom: '2024-08-23',
        dateTo: '2024-08-25',
      })

      expect(mockSetPrices).toHaveBeenCalledWith(null)
      expect(mockSetError).toHaveBeenCalledWith(mockErrorMessage)
    })
  })
})
