import { Divider, IconButton, Typography } from '@mui/material'
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
} from './ModalBooking.styles'

type JustDisplayedBikeData = Omit<Bike, 'candidateId' | 'maxLoad' | 'ratings'>

interface BikeCardComponentProps extends JustDisplayedBikeData {
  isImageLoaded: boolean
  cardImage: string
  handleOpenBikeDetails: () => void
  handleIsImageLoaded: (isLoading: boolean) => void
}

const ModalBooking = ({ open, setOpen, bike }: any) => {
  return (
    <>
      {open ? (
        <ContainerBackground data-testid='bike-background-booking'>
          <Container data-testid='bike-booking'>
            <BoxContainerHeader>
              <LikeButton>
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
                  <Typography fontWeight={'bold'} variant='h6'>{bike?.name}</Typography>
                  <BikeType type={bike?.type} />
                  <PriceTypo variant='body1'>
                    <span style={{ fontWeight: 'bold' }}>{bike?.rate}€/ </span> day{' '}
                  </PriceTypo>
                </NameBox>
              </ContainerBikeData>
              

              {/* <FinishButton
                fullWidth
                disableElevation
                variant='contained'
                data-testid='bike-booking-button'
                onClick={() => {console.log("s")}}
              >
                Go to Home Page
              </FinishButton> */}
            </ContainerBox>
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
