import { HeaderContainer } from './styles'

import coffeLogoImage from '../../assets/buy-a-coffee-to-me-with-text.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeLogoImage} alt="" />
        </NavLink>
        
        <nav>
          <NavLink to="/supporters">Supporters</NavLink>
          <NavLink to="/about">About Me</NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
