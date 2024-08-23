import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './DatePickerBike.css'
import dayjs from 'dayjs'
import { getPrices } from './DatePickerBike.utils'
import { AllFess } from 'components/BookingOverview/BookingOverview.component'

interface DatePickerBikeProps {
  setSelectedDate: (value: Value) => void
  value: Value | null
  bikeId?: number
  setPrices?: (value: AllFess | null) => void
  setError?: (value: string) => void
  apiOnChange?: boolean
}
type ValuePiece = Date | null

export type Value = [ValuePiece, ValuePiece]

const DatePickerBike = ({
  setSelectedDate,
  value,
  bikeId,
  setPrices,
  setError,
  apiOnChange = true,
}: DatePickerBikeProps) => {
  
  const onChange = (value: any) => {
    if (apiOnChange && setPrices && setError) {
      getPrices({
        bikeId: bikeId || 0,
        dateFrom: dayjs(value[0]).format('YYYY-MM-DD'),
        dateTo: dayjs(value[1]).format('YYYY-MM-DD'),
      })
        .then((res) => {
          setPrices(res)
          setSelectedDate(value)
          setError('')
        })
        .catch((err) => {
          setError(err.response.data.message)
          setPrices(null)
        })
    } else {
      setSelectedDate(value)
    }
  }

  return (
    <>
      <Calendar minDate={new Date()} selectRange={true} onChange={onChange} value={value} />
    </>
  )
}

export default DatePickerBike
