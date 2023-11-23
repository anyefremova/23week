import React from 'react'

function Card(props) {
    const { title, price, speed, color } = props;

    return (
        <div className="card">
            <h3 className="title">Безлимитный {title}</h3>
            <p className="price">руб {price} /мес</p>
        </div>
    )
}