import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  styled,
  Typography,
  TypographyProps,
} from '@mui/material'

export const FinishButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 20,
  padding: '18px 0',
  marginTop: 30,
  textTransform: 'none',
  color: theme.palette.common.white,
  fontWeight: 800,
}))

export const NameBox = styled(Box)<BoxProps>(() => ({
  marginTop: '30px',
}))

export const TitleTypo = styled(Typography)<TypographyProps>(() => ({
  marginBottom: '20px',
}))

export const ContainerBox = styled(Box)<BoxProps>(() => ({
  maxWidth: '400px',
  padding: '20px',
  textAlign: 'center',
}))


export const BikeImage = styled('img')<TypographyProps>(() => ({
  marginTop: '40px',
}))