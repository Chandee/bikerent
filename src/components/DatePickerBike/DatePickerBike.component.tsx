import { Box, Divider, Typography } from '@mui/material'
// import { BookingButton, InfoIcon, OverviewContainer, PriceRow } from './BookingOverview.styles'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './DatePickerBike.css'

import { useState } from 'react'
import dayjs from 'dayjs'
import { getPrices } from './DatePickerBike.utils'
import { AllFess } from 'components/BookingOverview/BookingOverview.component'
import FinishFeedback from 'components/FinishFeedback/FinishFeedback.component'

interface DatePickerBikeProps {
  setSelectedDate: (value: Value) => void
  value: Value
  bikeId: number
  setPrices: (value: AllFess | null) => void
}
type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const DatePickerBike = ({ setSelectedDate, value, bikeId, setPrices }: DatePickerBikeProps) => {
  //   const [value, setValue] = useState<Value>(null)

  const onChange = (value: any) => {
    console.log('value', value)
    console.log('format', dayjs(value[0]).format('YYYY-MM-DD'))
    console.log('format', dayjs(value[1]).format('YYYY-MM-DD'))

    getPrices({
      bikeId: bikeId,
      dateFrom: dayjs(value[0]).format('YYYY-MM-DD'),
      dateTo: dayjs(value[1]).format('YYYY-MM-DD'),
    }).then((res) => {
      setPrices(res)
      setSelectedDate(value)
    })
  }

  return (
    <>
      <Calendar minDate={new Date()} selectRange={true} onChange={onChange} value={value} />
    </>
  )
}

export default DatePickerBike
