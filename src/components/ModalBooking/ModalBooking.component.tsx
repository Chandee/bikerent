import { Box, Divider, IconButton, Typography } from '@mui/material'
import BikeType from 'components/BikeType'
import BikePlaceholder from 'assets/bike-placeholder.png'
import Bike from 'models/Bike'
import {
  Container,
  BoxFooterMobile,
  ButtonMobile,
  LikeButton,
  ArrowLeft,
  BoxContainerHeader,
  ContainerBackground,
  ContainerBox,
  TitleTypo,
  BikeImage,
  NameBox,
  FinishButton,
  ContainerBikeData,
  PriceTypo,
  ButtonAction,
  ContainerFinishFeedback,
} from './ModalBooking.styles'
import ModalDatePicker from 'components/ModalDatePicker'
import FinishFeedback from 'components/FinishFeedback'
import { AllFess } from 'components/BookingOverview/BookingOverview.component'
import { Value } from 'components/DatePickerBike/DatePickerBike.component'
interface ModalBooking {
  open: boolean
  setOpen: (value: boolean) => void
  bike?: Bike
  setPrices: (value: AllFess | null) => void
  prices: AllFess | null
  selectedDate: Value
  setSelectedDate: (value: Value) => void
  sendBooking: () => void
  finished: boolean
  backHome: () => void
}

const ModalBooking = ({
  open,
  setOpen,
  bike,
  setPrices,
  prices,
  selectedDate,
  setSelectedDate,
  sendBooking,
  finished,
  backHome,
}: ModalBooking) => {
  return (
    <>
      {open ? (
        <ContainerBackground data-testid='bike-background-booking'>
          <Container data-testid='bike-booking'>
            <Box>
              <BoxContainerHeader>
                <LikeButton onClick={backHome}>
                  <ArrowLeft />
                </LikeButton>
                <Typography
                  variant='h1'
                  fontSize={38}
                  fontWeight={800}
                  data-testid='bike-name-details'
                >
                  Booking
                </Typography>
              </BoxContainerHeader>
              <ContainerBox>
                <BikeImage
                  src={bike?.imageUrls[0]}
                  width='100%'
                  alt='Bike Image'
                  data-testid='bike-image'
                />
                <ContainerBikeData>
                  <NameBox>
                    <Typography fontWeight={'bold'} variant='h6'>
                      {bike?.name}
                    </Typography>
                    <BikeType type={bike?.type} />
                    <PriceTypo variant='body1'>
                      <span style={{ fontWeight: 'bold' }}>{bike?.rate}€/ </span> day{' '}
                    </PriceTypo>
                  </NameBox>
                </ContainerBikeData>
              </ContainerBox>
              <ModalDatePicker
                bike={bike}
                setPrices={setPrices}
                prices={prices}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </Box>
            <Box>
              <ButtonAction
                fullWidth
                variant='contained'
                disabled={!prices}
                data-testid='bike-booking-button'
                onClick={sendBooking}
              >
                Add to booking
              </ButtonAction>
              {finished && (
                <ContainerFinishFeedback>
                  <FinishFeedback
                    bikeImg={bike?.imageUrls[0]}
                    name={bike?.name}
                    type={bike?.type}
                  />
                </ContainerFinishFeedback>
              )}
            </Box>
          </Container>
        </ContainerBackground>
      ) : (
        <BoxFooterMobile>
          <ButtonMobile
            fullWidth
            disableElevation
            variant='contained'
            data-testid='bike-booking-button'
            onClick={() => setOpen(true)}
          >
            Rent bike
          </ButtonMobile>
        </BoxFooterMobile>
      )}
    </>
  )
}

export default ModalBooking
