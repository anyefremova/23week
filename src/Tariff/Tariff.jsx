import React from 'react';
import './Tariff.module.scss';

function Tariff(props) {
    const { title, price, speed, color } = props;

    return (
        <div className={color}>
            <h3 className={title}>Безлимитный {title}</h3>
            <p className={price}>руб {price} /мес</p>
            <p className="speed">до {speed} Мбит/сек</p>
            <p className="details">Объем включенного тарифа не ограничен</p>
        </div>
    )
}

export default Tariff