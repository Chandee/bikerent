import { useNavigate } from 'react-router-dom'
import { Paths } from 'routes/paths'
import FinishFeedback from './FinishFeedback.component'

interface BikeCardProps {
  bikeImg: string | undefined
  name: string | undefined
  type: string | undefined
  haveBorder?: boolean
}

const FinishFeedbackContainer = ({ bikeImg, name, type, haveBorder }: BikeCardProps) => {
  const navigate = useNavigate()

  const backHome = () => {
    navigate(Paths.HOME)
  }

  return (
    <FinishFeedback
      bikeImg={bikeImg}
      name={name}
      type={type}
      backHome={backHome}
      haveBorder={haveBorder}
    />
  )
}

export default FinishFeedbackContainer
