import { Box, Divider, Typography } from '@mui/material'
import { BookingButton, InfoIcon, OverviewContainer, PriceRow } from './BookingOverview.styles'
import DatePickerBike from 'components/DatePickerBike'
import { useState } from 'react'
import { PricesProps } from 'components/DatePickerBike/DatePickerBike.utils'
import BookingOverview from './BookingOverview.component'

interface BookingOverviewProps {
  bikeId?: number
  setFinished: (value: boolean) => void
}

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export interface AllFess {
  fee: number
  rentAmount: number
  totalAmount: number
}

const BookingOverviewContainer = ({ bikeId, setFinished }: BookingOverviewProps) => {
  const [selectedDate, setSelectedDate] = useState<Value>(null)
  const [prices, setPrices] = useState<AllFess | null>(null)

  const finishBooking = () => {

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
      />
    </>
  )
}

export default BookingOverviewContainer
