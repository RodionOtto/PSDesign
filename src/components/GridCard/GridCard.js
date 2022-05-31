import React from 'react';
import './GridCard.css';

const GridCard = props => {
    return(
        <div className="cases__grid-item">
            <h3 className="cases__name">{props.case.title}</h3>
            <p className="cases__description">{props.case.text}</p>
        </div>
    )
}

export default GridCard;