import Bike from 'models/Bike'
import { useState } from 'react'
import ModalDatePicker from './ModalDatePicker.component'
import './ModalDatePicker.css'
import { AllFess } from 'components/BookingOverview/BookingOverview.component'
import { getPrices } from './ModalDatePicker.utils'
import dayjs from 'dayjs'
import { Value } from 'components/DatePickerBike/DatePickerBike.component'

interface ModalDatePickerContainerProps {
  bike?: Bike
  setPrices: (value: AllFess | null) => void
  prices: AllFess | null
  selectedDate: Value
  setSelectedDate: (value: Value) => void
}

const ModalDatePickerContainer = ({
  bike,
  setPrices,
  prices,
  selectedDate,
  setSelectedDate,
}: ModalDatePickerContainerProps) => {
  const [openCalendar, setOpenCalendar] = useState(false)
  const [error, setError] = useState('')

  const requestBikePrice = () => {
    getPrices({
      bikeId: bike?.id || 0,
      dateFrom: dayjs(selectedDate[0]).format('YYYY-MM-DD'),
      dateTo: dayjs(selectedDate[1]).format('YYYY-MM-DD'),
    })
      .then((res) => {
        setPrices(res)
        setOpenCalendar(false)
        setError('')
      })
      .catch((err) => {
        setError(err.response.data.message)
        setPrices(null)
      })
  }

  return (
    <ModalDatePicker
      bike={bike}
      setSelectedDate={setSelectedDate}
      valueDate={selectedDate}
      prices={prices}
      openCalendar={openCalendar}
      setOpenCalendar={setOpenCalendar}
      requestBikePrice={requestBikePrice}
      error={error}
    />
  )
}

export default ModalDatePickerContainer
