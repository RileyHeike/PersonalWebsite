import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoRH from '../../assets/images/logoRH.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faSuitcase} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/PersonalWebsite/'>
            <img src={LogoRH} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/PersonalWebsite/">
                <FontAwesomeIcon icon={faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/PersonalWebsite/about">
                <FontAwesomeIcon icon={faUser} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/PersonalWebsite/contact">
                <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/PersonalWebsite/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color = "#4d4d4e" />
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/riley-heike/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/RileyHeike/'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar