import { CoffeeCard } from '../CoffeeCard'
import { TitleText } from '../Typography'
import { CoffeeList, OurCoffeesContainer } from './styles'

export function OurCoffees() {
  const coffees = [
    {
      id: 1,
      tags: ['traditional'],
      name: 'Traditional Espresso',
      description: 'The traditional coffee made with hot water and ground beans',
      photo: 'tradicional.png',
      price: 1,
    },
    {
      id: 2,
      tags: ['traditional'],
      name: 'American Espresso',
      description: 'Diluted espresso, less intense than the traditional one',
      photo: 'americano.png',
      price: 2,
    },
    {
      id: 3,
      tags: ['traditional'],
      name: 'Creamy Espresso',
      description: 'Traditional espresso coffee with creamy foam',
      photo: 'cremoso.png',
      price: 3,
    },
    {
      id: 4,
      tags: ['traditional', 'iced'],
      name: 'Iced Espresso',
      description: 'Beverage prepared with espresso coffee and ice cubes',
      photo: 'gelado.png',
      price: 4,
    },
    {
      id: 5,
      tags: ['traditional', 'with milk'],
      name: 'Coffee with Milk',
      description: 'Half traditional espresso with steamed milk',
      photo: 'leite.png',
      price: 5,
    },
    {
      id: 6,
      tags: ['traditional', 'with milk'],
      name: 'Latte',
      description: 'A shot of espresso with twice the milk and creamy foam',
      photo: 'latte.png',
      price: 6,
    },
    {
      id: 7,
      tags: ['traditional', 'with milk'],
      name: 'Cappuccino',
      description: 'Cinnamon beverage made with equal parts coffee, milk, and foam',
      photo: 'capuccino.png',
      price: 7,
    },
    {
      id: 8,
      tags: ['traditional', 'with milk'],
      name: 'Macchiato',
      description: 'Espresso coffee mixed with a little hot milk and foam',
      photo: 'macchiato.png',
      price: 8,
    },
    {
      id: 9,
      tags: ['traditional', 'with milk'],
      name: 'Mocha',
      description: 'Espresso coffee with chocolate syrup, a little milk and foam',
      photo: 'mocaccino.png',
      price: 9,
    },
    {
      id: 10,
      tags: ['special', 'with milk'],
      name: 'Hot Chocolate',
      description: 'Beverage made with chocolate dissolved in hot milk and coffee',
      photo: 'chocolate.png',
      price: 10,
    },
    {
      id: 11,
      tags: ['special', 'alcoholic', 'iced'],
      name: 'Cuban',
      description: 'Iced drink of espresso coffee with rum, cream, and mint',
      photo: 'cubano.png',
      price: 50,
    },
    {
      id: 12,
      tags: ['special'],
      name: 'Hawaiian',
      description: 'Sweet beverage prepared with coffee and coconut milk',
      photo: 'havaiano.png',
      price: 100,
    },
  ]

  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Our Coffees
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
