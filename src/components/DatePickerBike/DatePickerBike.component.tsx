import { Box, Divider, Typography } from '@mui/material'
// import { BookingButton, InfoIcon, OverviewContainer, PriceRow } from './BookingOverview.styles'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './DatePickerBike.css'

import { useState } from 'react'
import dayjs from 'dayjs'

interface DatePickerBikeProps {
  setSelectedDate: (value: Value) => void
  value: Value
}
type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const DatePickerBike = ({ setSelectedDate, value }: DatePickerBikeProps) => {
  //   const [value, setValue] = useState<Value>(null)

  const onChange = (value: any) => {
    console.log('value', value)
    console.log('format', dayjs(value[0]).format('YYYY-MM-DD'))
    console.log('format', dayjs(value[1]).format('YYYY-MM-DD'))

    setSelectedDate(value)
  }

  return (
    <>
      <Calendar minDate={new Date()} selectRange={true} onChange={onChange} value={value} />
    </>
  )
}

export default DatePickerBike
