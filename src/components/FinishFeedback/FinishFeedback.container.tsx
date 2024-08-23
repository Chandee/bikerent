import { useNavigate } from 'react-router-dom'
import { Paths } from 'routes/paths'
import FinishFeedback from './FinishFeedback.component'

interface BikeCardProps {
  bikeImg: string | undefined
  name: string | undefined
  type: string | undefined
}

const FinishFeedbackContainer = ({ bikeImg, name, type }: BikeCardProps) => {
  const navigate = useNavigate()

  const backHome = () => {
    navigate(Paths.HOME)
  }

  return <FinishFeedback bikeImg={bikeImg} name={name} type={type} backHome={backHome} />
}

export default FinishFeedbackContainer
