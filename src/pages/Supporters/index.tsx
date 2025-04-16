import { SupportersContainer } from './styles'

interface Supporter {
  name: string
  date: string
  amount: string
}

export function Supporters() {
  const supporters: Supporter[] = [
    {
      name: 'Linux.do',
      date: '2025-04-14',
      amount: '$1'
    }
  ]

  return (
    <SupportersContainer>
      <h1>Thank You Supporters</h1>
      
      <div className="supporters-table">
        <table>
          <thead>
            <tr>
              <th>Supporter</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {supporters.map((supporter, index) => (
              <tr key={index}>
                <td>{supporter.name}</td>
                <td>{supporter.date}</td>
                <td className="amount">{supporter.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="note">
        <p>Note: Data is not synchronized in real-time, but I will update it as soon as possible.</p>
      </div>
    </SupportersContainer>
  )
} 