import Portait from '../../../assets/images/portrait.png'
import './index.scss'
import '../../../App.scss'

const Logo = () => {

  return (
    
    <div className="logo-container">
      <img
        className="solid-logo"
        src={Portait}
        alt="JavaScript,  Developer"/>
    </div>
    
  )
}

export default Logo