import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  styled,
  Typography,
  TypographyProps,
} from '@mui/material'

interface CustomProps extends BoxProps {
  haveborder: string
}

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

export const ContainerBox = styled(Box)<CustomProps>(({ theme, haveborder }) => ({
  maxWidth: '400px',
  padding: '20px',
  textAlign: 'center',
  border: haveborder ? `1px solid ${theme.palette.grey[500]}` : 'none',
  borderRadius: 20,
  background: 'white',
  margin: 'auto'
}))

export const BikeImage = styled('img')<TypographyProps>(() => ({
  marginTop: '40px',
}))
