import './App.scss';
import Tariff from './Tariff/Tariff.jsx';
import './Tariff/Tariff.scss';

const tariffs = [
  { id: 1, title: 300, price: 300, speed: 10, color: "blue", select: false },
  { id: 2, title: 450, price: 450, speed: 50, color: "green", select: false },
  { id: 3, title: 550, price: 550, speed: 100, color: "red", select: true },
  { id: 4, title: 1000, price: 1000, speed: 200, color: "black", select: false }
];

function App() {
  return (
    <div className="App">
      {tariffs.map((tariff) => (
        <Tariff
          key={tariff.id}
          title={tariff.title}
          price={tariff.price}
          speed={tariff.speed}
          color={tariff.color}
          select={tariff.select}
        />
      ))}
    </div>
  )
}

export default App