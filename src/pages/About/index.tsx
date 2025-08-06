import { AboutContainer, AboutContent, AboutHeader, LinkContainer, ContactInfo, ProfileContainer, AvatarContainer, Nickname } from './styles'
import avatarImage from '../../assets/avatar.jpeg'

export function About() {
  return (
    <AboutContainer>
      <AboutHeader>About Me</AboutHeader>
      <ProfileContainer>
        <AvatarContainer>
          <img src={avatarImage} alt="Profile avatar" />
          <Nickname>Selenium39</Nickname>
        </AvatarContainer>
        <AboutContent>
          <p>An indie developer, focused on creating for passion.</p>
          
          <LinkContainer>
            <h3>Projects</h3>
            <ul>
              <li>
                <a href="https://chat-tempmail.com" target="_blank" rel="noopener noreferrer">
                  📮 https://chat-tempmail.com
                </a>
              </li>
              <li>
                <a href="https://fwfw.app" target="_blank" rel="noopener noreferrer">
                  🌍 https://fwfw.app
                </a>
              </li>
              <li>
                <a href="https://llmocr.com" target="_blank" rel="noopener noreferrer">
                  📄 https://llmocr.com
                </a>
              </li>
              <li>
                <a href="https://getpan.tech" target="_blank" rel="noopener noreferrer">
                  🔧 https://getpan.tech
                </a>
              </li>
              <li>
                <a href="https://flowable.me" target="_blank" rel="noopener noreferrer">
                  📚 https://flowable.me
                </a>
              </li>
              <li>
                <a href="https://chiikawa-pocket.me" target="_blank" rel="noopener noreferrer">
                  🎮 https://chiikawa-pocket.me
                </a>
              </li>
              <li>
                <a href="https://e-ink.me" target="_blank" rel="noopener noreferrer">
                  🔧 https://e-ink.me
                </a>
              </li>
              <li>
                <a href="https://buyacoffeeto.me" target="_blank" rel="noopener noreferrer">
                  ☕️ https://buyacoffeeto.me
                </a>
              </li>
            </ul>
          </LinkContainer>
          
          <ContactInfo>
            <h3>Contact</h3>
            <p>GitHub: <a href="https://github.com/Selenium39" target="_blank" rel="noopener noreferrer">Selenium39</a></p>
            <p>Email: <a href="mailto:selenium39@qq.com">selenium39@qq.com</a></p>
          </ContactInfo>
        </AboutContent>
      </ProfileContainer>
    </AboutContainer>
  )
} 
