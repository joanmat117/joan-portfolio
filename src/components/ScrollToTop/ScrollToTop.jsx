import { useEffect, useState } from 'react'
import './ScrollToTop.css'
import {TablerArrowUp} from '../Icons'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#top' aria-label='top'>
        <TablerArrowUp  />
      </a>
    </div>
  ) : null
}

export default ScrollToTop
