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
} from '@mui/material'
import { ChevronLeftOutlined } from '@mui/icons-material'

export const Container = styled(Box)<BoxProps>(() => ({
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
  overflow: 'auto',
}))

export const ContainerBackground = styled(Box)<BoxProps>(() => ({
  position: 'fixed',
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  bottom: 0,
}))

export const ContainerFinishFeedback = styled(Box)<BoxProps>(() => ({
  position: 'fixed',
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  bottom: 0,
  right: 0,
  alignContent: 'center',
}))

export const ButtonMobile = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 20,
  padding: '18px 0',
  textTransform: 'none',
  color: theme.palette.common.black,
  background: theme.palette.secondary.main,
  fontWeight: 800,
}))

export const ButtonAction = styled(Button)<ButtonProps>(({ theme }) => ({
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
  right: 0,
  color: theme.palette.common.black,
  background: theme.palette.primary.main,
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}))

export const LikeButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: 20,
  width: 60,
  height: 60,
}))

export const ArrowLeft = styled(ChevronLeftOutlined)(({ theme }) => ({
  color: theme.palette.common.black,
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
  display: 'flex',
  margin: '30px 0',
  gap: '24px',
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: 20,
  padding: '18px',
  alignItems: 'center',
}))

export const ContainerBikeData = styled(Box)<BoxProps>(() => ({}))

export const BikeImage = styled('img')<TypographyProps>(() => ({
  height: '56px',
  width: '100px',
}))

export const PriceTypo = styled(Typography)<TypographyProps>(() => ({
  marginTop: '16px',
}))
