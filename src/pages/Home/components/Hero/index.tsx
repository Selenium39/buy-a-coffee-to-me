import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  BenefitsContainer,
} from './styles'

import heroImage from '../../../../assets/hero-image.png'
import { RegularText } from '../../../../components/Typography'
import { useTheme } from 'styled-components'

export function Hero() {
  const { colors } = useTheme()

  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <HeroTitle size="xl">
              Buy A Coffee To Me
            </HeroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Thank you so much for your support
            </RegularText>
          </section>
        </div>
        <div className="imageContainer">
          <img src={heroImage} alt="" />
        </div>
      </HeroContent>
    </HeroContainer>
  )
}
