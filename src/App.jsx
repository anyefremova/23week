import './App.css'
import { Card } from './Card/Card.jsx'

const cards = [
  { id: 1, price: 300, speed: 10 },
  { id: 2, price: 450, speed: 50 },
  { id: 3, price: 550, speed: 100 },
  { id: 2, price: 1000, speed: 200 }
]

function App() {
  return (
    <div className="App">
      {cards.map((card) => (
        <Card
          key={card.id}
          price={card.price}
          speed={card.speed}
        />
      ))}
    </div>
  )
}

export default App
