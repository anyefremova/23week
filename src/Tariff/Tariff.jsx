import React from 'react';
import './Tariff.scss';

function Tariff(props) {
    const { price, speed, color, select } = props;
    const tariffClass = `tariff ${color} ${select ? 'selected' : ''}`;

    return (
        <div className={tariffClass}>
            <h3 className="title">Безлимитный {price}</h3>
            <p className="price">руб {price} /мес</p>
            <p className="speed">до {speed} Мбит/сек</p>
            <p className="details">Объем включенного тарифа не ограничен</p>
        </div >
    )
}

export default Tariff