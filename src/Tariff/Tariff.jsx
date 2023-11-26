import React from 'react'
import styles from './Tariff.module.scss';

function Tariff(props) {
    const { title, price, speed, isHighlighted, cardColor } = props;

    const cardStyle = {
        width: isHighlighted ? '300px' : '200px',
        height: isHighlighted ? '350px' : '300px',
    };

    return (
        <div className={`${styles.tariffCard} ${isHighlighted ? styles.highlighted : ''}`} style={cardColor}>
            <h3 className={styles.title}>Безлимитный {title}</h3>
            <p className={styles.price}>руб {price} /мес</p>
            <p className="speed">до {speed} Мбит/сек</p>
            <p className="details">Объем включенного тарифа не ограничен</p>
        </div>
    )
}

export default Tariff