import { render, screen, fireEvent } from '@testing-library/react'
import ModalBooking from './ModalBooking.component'
import Bike from 'models/Bike'
import { AllFess } from 'components/BookingOverview/BookingOverview.component'

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

const mockSetPrices = jest.fn()
const mockSetSelectedDate = jest.fn()
const mockSendBooking = jest.fn()
const mockBackHome = jest.fn()
const mockSetOpen = jest.fn()

const renderModalBooking = (props: Partial<ModalBooking> = {}) => {
  return render(
    <ModalBooking
      open={false}
      setOpen={mockSetOpen}
      bike={mockBike}
      setPrices={mockSetPrices}
      prices={null}
      selectedDate={[null, null]}
      setSelectedDate={mockSetSelectedDate}
      sendBooking={mockSendBooking}
      finished={false}
      backHome={mockBackHome}
      {...props}
    />,
  )
}

describe('Test of ModalBooking', () => {
  it('should render Rent bike button when modal is closed', () => {
    renderModalBooking({ open: false })

    expect(screen.getByTestId('bike-booking-button')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('bike-booking-button'))
    expect(mockSetOpen).toBeCalled()
  })

  it('should open modal and render booking components', () => {
    renderModalBooking({ open: true })

    // Check for modal elements
    expect(screen.getByTestId('bike-background-booking')).toBeInTheDocument()
    expect(screen.getByTestId('bike-booking')).toBeInTheDocument()
    expect(screen.getByTestId('bike-name-details-booking')).toHaveTextContent('Booking')
    expect(screen.getByTestId('bike-image')).toHaveAttribute('src', mockBike.imageUrls[0])
  })

  it('should call sendBooking when Add to booking button is clicked', () => {
    renderModalBooking({ open: true, prices: {} as AllFess }) // Simulating prices set

    fireEvent.click(screen.getByTestId('bike-booking-finish-button'))

    expect(mockSendBooking).toHaveBeenCalled()
  })

  it('should show FinishFeedback when finished is true', async () => {
    renderModalBooking({ open: true, finished: true })

    // Check if FinishFeedback is rendered
    expect(screen.getByTestId('finish-feedback')).toBeInTheDocument()
  })
})
