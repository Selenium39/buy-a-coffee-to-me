import styled from 'styled-components'

export const SupportersContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 864px;
  margin: 0 auto;
  padding: 2rem 1rem;

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: ${props => props.theme.colors['base-title']};
  }

  .supporters-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .supporter-card {
    background: ${props => props.theme.colors['base-card']};
    padding: 1.5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    strong {
      font-size: 1.25rem;
      color: ${props => props.theme.colors['base-title']};
    }
    
    span {
      color: ${props => props.theme.colors['base-text']};
    }
    
    .amount {
      font-weight: 700;
      color: ${props => props.theme.colors['brand-yellow']};
    }
  }

  .supporters-table {
    width: 100%;
    margin-bottom: 2rem;
    
    table {
      width: 100%;
      border-collapse: collapse;
      
      th, td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid ${props => props.theme.colors['base-button']};
      }
      
      th {
        font-weight: bold;
        color: ${props => props.theme.colors['base-title']};
        background-color: ${props => props.theme.colors['base-card']};
      }
      
      td {
        color: ${props => props.theme.colors['base-text']};
      }
      
      .amount {
        font-weight: 700;
        color: ${props => props.theme.colors['brand-yellow']};
      }
      
      tr:hover {
        background-color: ${props => props.theme.colors['base-hover']};
      }
    }
  }
  
  .note {
    margin-top: 1rem;
    padding: 1rem;
    background-color: ${props => props.theme.colors['base-card']};
    border-radius: 8px;
    
    p {
      color: ${props => props.theme.colors['base-subtitle']};
      font-style: italic;
      font-size: 0.875rem;
    }
  }
` 