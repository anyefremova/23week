import './App.css'
import { Tariff } from './Tariff/Tariff.jsx'

const tariffs = [
  { id: 1, price: 300, speed: 10 },
  { id: 2, price: 450, speed: 50 },
  { id: 3, price: 550, speed: 100 },
  { id: 2, price: 1000, speed: 200 }
]

function App() {
  return (
    <div className="App">
      {tariffs.map((tariff) => (
        <Tariff
          key={tariff.id}
          price={tariff.price}
          speed={tariff.speed}
        />
      ))}
    </div>
  )
}

export default App
