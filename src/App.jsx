import './App.scss'
import { Tariff } from './Tariff/Tariff.jsx'
import BlueColor from './Tariff/tariff-blue.module.scss'

const tariffs = [
  { id: 1, price: 300, speed: 10, color: BlueColor },
  { id: 2, price: 450, speed: 50 },
  { id: 3, price: 550, speed: 100 },
  { id: 2, price: 1000, speed: 200 }
]

function App() {
  return (
    <div className={styles.cardList}>
      {tariffs.map((tariff, index) => (
        <Tariff
          color={tariff.color}
          key={tariff.id}
          price={tariff.price}
          speed={tariff.speed}
        />
      ))}
    </div>
  )
}

export default App
