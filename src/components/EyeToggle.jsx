
import EyeOff from './Icons/EyeOff'
import EyeOn from './Icons/EyeOn'

const EyeToggle = ({visible,setVisible}) => {

  return (
    <span className="form__icon" onClick={() => setVisible(!visible)}>
      {visible ? <EyeOff /> : <EyeOn />}
    </span>
  )
}

export default EyeToggle