import { Box, Divider, IconButton, Typography } from '@mui/material'
import BikeType from 'components/BikeType'
import BikePlaceholder from 'assets/bike-placeholder.png'
import Bike from 'models/Bike'
import {
  Container,
  BoxFooterMobile,
  ButtonMobile,
  CalendarIcon,
  BoxContainerHeader,
  ContainerBackground,
  ContainerBox,
  PriceRow,
  InfoIcon,
  ModalContainerDate,
  ArrowLeft,
  CustomAlert,
} from './ModalDatePicker.styles'
import Calendar from 'react-calendar'
import DatePickerBike from 'components/DatePickerBike'
import dayjs from 'dayjs'
import { LikeButton } from 'pages/BikeDetails/BikeDetails.styles'
import { Value } from 'components/DatePickerBike/DatePickerBike.component'
import { AllFess } from 'components/BookingOverview/BookingOverview.component'

type JustDisplayedBikeData = Omit<Bike, 'candidateId' | 'maxLoad' | 'ratings'>

interface ModalDatePickerProps {
  bike?: Bike
  setSelectedDate: (value: Value) => void
  valueDate: Value
  prices: AllFess | null
  openCalendar: boolean
  setOpenCalendar: (value: boolean) => void
  requestBikePrice: () => void
  error: string
}

const ModalDatePicker = ({
  bike,
  setSelectedDate,
  valueDate,
  prices,
  openCalendar,
  setOpenCalendar,
  requestBikePrice,
  error,
}: ModalDatePickerProps) => {
  return (
    <>
      <ContainerBox data-testid='bike-background-booking'>
        <BoxContainerHeader onClick={() => setOpenCalendar(true)}>
          <CalendarIcon />

          <Typography fontSize={16} data-testid='bike-name-details'>
            From {valueDate[0] ? dayjs(valueDate[0]).format('MMM/DD') : '__'} to{' '}
            {valueDate[1] ? dayjs(valueDate[1]).format('MMM/DD') : '__'}
          </Typography>
        </BoxContainerHeader>

        {prices && (
          <>
            <Typography variant='h2' marginTop={2} fontSize={16} marginBottom={1.25}>
              Booking Overview
            </Typography>
            <Divider />

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
          </>
        )}

        {openCalendar && (
          <ModalContainerDate>
            <Box>
              <LikeButton onClick={() => setOpenCalendar(false)}>
                <ArrowLeft />
              </LikeButton>
              <DatePickerBike
                bikeId={bike?.id}
                value={valueDate}
                setSelectedDate={setSelectedDate}
                apiOnChange={false}
              />
              {error && <CustomAlert severity='error'>{error}</CustomAlert>}
            </Box>

            <ButtonMobile
              fullWidth
              disabled={!valueDate[0]}
              variant='contained'
              data-testid='bike-booking-button'
              onClick={() => requestBikePrice()}
            >
              Select
            </ButtonMobile>
          </ModalContainerDate>
        )}
      </ContainerBox>
    </>
  )
}

export default ModalDatePicker
