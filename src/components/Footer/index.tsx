import { FooterContainer } from './styles'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <FooterContainer>
      <div className="container">
        <p>© {currentYear} Buy A Coffee To Me. All Rights Reserved.</p>
      </div>
    </FooterContainer>
  )
} 