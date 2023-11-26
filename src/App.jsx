import './App.scss'
import Tariff from './Tariff/Tariff.jsx'
import styles from './Tariff.module.scss';

const tariffs = [
  { id: 1, title: 300, price: 300, speed: 10, color: '#87CEEB' },
  { id: 2, title: 450, price: 450, speed: 50, color: '#90EE90' },
  { id: 3, title: 550, price: 550, speed: 100, color: '#FF0000' },
  { id: 2, title: 1000, price: 1000, speed: 200, color: '#808080' }
]

function App() {
  return (
    <div className={styles.cardList}>
      {tariffs.map((tariff, index) => (
        <Tariff
          key={index}
          name={tariff.title}
          price={tariff.price}
          speed={tariff.speed}
          details={tariff.details}
          isHighlighted={index === 2}
          color={tariff.color}
        />
      ))}
    </div>
  )
}

export default App
