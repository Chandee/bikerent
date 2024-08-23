import {
  Box,
  styled,
  Typography,
  BoxProps,
  TypographyProps,
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
  Alert,
  AlertProps,
} from '@mui/material'
import { CalendarMonth, ChevronLeftOutlined, InfoOutlined } from '@mui/icons-material'

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'fixed',
  height: '90%',
  width: '100%',
  background: 'white',
  bottom: 0,
  padding: '24px',
}))

export const ContainerBackground = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'fixed',
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  bottom: 0,
}))

export const ButtonMobile = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 20,
  padding: '18px 0',
  textTransform: 'none',
  color: theme.palette.common.white,
  background: theme.palette.primary.main,
  fontWeight: 800,
}))

export const BoxFooterMobile = styled(Box)<BoxProps>(({ theme }) => ({
  padding: '18px',
  position: 'fixed',
  width: '100%',
  bottom: 0,
  color: theme.palette.common.black,
  background: theme.palette.primary.main,
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}))

export const CalendarIcon = styled(CalendarMonth)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 36,
  fontWeight: 300,
}))

export const BoxContainerHeader = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 60,
  gap: '36px',
}))

export const FinishButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 20,
  padding: '18px 0',
  marginTop: 30,
  textTransform: 'none',
  color: theme.palette.common.white,
  fontWeight: 800,
}))

export const NameBox = styled(Box)<BoxProps>(() => ({}))

export const TitleTypo = styled(Typography)<TypographyProps>(() => ({
  marginBottom: '20px',
}))

export const ContainerBox = styled(Box)<BoxProps>(({ theme }) => ({
  padding: '18px',
  gap: '24px',
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: 20,
}))

export const ContainerBikeData = styled(Box)<BoxProps>(() => ({}))

export const BikeImage = styled('img')<TypographyProps>(() => ({
  height: '56px',
  width: '100px',
}))

export const PriceTypo = styled(Typography)<TypographyProps>(() => ({
  marginTop: '16px',
}))

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

export const ModalContainerDate = styled(Box)<BoxProps>(({ theme }) => ({
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
  zIndex: 9
}))

export const ArrowLeft = styled(ChevronLeftOutlined)(({ theme }) => ({
  color: theme.palette.common.black,
  fontSize: 36,
  fontWeight: 300,
}))
