import React from 'react'

function Card(props) {
    const { title, price, speed, color } = props;

    return (
        <div className="card">
            <h3 className="title">Безлимитный {price}</h3>
            <p className="price">руб {price} /мес</p>
            <p className="speed">до {speed} Мбит/сек</p>
            <p className="details">Объем включенного тарифа не ограничен</p>
        </div>
    )
}

export { Card }