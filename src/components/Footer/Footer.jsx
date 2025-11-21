import './Footer.css'
import {about} from '../../portfolio.js'

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/joanmat117'
      className='link footer__link'
    >
      Created By {about.name}
    </a>
  </footer>
)

export default Footer
