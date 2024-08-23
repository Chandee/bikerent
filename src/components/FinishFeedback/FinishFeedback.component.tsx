import { Typography } from '@mui/material'
import BikeType from 'components/BikeType'
import { BikeImage, ContainerBox, FinishButton, NameBox, TitleTypo } from './FinishFeedback.styles'

interface FinishFeedbackProps {
  bikeImg: string | undefined
  name: string | undefined
  type: string | undefined
  backHome: () => void
  haveBorder?: boolean
}

const FinishFeedback = ({
  bikeImg,
  name,
  type,
  backHome,
  haveBorder = true,
}: FinishFeedbackProps) => {
  return (
    <ContainerBox haveBorder={haveBorder}>
      <TitleTypo variant='h5'>Thank you!</TitleTypo>
      <Typography variant='body1'>Your bike is booked.</Typography>

      <BikeImage src={bikeImg} width='100%' alt='Bike Image' data-testid='bike-image' />

      <NameBox>
        <Typography variant='h6'>{name}</Typography>
        <BikeType type={type} />
      </NameBox>

      <FinishButton
        fullWidth
        disableElevation
        variant='contained'
        data-testid='bike-booking-button'
        onClick={backHome}
      >
        Go to Home Page
      </FinishButton>
    </ContainerBox>
  )
}

export default FinishFeedback
