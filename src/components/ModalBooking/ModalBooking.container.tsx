import Bike from 'models/Bike'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paths } from 'routes/paths'
import ModalBooking from './ModalBooking.component'
import './ModalBooking.css'

interface BikeCardProps {
  bike: Bike
}

const ModalBookingContainer = ({ bike }: any) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleIsImageLoaded = (isLoading: boolean) => {
    setIsImageLoaded(isLoading)
  }

  useEffect(() => {
    console.log('dentro da bike', bike)
    if (open) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [open])

  return <ModalBooking open={open} setOpen={setOpen} bike={bike} />
}

export default ModalBookingContainer
