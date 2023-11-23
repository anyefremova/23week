import React from 'react'

function Tariff(props) {
    const { price, speed } = props;

    return (
        <div className="tariff">
            <h3 className="title">Безлимитный {price}</h3>
            <p className="price">руб {price} /мес</p>
            <p className="speed">до {speed} Мбит/сек</p>
            <p className="details">Объем включенного тарифа не ограничен</p>
        </div>
    )
}

export { Tariff }