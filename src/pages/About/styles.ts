import styled from 'styled-components'

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 1rem;
`

export const AboutHeader = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors['base-title']};
  margin-bottom: 2rem;
`

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid ${({ theme }) => theme.colors['brand-purple']};
  }
`

export const Nickname = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors['brand-purple']};
  margin-top: 1rem;
  font-weight: 700;
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-grow: 1;
  
  > p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const LinkContainer = styled.div`
  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  li a {
    display: inline-block;
    color: ${({ theme }) => theme.colors['brand-purple']};
    text-decoration: none;
    font-size: 1.125rem;
    transition: color 0.2s;
    
    &:hover {
      color: ${({ theme }) => theme.colors['brand-purple-dark']};
    }
  }
`

export const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors['base-text']};
    margin-bottom: 0.5rem;
  }
  
  a {
    color: ${({ theme }) => theme.colors['brand-purple']};
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: ${({ theme }) => theme.colors['brand-purple-dark']};
    }
  }
` 