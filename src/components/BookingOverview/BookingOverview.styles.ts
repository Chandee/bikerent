import { Alert, AlertProps, Box, BoxProps, Button, ButtonProps, styled } from '@mui/material'
import InfoOutlined from '@mui/icons-material/InfoOutlined'

export const InfoIcon = styled(InfoOutlined)(({ theme }) => ({
  color: theme.palette.grey[500],
}))

export const BookingButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 20,
  padding: '18px 0',
  marginTop: 30,
  textTransform: 'none',
  color: theme.palette.common.white,
  fontWeight: 800,
}))

export const PriceRow = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const CustomAlert = styled(Alert)<AlertProps>(() => ({
  marginTop: '28px',
}))

export const ContainerDate = styled(Box)<BoxProps>(() => ({
  textAlign: 'center',
  ['div']: {
    margin: 'auto',
  },
}))
