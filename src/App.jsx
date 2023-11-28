import './App.scss';
import Tariff from './Tariff/Tariff.jsx';
import './Tariff/Tariff.module.scss';

const tariffs = [
  { id: 1, title: 300, price: 300, speed: 10, color: "red" },
  { id: 2, title: 450, price: 450, speed: 50, color: "green" },
  { id: 3, title: 550, price: 550, speed: 100, color: "blue" },
  { id: 4, title: 1000, price: 1000, speed: 200, color: "gray" }
];

function App() {
  return (
    <div className={styles.cardList}>
      {tariffs.map((tariff, index) => (
        <Tariff
          key={tariff.id}
          title={tariff.title}
          price={tariff.price}
          speed={tariff.speed}
          color={tariff.color}
        />
      ))}
    </div>
  )
}

export default App
