import { Box, Divider, Typography } from '@mui/material'
import { BookingButton, InfoIcon, OverviewContainer, PriceRow } from './BookingOverview.styles'
import DatePickerBike from 'components/DatePickerBike'
import { useState } from 'react'

interface BookingOverviewProps {
  rateByDay: number
  servicesFee: number
  total: number
}

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const BookingOverview = ({ rateByDay, servicesFee, total }: BookingOverviewProps) => {
  const [selectedDate, setSelectedDate] = useState<Value>(null)
  const [prices, setPrices] = useState(null)

  return (
    <>
      <DatePickerBike setSelectedDate={setSelectedDate} value={selectedDate} />
      <Typography variant='h2' fontSize={16} marginBottom={1.25}>
        Booking Overview
      </Typography>

      <Divider />
      {prices && (
        <div>
          <PriceRow marginTop={1.75} data-testid='bike-overview-single-price'>
            <Box display='flex' alignItems='center'>
              <Typography marginRight={1}>Subtotal</Typography>
              <InfoIcon fontSize='small' />
            </Box>

            <Typography>{rateByDay} €</Typography>
          </PriceRow>
          <PriceRow marginTop={1.5} data-testid='bike-overview-single-price'>
            <Box display='flex' alignItems='center'>
              <Typography marginRight={1}>Service Fee</Typography>
              <InfoIcon fontSize='small' />
            </Box>

            <Typography>{servicesFee} €</Typography>
          </PriceRow>
          <PriceRow marginTop={1.75} data-testid='bike-overview-total'>
            <Typography fontWeight={800} fontSize={16}>
              Total
            </Typography>
            <Typography variant='h2' fontSize={24} letterSpacing={1}>
              {total} €
            </Typography>
          </PriceRow>
        </div>
      )}

      <BookingButton
        fullWidth
        disableElevation
        variant='contained'
        data-testid='bike-booking-button'
      >
        Add to booking
      </BookingButton>
    </>
  )
}

export default BookingOverview
