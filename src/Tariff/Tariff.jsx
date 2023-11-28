import React from 'react';
import './Tariff.module.scss';

function Tariff(props) {
    const { price, speed, color } = props;

    return (
        <div className="tariff">
            <div className={color}>
                <h3 className="title">Безлимитный {price}</h3>
                <p className="price">руб {price} /мес</p>
                <p className="speed">до {speed} Мбит/сек</p>
                <p className="details">Объем включенного тарифа не ограничен</p>
            </div>
        </div>
    )
}

export default Tariff