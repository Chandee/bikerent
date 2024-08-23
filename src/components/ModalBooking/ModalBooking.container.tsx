import Bike from 'models/Bike'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paths } from 'routes/paths'
import ModalBooking from './ModalBooking.component'
import './ModalBooking.css'
import { AllFess } from 'components/BookingOverview/BookingOverview.component'
import { addBooking } from './ModalBooking.utils'
import dayjs from 'dayjs'
import { Value } from 'components/DatePickerBike/DatePickerBike.component'

interface ModalBookingContainerProps {
  bike?: Bike
}

const ModalBookingContainer = ({ bike }: ModalBookingContainerProps) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [prices, setPrices] = useState<AllFess | null>(null)
  const [selectedDate, setSelectedDate] = useState<Value>([null, null])

  const [finished, setFinished] = useState(false)

  const backHome = () => {
    navigate(Paths.HOME)
  }

  const sendBooking = () => {
    addBooking({
      bikeId: bike?.id || 0,
      dateFrom: dayjs(selectedDate[0]).format('YYYY-MM-DD'),
      dateTo: dayjs(selectedDate[1]).format('YYYY-MM-DD'),
    }).then(() => {
      setFinished(true)
    })
  }

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [open])

  return (
    <ModalBooking
      open={open}
      setOpen={setOpen}
      bike={bike}
      setPrices={setPrices}
      prices={prices}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      sendBooking={sendBooking}
      finished={finished}
      backHome={backHome}
    />
  )
}

export default ModalBookingContainer
