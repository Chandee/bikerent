import { Box, styled, BoxProps, Button, ButtonProps, Alert, AlertProps } from '@mui/material'
import { CalendarMonth, ChevronLeftOutlined, InfoOutlined } from '@mui/icons-material'

export const ButtonMobile = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 20,
  padding: '18px 0',
  textTransform: 'none',
  color: theme.palette.common.white,
  background: theme.palette.primary.main,
  fontWeight: 800,
}))

export const CalendarIcon = styled(CalendarMonth)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 36,
  fontWeight: 300,
}))

export const BoxContainerHeader = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 60,
  gap: '36px',
}))

export const ContainerBox = styled(Box)<BoxProps>(({ theme }) => ({
  padding: '18px',
  gap: '24px',
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: 20,
}))

export const InfoIcon = styled(InfoOutlined)(({ theme }) => ({
  color: theme.palette.grey[500],
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

export const ModalContainerDate = styled(Box)<BoxProps>(() => ({
  position: 'fixed',
  height: '90%',
  width: '100%',
  background: 'white',
  bottom: 0,
  right: 0,
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  placeContent: 'space-between',
  zIndex: 9,
}))

export const ArrowLeft = styled(ChevronLeftOutlined)(({ theme }) => ({
  color: theme.palette.common.black,
  fontSize: 36,
  fontWeight: 300,
}))
