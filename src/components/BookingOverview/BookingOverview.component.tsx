import { Box, Divider, Typography } from '@mui/material'
import { BookingButton, InfoIcon, OverviewContainer, PriceRow } from './BookingOverview.styles'
import DatePickerBike from 'components/DatePickerBike'

interface BookingOverviewProps {
  bikeId?: number
  selectedDate: Value | null
  setSelectedDate: (value: Value) => void
  prices: AllFess | null
  setPrices: (value: AllFess | null) => void
  finishBooking: () => void
}

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export interface AllFess {
  fee: number
  rentAmount: number
  totalAmount: number
}

const BookingOverview = ({
  bikeId,
  selectedDate,
  setSelectedDate,
  prices,
  setPrices,
  finishBooking,
}: BookingOverviewProps) => {
  return (
    <>
      <DatePickerBike
        setSelectedDate={setSelectedDate}
        value={selectedDate}
        bikeId={bikeId || 0}
        setPrices={setPrices}
      />
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

            <Typography>{prices.rentAmount.toFixed(2)} €</Typography>
          </PriceRow>
          <PriceRow marginTop={1.5} data-testid='bike-overview-single-price'>
            <Box display='flex' alignItems='center'>
              <Typography marginRight={1}>Service Fee</Typography>
              <InfoIcon fontSize='small' />
            </Box>

            <Typography>{prices.fee.toFixed(2)} €</Typography>
          </PriceRow>
          <PriceRow marginTop={1.75} data-testid='bike-overview-total'>
            <Typography fontWeight={800} fontSize={16}>
              Total
            </Typography>
            <Typography variant='h2' fontSize={24} letterSpacing={1}>
              {prices.totalAmount.toFixed(2)} €
            </Typography>
          </PriceRow>
        </div>
      )}

      <BookingButton
        fullWidth
        disableElevation
        disabled={!prices}
        variant='contained'
        data-testid='bike-booking-button'
        onClick={finishBooking}
      >
        Add to booking
      </BookingButton>
    </>
  )
}

export default BookingOverview
