import { Typography } from '@mui/material'
import BikeType from 'components/BikeType'
import { ContainerBox, FinishButton, NameBox, TitleTypo } from './FinishFeedback.styles'

const FinishFeedback = ({ bikeImg }: any) => {
  return (
    <ContainerBox>
      <TitleTypo variant='h5'>Thank you!</TitleTypo>
      <Typography variant='body1'>Your bike is booked.</Typography>

      {/* <BikeImage
        component='img'
        image='https://example.com/bike-image.png' // Replace with your image URL
        alt='Kent Flexer'
      /> */}

      <NameBox>
        <Typography variant='h6'>Kent Flexer</Typography>
        <BikeType type={'cool'} />
      </NameBox>

      <FinishButton
        fullWidth
        disableElevation
        variant='contained'
        data-testid='bike-booking-button'
      >
        Go to Home Page
      </FinishButton>
    </ContainerBox>
  )
}

export default FinishFeedback
