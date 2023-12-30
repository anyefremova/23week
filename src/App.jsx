import { useState } from 'react';
import './App.scss';
import Tariff from './Tariff/Tariff.jsx';

const tariffs = [
  { id: 1, title: 300, price: 300, speed: 10, color: "blue" },
  { id: 2, title: 450, price: 450, speed: 50, color: "green" },
  { id: 3, title: 550, price: 550, speed: 100, color: "red" },
  { id: 4, title: 1000, price: 1000, speed: 200, color: "black" }
];

function App() {

  const [id, setId] = useState(0);

  return (
    <div className="App">
      {tariffs.map((tariff) => (
        <Tariff
          key={tariff.id}
          currentId={tariff.id}
          title={tariff.title}
          price={tariff.price}
          speed={tariff.speed}
          color={tariff.color}
          activeTarif={tariff.id === id}
          setId={setId}
        />
      ))}
    </div>
  )
}

export default App