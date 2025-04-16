import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    
    @media (max-width: 768px) {
      padding: 0 1rem;
      
      img {
        max-width: 150px;
        object-fit: contain;
      }
    }
  }
  
  nav {
    display: flex;
    gap: 1rem;
    
    @media (max-width: 768px) {
      gap: 0.5rem;
    }
    
    a {
      color: ${({ theme }) => theme.colors['base-text']};
      font-size: 1rem;
      text-decoration: none;
      position: relative;
      transition: color 0.2s;
      
      @media (max-width: 768px) {
        font-size: 0.875rem;
        padding: 0.5rem;
      }
      
      &:hover {
        color: ${({ theme }) => theme.colors['brand-purple']};
      }
      
      &.active {
        color: ${({ theme }) => theme.colors['brand-purple']};
        font-weight: 700;
        
        &::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 100%;
          height: 2px;
          background: ${({ theme }) => theme.colors['brand-purple']};
          
          @media (max-width: 768px) {
            bottom: 0;
          }
        }
      }
    }
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  cursor: inherit;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors['base-white']};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};

    span {
      background: ${({ theme }) => theme.colors[`brand-${variant}-dark`]};
    }
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors['brand-purple']};
      }
    `}
`
