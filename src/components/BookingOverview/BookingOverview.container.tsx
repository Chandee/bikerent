import { useState } from 'react'
import BookingOverview from './BookingOverview.component'
import { addBooking } from './BookingOVerview.utilts'
import dayjs from 'dayjs'

interface BookingOverviewProps {
  bikeId?: number
  setFinished: (value: boolean) => void
}

type ValuePiece = Date | null

type Value = [ValuePiece, ValuePiece]

export interface AllFess {
  fee: number
  rentAmount: number
  totalAmount: number
}

const BookingOverviewContainer = ({ bikeId, setFinished }: BookingOverviewProps) => {
  const [selectedDate, setSelectedDate] = useState<Value>([null, null])
  const [prices, setPrices] = useState<AllFess | null>(null)
  const [error, setError] = useState<string>('')

  const finishBooking = () => {
    addBooking({
      bikeId: bikeId || 0,
      dateFrom: dayjs(selectedDate[0]).format('YYYY-MM-DD'),
      dateTo: dayjs(selectedDate[1]).format('YYYY-MM-DD'),
    })
    setFinished(true)
  }

  

  return (
    <>
      <BookingOverview
        bikeId={bikeId}
        prices={prices}
        selectedDate={selectedDate}
        setPrices={setPrices}
        setSelectedDate={setSelectedDate}
        finishBooking={finishBooking}
        error={error}
        setError={setError}
      />
    </>
  )
}

export default BookingOverviewContainer
