import { AllFess } from 'components/BookingOverview/BookingOverview.component'
import apiClient from 'services/api'

export interface PricesProps {
  bikeId: number
  dateFrom: string
  dateTo: string
}

export const getPrices = async ({ bikeId, dateFrom, dateTo }: PricesProps): Promise<AllFess> => {
  const response = await apiClient.post('/bikes/amount', {
    bikeId: bikeId,
    userId: 821,
    dateFrom: dateFrom,
    dateTo: dateTo,
  })
  return response.data as AllFess
}

export const addBooking = async ({ bikeId, dateFrom, dateTo }: PricesProps): Promise<AllFess> => {
  const response = await apiClient.post('/bikes/rent', {
    bikeId: bikeId,
    userId: 821,
    dateFrom: dateFrom,
    dateTo: dateTo,
  })
  return response.data as AllFess
}
